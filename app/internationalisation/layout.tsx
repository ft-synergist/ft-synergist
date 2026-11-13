import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Internationalisation Consultant Singapore | EDGE Grant Market Entry Advisory | FT Synergist",
    description: "Internationalisation & overseas market entry consultants in Singapore. Up to 70% EDGE Grant support (successor to MRA) for market entry setup, overseas partnerships, BD staff deployment, PR & trade fairs.",
    keywords: [
        "internationalisation consultant Singapore",
        "internationalisation consulting Singapore",
        "EDGE grant internationalisation",
        "market entry advisory Singapore",
        "overseas market expansion consultant",
        "MRA grant replacement EDGE",
        "ASEAN business expansion advisor",
        "Market Readiness Assistance Singapore"
    ],
    alternates: {
        canonical: "https://www.ftsynergist.com/internationalisation",
    }
};

export default function InternationalisationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

