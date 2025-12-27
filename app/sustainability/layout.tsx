import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sustainability Consultant Singapore | ESG & Double Materiality Strategy - FT Synergist",
    description: "Move beyond compliance. We integrate UN SDGs and Double Materiality to drive revenue and operational resilience. See how we helped Sundat, Pawa Bakery, and Bestway Cleaning scale.",
};

export default function SustainabilityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
