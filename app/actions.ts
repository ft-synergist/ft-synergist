"use server";

import nodemailer from "nodemailer";
import { Event, Report, saveEvents, saveReports } from "@/lib/data";

// Email Configuration
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
    },
});

export async function sendEmail(data: any) {
    const { subject, text, html } = data;

    if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
        console.log("Mock Email Sent:", data);
        return { success: true, message: "Mock email sent (configure SMTP for real emails)" };
    }

    try {
        await transporter.sendMail({
            from: `"FT Synergist Website" <${process.env.SMTP_EMAIL}>`,
            to: "fredtan@ftsynergist.com",
            subject: subject,
            text: text,
            html: html,
        });
        return { success: true, message: "Email sent successfully" };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, message: "Failed to send email" };
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
