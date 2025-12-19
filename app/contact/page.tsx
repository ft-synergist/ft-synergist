import { ContactContent } from "@/components/ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact FT Synergist | Book a Discovery Session",
    description: "Ready to scale? Connect with our expert consultants for a business sprint session. Located at The Central, Singapore.",
};

export default function ContactPage() {
    return <ContactContent />;
}
