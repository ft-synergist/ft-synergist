import { Metadata } from "next";
import ClientEDGPage from "@/components/ClientEDGPage"; 

export const metadata: Metadata = {
  title: "EDG Grant Consultant Singapore | Certified Management Consultants (CMC)",
  description: "Secure up to 50% funding with Singapore's leading EDG Grant Consultants. We handle your Enterprise Development Grant application, strategy, and claims. 100% Success Rate track record.",
  keywords: [
    "EDG Grant Consultant",
    "Enterprise Development Grant Singapore",
    "SME Grant Consultant",
    "Certified Management Consultant Singapore",
    "EDG Application Help"
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/edg-grant",
  },
  openGraph: {
    title: "EDG Grant Consultant Singapore | Secure Your Funding",
    description: "Expert advisory for the Enterprise Development Grant. We turn paperwork into strategic growth assets.",
    url: "https://www.ftsynergist.com/edg-grant",
    type: "website",
  }
};

export default function EDGGrantPage() {
  return <ClientEDGPage />;
}
