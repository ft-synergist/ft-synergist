import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const client = await db.connect();

        // Create Events Table
        await client.sql`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        date VARCHAR(255) NOT NULL,
        time VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        description TEXT NOT NULL
      );
    `;

        // Create Reports Table
        await client.sql`
      CREATE TABLE IF NOT EXISTS reports (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        date VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        driveLink TEXT
      );
    `;

        // Check if data exists, if not seed initial data
        const { rowCount: eventCount } = await client.sql`SELECT * FROM events`;
        if (eventCount === 0) {
            await client.sql`
            INSERT INTO events (title, date, time, location, type, description)
            VALUES 
            ('Future of Consulting Summit 2025', 'December 15, 2025', '09:00 AM - 05:00 PM', 'Marina Bay Sands, Singapore', 'In-Person', 'Join industry leaders to discuss the evolving landscape of management consulting in the AI era.'),
            ('Scaling Your Business with AI - Webinar', 'January 10, 2026', '02:00 PM - 03:30 PM', 'Online (Zoom)', 'Online', 'A deep dive into practical AI applications for SMEs looking to scale operations efficiently.'),
            ('Networking Night: Jakarta Chapter', 'January 24, 2026', '06:00 PM - 09:00 PM', 'The Ritz-Carlton, Jakarta', 'In-Person', 'Connect with fellow business leaders and consultants in our exclusive networking event.');
        `;
        }

        const { rowCount: reportCount } = await client.sql`SELECT * FROM reports`;
        if (reportCount === 0) {
            await client.sql`
            INSERT INTO reports (title, description, date, category, driveLink)
            VALUES
            ('State of AI in Southeast Asia 2025', 'A comprehensive analysis of AI adoption trends across Singapore, Indonesia, and Vietnam.', 'Nov 2025', 'Technology', 'https://drive.google.com'),
            ('Sustainable Supply Chains: A Guide for SMEs', 'Practical steps for small and medium enterprises to implement ESG practices in their supply chain.', 'Oct 2025', 'Sustainability', 'https://drive.google.com'),
            ('Scaling Beyond Borders: The Vietnam Opportunity', 'Market entry strategies for Singaporean firms looking to expand into the vibrant Vietnamese market.', 'Sep 2025', 'Business Scaling', 'https://drive.google.com'),
            ('The Future of Work: Hybrid Models in 2026', 'Insights into how remote and hybrid work models are evolving and affecting productivity.', 'Aug 2025', 'Human Capital', 'https://drive.google.com');
        `;
        }

        return NextResponse.json({ message: 'Database seeded successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
