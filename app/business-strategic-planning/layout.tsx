import { Metadata } from "next";

// protected-keywords (AGENTS.md §6): literal terms to diff before any title/description change.
const protectedKeywords = [
    "Business Strategic Planning",
    "Business Strategy Consultant Singapore",
    "Business Strategy Development",
    "EDGE Grant",
    "SCMC-1810-P0236",
    "intellectual property",
    "corporate growth",
    "Singapore Quality Class"
];

export const metadata: Metadata = {
    title: "Business Strategic Planning Consultant Singapore | EDGE Grant Strategy",
    description: "Business Strategic Planning & Business Strategy Development Consultant Singapore: Formulate corporate growth roadmaps, IP management & Singapore Quality Class systems with TÜV SÜD SCMC advisor Frederick Tan (SCMC-1810-P0236). Up to 50% EDGE Grant support.",
    keywords: [
        "Business Strategic Planning Singapore",
        "Business Strategic Planning Consultant Singapore",
        "Business Strategy Consultant Singapore",
        "Business Strategy Development Singapore",
        "EDGE Grant Business Strategic Planning",
        "EDG Business Strategy Development",
        "Corporate Strategy Consultant Singapore",
        "Strategic Planning Consultant SME Singapore",
        "Singapore Quality Class Consultant",
        "Business Excellence Framework Singapore",
        "TÜV SÜD SCMC Consultant Singapore"
    ],
    alternates: {
        canonical: "https://www.ftsynergist.com/business-strategic-planning",
    },
    openGraph: {
        title: "Business Strategic Planning Consultant Singapore | EDGE Grant Strategy | FT Synergist",
        description: "Formulate corporate growth strategies, IP management roadmaps, and operational excellence with TÜV SÜD SCMC-certified Principal Management Consultant Frederick Tan (SCMC-1810-P0236). Up to 50% EDGE Grant support.",
        url: "https://www.ftsynergist.com/business-strategic-planning",
        type: "website",
        images: [
            {
                url: "https://www.ftsynergist.com/ft-synergist-tnt-surveillance-business-strategy.png",
                width: 1200,
                height: 630,
                alt: "Frederick Tan - Principal Management Consultant, FT Synergist (SCMC-1810-P0236) leading Business Strategic Planning",
            },
        ],
    },
};

export default function BusinessStrategicPlanningLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

