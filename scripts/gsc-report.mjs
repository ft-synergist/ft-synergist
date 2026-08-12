import { google } from 'googleapis';

const SITE_URL = 'sc-domain:ftsynergist.com';

const TARGET_KEYWORDS = [
    "EDG Consultant Singapore",
    "MRA Consultant Singapore",
    "IP Consultant Singapore",
    "Franchise Consultant Singapore",
    "Brand Consultant Singapore",
    "AI Digitalisation Consultant Singapore",
    "Sustainability Consultant Singapore"
];

function getCredentials() {
    const raw = process.env.GSC_SERVICE_ACCOUNT_KEY;
    if (!raw) {
        console.error("❌ Error: GSC_SERVICE_ACCOUNT_KEY is missing");
        process.exit(1);
    }
    try {
        return JSON.parse(raw);
    } catch (err) {
        console.error("❌ Error: GSC_SERVICE_ACCOUNT_KEY is not valid JSON:", err.message);
        process.exit(1);
    }
}

function last90Days() {
    const end = new Date();
    end.setDate(end.getDate() - 3); // GSC data has ~2-3 day lag
    const start = new Date(end);
    start.setDate(start.getDate() - 90);
    const fmt = (d) => d.toISOString().split('T')[0];
    return { startDate: fmt(start), endDate: fmt(end) };
}

async function runGscReport() {
    console.log("🚀 Fetching Search Console position data...");

    try {
        const credentials = getCredentials();

        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
        });

        const searchconsole = google.searchconsole({ version: 'v1', auth });
        const { startDate, endDate } = last90Days();

        console.log(`📅 Querying ${startDate} to ${endDate}`);

        const res = await searchconsole.searchanalytics.query({
            siteUrl: SITE_URL,
            requestBody: {
                startDate,
                endDate,
                dimensions: ['query'],
                rowLimit: 5000
            }
        });

        const rows = res.data.rows || [];

        if (rows.length === 0) {
            console.warn("⚠️  No query data returned for this date range.");
        }

        console.log(`\n📊 Total queries in export: ${rows.length}\n`);
        console.log("=== Position report for target keyword themes ===\n");

        for (const target of TARGET_KEYWORDS) {
            const targetWords = target.toLowerCase().split(' ');
            const matches = rows.filter(row => {
                const q = row.keys[0].toLowerCase();
                // match if the query contains most of the target's key terms
                return targetWords.some(w => w.length > 3 && q.includes(w));
            }).sort((a, b) => a.position - b.position);

            console.log(`--- Target: "${target}" ---`);
            if (matches.length === 0) {
                console.log("  No matching queries found in the last 90 days.\n");
                continue;
            }
            for (const m of matches.slice(0, 5)) {
                console.log(`  "${m.keys[0]}" — position ${m.position.toFixed(2)}, ${m.clicks} clicks, ${m.impressions} impressions, CTR ${(m.ctr * 100).toFixed(2)}%`);
            }
            console.log('');
        }

        console.log("✅ GSC Report Complete");

    } catch (err) {
        console.error("❌ Execution Error:", err.message || err);
        if (err.response?.data) {
            console.error("Details:", JSON.stringify(err.response.data));
        }
        process.exit(1);
    }
}

runGscReport();