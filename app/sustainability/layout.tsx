import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability Consultant Singapore | ESG Strategy — FT Synergist",
  description: "Turn ESG compliance into commercial equity. SCMC-certified sustainability consulting for decarbonization roadmaps, Enterprise Sustainability Programme & grant co-funding.",
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