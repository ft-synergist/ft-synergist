import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const events = await sql`SELECT * FROM events`;
        const reports = await sql`SELECT * FROM reports`;

        return NextResponse.json({
            status: 'ok',
            env_check: process.env.POSTGRES_URL ? 'POSTGRES_URL_PRESENT' : 'POSTGRES_URL_MISSING',
            counts: {
                events: events.rowCount,
                reports: reports.rowCount
            },
            data: {
                events: events.rows,
                reports: reports.rows
            }
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            status: 'error',
            message: error instanceof Error ? error.message : 'Unknown error',
            details: error
        }, { status: 500 });
    }
}
