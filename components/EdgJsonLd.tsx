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
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the maximum funding support for the EDG in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The EDG typically supports up to 50% of qualifying project costs for local SMEs, covering consultancy, software, and equipment."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I use the EDG for overseas expansion?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. The \"Market Readiness Assistance\" pillar specifically covers Overseas market promotion, Overseas business development and Overseas market set-up."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why do I need a Certified Management Consultant (CMC)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Enterprise Singapore requires strategic projects be led by certified consultants. FT Synergist is fully certified to navigate the application and claims process."
                        }
                    }
                ]
            }
        ],
        "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the maximum funding support for the EDG in 2026?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The EDG typically supports up to 50% of qualifying project costs for local SMEs, covering consultancy, software, and equipment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I use the EDG for overseas expansion?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. The \"Market Readiness Assistance\" pillar specifically covers Overseas market promotion, Overseas business development and Overseas market set-up."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why do I need a Certified Management Consultant (CMC)?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Enterprise Singapore requires strategic projects be led by certified consultants. FT Synergist is fully certified to navigate the application and claims process."
                    }
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
