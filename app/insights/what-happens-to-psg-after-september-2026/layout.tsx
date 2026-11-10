import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Happens to PSG After September 2026? SME Transition Guide | FT Synergist",
  description: "PSG ceases 29 September 2026. Discover how the Productivity Solutions Grant folds into the unified EDGE Grant, what the S$30,000 sub-cap means, and action steps for Singapore SMEs.",
  keywords: [
    "Productivity Solutions Grant PSG EDGE",
    "what happens to PSG after September 2026",
    "PSG grant expiry",
    "EDGE grant PSG transition",
    "Enterprise Singapore PSG replacement",
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/insights/what-happens-to-psg-after-september-2026",
  },
  openGraph: {
    title: "What Happens to PSG After September 2026? SME Transition Guide | FT Synergist",
    description: "PSG ceases 29 September 2026. How the Productivity Solutions Grant folds into the unified EDGE Grant.",
    url: "https://www.ftsynergist.com/insights/what-happens-to-psg-after-september-2026",
    siteName: "FT Synergist",
    locale: "en_SG",
    type: "article",
  },
};

export default function PSGAfterSeptember2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
