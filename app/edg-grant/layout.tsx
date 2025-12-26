
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enterprise Development Grant (EDG) Singapore: Strategic Guide 2026 | FT Synergist",
    description: "Scale. Innovate. Dominate. Leveraging the EDG for defensible IP and global expansion. Check eligibility with Singapore's premier strategic consultancy.",
};

import EdgJsonLd from "@/components/EdgJsonLd";

export default function EDGGrantLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <EdgJsonLd />
            {children}
        </>
    );
}
