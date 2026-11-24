import { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Branding vs. International Marketing: Singapore ASEAN Launchpad Guide",
  description: "How Singapore SMEs use Singapore as an ASEAN launchpad: International Branding vs. International Marketing, 5-step playbook, IPOS Branding Strategy & 70% EDGE Grant.",
  keywords: [
    "international branding Singapore",
    "international marketing Singapore SME",
    "Singapore ASEAN launchpad",
    "Brand Strategy Singapore",
    "Brand Consultant Singapore",
    "EDGE Grant International Branding",
    "Overseas Marketing and Public Relations EDGE",
    "IPOS Branding Strategy",
    "ASEAN market expansion strategy"
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/insights/international-branding-singapore-asean-launchpad",
  },
  openGraph: {
    title: "International Branding vs. International Marketing: Singapore ASEAN Launchpad Guide | FT Synergist",
    description: "How Singapore SMEs separate International Branding (SS 680, up to 70% EDGE) from Overseas Marketing & PR when expanding across ASEAN from Singapore.",
    url: "https://www.ftsynergist.com/insights/international-branding-singapore-asean-launchpad",
    siteName: "FT Synergist",
    locale: "en_SG",
    type: "article",
  },
};

export default function InternationalBrandingLaunchpadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
