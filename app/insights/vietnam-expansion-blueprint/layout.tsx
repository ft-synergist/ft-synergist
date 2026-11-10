import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Navigating the Singapore-Vietnam Expansion Blueprint | FT Synergist",
  description: "Dismantling regulatory, tax, and supply-chain complexities in Vietnam via PCBC and DVF frameworks. Cross-border market expansion guide for Singapore enterprises.",
  keywords: [
    "Singapore Vietnam expansion",
    "MRA grant Vietnam market entry",
    "Vietnam business expansion strategy",
    "cross-border expansion ASEAN",
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/insights/vietnam-expansion-blueprint",
  },
  openGraph: {
    title: "Navigating the Singapore-Vietnam Expansion Blueprint | FT Synergist",
    description: "Cross-border expansion blueprint for Singapore enterprises scaling into Vietnam.",
    url: "https://www.ftsynergist.com/insights/vietnam-expansion-blueprint",
    siteName: "FT Synergist",
    locale: "en_SG",
    type: "article",
  },
};

export default function VietnamExpansionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
