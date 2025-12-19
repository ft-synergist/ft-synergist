export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ConsultingService",
        "name": "FT Synergist",
        "image": "https://www.ftsynergist.com/ft_synergist_logo_wo_background.png",
        "description": "Premium SME Management Consultant & EDG Grant Advisor in Singapore. We help businesses scale through strategic consulting and government grants.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "6 Eu Tong Sen St, #10-20 The Central",
            "addressLocality": "Singapore",
            "postalCode": "059817",
            "addressCountry": "SG"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 1.2895,
            "longitude": 103.8465
        },
        "url": "https://www.ftsynergist.com",
        "telephone": "+6562222222",
        "priceRange": "$$$",
        "areaServed": ["Singapore", "Indonesia", "Vietnam"],
        "founder": {
            "@type": "Person",
            "name": "Frederick Tan"
        },
        "sameAs": [
            "https://www.linkedin.com/company/ftsynergist"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is the EDG Grant?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The Enterprise Development Grant (EDG) helps Singapore companies grow and transform. It supports projects that help you upgrade your business, innovate, or venture overseas."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How much funding can I get from EDG?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "EDG supports up to 50% of qualified project costs for local SMEs. For sustainability-related projects, support may be up to 70% until March 2026."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What are the eligibility criteria for EDG?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "To be eligible, your company must be registered and operating in Singapore, have a minimum of 30% local shareholding, and be in a financially viable position."
                                }
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
