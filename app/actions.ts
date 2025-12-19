"use server";

import { Resend } from "resend";
import { Event, Report, saveEvents, saveReports } from "@/lib/data";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailData {
    subject: string;
    text: string;
    html: string;
    email: string;
}

export async function sendEmail(data: EmailData) {
    const { subject, text, html, email } = data;

    if (!process.env.RESEND_API_KEY) {
        console.log("Mock Email Sent (Missing RESEND_API_KEY):", data);
        return { success: true, message: "Mock email sent (configure RESEND_API_KEY for real emails)" };
    }

    try {
        const { data: resendData, error } = await resend.emails.send({
            from: "FT Synergist Website <noreply@mail.ftsynergist.com>",
            to: "fredtan@ftsynergist.com",
            replyTo: email,
            subject: subject,
            text: text,
            html: html,
        });

        if (error) {
            console.error("Resend API Error:", error);
            return { success: false, message: `Failed to send email: ${error.message}` };
        }

        console.log("Email sent successfully. Resend ID:", resendData?.id);
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

export async function subscribeToNewsletter(userEmail: string) {
    if (!process.env.RESEND_API_KEY) {
        console.log("Mock Newsletter Sub:", userEmail);
        return { success: true, message: "Mock subscription successful" };
    }

    try {
        // Send a notification to the admin
        await resend.emails.send({
            from: "FT Synergist Website <noreply@mail.ftsynergist.com>",
            to: "fredtan@ftsynergist.com",
            subject: "New Newsletter Subscriber",
            text: `New subscriber: ${userEmail}`,
        });

        // Send a welcome email to the user (optional, but good practice)
        await resend.emails.send({
            from: "FT Synergist <insights@mail.ftsynergist.com>",
            to: userEmail,
            subject: "Welcome to FT Synergist Insights",
            text: "Thank you for subscribing! You will now receive our latest market intelligence and growth frameworks directly to your inbox.",
            html: `
                <h1>Welcome to our community!</h1>
                <p>Thank you for subscribing to FT Synergist Insights.</p>
                <p>You will now receive our latest market intelligence and growth frameworks directly to your inbox.</p>
                <br/>
                <p>Best regards,</p>
                <p>Frederick Tan</p>
                <p><strong>FT Synergist</strong></p>
            `,
        });

        return { success: true };
    } catch (error) {
        console.error("Newsletter Subscription Error:", error);
        return { success: false, message: "Failed to subscribe. Please try again." };
    }
}
