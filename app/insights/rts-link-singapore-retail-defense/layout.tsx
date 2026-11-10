import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The RTS Link Paradox & Singapore Retail Defense Strategy | FT Synergist",
  description: "Countering S$2.1B revenue leakage from the Johor-Singapore RTS Link: suburban REIT portfolio optimization, experiential retailing, and JS-SEZ operational twinning.",
  keywords: [
    "RTS Link Singapore retail defense",
    "Johor Singapore RTS retail impact",
    "JS-SEZ retail strategy",
    "Singapore consumer leakage Johor",
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/insights/rts-link-singapore-retail-defense",
  },
  openGraph: {
    title: "The RTS Link Paradox & Singapore Retail Defense Strategy | FT Synergist",
    description: "Countering S$2.1B revenue leakage from the RTS Link: Singapore retail defense framework.",
    url: "https://www.ftsynergist.com/insights/rts-link-singapore-retail-defense",
    siteName: "FT Synergist",
    locale: "en_SG",
    type: "article",
  },
};

export default function RTSLinkRetailDefenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
