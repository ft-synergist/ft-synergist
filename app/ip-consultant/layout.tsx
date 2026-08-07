import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Top IP Consultant Singapore | Intellectual Property Strategy",
    description: "Protect and monetize your corporate assets with Singapore's top IP strategy consultants. Specializing in IPOS GoBusiness filings, trademark architectures, and global licensing.",
    keywords: [
        "top ip consultant singapore",
        "intellectual property consultant singapore",
        "top business consultant singapore",
        "IPOS GoBusiness provider",
        "trademark strategy compliance",
        "IP strategy consultant singapore"
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