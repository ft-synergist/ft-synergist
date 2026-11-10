import { Metadata } from "next";

export const metadata: Metadata = {
  title: "State of AI in Southeast Asia 2026: Enterprise Adoption | FT Synergist",
  description: "Proprietary market intelligence examining enterprise AI workflows, automated agentic pipelines, and IMDA regulatory compliance across Singapore and ASEAN.",
  keywords: [
    "State of AI Southeast Asia",
    "AI adoption trends ASEAN",
    "enterprise AI Singapore",
    "AI digitalisation consultant",
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/insights/state-of-ai-2026",
  },
  openGraph: {
    title: "State of AI in Southeast Asia 2026: Enterprise Adoption | FT Synergist",
    description: "Enterprise AI workflows, automation, and regulatory compliance across ASEAN.",
    url: "https://www.ftsynergist.com/insights/state-of-ai-2026",
    siteName: "FT Synergist",
    locale: "en_SG",
    type: "article",
  },
};

export default function StateOfAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
