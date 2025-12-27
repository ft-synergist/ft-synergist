import React from "react";

export default function EdgJsonLd() {
    const jsonLd = {
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
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
