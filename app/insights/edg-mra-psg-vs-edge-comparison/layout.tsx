import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EDG vs MRA vs PSG vs EDGE Grant: Side-by-Side Comparison | FT Synergist",
  description: "Comprehensive side-by-side benchmark comparing Enterprise Singapore's legacy EDG, MRA, and PSG schemes against the unified EDGE Grant launching 30 September 2026.",
  keywords: [
    "EDG vs MRA vs PSG vs EDGE",
    "EDGE grant comparison",
    "Enterprise Singapore grant replacement",
    "EDG grant vs EDGE",
    "MRA grant vs EDGE",
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/insights/edg-mra-psg-vs-edge-comparison",
  },
  openGraph: {
    title: "EDG vs MRA vs PSG vs EDGE Grant: Side-by-Side Comparison | FT Synergist",
    description: "Comprehensive side-by-side benchmark comparing legacy EDG, MRA, and PSG against the unified EDGE Grant.",
    url: "https://www.ftsynergist.com/insights/edg-mra-psg-vs-edge-comparison",
    siteName: "FT Synergist",
    locale: "en_SG",
    type: "article",
  },
};

export default function EDGMRAMPSGvsEDGEComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
