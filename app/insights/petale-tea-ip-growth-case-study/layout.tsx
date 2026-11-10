import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unlocking Intangible Assets: Grow Your Business by 400% | FT Synergist",
  description: "Inside Pétale Tea's IP journey presented at IPOS IP Week: How unbundling intangible assets and asset-light licensing unlocked 400% enterprise growth.",
  keywords: [
    "IP growth case study",
    "IPOS IP Week case study",
    "Pétale Tea intangible assets",
    "IP commercialisation Singapore",
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/insights/petale-tea-ip-growth-case-study",
  },
  openGraph: {
    title: "Unlocking Intangible Assets: Grow Your Business by 400% | FT Synergist",
    description: "Inside Pétale Tea's IP journey: Unbundling intangible assets for 400% enterprise growth.",
    url: "https://www.ftsynergist.com/insights/petale-tea-ip-growth-case-study",
    siteName: "FT Synergist",
    locale: "en_SG",
    type: "article",
  },
};

export default function PetaleTeaIPGrowthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
