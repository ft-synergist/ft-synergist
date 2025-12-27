import fs from "fs/promises";
import path from "path";
import { sql } from "@vercel/postgres";

export type Event = {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    type: string;
    description: string;
    image?: string;
    organizer?: string;
    performer?: string;
    price?: string;
    currency?: string;
};

export type Report = {
    id: number;
    title: string;
    description: string;
    date: string;
    category: string;
    driveLink?: string;
};

const DATA_FILE_PATH = path.join(process.cwd(), "data.json");

// Check if we are in production (Vercel) by checking for Postgres env var
const IS_PRODUCTION = !!process.env.POSTGRES_URL;

// Initial Data (Fallback)
const initialEvents: Event[] = [
    {
        id: 1,
        title: "Future of Consulting Summit 2025",
        date: "December 15, 2025",
        time: "09:00 AM - 05:00 PM",
        location: "Marina Bay Sands, Singapore",
        type: "In-Person",
        description: "Join industry leaders to discuss the evolving landscape of management consulting in the AI era.",
        image: "https://www.ftsynergist.com/ft_synergist_logo_wo_background.png",
        performer: "FT Synergist Team",
        price: "250",
        currency: "SGD"
    },
    {
        id: 2,
        title: "Scaling Your Business with AI - Webinar",
        date: "January 10, 2026",
        time: "02:00 PM - 03:30 PM",
        location: "Online (Zoom)",
        type: "Online",
        description: "A deep dive into practical AI applications for SMEs looking to scale operations efficiently.",
        image: "https://www.ftsynergist.com/ft_synergist_logo_wo_background.png",
        performer: "Frederick Tan",
        price: "0",
        currency: "SGD"
    },
    {
        id: 3,
        title: "Networking Night: Jakarta Chapter",
        date: "January 24, 2026",
        time: "06:00 PM - 09:00 PM",
        location: "The Ritz-Carlton, Jakarta",
        type: "In-Person",
        description: "Connect with fellow business leaders and consultants in our exclusive networking event.",
        image: "https://www.ftsynergist.com/ft_synergist_logo_wo_background.png",
        performer: "FT Synergist Community",
        price: "50",
        currency: "USD"
    },
];

const initialReports: Report[] = [
    {
        id: 1,
        title: "State of AI in Southeast Asia 2025",
        description: "A comprehensive analysis of AI adoption trends across Singapore, Indonesia, and Vietnam.",
        date: "Nov 2025",
        category: "Technology",
        driveLink: "https://drive.google.com",
    },
    {
        id: 2,
        title: "Sustainable Supply Chains: A Guide for SMEs",
        description: "Practical steps for small and medium enterprises to implement ESG practices in their supply chain.",
        date: "Oct 2025",
        category: "Sustainability",
        driveLink: "https://drive.google.com",
    },
    {
        id: 3,
        title: "Scaling Beyond Borders: The Vietnam Opportunity",
        description: "Market entry strategies for Singaporean firms looking to expand into the vibrant Vietnamese market.",
        date: "Sep 2025",
        category: "Business Scaling",
        driveLink: "https://drive.google.com",
    },
    {
        id: 4,
        title: "The Future of Work: Hybrid Models in 2026",
        description: "Insights into how remote and hybrid work models are evolving and affecting productivity.",
        date: "Aug 2025",
        category: "Human Capital",
        driveLink: "https://drive.google.com",
    },
];

// --- File System Helpers (Development) ---

async function readDataFile() {
    try {
        const data = await fs.readFile(DATA_FILE_PATH, "utf-8");
        return JSON.parse(data);
    } catch {
        console.log("Using initial data (data.json missing or invalid)");
        return { events: initialEvents, reports: initialReports };
    }
}

async function writeDataFile(data: { events: Event[]; reports: Report[] }) {
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
}

// --- Data Access Functions ---

export async function getEvents() {
    if (IS_PRODUCTION) {
        try {
            const { rows } = await sql`SELECT * FROM events ORDER BY id ASC`;
            return rows as Event[];
        } catch (error) {
            console.error("Database Error:", error);
            return [];
        }
    } else {
        const data = await readDataFile();
        return data.events;
    }
}

export async function getReports() {
    if (IS_PRODUCTION) {
        try {
            const { rows } = await sql`SELECT * FROM reports ORDER BY date DESC`;
            return rows as Report[];
        } catch (error) {
            console.error("Database Error:", error);
            return [];
        }
        const data = await readDataFile();
        return data.reports.sort((a: Report, b: Report) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
}

export async function saveEvents(newEvents: Event[]) {
    if (IS_PRODUCTION) {
        try {
            // Simple overwrite strategy: Delete all and re-insert
            // In a real production app, we would use UPDATE/INSERT specific IDs, 
            // but this matches the current "save whole list" behavior of the Admin Dashboard.
            await sql`DELETE FROM events`;

            for (const event of newEvents) {
                await sql`
                    INSERT INTO events (title, date, time, location, type, description)
                    VALUES (${event.title}, ${event.date}, ${event.time}, ${event.location}, ${event.type}, ${event.description})
                `;
            }
            return true;
        } catch (error) {
            console.error("Database Save Error:", error);
            return false;
        }
    } else {
        const data = await readDataFile();
        data.events = newEvents;
        await writeDataFile(data);
        return true;
    }
}

export async function saveReports(newReports: Report[]) {
    if (IS_PRODUCTION) {
        try {
            await sql`DELETE FROM reports`;

            for (const report of newReports) {
                await sql`
                    INSERT INTO reports (title, description, date, category, driveLink)
                    VALUES (${report.title}, ${report.description}, ${report.date}, ${report.category}, ${report.driveLink || null})
                `;
            }
            return true;
        } catch (error) {
            console.error("Database Save Error:", error);
            return false;
        }
    } else {
        const data = await readDataFile();
        data.reports = newReports;
        await writeDataFile(data);
        return true;
    }
}
