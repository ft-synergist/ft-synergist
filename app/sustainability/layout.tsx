import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Sustainability Consultant Singapore | FT Synergist",
  description: "Transform ESG compliance into a commercial moat with Singapore's top sustainability consultants. Fully aligned with the Singapore Green Plan 2030 framework.",
  keywords: [
    "top sustainability consultant singapore",
    "ESG strategy consultant singapore",
    "top business consultant singapore",
    "Singapore Green Plan 2030 compliance",
    "sustainable product innovation"
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/sustainability",
  }
};

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}