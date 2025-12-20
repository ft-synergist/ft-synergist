import { getEvents } from "@/lib/data";
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
    const events = await getEvents();
    return (
        <>
            <EventJsonLd events={events} />
            <EventsList initialEvents={events} />
        </>
    );
}
