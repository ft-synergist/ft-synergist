import { Metadata } from "next";

export const metadata: Metadata = {
    title: "MRA Grant Consultant Singapore | ASEAN Market Entry Advisory | FT Synergist",
    description: "Accelerate overseas expansion with Singapore's premier MRA market entry consultants. Strategic feasibility studies, overseas business matching, and cross-border licensing under EnterpriseSG MRA support.",
    keywords: [
        "MRA consultant Singapore",
        "MRA grant consultant Singapore",
        "MRA grant consultant",
        "mra consultant",
        "Market Readiness Assistance Singapore",
        "overseas market expansion consultant",
        "cross-border market entry Singapore",
        "ASEAN business expansion advisor"
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