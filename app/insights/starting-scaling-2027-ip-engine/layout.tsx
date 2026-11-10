import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starting & Scaling in 2027 Through the IP Engine | FT Synergist",
  description:
    "How Singapore brands navigate 4 macroeconomic shocks by commercialising defensible, asset-light intellectual property. Benchmark LEGO, Charles & Keith, Eu Yan Sang (S$808M exit), and Banyan Group via the PCBC Model.",
  keywords: [
    "IP consultant Singapore",
    "intellectual property consultant Singapore",
    "IP strategy consultant Singapore",
    "IP valuation consultant Singapore",
    "patent and trademark commercialisation Singapore",
    "IPOS GoBusiness IP Grow",
    "Enterprise Innovation Scheme EIS 400% IP tax deduction",
    "intangible asset commercialisation Singapore",
    "franchise consultant Singapore",
    "brand consultant Singapore",
    "EDGE Grant Singapore",
    "EDG grant consultant Singapore",
    "MRA grant consultant Singapore",
    "Charles and Keith case study",
    "Eu Yan Sang S$808M acquisition",
    "Banyan Group asset-light strategy",
    "PCBC model FT Synergist",
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/insights/starting-scaling-2027-ip-engine",
  },
  openGraph: {
    title: "Starting & Scaling in 2027 Through the IP Engine | FT Synergist",
    description:
      "How Singapore brands navigate 4 macroeconomic shocks by commercialising defensible, asset-light intellectual property. Full 19-slide PCBC benchmark report by FT Synergist.",
    url: "https://www.ftsynergist.com/insights/starting-scaling-2027-ip-engine",
    siteName: "FT Synergist",
    images: [
      {
        url: "https://www.ftsynergist.com/report-2027-ip-engine-cover.png",
        width: 1280,
        height: 720,
        alt: "Starting & Scaling in 2027 Through the IP Engine — FT Synergist Executive Report",
      },
    ],
    locale: "en_SG",
    type: "article",
  },
};

export default function StartingScaling2027IPEngineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

