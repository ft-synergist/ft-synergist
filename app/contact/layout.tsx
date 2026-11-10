import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Advisory Booking | FT Synergist",
  description: "Schedule a confidential consultation with certified management consultants in Singapore for EDGE grants, IP strategy, franchise scaling, and business transformation.",
  alternates: {
    canonical: "https://www.ftsynergist.com/contact",
  },
  openGraph: {
    title: "Contact Us & Advisory Booking | FT Synergist",
    description: "Schedule a confidential consultation with certified management consultants in Singapore.",
    url: "https://www.ftsynergist.com/contact",
    siteName: "FT Synergist",
    locale: "en_SG",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
