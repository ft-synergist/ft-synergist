import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Brand Consultant Singapore | Strategic Brand Marketing — FT Synergist",
    description: "Scale market valuation with Singapore's top strategic brand consultants. SCMC-certified advisory for brand architecture, ASEAN market expansion & grant co-funding.",
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
        title: "Brand Consultant Singapore | Strategic Brand Marketing — FT Synergist",
        description: "Scale market valuation with Singapore's top strategic brand consultants. SCMC-certified advisory for brand architecture, ASEAN market expansion & grant co-funding.",
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