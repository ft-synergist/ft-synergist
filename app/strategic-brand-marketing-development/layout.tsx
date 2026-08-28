import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Brand Consultant Singapore | Strategic Brand & Marketing Advisory | FT Synergist",
    description: "Build market dominance and tradeable brand equity with Singapore's premier Brand Consultants. SCMC certified advisory for brand architecture, positioning, and EDG co-funded marketing strategies.",
    keywords: [
        "Brand Consultant Singapore",
        "brand strategy Singapore",
        "strategic brand consultant Singapore",
        "marketing development consultant Singapore",
        "brand consulting Singapore",
        "EDG brand strategy consultant"
    ],
    alternates: {
        canonical: "https://www.ftsynergist.com/strategic-brand-marketing-development",
    }
};

export default function BrandMarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}