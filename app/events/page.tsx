import { getEvents, Event } from "@/lib/data";
import { EventsList } from "@/components/EventsList";
import { EventJsonLd } from "@/components/EventJsonLd";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Upcoming Business Events & Workshops | FT Synergist",
    description: "Join our exclusive events, workshops, and networking sessions in Singapore. Learn about EDG grants, AI implementation, and business scaling strategies.",
    keywords: ["Business Events Singapore", "SME Workshops", "Networking Events", "EDG Grant Seminar", "AI for Business Workshop"],
};

export default async function EventsPage() {
    const rawEvents = await getEvents();

    const now = new Date();

    // 1. Filter and sort upcoming events (soonest first)
    const upcomingEvents = rawEvents
        .filter((event: Event) => new Date(event.date) >= now)
        .sort((a: Event, b: Event) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // 2. Filter and sort past events (most recently concluded first)
    const pastEvents = rawEvents
        .filter((event: Event) => new Date(event.date) < now)
        .sort((a: Event, b: Event) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // 3. Combine with upcoming events on top
    const events: Event[] = [...upcomingEvents, ...pastEvents];

    return (
        <>
            <EventJsonLd events={events} />
            <EventsList initialEvents={events} />
        </>
    );
}