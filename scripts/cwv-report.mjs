import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const BASE_URL = 'https://ftsynergist.com';
const API_KEY = process.env.PAGESPEED_API_KEY || process.env.GEMINI_API_KEY;

const TARGET_ROUTES = [
    { name: 'Homepage', path: '/' },
    { name: 'EDG Consultant', path: '/edg-grant' },
    { name: 'MRA Consultant', path: '/mra-grant' },
    { name: 'IP Consultant', path: '/ip-consultant' },
    { name: 'Franchise Consultant', path: '/franchise-consultant' },
    { name: 'Brand Consultant', path: '/strategic-brand-marketing-development' },
    { name: 'AI Digitalisation', path: '/ai-digitalisation' },
    { name: 'Sustainability', path: '/sustainability' }
];

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function auditRoute(route, strategy = 'mobile') {
    const targetUrl = `${BASE_URL}${route.path}`;
    let apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl)}&strategy=${strategy}&category=performance`;
    
    if (API_KEY && API_KEY.startsWith('AIzaSy')) {
        apiUrl += `&key=${API_KEY}`;
    }

    try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
            const errBody = await res.text();
            throw new Error(`PageSpeed API HTTP ${res.status}: ${errBody.slice(0, 150)}`);
        }

        const data = await res.json();
        const lighthouse = data.lighthouseResult;
        const categories = lighthouse?.categories;
        const audits = lighthouse?.audits;

        const score = Math.round((categories?.performance?.score || 0) * 100);
        const lcp = audits?.['largest-contentful-paint']?.displayValue || 'N/A';
        const cls = audits?.['cumulative-layout-shift']?.displayValue || 'N/A';
        const fcp = audits?.['first-contentful-paint']?.displayValue || 'N/A';
        const tbt = audits?.['total-blocking-time']?.displayValue || 'N/A';
        const speedIndex = audits?.['speed-index']?.displayValue || 'N/A';

        return {
            name: route.name,
            path: route.path,
            strategy,
            score,
            lcp,
            cls,
            fcp,
            tbt,
            speedIndex,
            error: null
        };
    } catch (err) {
        return {
            name: route.name,
            path: route.path,
            strategy,
            score: 'N/A',
            lcp: 'N/A',
            cls: 'N/A',
            fcp: 'N/A',
            tbt: 'N/A',
            speedIndex: 'N/A',
            error: err.message
        };
    }
}

async function runCoreWebVitalsReport() {
    console.log("=================================================================");
    console.log("🚀 FT SYNERGIST — CORE WEB VITALS & PAGESPEED AUDIT");
    console.log(`📅 Timestamp: ${new Date().toISOString()}`);
    console.log(`🎯 Target Domain: ${BASE_URL}`);
    console.log("=================================================================\n");

    console.log("📱 Auditing Mobile Performance & Core Web Vitals...");

    const results = [];

    for (const route of TARGET_ROUTES) {
        process.stdout.write(`   Scanning ${route.name} (${route.path})... `);
        const res = await auditRoute(route, 'mobile');
        if (res.error) {
            console.log(`⚠️ Notice (${res.error.includes('429') ? 'Rate limit / Key pending' : res.error})`);
        } else {
            console.log(`✅ Score: ${res.score}/100 (LCP: ${res.lcp}, CLS: ${res.cls})`);
        }
        results.push(res);
        await sleep(1500);
    }

    console.log("\n=================================================================");
    console.log("📊 CORE WEB VITALS BENCHMARK MATRIX (MOBILE)");
    console.log("=================================================================\n");

    console.table(results.map(r => ({
        Route: r.name,
        Path: r.path,
        Score: typeof r.score === 'number' ? `${r.score}/100` : r.score,
        LCP: r.lcp,
        CLS: r.cls,
        TBT: r.tbt,
        SpeedIndex: r.speedIndex,
        Status: typeof r.score === 'number' && r.score >= 90 ? '🟢 Fast (LCP <= 2.5s)' : (typeof r.score === 'number' && r.score >= 70 ? '🟡 Average' : (typeof r.score === 'number' ? '🔴 Needs Tuning' : '⚪ Pending API Key'))
    })));

    console.log("\n💡 Core Web Vitals Standards (Google 2026 Ranking Signals):");
    console.log("   • LCP (Largest Contentful Paint): Good <= 2.5s");
    console.log("   • CLS (Cumulative Layout Shift):  Good <= 0.1");
    console.log("   • TBT (Total Blocking Time):     Good <= 200ms\n");

    console.log("=================================================================");
    console.log("✅ Core Web Vitals Audit Complete.");
    console.log("=================================================================");
}

runCoreWebVitalsReport();
