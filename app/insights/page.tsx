import { getReports } from "@/lib/data";
import { InsightsList } from "@/components/InsightsList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Insights & Reports | State of AI & SME Trends in Asia",
    description: "Access exclusive reports on AI adoption, SME scaling strategies, and market trends in Southeast Asia. Download our latest State of AI 2025 report.",
};

export const dynamic = "force-dynamic";

export default async function InsightsPage() {
    const reports = await getReports();
    return <InsightsList initialReports={reports} />;
}
