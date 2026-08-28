import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Franchise Consultant Singapore | Master Licensing & Expansion | FT Synergist",
    description: "Scale your enterprise with Singapore's premier Franchise Consultants. TÜV SÜD SCMC certified advisory for master franchising, FDD/SOP standardization, and ASEAN cross-border expansion.",
    keywords: [
        "Franchise Consultant Singapore",
        "franchise consulting Singapore",
        "franchise broker Singapore",
        "master licensing consultant Singapore",
        "franchising consultant",
        "franchise expansion advisor Singapore"
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