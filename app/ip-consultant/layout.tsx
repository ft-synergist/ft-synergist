import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Top IP Consultant Singapore | Intellectual Property Strategy",
    description: "Protect and monetize your corporate assets with Singapore's top IP strategy consultants. Specializing in IPOS GoBusiness filings, trademark architectures, and global licensing.",
    keywords: [
        "top ip consultant singapore",
        "intellectual property consultant singapore",
        "top business consultant singapore",
        "IPOS GoBusiness provider",
        "trademark strategy compliance"
    ],
    alternates: {
        canonical: "https://www.ftsynergist.com/ip-consultant",
    }
};

export default function IPLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}