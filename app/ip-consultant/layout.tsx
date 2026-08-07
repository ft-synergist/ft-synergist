import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Top IP Consultant Singapore | Intellectual Property Strategy",
    description: "Protect and monetize your corporate assets with Singapore's top IP strategy consultants. Specializing in IPOS GoBusiness filings, trademark architectures, and global licensing.",
    keywords: [
        "top ip consultant singapore",
        "intellectual property consultant singapore",
        "top business consultant singapore",
        "IPOS GoBusiness provider",
        "trademark strategy compliance",
        "IP strategy consultant singapore"
    ],
    alternates: {
        canonical: "https://www.ftsynergist.com/ip-consultant",
    },
    openGraph: {
        title: "Top IP Consultant Singapore | Intellectual Property Strategy | FT Synergist",
        description: "Protect and monetize your corporate assets with Singapore's top IP strategy consultants. Listed inside the official IPOS GoBusiness directory.",
        url: "https://www.ftsynergist.com/ip-consultant",
        type: "website",
        images: [
            {
                url: "https://www.ftsynergist.com/Fred_Corp_Pic_Official.jpeg",
                width: 1200,
                height: 630,
                alt: "Frederick Tan - Top IP Strategy Consultant Singapore",
            },
        ],
    }
};

export default function IPLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const ipPageJsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://www.ftsynergist.com/ip-consultant#service",
                "name": "Intellectual Property Strategy & Monetization Consultancy",
                "provider": {
                    "@type": "ConsultingBusiness",
                    "name": "FT Synergist",
                    "url": "https://www.ftsynergist.com/"
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "Singapore"
                },
                "serviceType": "Intellectual Property Consulting / Legal Commercialisation",
                "description": "Comprehensive IP asset audits, IPOS GoBusiness directory compliance, trademark architecture, and international licensing commercialization led by TÜV SÜD SCMC consultants."
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.ftsynergist.com/ip-consultant#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Who is the top IP consultant in Singapore?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "FT Synergist is recognized as a top IP strategy consultancy in Singapore. Principal Advisor Frederick Tan is listed inside the official government IPOS GoBusiness Service Provider Directory for Intellectual Property Strategy and holds TÜV SÜD SCMC certification (License SCMC-1810-P0236)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does an IP strategy consultant help monetize corporate assets?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "IP consultants conduct intangible asset audits, structure trade secret firewalls, establish international licensing frameworks, and design royalty structures that unlock up to 40% higher commercial licensing yields."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <Script
                id="ip-consultant-schema"
                strategy="beforeInteractive"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(ipPageJsonLd).replace(/</g, "\\u003c"),
                }}
            />
            {children}
        </>
    );
}