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

const TARGET_ANCHORS = {
    "EDG Consultant Singapore": { anchors: ["edg"], peer: "Creativeans / KCG", tier: "Tier 1/2" },
    "MRA Consultant Singapore": { anchors: ["mra"], peer: "FT Consulting / Asiawide", tier: "Tier 1" },
    "IP Consultant Singapore": { anchors: ["\\bip\\b"], peer: "FT Consulting", tier: "Tier 1" },
    "Franchise Consultant Singapore": { anchors: ["franchise"], peer: "Astreem / Asiawide / FT Consulting", tier: "Tier 1" },
    "Brand Consultant Singapore": { anchors: ["brand"], peer: "Creativeans", tier: "Tier 2" },
    "AI Digitalisation Consultant Singapore": { anchors: ["digitalisation", "digitalization", "\\bai\\b"], peer: "Webpuppies", tier: "Tier 2" },
    "Sustainability Consultant Singapore": { anchors: ["sustainab"], peer: "Consulus", tier: "Tier 3" }
};

function getCredentials() {
    const raw = process.env.GSC_SERVICE_ACCOUNT_KEY;
    if (!raw) {
        throw new Error("GSC_SERVICE_ACCOUNT_KEY environment variable is missing.");
    }
    try {
        return JSON.parse(raw);
    } catch (err) {
        throw new Error(`GSC_SERVICE_ACCOUNT_KEY is not valid JSON: ${err.message}`);
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
    console.log("=================================================================");
    console.log("🚀 FT SYNERGIST — GOOGLE SEARCH CONSOLE & COMPETITIVE SERP AUDIT");
    console.log(`📅 Timestamp: ${new Date().toISOString()}`);
    console.log(`🎯 Target Site: ${SITE_URL}`);
    console.log("=================================================================\n");

    let credentials;
    try {
        credentials = getCredentials();
    } catch (err) {
        console.error(`❌ GSC Configuration Notice: ${err.message}`);
        console.log("⚠️ GSC Audit skipped due to missing credentials. Other pipeline steps proceed.");
        return;
    }

    try {
        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
        });

        const searchconsole = google.searchconsole({ version: 'v1', auth });
        const { startDate, endDate } = last90Days();

        console.log(`📅 Date Window (Last 90 Days): ${startDate} to ${endDate}\n`);

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
        console.log(`📊 Total Distinct Search Queries Captured: ${rows.length}\n`);

        const summaryTable = [];
        let top3Count = 0;
        let page1Count = 0;

        for (const target of TARGET_KEYWORDS) {
            const config = TARGET_ANCHORS[target] || { anchors: [], peer: "N/A", tier: "N/A" };
            const matches = rows.filter(row => {
                const q = row.keys[0].toLowerCase();
                return config.anchors.some(anchor => new RegExp(anchor).test(q));
            }).sort((a, b) => a.position - b.position);

            if (matches.length === 0) {
                summaryTable.push({
                    "Pillar Theme": target,
                    "Best Match Query": "None (Impression lag)",
                    "Pos": "N/A",
                    "Clicks": 0,
                    "Impressions": 0,
                    "CTR": "0.0%",
                    "Key Competitor Benchmark": config.peer,
                    "Status": "🔴 Unranked"
                });
                continue;
            }

            const best = matches[0];
            const pos = parseFloat(best.position.toFixed(1));
            const isTop3 = pos <= 3.0;
            const isPage1 = pos <= 10.0;

            if (isTop3) top3Count++;
            if (isPage1) page1Count++;

            summaryTable.push({
                "Pillar Theme": target,
                "Best Match Query": best.keys[0],
                "Pos": `#${pos}`,
                "Clicks": best.clicks,
                "Impressions": best.impressions,
                "CTR": `${(best.ctr * 100).toFixed(1)}%`,
                "Key Competitor Benchmark": config.peer,
                "Status": isTop3 ? "🟢 Top 3 Dominance" : (isPage1 ? "🟡 Page 1 Contender" : "🔴 Page 2+ (Needs Boost)")
            });
        }

        console.log("=================================================================");
        console.log("🏆 7-PILLAR BATTLEGROUND POSITION SCORECARD");
        console.log("=================================================================\n");
        console.table(summaryTable);

        console.log(`\n🎯 Page 1 Dominance Summary:`);
        console.log(`   • Top 3 Positions: ${top3Count}/7 Pillars`);
        console.log(`   • Page 1 Positions (1-10): ${page1Count}/7 Pillars`);
        console.log(`   • Objective: 7/7 in Position #1\n`);

        console.log("=================================================================");
        console.log("✅ GSC Position & Competitor Audit Complete.");
        console.log("=================================================================");

    } catch (err) {
        console.error("\n❌ GSC Execution Error:", err.message);
        if (err.response?.data) {
            console.error("API Response:", JSON.stringify(err.response.data));
        }
    }
}

runGscReport();