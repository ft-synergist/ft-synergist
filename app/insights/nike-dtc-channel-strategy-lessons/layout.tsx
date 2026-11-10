import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Direct-to-Consumer Paradox: Nike's DTC Lessons | FT Synergist",
  description: "Why aggressive DTC channel pivot eroded Nike's wholesale distribution and market valuation: Building defensible omnichannel moats for Singapore enterprises.",
  keywords: [
    "Nike DTC lessons",
    "direct to consumer strategy risks",
    "omnichannel strategy Singapore",
    "wholesale vs DTC channel strategy",
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/insights/nike-dtc-channel-strategy-lessons",
  },
  openGraph: {
    title: "The Direct-to-Consumer Paradox: Nike's DTC Lessons | FT Synergist",
    description: "Channel strategy analysis on Nike's DTC pivot and the imperative of balanced wholesale distribution.",
    url: "https://www.ftsynergist.com/insights/nike-dtc-channel-strategy-lessons",
    siteName: "FT Synergist",
    locale: "en_SG",
    type: "article",
  },
};

export default function NikeDTCStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
