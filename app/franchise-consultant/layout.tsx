import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Top Franchise Consultant Singapore | FT Synergist",
    description: "Scale your business with Singapore's top franchise consultants. We specialize in robust franchise agreement architectures, international compliance, and cross-border expansion models.",
    keywords: [
        "top franchise consultant singapore",
        "top business consultant singapore",
        "franchise expansion advisor singapore",
        "franchising consultant",
        "SOP manual standardization"
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