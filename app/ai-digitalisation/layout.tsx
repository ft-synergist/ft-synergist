import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Top AI Digitalisation Consultant Singapore | FT Synergist",
    description: "Accelerate your enterprise operations with Singapore's top AI digitalisation consultants. Specializing in predictive analytics dashboards, workflow automation, and custom LMS frameworks.",
    keywords: [
        "top ai digitalisation consultant singapore",
        "ai digital transformation advisor singapore",
        "top business consultant singapore",
        "predictive analytics dashboard architecture",
        "enterprise workflow automation software"
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