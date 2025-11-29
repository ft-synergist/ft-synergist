import { getEvents, getReports } from "@/lib/data";
import { AdminDashboard } from "@/components/AdminDashboard";

export default async function AdminPage() {
    const events = await getEvents();
    const reports = await getReports();

    return <AdminDashboard initialEvents={events} initialReports={reports} />;
}
