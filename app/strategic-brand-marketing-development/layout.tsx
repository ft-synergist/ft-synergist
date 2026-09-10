import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Brand Consultant Singapore | Strategic Brand Marketing | FT Synergist",
    description: "Premier Brand Consultant Singapore. Certified SCMC advisory (SCMC-1810-P0236) for brand architecture, market positioning & EDG / EDGE co-funded marketing strategies.",
    keywords: [
        "Brand Consultant Singapore",
        "Brand Strategy Singapore",
        "brand consultancy for smes",
        "brand consulting Singapore",
        "strategic brand consultant Singapore",
        "marketing development consultant Singapore",
        "EDG brand strategy consultant",
        "EDGE Grant brand strategy"
    ],
    alternates: {
        canonical: "https://www.ftsynergist.com/strategic-brand-marketing-development",
    },
    openGraph: {
        title: "Brand Consultant Singapore | Strategic Brand Marketing | FT Synergist",
        description: "Premier Brand Consultant Singapore. SCMC-certified advisory for brand architecture, market positioning & EDG / EDGE co-funded marketing strategies.",
        url: "https://www.ftsynergist.com/strategic-brand-marketing-development",
        type: "website",
        images: [
            {
                url: "https://www.ftsynergist.com/insights/ipos-ip-week-2026/frederick-tan-rosemary-kwa-ip-week-panel.jpg",
                width: 1200,
                height: 630,
                alt: "Frederick Tan - Certified Brand Strategy Consultant Singapore",
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