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
                "startDate": new Date(event.date).toISOString(),
                "endDate": event.date ? new Date(new Date(event.date).setHours(17)).toISOString() : undefined, // Estimated end time (5 PM) if not parsed
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
                "image": event.image || "https://www.ftsynergist.com/ft_synergist_logo_wo_background.png",
                "description": event.description,
                "offers": {
                    "@type": "Offer",
                    "url": "https://www.ftsynergist.com/contact",
                    "price": event.price || "0",
                    "priceCurrency": event.currency || "SGD",
                    "availability": "https://schema.org/InStock",
                    "validFrom": new Date().toISOString()
                },
                "performer": {
                    "@type": "Organization",
                    "name": event.performer || "FT Synergist"
                },
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
