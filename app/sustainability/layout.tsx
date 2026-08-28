import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability Consultant Singapore | ESG Strategy & Green Plan 2030 | FT Synergist",
  description: "Transform ESG compliance into commercial value with Singapore's premier Sustainability Consultants. SCMC certified advisory for SGX disclosures, Enterprise Sustainability Programme (ESP), and decarbonization roadmaps.",
  keywords: [
    "Sustainability Consultant Singapore",
    "sustainability consulting Singapore",
    "singapore sustainability consulting",
    "ESG strategy consultant Singapore",
    "sustainability consultancy Singapore",
    "Singapore Green Plan 2030 compliance",
    "Enterprise Sustainability Programme consultant"
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