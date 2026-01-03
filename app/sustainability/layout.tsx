import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability Consulting Singapore | ESG Strategy & Double Materiality",
  description: "Expert Sustainability & ESG Consulting in Singapore. We guide SMEs through Double Materiality, UN SDGs alignment, and Green Plan execution.",
  keywords: ["Sustainability Consulting Singapore", "ESG Strategy", "Double Materiality", "Green Plan", "UN SDGs", "Corporate Sustainability"],
  openGraph: {
    title: "Sustainability Consulting Singapore | ESG Strategy & Double Materiality",
    description: "Expert Sustainability & ESG Consulting in Singapore. We guide SMEs through Double Materiality, UN SDGs alignment, and Green Plan execution.",
    url: "https://www.ftsynergist.com/sustainability",
  },
};

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
