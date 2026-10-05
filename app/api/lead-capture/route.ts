import { NextResponse } from "next/server";
import { Resend } from "resend";
import { db } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
    const body = await request.json();
    const { name, email, company, reportName, consent, pagePath } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, company" },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "PDPA Consent is required to download reports" },
        { status: 400 }
      );
    }

    // 1. Log Lead to Postgres Database if available
    try {
      if (process.env.POSTGRES_URL) {
        const client = await db.connect();
        await client.sql`
          CREATE TABLE IF NOT EXISTS report_leads (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            company VARCHAR(255) NOT NULL,
            report_name VARCHAR(255),
            page_path VARCHAR(255),
            pdpa_consent BOOLEAN DEFAULT TRUE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
          );
        `;

        await client.sql`
          INSERT INTO report_leads (name, email, company, report_name, page_path, pdpa_consent)
          VALUES (${name}, ${email}, ${company}, ${reportName || "Executive Report"}, ${pagePath || ""}, ${true});
        `;
      }
    } catch (dbErr) {
      console.warn("Postgres lead recording skipped / failed:", dbErr);
    }

    // 2. Dispatch Email via Resend to Principal Management Consultant
    if (resend) {
      await resend.emails.send({
        from: "FT Synergist Intelligence <noreply@mail.ftsynergist.com>",
        to: "fredtan@ftsynergist.com",
        replyTo: email,
        subject: `New Lead: ${reportName || "Report Download"} — ${company}`,
        text: `New Lead Download:\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nReport: ${reportName}\nSource: ${pagePath}\nPDPA Consent: Confirmed`,
        html: `
          <h3>New Executive Report Download Lead</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Report:</strong> ${reportName || "Executive Report"}</p>
          <p><strong>Page Source:</strong> ${pagePath || ""}</p>
          <p><strong>PDPA Consent:</strong> Confirmed</p>
        `,
      });
    }

    // 3. Asynchronously Forward to CRM Webhook if configured
    if (process.env.CRM_WEBHOOK_URL) {
      fetch(process.env.CRM_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "report_lead_capture",
          name,
          email,
          company,
          reportName,
          pagePath,
          timestamp: new Date().toISOString(),
        }),
      }).catch((webhookErr) => console.error("CRM Webhook forward error:", webhookErr));
    }

    return NextResponse.json({ success: true, message: "Lead captured successfully" }, { status: 200 });
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
