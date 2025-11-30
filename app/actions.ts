"use server";

import { Resend } from "resend";
import { Event, Report, saveEvents, saveReports } from "@/lib/data";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: any) {
    const { subject, text, html } = data;

    if (!process.env.RESEND_API_KEY) {
        console.log("Mock Email Sent (Missing RESEND_API_KEY):", data);
        return { success: true, message: "Mock email sent (configure RESEND_API_KEY for real emails)" };
    }

    try {
        await resend.emails.send({
            from: "FT Synergist Website <fredtan@mail.ftsynergist.com>",
            to: "fredtan@ftsynergist.com",
            subject: subject,
            text: text,
            html: html,
        });
        return { success: true, message: "Email sent successfully" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: `Failed to send email: ${error instanceof Error ? error.message : String(error)}` };
    }
}

import { revalidatePath } from "next/cache";

export async function updateEventsAction(events: Event[]) {
    await saveEvents(events);
    revalidatePath("/events");
    revalidatePath("/admin");
    return { success: true };
}

export async function updateReportsAction(reports: Report[]) {
    await saveReports(reports);
    revalidatePath("/insights");
    revalidatePath("/admin");
    return { success: true };
}
