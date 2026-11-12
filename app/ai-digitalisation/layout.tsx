import { Metadata } from "next";

// protected-keywords (AGENTS.md §6): literal terms to diff before any title/description change.
const protectedKeywords = [
    "AI Digitalisation Consultant Singapore",
    "Enterprise AI",
    "Large-Scale Automation",
    "AI workflows",
    "automation",
    "AI consultants",
    "SCMC-certified",
    "EDGE",
    "grant-eligible",
    "digital transformation"
];

export const metadata: Metadata = {
    title: "AI Digitalisation Consultant Singapore | Enterprise AI & Large-Scale Automation",
    description: "Deploy practical enterprise AI workflows and automation with Singapore's top AI consultants. SCMC-certified advisory for EDGE grant-eligible large-scale digital transformation and automation.",
    keywords: [
        "AI Digitalisation Consultant Singapore",
        "AI consultant Singapore",
        "AI consultancy Singapore",
        "best AI consultants in Singapore",
        "digital transformation consultancy Singapore",
        "digitalisation consultant Singapore",
        "enterprise AI solution provider Singapore",
        "EDGE Grant Large-scale Digital Transformation",
        "EDGE Grant Large-scale Automation",
        "SME digitalisation vendor Singapore",
        "workflow automation consultant Singapore",
        "Enterprise Singapore Automation and Digitalisation grant"
    ],
    alternates: {
        canonical: "https://www.ftsynergist.com/ai-digitalisation",
    },
    openGraph: {
        title: "AI Digitalisation Consultant Singapore | Enterprise AI & Large-Scale Automation | FT Synergist",
        description: "Deploy practical enterprise AI workflows and automation with Singapore's top AI consultants. SCMC-certified advisory for EDGE grant-eligible large-scale digital transformation and automation.",
        url: "https://www.ftsynergist.com/ai-digitalisation",
        type: "website",
        images: [
            {
                url: "https://www.ftsynergist.com/IOT_asia_plus_17_march_2022.jpeg",
                width: 1200,
                height: 630,
                alt: "Frederick Tan - Principal Management Consultant, FT Synergist (SCMC-1810-P0236) speaking at IoT Asia+",
            },
        ],
    },
};

export default function AIDigitalisationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}