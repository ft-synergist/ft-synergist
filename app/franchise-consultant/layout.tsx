import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Franchise Consultant Singapore | Master Licensing & SOP Advisory | FT Synergist",
    description: "Scale your enterprise with certified Singapore Franchise Consultants. TÜV SÜD SCMC certified advisory (SCMC-1810-P0236) for master franchising, operations manual (SOP) standardization, and ASEAN market expansion.",
    keywords: [
        "Franchise Consultant Singapore",
        "franchise consulting Singapore",
        "franchise broker Singapore",
        "master licensing consultant Singapore",
        "franchising consultant",
        "franchise expansion advisor Singapore",
        "franchise consultant"
    ],
    alternates: {
        canonical: "https://www.ftsynergist.com/franchise-consultant",
    }
};

export default function FranchiseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}