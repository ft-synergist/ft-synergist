import { Event } from "@/lib/data";

interface EventJsonLdProps {
    events: Event[];
}

export function EventJsonLd({ events }: EventJsonLdProps) {
    const parseIsoDate = (dateStr: string, defaultHour = 9) => {
        try {
            const parsed = new Date(dateStr);
            if (isNaN(parsed.getTime())) return new Date().toISOString();
            parsed.setHours(defaultHour, 0, 0, 0);
            return parsed.toISOString();
        } catch {
            return new Date().toISOString();
        }
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": events.map((event, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Event",
                "name": event.title.trim(),
                "startDate": parseIsoDate(event.date, 9),
                "endDate": parseIsoDate(event.date, 17),
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
                        "name": event.location.trim(),
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": event.location.includes("Suntec") || event.location.includes("FT Synergist")
                                ? "7 Temasek Boulevard, #12-07 Suntec Tower One"
                                : event.location.trim(),
                            "addressLocality": "Singapore",
                            "postalCode": "038987",
                            "addressCountry": "SG"
                        }
                    },
                "image": [
                    event.image || "https://www.ftsynergist.com/ft_synergist_logo_wo_background.png"
                ],
                "description": event.description || event.title,
                "offers": {
                    "@type": "Offer",
                    "url": "https://www.ftsynergist.com/contact",
                    "price": event.price || "0",
                    "priceCurrency": event.currency || "SGD",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2025-01-01T00:00:00Z"
                },
                "performer": {
                    "@type": "Organization",
                    "name": event.performer || "FT Synergist"
                },
                "organizer": {
                    "@type": "Organization",
                    "name": event.organizer || "FT Synergist",
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
