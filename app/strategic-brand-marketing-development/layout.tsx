import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Brand Strategy Singapore | Strategic Brand & Marketing Consultant | FT Synergist",
    description: "Differentiate your market positioning and build defensible brand equity with Singapore's premier Brand Strategy Consultants. SCMC certified advisory for brand architecture, positioning, and EDG co-funded marketing strategies.",
    keywords: [
        "Brand Strategy Singapore",
        "brand consultant Singapore",
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