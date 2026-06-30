import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Top MRA Consultant Singapore | Cross-Border Expansion Expert",
    description: "Accelerate your international scaling with Singapore's top MRA grant consultants. Led by TÜV SÜD Certified SCMC management consultant Frederick Tan.",
    keywords: [
        "top MRA consultant singapore",
        "top business consultant singapore",
        "Market Readiness Assistance Grant Singapore",
        "MRA Consultant",
        "Singapore Certified Management Consultant"
    ],
    alternates: {
        canonical: "https://www.ftsynergist.com/mra-grant",
    }
};

export default function MRALayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}