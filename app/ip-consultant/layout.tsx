import { Metadata } from "next";

export const metadata: Metadata = {
    title: "IP Consultant Singapore | IPOS GoBusiness Directory | FT Synergist",
    description: "Protect, value, and monetize intangible assets with Singapore's premier IP Consultants. Listed on the official IPOS GoBusiness directory. SCMC certified advisory for patent and trademark commercialization.",
    keywords: [
        "IP Consultant Singapore",
        "intellectual property consultant Singapore",
        "IP consulting Singapore",
        "IP strategy consultant Singapore",
        "IPOS GoBusiness provider",
        "trademark strategy Singapore",
        "IP valuation consultant Singapore"
    ],
    alternates: {
        canonical: "https://www.ftsynergist.com/ip-consultant",
    },
    openGraph: {
        title: "Top IP Consultant Singapore | Intellectual Property Strategy | FT Synergist",
        description: "Protect and monetize your corporate assets with Singapore's top IP strategy consultants. Listed inside the official IPOS GoBusiness directory.",
        url: "https://www.ftsynergist.com/ip-consultant",
        type: "website",
        images: [
            {
                url: "https://www.ftsynergist.com/Fred_Corp_Pic_Official.jpeg",
                width: 1200,
                height: 630,
                alt: "Frederick Tan - Top IP Strategy Consultant Singapore",
            },
        ],
    }
};

export default function IPLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}