import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { ip, preferences, policyVersion, userAgent } = body;

    const client = await db.connect();

    // Create Consent Logs Table if it doesn't exist
    await client.sql`
      CREATE TABLE IF NOT EXISTS consent_logs (
        id SERIAL PRIMARY KEY,
        ip_address VARCHAR(255),
        user_agent TEXT,
        preferences JSONB NOT NULL,
        policy_version VARCHAR(50) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Insert log
    await client.sql`
      INSERT INTO consent_logs (ip_address, user_agent, preferences, policy_version)
      VALUES (${ip}, ${userAgent}, ${JSON.stringify(preferences)}, ${policyVersion});
    `;

    return NextResponse.json({ message: 'Consent logged successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error logging consent:', error);
    return NextResponse.json({ error: 'Failed to log consent' }, { status: 500 });
  }
}
