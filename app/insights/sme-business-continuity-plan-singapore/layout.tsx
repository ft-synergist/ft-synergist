import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SME Business Continuity Plan (BCP) Singapore: Cloud, Energy & Supply Shocks | FT Synergist",
  description: "Why Business Continuity Planning (BCP) is not only for large corporations. Analysis of Singapore cloud outages, data-centre cooling failures, export bans, and 50% EDGE Grant ERM co-funding.",
  keywords: [
    "business continuity plan SME Singapore",
    "BCP consultant Singapore",
    "Enterprise Risk Management EDGE Grant",
    "Microsoft Outlook outage Singapore SME",
    "SME supply chain resilience Singapore",
    "Singapore Quality Class BCP",
    "PCBC model supply chain resilience"
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/insights/sme-business-continuity-plan-singapore",
  },
  openGraph: {
    title: "SME Business Continuity Plan (BCP) Singapore: Cloud, Energy & Supply Shocks | FT Synergist",
    description: "Why BCP and Enterprise Risk Management (ERM) are critical for Singapore SMEs across IT, energy, export bans, and tariff shocks—and how EDGE supports up to 50% of qualifying costs.",
    url: "https://www.ftsynergist.com/insights/sme-business-continuity-plan-singapore",
    siteName: "FT Synergist",
    locale: "en_SG",
    type: "article",
  },
};

export default function SMEBCPInsightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
