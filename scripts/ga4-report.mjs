import { google } from 'googleapis';

const PROPERTY_ID = process.env.GA4_PROPERTY_ID; // e.g. "123456789" or "properties/123456789"

function getCredentials() {
    // Reuses the GSC_SERVICE_ACCOUNT_KEY or dedicated GA_SERVICE_ACCOUNT_KEY
    const raw = process.env.GA_SERVICE_ACCOUNT_KEY || process.env.GSC_SERVICE_ACCOUNT_KEY;
    if (!raw) {
        console.error("❌ Error: GA_SERVICE_ACCOUNT_KEY (or GSC_SERVICE_ACCOUNT_KEY) environment variable is missing.");
        process.exit(1);
    }
    try {
        return JSON.parse(raw);
    } catch (err) {
        console.error("❌ Error: Service account key is not valid JSON:", err.message);
        process.exit(1);
    }
}

function getCleanPropertyId() {
    if (!PROPERTY_ID) {
        console.error("❌ Error: GA4_PROPERTY_ID is missing in environment variables. Example: 456789012");
        process.exit(1);
    }
    return PROPERTY_ID.startsWith('properties/') ? PROPERTY_ID : `properties/${PROPERTY_ID}`;
}

async function runWeeklyAnalyticsReport() {
    console.log("🚀 Starting Weekly GA4 Lead Generation & Conversion Audit...\n");

    const credentials = getCredentials();
    const property = getCleanPropertyId();

    const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/analytics.readonly']
    });

    const analyticsdata = google.analyticsdata({ version: 'v1beta', auth });

    try {
        // 1. Overall Performance (Last 7 days vs Previous 7 days)
        console.log("=================================================================");
        console.log("📊 1. WEEK-OVER-WEEK TRAFFIC & ENGAGEMENT OVERVIEW (Last 7 Days)");
        console.log("=================================================================");

        const overviewRes = await analyticsdata.properties.runReport({
            property,
            requestBody: {
                dateRanges: [
                    { startDate: '7daysAgo', endDate: 'yesterday', name: 'Current Week' },
                    { startDate: '14daysAgo', endDate: '8daysAgo', name: 'Previous Week' }
                ],
                metrics: [
                    { name: 'activeUsers' },
                    { name: 'newUsers' },
                    { name: 'sessions' },
                    { name: 'userEngagementDuration' },
                    { name: 'averageSessionDuration' },
                    { name: 'bounceRate' },
                    { name: 'eventCount' }
                ]
            }
        });

        if (overviewRes.data.rows && overviewRes.data.rows.length > 0) {
            const current = overviewRes.data.rows[0]?.metricValues || [];
            const prev = overviewRes.data.rows[1]?.metricValues || [];

            const activeUsers = parseInt(current[0]?.value || '0', 10);
            const prevActive = parseInt(prev[0]?.value || '0', 10);
            const newUsers = parseInt(current[1]?.value || '0', 10);
            const sessions = parseInt(current[2]?.value || '0', 10);
            const totalEngSec = parseFloat(current[3]?.value || '0');
            const avgEngSec = activeUsers > 0 ? (totalEngSec / activeUsers).toFixed(1) : '0';
            const avgSessionDuration = parseFloat(current[4]?.value || '0').toFixed(1);
            const bounceRate = (parseFloat(current[5]?.value || '0') * 100).toFixed(1);
            const eventCount = parseInt(current[6]?.value || '0', 10);

            console.log(`• Active Users:         ${activeUsers} (vs prev week: ${prevActive})`);
            console.log(`• New Users:            ${newUsers} (${activeUsers > 0 ? ((newUsers / activeUsers) * 100).toFixed(1) : 0}% new visitors)`);
            console.log(`• Sessions:             ${sessions}`);
            console.log(`• Avg Engagement Time:  ${avgEngSec}s per user`);
            console.log(`• Avg Session Duration: ${avgSessionDuration}s`);
            console.log(`• Bounce Rate:          ${bounceRate}%`);
            console.log(`• Total Events Tracked: ${eventCount} (~${activeUsers > 0 ? (eventCount / activeUsers).toFixed(1) : 0} events/user)\n`);
        } else {
            console.log("⚠️ No overview data returned.\n");
        }

        // 2. Acquisition Channels (Where High-Intent Leads Come From)
        console.log("=================================================================");
        console.log("🌐 2. TRAFFIC SOURCES & ACQUISITION CHANNELS (Last 7 Days)");
        console.log("=================================================================");

        const channelRes = await analyticsdata.properties.runReport({
            property,
            requestBody: {
                dateRanges: [{ startDate: '7daysAgo', endDate: 'yesterday' }],
                dimensions: [{ name: 'sessionDefaultChannelGroup' }, { name: 'sessionSourceMedium' }],
                metrics: [
                    { name: 'activeUsers' },
                    { name: 'sessions' },
                    { name: 'averageSessionDuration' },
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
                AvgDuration: `${parseFloat(r.metricValues[2].value).toFixed(0)}s`,
                Events: r.metricValues[3].value
            })));
        } else {
            console.log("⚠️ No channel data found.\n");
        }
        console.log('');

        // 3. Top Landing & Content Pages (Strategic Intelligence Engagement)
        console.log("=================================================================");
        console.log("📄 3. TOP ENGAGED PAGES & STRATEGIC CONTENT (Last 7 Days)");
        console.log("=================================================================");

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
                const users = parseInt(r.metricValues[1].value, 10);
                const totalDuration = parseFloat(r.metricValues[2].value);
                const avgEngage = users > 0 ? `${(totalDuration / users).toFixed(0)}s` : '0s';
                return {
                    Page: r.dimensionValues[0].value,
                    Views: r.metricValues[0].value,
                    Users: r.metricValues[1].value,
                    AvgEngagement: avgEngage,
                    BounceRate: `${(parseFloat(r.metricValues[3].value) * 100).toFixed(0)}%`
                };
            }));
        } else {
            console.log("⚠️ No page data found.\n");
        }
        console.log('');

        // 4. Conversion & Key Event Actions (Form Submits, Downloads, Clicks)
        console.log("=================================================================");
        console.log("🎯 4. KEY EVENTS & CONVERSION ACTIONS (Last 7 Days)");
        console.log("=================================================================");

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
                EventName: r.dimensionValues[0].value,
                Count: r.metricValues[0].value,
                Users: r.metricValues[1].value
            })));
        } else {
            console.log("⚠️ No event data found.\n");
        }

        console.log("\n✅ Weekly GA4 Analytics & Conversion Report Complete.");

    } catch (err) {
        console.error("❌ Execution Error fetching GA4 data:", err.message || err);
        if (err.response?.data) {
            console.error("Details:", JSON.stringify(err.response.data));
        }
        process.exit(1);
    }
}

runWeeklyAnalyticsReport();
