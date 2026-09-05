import dotenv from 'dotenv';
import { readFile } from 'fs/promises';

dotenv.config({ path: '.env.local' });

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error("❌ Error: GEMINI_API_KEY is missing.");
    process.exit(1);
}

const TARGET_KEYWORDS = [
    "EDG Consultant Singapore",
    "MRA Consultant Singapore",
    "IP Consultant Singapore",
    "Franchise Consultant Singapore",
    "Brand Consultant Singapore",
    "AI Digitalisation Consultant Singapore",
    "Sustainability Consultant Singapore"
];

const TARGET_PAGES = [
    "app/edg-grant/page.tsx",
    "app/mra-grant/page.tsx",
    "app/ip-consultant/page.tsx",
    "app/franchise-consultant/page.tsx",
    "app/strategic-brand-marketing-development/page.tsx",
    "app/ai-digitalisation/page.tsx",
    "app/sustainability/page.tsx"
];

const CANDIDATE_MODELS = [
    "gemini-2.0-flash",
    "gemini-1.5-flash",
    "gemini-flash-latest",
    "gemini-1.5-pro",
    "gemini-pro-latest"
];

async function readTargetFiles() {
    const results = await Promise.all(
        TARGET_PAGES.map(async (path) => {
            try {
                const content = await readFile(path, 'utf-8');
                return { path, content, error: null };
            } catch (err) {
                return { path, content: null, error: err.message };
            }
        })
    );

    const missing = results.filter(r => r.error);
    if (missing.length) {
        console.warn(`⚠️  Could not read ${missing.length} file(s):`);
        missing.forEach(m => console.warn(`   - ${m.path}: ${m.error}`));
    }

    return results;
}

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateWithFallback(promptText) {
    let lastError = null;

    for (const model of CANDIDATE_MODELS) {
        console.log(`🤖 Attempting generation with model: models/${model}...`);

        for (let attempt = 1; attempt <= 2; attempt++) {
            try {
                const genRes = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{ parts: [{ text: promptText }] }]
                        })
                    }
                );

                const genData = await genRes.json();

                if (!genRes.ok) {
                    const code = genData.error?.code || genRes.status;
                    const msg = genData.error?.message || "Unknown error";
                    console.warn(`   ⚠️ ${model} (attempt ${attempt}) returned ${code}: ${msg}`);

                    // If 503 (high demand) or 429 (rate limit), wait briefly and retry or fallback
                    if (code === 503 || code === 429) {
                        if (attempt === 1) {
                            console.log("   ⏳ Temporary demand spike. Retrying in 2 seconds...");
                            await sleep(2000);
                            continue;
                        }
                    }
                    lastError = msg;
                    break; // Move to next model in CANDIDATE_MODELS
                }

                const outputText = genData.candidates?.[0]?.content?.parts?.[0]?.text;
                if (outputText) {
                    console.log(`   ✅ Successfully generated using models/${model}`);
                    return outputText;
                }

            } catch (err) {
                console.warn(`   ⚠️ Request failed for ${model}: ${err.message}`);
                lastError = err.message;
            }
        }
    }

    throw new Error(`All Gemini candidate models failed. Last error: ${lastError}`);
}

async function runSeoAuditAgent() {
    console.log("=================================================================");
    console.log("🚀 INITIALIZING GEMINI SEO & GEO AUDIT AGENT");
    console.log(`📅 Timestamp: ${new Date().toISOString()}`);
    console.log("=================================================================\n");

    try {
        const fileResults = await readTargetFiles();
        const fileContext = fileResults
            .map(f => f.content
                ? `--- FILE: ${f.path} ---\n${f.content}`
                : `--- FILE: ${f.path} --- \n[UNREADABLE: ${f.error}]`)
            .join('\n\n');

        const promptText = `
You are an SEO & GEO audit agent for FT Synergist.

Below are the actual current contents of the target pages. Base your findings
only on what appears in this content — do not assume or invent anything not
present in the text.

${fileContext}

Target keywords: ${JSON.stringify(TARGET_KEYWORDS)}

For each file, report:
1. Whether each relevant target keyword actually appears in an H1 or prominent
   heading — quote the exact heading text found, or say "not found."
2. Any broken or missing internal links between these pillar pages, based only
   on link hrefs actually present in the code.
3. Whether any accreditation/license text appears on the page — report only
   what is literally present in the file; do not verify or assume validity of
   any license number, since you have no access to the actual registry.

If a file was unreadable, say so explicitly rather than guessing at its content.
        `.trim();

        const report = await generateWithFallback(promptText);

        console.log("\n=================================================================");
        console.log("📋 AUDIT REPORT SUMMARY");
        console.log("=================================================================\n");
        console.log(report);

    } catch (err) {
        console.error("\n❌ SEO Audit Notice:", err.message);
        console.log("\n⚠️ SEO Audit completed with fallback notice. GSC and GA4 audits will proceed.");
    }
}

runSeoAuditAgent();