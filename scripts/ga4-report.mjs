import { google } from 'googleapis';

const PROPERTY_ID = process.env.GA4_PROPERTY_ID;

function getCredentials() {
    const raw = process.env.GA_SERVICE_ACCOUNT_KEY || process.env.GSC_SERVICE_ACCOUNT_KEY;
    if (!raw) {
        throw new Error("GA_SERVICE_ACCOUNT_KEY or GSC_SERVICE_ACCOUNT_KEY environment variable is missing.");
    }
    try {
        return JSON.parse(raw);
    } catch (err) {
        throw new Error(`Service account key JSON parse failed: ${err.message}`);
    }
}

function getCleanPropertyId() {
    if (!PROPERTY_ID) {
        throw new Error("GA4_PROPERTY_ID secret is missing. Please add your numeric GA4 Property ID.");
    }
    const clean = PROPERTY_ID.trim().replace(/^properties\//, '');
    return `properties/${clean}`;
}

async function runWeeklyAnalyticsReport() {
    console.log("=================================================================");
    console.log("🚀 FT SYNERGIST — WEEKLY GA4 LEADS & CONVERSION AUDIT");
    console.log(`📅 Execution Date: ${new Date().toISOString()}`);
    console.log("=================================================================\n");

    let credentials;
    let property;

    try {
        credentials = getCredentials();
        property = getCleanPropertyId();
        console.log(`🔑 Service Account: ${credentials.client_email || 'Detected'}`);
        console.log(`🎯 Target GA4 Property: ${property}\n`);
    } catch (err) {
        console.error(`❌ Configuration Error: ${err.message}`);
        console.log("\n💡 Action Required: Verify GA4_PROPERTY_ID and GSC_SERVICE_ACCOUNT_KEY in GitHub Secrets.");
        return;
    }

    try {
        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: ['https://www.googleapis.com/auth/analytics.readonly']
        });

        const analyticsdata = google.analyticsdata({ version: 'v1beta', auth });

        // 1. Current 7 Days vs Previous 7 Days Overview
        console.log("-----------------------------------------------------------------");
        console.log("📊 1. OVERVIEW: LAST 7 DAYS PERFORMANCE");
        console.log("-----------------------------------------------------------------");

        const currentWeekReport = await analyticsdata.properties.runReport({
            property,
            requestBody: {
                dateRanges: [{ startDate: '7daysAgo', endDate: 'yesterday' }],
                metrics: [
                    { name: 'activeUsers' },
                    { name: 'newUsers' },
                    { name: 'sessions' },
                    { name: 'screenPageViews' },
                    { name: 'userEngagementDuration' },
                    { name: 'bounceRate' },
                    { name: 'eventCount' }
                ]
            }
        });

        const prevWeekReport = await analyticsdata.properties.runReport({
            property,
            requestBody: {
                dateRanges: [{ startDate: '14daysAgo', endDate: '8daysAgo' }],
                metrics: [
                    { name: 'activeUsers' },
                    { name: 'newUsers' },
                    { name: 'sessions' },
                    { name: 'screenPageViews' },
                    { name: 'userEngagementDuration' },
                    { name: 'bounceRate' },
                    { name: 'eventCount' }
                ]
            }
        });

        const currRow = currentWeekReport.data.rows?.[0]?.metricValues || [];
        const prevRow = prevWeekReport.data.rows?.[0]?.metricValues || [];

        const activeUsers = parseInt(currRow[0]?.value || '0', 10);
        const prevActive = parseInt(prevRow[0]?.value || '0', 10);
        const newUsers = parseInt(currRow[1]?.value || '0', 10);
        const sessions = parseInt(currRow[2]?.value || '0', 10);
        const pageViews = parseInt(currRow[3]?.value || '0', 10);
        const totalDuration = parseFloat(currRow[4]?.value || '0');
        const avgEngTime = activeUsers > 0 ? (totalDuration / activeUsers).toFixed(0) : '0';
        const bounceRate = (parseFloat(currRow[5]?.value || '0') * 100).toFixed(1);
        const eventCount = parseInt(currRow[6]?.value || '0', 10);

        const activeDiff = prevActive > 0 ? (((activeUsers - prevActive) / prevActive) * 100).toFixed(1) : 'N/A';

        console.log(`• Active Users:         ${activeUsers} (${activeDiff}% vs previous week: ${prevActive})`);
        console.log(`• New Users:            ${newUsers} (${activeUsers > 0 ? ((newUsers / activeUsers) * 100).toFixed(1) : 0}% first-touch acquisition)`);
        console.log(`• Sessions:             ${sessions}`);
        console.log(`• Screen Page Views:    ${pageViews}`);
        console.log(`• Avg Engagement Time:  ${avgEngTime}s per user`);
        console.log(`• Bounce Rate:          ${bounceRate}%`);
        console.log(`• Total Events Tracked: ${eventCount} (~${activeUsers > 0 ? (eventCount / activeUsers).toFixed(1) : 0} interactions/user)\n`);

        // 2. Acquisition Channels
        console.log("-----------------------------------------------------------------");
        console.log("🌐 2. TOP ACQUISITION CHANNELS (Last 7 Days)");
        console.log("-----------------------------------------------------------------");

        const channelRes = await analyticsdata.properties.runReport({
            property,
            requestBody: {
                dateRanges: [{ startDate: '7daysAgo', endDate: 'yesterday' }],
                dimensions: [{ name: 'sessionDefaultChannelGroup' }, { name: 'sessionSourceMedium' }],
                metrics: [
                    { name: 'activeUsers' },
                    { name: 'sessions' },
                    { name: 'userEngagementDuration' },
                    { name: 'eventCount' }
                ],
                orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
                limit: 10
            }
        });

        const channelRows = channelRes.data.rows || [];
        if (channelRows.length > 0) {
            console.table(channelRows.map(r => ({
                Channel: r.dimensionValues[0].value,
                SourceMedium: r.dimensionValues[1].value,
                Users: r.metricValues[0].value,
                Sessions: r.metricValues[1].value,
                TotalEngTime: `${r.metricValues[2].value}s`,
                Events: r.metricValues[3].value
            })));
        } else {
            console.log("ℹ️ No channel traffic recorded in this 7-day period.\n");
        }
        console.log('');

        // 3. Strategic Pages Engagement
        console.log("-----------------------------------------------------------------");
        console.log("📄 3. ENGAGED STRATEGIC CONTENT & LANDING PAGES (Last 7 Days)");
        console.log("-----------------------------------------------------------------");

        const pageRes = await analyticsdata.properties.runReport({
            property,
            requestBody: {
                dateRanges: [{ startDate: '7daysAgo', endDate: 'yesterday' }],
                dimensions: [{ name: 'pagePath' }],
                metrics: [
                    { name: 'screenPageViews' },
                    { name: 'activeUsers' },
                    { name: 'userEngagementDuration' },
                    { name: 'bounceRate' }
                ],
                orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
                limit: 15
            }
        });

        const pageRows = pageRes.data.rows || [];
        if (pageRows.length > 0) {
            console.table(pageRows.map(r => {
                const u = parseInt(r.metricValues[1].value, 10);
                const d = parseFloat(r.metricValues[2].value);
                return {
                    Path: r.dimensionValues[0].value,
                    Views: r.metricValues[0].value,
                    Users: r.metricValues[1].value,
                    AvgEngage: u > 0 ? `${(d / u).toFixed(0)}s` : '0s',
                    BounceRate: `${(parseFloat(r.metricValues[3].value) * 100).toFixed(0)}%`
                };
            }));
        } else {
            console.log("ℹ️ No pageview data recorded in this 7-day period.\n");
        }
        console.log('');

        // 4. Conversion & Key Events
        console.log("-----------------------------------------------------------------");
        console.log("🎯 4. KEY EVENTS & CONVERSION ACTIONS (Last 7 Days)");
        console.log("-----------------------------------------------------------------");

        const eventRes = await analyticsdata.properties.runReport({
            property,
            requestBody: {
                dateRanges: [{ startDate: '7daysAgo', endDate: 'yesterday' }],
                dimensions: [{ name: 'eventName' }],
                metrics: [
                    { name: 'eventCount' },
                    { name: 'activeUsers' }
                ],
                orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
                limit: 20
            }
        });

        const eventRows = eventRes.data.rows || [];
        if (eventRows.length > 0) {
            console.table(eventRows.map(r => ({
                Event: r.dimensionValues[0].value,
                Count: r.metricValues[0].value,
                UniqueUsers: r.metricValues[1].value
            })));
        } else {
            console.log("ℹ️ No custom events recorded in this 7-day period.\n");
        }

        console.log("\n=================================================================");
        console.log("✅ GA4 Leads & Conversion Audit Complete.");
        console.log("=================================================================");

    } catch (err) {
        console.error("\n❌ Google Analytics API Error:");
        console.error(`Message: ${err.message}`);

        if (err.message && err.message.includes("Google Analytics Data API has not been used")) {
            console.log("\n👉 FIX: The Google Analytics Data API needs to be enabled on your GCP project.");
            console.log("   Visit: https://console.cloud.google.com/apis/library/analyticsdata.googleapis.com");
            console.log("   Click 'ENABLE' for the project linked to your Service Account.\n");
        } else if (err.code === 403 || (err.message && err.message.includes("User does not have sufficient permissions"))) {
            console.log(`\n👉 FIX: In Google Analytics (Admin > Property Access Management):`);
            console.log(`   Ensure '${credentials?.client_email}' is added with the 'Viewer' role.`);
        } else if (err.response?.data) {
            console.error("API Response Details:", JSON.stringify(err.response.data, null, 2));
        }
    }
}

runWeeklyAnalyticsReport();
