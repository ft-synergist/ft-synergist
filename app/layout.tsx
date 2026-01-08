import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google"; // Keep your fonts
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/providers/Providers";
import Header from "@/components/layout/Header"; // Assuming these paths are correct based on your file structure
import Footer from "@/components/layout/Footer";
import Script from "next/script"; // Required for GA and WhatsApp
import Image from "next/image";

// Font Setup
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ftsynergist.com'),
  title: {
    default: "FT Synergist | Strategic Scale-Up & IP Consultancy Singapore",
    template: "%s | FT Synergist"
  },
  description: "Specializing in Business Strategy, IP Monetization, and Market Expansion for scaling enterprises. We help profitable SMEs secure EDG and MRA grants.",
  keywords: ["SME Consultant Singapore", "EDG Grant", "Enterprise Strategy", "IP Monetization", "Frederick Tan"],
  openGraph: {
    title: "FT Synergist | Strategic Scale-Up & IP Consultancy Singapore",
    description: "Specializing in Business Strategy, IP Monetization, and Market Expansion for scaling enterprises.",
    url: "https://www.ftsynergist.com",
    siteName: "FT Synergist",
    locale: "en_SG",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "yHh-0...", // Keep your verification code if you have one, or remove this line
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} antialiased min-h-screen flex flex-col font-sans`}>
        <Providers>
          <Header />
          
          <main className="flex-grow">
            {children}
          </main>
          
          <Toaster />
          {/* DELETED: <JsonLd />  <-- The Ghost is gone forever */}
          
          <Footer />

          {/* WhatsApp Widget */}
          <a
            href="https://wa.me/6598628906"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
            aria-label="Chat on WhatsApp"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              width={35}
              height={35}
            />
          </a>

          {/* Google Analytics (Manual Script - Verified ID: G-R8ZGSYLYWJ) */}
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-R8ZGSYLYWJ"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
          >
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R8ZGSYLYWJ');
            `}
          </Script>
        </Providers>
      </body>
    </html>
  );
}
