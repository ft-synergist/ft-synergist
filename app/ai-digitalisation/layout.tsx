import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Digitalisation Consultant Singapore | Enterprise AI — FT Synergist",
    description: "Deploy practical enterprise AI workflows and automation with Singapore's top AI consultants. SCMC-certified advisory for grant-eligible digital transformation.",
    keywords: [
        "AI Digitalisation Consultant Singapore",
        "AI consultant Singapore",
        "AI consultancy Singapore",
        "best AI consultants in Singapore",
        "digital transformation consultancy Singapore",
        "digitalisation consultant Singapore",
        "enterprise AI solution provider Singapore"
    ],
    alternates: {
        canonical: "https://www.ftsynergist.com/ai-digitalisation",
    }
};

export default function AIDigitalisationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}