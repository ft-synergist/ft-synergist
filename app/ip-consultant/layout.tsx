import { Metadata } from "next";

// protected-keywords (AGENTS.md §6): literal terms to diff before any title/description change.
const protectedKeywords = [
    "IP Consultant Singapore",
    "IP Strategy",
    "Advisory",
    "Valuation",
    "Monetization",
    "patents",
    "trademarks",
    "intangible assets",
    "IPOS-listed",
    "SCMC-1810-P0236",
    "licensing",
    "brand protection",
    "EDGE grant"
];

export const metadata: Metadata = {
    title: "IP Consultant Singapore | IP Strategy & Advisory, Valuation & Monetization",
    description: "Protect and monetize patents, trademarks, and intangible assets with Singapore's IPOS-listed IP Strategy Consultant. TÜV SÜD SCMC certified advisor (SCMC-1810-P0236) for IP strategy & advisory, valuation, licensing, brand protection & EDGE grant.",
    keywords: [
        "IP Consultant Singapore",
        "IP Strategy & Advisory Singapore",
        "IP Strategy Consulting Singapore",
        "IP Brokerage and Licensing Singapore",
        "Innovation Consultancy Singapore",
        "Branding Strategy Singapore",
        "intellectual property consultant Singapore",
        "IP consulting Singapore",
        "IP strategy consultant Singapore",
        "IPOS GoBusiness IP Grow provider",
        "trademark strategy Singapore",
        "IP valuation consultant Singapore",
        "intellectual property rights consultant",
        "EDGE Grant Business Strategic Planning"
    ],
    alternates: {
        canonical: "https://www.ftsynergist.com/ip-consultant",
    },
    openGraph: {
        title: "IP Consultant Singapore | IP Strategy & Advisory, Valuation & Monetization | FT Synergist",
        description: "Protect and monetize patents, trademarks, and intangible assets with Singapore's IPOS-listed IP Strategy Consultant. TÜV SÜD SCMC certified advisor (SCMC-1810-P0236) for IP strategy & advisory, valuation, licensing, brand protection & EDGE grant.",
        url: "https://www.ftsynergist.com/ip-consultant",
        type: "website",
        images: [
            {
                url: "https://www.ftsynergist.com/insights/ipos-ip-week-2026/frederick-tan-rosemary-kwa-ip-week-panel.jpg",
                width: 1200,
                height: 630,
                alt: "Frederick Tan - Principal Management Consultant, FT Synergist (SCMC-1810-P0236) at IPOS IP Week 2026",
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