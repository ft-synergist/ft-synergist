import { Event } from "@/lib/data";

interface EventJsonLdProps {
    events: Event[];
}

export function EventJsonLd({ events }: EventJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": events.map((event, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Event",
                "name": event.title,
                "startDate": new Date(event.date), // Requires simple date format, improving robustness below
                "eventStatus": "https://schema.org/EventScheduled",
                "eventAttendanceMode": event.type === 'Online'
                    ? "https://schema.org/OnlineEventAttendanceMode"
                    : "https://schema.org/OfflineEventAttendanceMode",
                "location": event.type === 'Online'
                    ? {
                        "@type": "VirtualLocation",
                        "url": "https://www.ftsynergist.com/events"
                    }
                    : {
                        "@type": "Place",
                        "name": event.location,
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Singapore",
                            "addressCountry": "SG"
                        }
                    },
                "description": event.description,
                "organizer": {
                    "@type": "Organization",
                    "name": "FT Synergist",
                    "url": "https://www.ftsynergist.com"
                }
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
