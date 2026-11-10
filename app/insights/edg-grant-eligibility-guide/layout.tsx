import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EDG Grant Eligibility Guide: Qualifying Criteria & Project Scopes | FT Synergist",
  description: "Enterprise Singapore EDG grant eligibility framework: Qualifying requirements, 30% local shareholding criteria, Core Capabilities, Innovation, and Market Access scopes.",
  keywords: [
    "EDG grant eligibility",
    "Enterprise Development Grant criteria",
    "EDG project scopes",
    "EDG grant consultant Singapore",
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/insights/edg-grant-eligibility-guide",
  },
  openGraph: {
    title: "EDG Grant Eligibility Guide: Qualifying Criteria & Project Scopes | FT Synergist",
    description: "Enterprise Singapore EDG grant eligibility framework and project scopes explained.",
    url: "https://www.ftsynergist.com/insights/edg-grant-eligibility-guide",
    siteName: "FT Synergist",
    locale: "en_SG",
    type: "article",
  },
};

export default function EDGGrantEligibilityGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
