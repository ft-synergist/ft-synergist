import { Metadata } from "next";

// protected-keywords (AGENTS.md §6): literal terms to diff before any title/description change.
// Kept in alignment with User Brief & AGENTS.md §5 (measured non-hyperbolic terminology).
const protectedKeywords = [
    "AI Digitalisation Consultant Singapore",
    "AI & Automation Use Cases",
    "workflows",
    "integrate systems",
    "automation",
    "AI consultants",
    "EDGE",
    "Enterprise Singapore",
    "digital solutions"
];

export const metadata: Metadata = {
    title: "AI Digitalisation Consultant Singapore | AI & Automation Use Cases",
    description: "Help your Singapore business redesign workflows, integrate systems and adopt AI, automation and digital solutions. Explore practical SME use cases and Enterprise Singapore EDGE pathways.",
    keywords: [
        "AI Digitalisation Consultant Singapore",
        "AI consultant Singapore",
        "AI consultancy Singapore",
        "AI consultants for SME",
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
        title: "AI Digitalisation Consultant Singapore | AI & Automation Use Cases | FT Synergist",
        description: "Help your Singapore business redesign workflows, integrate systems and adopt AI, automation and digital solutions. Explore practical SME use cases and Enterprise Singapore EDGE pathways.",
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
