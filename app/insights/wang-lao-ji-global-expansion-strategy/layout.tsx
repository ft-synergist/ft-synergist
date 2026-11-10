import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wang Lao Ji Global Expansion: 5 Scaling Lessons for SMEs | FT Synergist",
  description: "How a 197-year heritage herbal tea brand scaled globally across 150+ countries: Why localization beats translation and the PCBC framework explained.",
  keywords: [
    "Wang Lao Ji global expansion",
    "PCBC framework case study",
    "brand localization strategy",
    "heritage brand scaling lessons",
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/insights/wang-lao-ji-global-expansion-strategy",
  },
  openGraph: {
    title: "Wang Lao Ji Global Expansion: 5 Scaling Lessons for SMEs | FT Synergist",
    description: "5 scaling lessons from Wang Lao Ji's cross-border transformation via the PCBC framework.",
    url: "https://www.ftsynergist.com/insights/wang-lao-ji-global-expansion-strategy",
    siteName: "FT Synergist",
    locale: "en_SG",
    type: "article",
  },
};

export default function WangLaoJiExpansionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
