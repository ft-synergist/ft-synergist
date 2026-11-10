import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | FT Synergist",
  description: "PDPA compliance statement, data protection guidelines, and privacy policy for FT Synergist Pte Ltd.",
  alternates: {
    canonical: "https://www.ftsynergist.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | FT Synergist",
    description: "PDPA compliance statement and privacy policy for FT Synergist Pte Ltd.",
    url: "https://www.ftsynergist.com/privacy-policy",
    siteName: "FT Synergist",
    locale: "en_SG",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
