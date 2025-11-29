import { getReports } from "@/lib/data";
import { InsightsList } from "@/components/InsightsList";

export const dynamic = "force-dynamic";

export default async function InsightsPage() {
    const reports = await getReports();
    return <InsightsList initialReports={reports} />;
}
