import type { Metadata } from "next";
import { Jost, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "FT Synergist | Accelerating Growth for 100 Million Lives in Asia",
  description: "Scaling businesses with strategic consulting, AI integration, and sustainable growth. Based in Singapore, serving Southeast Asia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jost.variable} ${montserrat.variable} antialiased min-h-screen flex flex-col font-sans`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
