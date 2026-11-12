import { Metadata } from "next";

// protected-keywords (AGENTS.md §6): literal terms to diff before any title/description change.
const protectedKeywords = [
    "Brand Consultant Singapore",
    "International Branding",
    "Strategic Brand Marketing",
    "SMEs",
    "SCMC-certified",
    "strategic brand consultants",
    "brand architecture",
    "ASEAN expansion",
    "EDGE grant"
];

export const metadata: Metadata = {
    title: "Brand Consultant Singapore | International Branding & Strategic Brand Marketing",
    description: "Brand Consultant Singapore & International Branding for SMEs: SCMC-certified strategic brand consultants for brand architecture, ASEAN expansion & EDGE grant.",
    keywords: [
        "Brand Consultant Singapore",
        "International Branding Singapore",
        "International Branding Consultant Singapore",
        "Brand Strategy Consultant Singapore",
        "Brand Strategy Singapore",
        "brand consultancy for smes",
        "brand consulting Singapore",
        "brand positioning consultant",
        "strategic brand consultant Singapore",
        "marketing development consultant Singapore",
        "EDGE Grant International Branding",
        "EDG brand strategy consultant",
        "EDGE Grant brand strategy"
    ],
    alternates: {
        canonical: "https://www.ftsynergist.com/strategic-brand-marketing-development",
    },
    openGraph: {
        title: "Brand Consultant Singapore | International Branding & Strategic Brand Marketing | FT Synergist",
        description: "Brand Consultant Singapore & International Branding for SMEs: SCMC-certified strategic brand consultants for brand architecture, ASEAN expansion & EDGE grant.",
        url: "https://www.ftsynergist.com/strategic-brand-marketing-development",
        type: "website",
        images: [
            {
                url: "https://www.ftsynergist.com/insights/ipos-ip-week-2026/frederick-tan-rosemary-kwa-ip-week-panel.jpg",
                width: 1200,
                height: 630,
                alt: "Frederick Tan - Principal Management Consultant, FT Synergist (SCMC-1810-P0236)",
            },
        ],
    },
};

export default function BrandMarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
