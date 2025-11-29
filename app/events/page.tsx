import { getEvents } from "@/lib/data";
import { EventsList } from "@/components/EventsList";

export const dynamic = "force-dynamic";

export default async function EventsPage() {
    const events = await getEvents();
    return <EventsList initialEvents={events} />;
}
