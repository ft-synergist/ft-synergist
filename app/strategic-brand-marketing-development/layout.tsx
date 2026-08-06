import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Strategic Brand & Marketing Development Consultant Singapore | FT Synergist",
    description: "FT Synergist is a top Strategic Brand & Marketing Development consultant in Singapore under EnterpriseSG EDG framework. Drive market share, brand positioning, and tradeable IP assets.",
    keywords: [
        "strategic brand consultant singapore",
        "marketing development consultant singapore",
        "brand strategy EDG grant",
        "top business consultant singapore",
        "enterprise development grant brand strategy"
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