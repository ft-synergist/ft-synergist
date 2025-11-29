import { getReports } from "@/lib/data";
import { InsightsList } from "@/components/InsightsList";

export default async function InsightsPage() {
    const reports = await getReports();
    return <InsightsList initialReports={reports} />;
}
