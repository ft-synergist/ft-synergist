import { Metadata } from "next";

// protected-keywords (AGENTS.md §6): literal terms to diff before any title/description change.
// Approved 24 Nov 2026: "Strategic Brand Marketing" removed (0 impr. in 3M GSC); "Brand Strategy Singapore" added.
const protectedKeywords = [
    "Brand Consultant Singapore",
    "Brand Strategy Singapore",
    "strategic brand consultants",
    "International Branding",
    "brand consultancy for smes",
    "brand architecture",
    "ASEAN market expansion",
    "SCMC",
    "EDGE",
    "EDG"
];

export const metadata: Metadata = {
    title: "Brand Consultant Singapore | Brand Strategy & EDGE",
    description: "International Branding & Brand Strategy Singapore for SMEs. SCMC strategic brand consultants for brand architecture, ASEAN market expansion & EDGE grant.",
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
        title: "Brand Consultant Singapore | Brand Strategy & EDGE | FT Synergist",
        description: "International Branding & Brand Strategy Singapore for SMEs. SCMC strategic brand consultants for brand architecture, ASEAN market expansion & EDGE grant.",
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
