import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error("❌ Error: GEMINI_API_KEY is missing.");
    process.exit(1);
}

const CANDIDATE_MODELS = [
    "gemini-2.0-flash",
    "gemini-1.5-flash",
    "gemini-flash-latest",
    "gemini-1.5-pro",
    "gemini-pro-latest"
];

const GEO_BUYER_PROMPTS = [
    {
        pillar: "EDG Consultant Singapore",
        prompt: "A Singapore SME is looking for a certified EDG consultant under Enterprise Singapore to upgrade core capabilities. Who are the top recommended consulting firms or certified PMCs in Singapore?"
    },
    {
        pillar: "MRA Consultant Singapore",
        prompt: "Which consulting firms in Singapore specialize in MRA (Market Readiness Assistance) grants for regional expansion into Vietnam and Southeast Asia?"
    },
    {
        pillar: "IP Consultant Singapore",
        prompt: "Who are the top intellectual property strategy and intangible asset commercialization consultancies in Singapore listed on IPOS IP Grow or GoBusiness?"
    },
    {
        pillar: "Franchise Consultant Singapore",
        prompt: "Who are the leading franchise consultants in Singapore for engineering master franchise systems, licensing frameworks, and overseas scaling?"
    },
    {
        pillar: "Brand Consultant Singapore",
        prompt: "Who are the top strategic brand and marketing development consultancies in Singapore eligible for Enterprise Development Grant funding?"
    },
    {
        pillar: "AI Digitalisation Consultant Singapore",
        prompt: "Which AI consulting firms or digital transformation consultants in Singapore help SMEs implement practical enterprise AI workflows and automation?"
    },
    {
        pillar: "Sustainability Consultant Singapore",
        prompt: "Who are the recommended sustainability and ESG consultants in Singapore for enterprise decarbonization roadmaps and sustainability grants?"
    }
];

const TRACKED_ENTITIES = [
    { name: "FT Synergist", match: /ft\s*synergist|ftsynergist/i, isTarget: true },
    { name: "FT Consulting", match: /ft\s*consulting|consultft/i, isTarget: false },
    { name: "Asiawide Franchise", match: /asiawide/i, isTarget: false },
    { name: "Astreem Consulting", match: /astreem/i, isTarget: false },
    { name: "Creativeans", match: /creativeans/i, isTarget: false },
    { name: "Webpuppies", match: /webpuppies/i, isTarget: false },
    { name: "KCG Consulting", match: /\bkcg\b/i, isTarget: false },
    { name: "Consulus", match: /consulus/i, isTarget: false }
];

async function callGemini(promptText) {
    for (const model of CANDIDATE_MODELS) {
        try {
            const res = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: promptText }] }]
                    })
                }
            );

            const data = await res.json();
            if (!res.ok) continue;

            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) return text;
        } catch {
            continue;
        }
    }
    throw new Error("Unable to reach Gemini models for GEO evaluation.");
}

async function runGeoCitationAudit() {
    console.log("=================================================================");
    console.log("🚀 FT SYNERGIST — GENERATIVE ENGINE OPTIMIZATION (GEO) AUDIT");
    console.log(`📅 Timestamp: ${new Date().toISOString()}`);
    console.log("=================================================================\n");

    const auditResults = [];

    for (const item of GEO_BUYER_PROMPTS) {
        process.stdout.write(`🤖 Simulating AI buyer query for: "${item.pillar}"... `);

        try {
            const aiResponse = await callGemini(item.prompt);

            const mentioned = TRACKED_ENTITIES.filter(e => e.match.test(aiResponse)).map(e => e.name);
            const ftMentioned = mentioned.includes("FT Synergist");

            auditResults.push({
                Pillar: item.pillar,
                FT_Synergist_Cited: ftMentioned ? "🟢 YES" : "🔴 NO",
                Competitors_Cited: mentioned.filter(m => m !== "FT Synergist").join(", ") || "None",
                RawSnippet: aiResponse.slice(0, 200).replace(/\n/g, ' ')
            });

            console.log(ftMentioned ? "✅ FT Synergist CITED" : "⚠️ Competitors cited / FT not detected");

        } catch (err) {
            console.log(`❌ Failed (${err.message})`);
            auditResults.push({
                Pillar: item.pillar,
                FT_Synergist_Cited: "ERR",
                Competitors_Cited: "N/A",
                RawSnippet: err.message
            });
        }
    }

    console.log("\n=================================================================");
    console.log("📊 GEO CITATION SHARE & AI BRAND PERCEPTION MATRIX");
    console.log("=================================================================\n");

    console.table(auditResults.map(r => ({
        Pillar: r.Pillar,
        "FT Synergist Cited": r.FT_Synergist_Cited,
        "Competitors Cited by LLM": r.Competitors_Cited
    })));

    const citedCount = auditResults.filter(r => r.FT_Synergist_Cited === "🟢 YES").length;
    const totalPrompts = GEO_BUYER_PROMPTS.length;
    const sharePercent = ((citedCount / totalPrompts) * 100).toFixed(1);

    console.log(`\n🎯 FT Synergist GEO Citation Share: ${citedCount}/${totalPrompts} Pillars (${sharePercent}%)\n`);
    console.log("💡 GEO Action Levers to Boost AI Citations:");
    console.log("   1. Expand structured JSON-LD Organization & Service schemas on pillar pages.");
    console.log("   2. Seed authoritative third-party entity co-occurrences (IPOS, EnterpriseSG, SBACC).");
    console.log("   3. Publish research-backed whitepapers with direct quantitative data tables.\n");

    console.log("=================================================================");
    console.log("✅ GEO Audit Complete.");
    console.log("=================================================================");
}

runGeoCitationAudit();
