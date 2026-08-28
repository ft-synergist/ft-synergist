import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Digitalisation Consultant Singapore | Enterprise AI & Workflow Advisory | FT Synergist",
    description: "Accelerate enterprise growth with Singapore's premier AI Digitalisation Consultants. SCMC accredited advisory for custom AI architecture, predictive analytics, and SME workflow automation.",
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