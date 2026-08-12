import dotenv from 'dotenv';
import { readFile } from 'fs/promises';

dotenv.config({ path: '.env.local' });

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error("❌ Error: GEMINI_API_KEY is missing in .env.local");
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

// Preferred stable models, in priority order — avoids landing on
// embedding/vision-only/deprecated models from the raw ListModels response
const MODEL_PRIORITY = [
    "gemini-2.5-flash",
    "gemini-2.0-flash",
    "gemini-flash-latest",
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

async function discoverModel() {
    const listRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const listData = await listRes.json();

    if (!listRes.ok) {
        throw new Error(`Model Discovery Error: ${JSON.stringify(listData)}`);
    }

    const available = listData.models.filter(m =>
        m.supportedGenerationMethods?.includes("generateContent")
    );

    for (const preferred of MODEL_PRIORITY) {
        const match = available.find(m => m.name === `models/${preferred}`);
        if (match) return match.name;
    }

    // fall back to the first available generateContent model if none of our
    // preferred names are present (still better than blindly using [0])
    if (available.length > 0) {
        console.warn(`⚠️  None of the preferred models found — falling back to ${available[0].name}`);
        return available[0].name;
    }

    throw new Error("No active generateContent models found for this project key.");
}

async function runSeoAuditAgent() {
    console.log("🚀 Initializing Gemini SEO Audit Agent...");

    try {
        const modelName = await discoverModel();
        console.log(`📌 Using model: ${modelName}`);

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

        const genRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/${modelName}:generateContent?key=${apiKey}`,
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
            throw new Error(`Generation Error: ${JSON.stringify(genData)}`);
        }

        const outputText = genData.candidates?.[0]?.content?.parts?.[0]?.text;

        console.log("\n✅ Agent Audit Complete:\n");
        console.log(outputText);

    } catch (err) {
        console.error("❌ Execution Error:", err.message || err);
    }
}

runSeoAuditAgent();