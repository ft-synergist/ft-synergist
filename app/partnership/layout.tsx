import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partnership Opportunities | Scale Your Consulting Practice | FT Synergist",
    description: "Partner with FT Synergist to transform your consulting practice. Access proprietary frameworks, institutional compliance tools, and high-value deal flow.",
    keywords: [
        "Consulting Partnership",
        "Franchise Development",
        "Business Scaling Partnership",
        "Consulting License",
        "Partnership Opportunities",
        "Scale Your Consulting Practice",
        "Beyond Borders FMS",
        "G-Score governance"
    ],
    alternates: {
        canonical: "https://www.ftsynergist.com/partnership",
    },
    openGraph: {
        title: "Partnership Opportunities | Scale Your Consulting Practice | FT Synergist",
        description: "Partner with FT Synergist to transform your consulting practice. Access proprietary frameworks, institutional compliance tools, and high-value deal flow.",
        url: "https://www.ftsynergist.com/partnership",
        type: "website",
        images: [
            {
                url: "https://www.ftsynergist.com/Fred_Corp_Pic_Official.jpeg",
                width: 1200,
                height: 630,
                alt: "Frederick Tan - Partnership Opportunities FT Synergist",
            },
        ],
    }
};

export default function PartnershipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
