export default function EdgJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.ftsynergist.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "EDG Grant",
                        "item": "https://www.ftsynergist.com/edg-grant"
                    }
                ]
            },
            {
                "@type": "Service",
                "name": "Enterprise Development Grant (EDG) Advisory",
                "provider": {
                    "@type": "ConsultingService",
                    "name": "FT Synergist"
                },
                "serviceType": "Government Grant Consulting",
                "areaServed": {
                    "@type": "Country",
                    "name": "Singapore"
                },
                "description": "Expert advisory for Singapore SMEs to secure up to 50% funding via the Enterprise Development Grant (EDG) for Strategic Brand, Innovation, and Market Access projects.",
                "url": "https://www.ftsynergist.com/edg-grant"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
