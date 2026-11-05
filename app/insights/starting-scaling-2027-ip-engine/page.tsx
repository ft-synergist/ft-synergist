"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Lock,
  X,
  TrendingUp,
  ShieldCheck,
  Zap,
  AlertTriangle,
  Building2,
  Landmark,
  CheckCircle2,
  ChevronRight,
  Layers,
  Globe2,
  Award,
  FlaskConical,
} from "lucide-react";
import { ScrollDwellTrigger } from "@/components/ScrollDwellTrigger";
import CitationFootnotes, { CitationItem } from "@/app/components/CitationFootnotes";

const ipEngineCitations: CitationItem[] = [
  {
    id: 1,
    label: "The Straits Times (14 Aug 2025) — 'Made In Singapore: Charles & Keith’s risks and rewards strategy of doing business in crisis'",
    context:
      "Co-founder Charles Wong and Apparel Group CEO Neeraj Teckchandani on the 1996 Amara launch, 1997 AFC Causeway Point expansion, 2003 Middle East entry (>70 stores), 2004 e-commerce launch, Dubai handbag category (~50% of revenue), 2011–2016 LVMH L Capital Asia cycle, and 2025 Met Gala debut.",
    url: "https://www.straitstimes.com/life/style/made-in-singapore-charles-keiths-risks-and-rewards-strategy-of-doing-business-in-crisis",
  },
  {
    id: 2,
    label: "Antara News — 'Banyan Group celebrates grand opening of 100th resort and Singapore homecoming'",
    context:
      "Landmark 100th global property milestone at Mandai Rainforest Resort by Banyan Tree in Singapore and expansion across 10 multi-tier hospitality brands.",
    url: "https://en.antaranews.com/news/388969/banyan-group-celebrates-grand-opening-of-100th-resort-and-singapore-homecoming",
  },
  {
    id: 3,
    label: "Inside Retail Asia — 'Eu Yan Sang turns back to its heritage roots'",
    context:
      "Modernization of traditional Chinese medicine retail, scientific herb standardization, and dispensary clinical integration.",
    url: "https://insideretail.asia/2018/10/15/eu-yan-sang-turns-back-to-its-heritage-roots/",
  },
  {
    id: 4,
    label: "Rohto Pharmaceutical & Mitsui & Co. — Acquisition Disclosures of Eu Yan Sang International (June 2024)",
    context:
      "S$808 million valuation buyout (38x return over the 1993 S$21 million family leveraged buyback from Lum Chang), following CUHK/HKBU/NUS clinical RCT validation, TGA compliance, and FY2023 revenue of S$297 million across 170+ stores and 30 clinics.",
    url: "https://www.rohto.co.jp/global/",
  },
  {
    id: 5,
    label: "Banyan Group (SGX: B58) — FY2025 Annual Report & 1H2026 Financial Statements",
    context:
      "FY2025 revenue of S$477.4M (+25% YoY) and Core Operating Profit of S$109.8M (+59% YoY); 1H2026 revenue of S$235.2M (+14% YoY), Branded Residences sales of S$172.6M (+38% YoY), and PATMI of S$13.6M (+51% YoY).",
    url: "https://www.groupbanyan.com",
  },
  {
    id: 6,
    label: "SGX Filings (Jumbo Group SGX: 42R) & Business Times Singapore Retail Contraction Analysis (July 2026)",
    context:
      "Empirical audit of BreadTalk (contracted from 460 China outlets to ~200, exiting Beijing), Jumbo Seafood (-27.6% China revenue drop from S$26.1M to S$18.3M), and Song Fa Bak Kut Teh (contracted to 1 Shanghai store) amid the fading 'Singapore quality halo'.",
    url: "https://www.businesstimes.com.sg",
  },
];

// --- 1. LEAD CAPTURE MODAL COMPONENT (PDPA Compliant + Internal API Route) ---
const DownloadGate = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      setErrorMsg("Please accept the PDPA consent statement to proceed.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      reportName: "Starting & Scaling in 2027 Through the IP Engine (19-Slide Report)",
      consent: true,
      pagePath: "/insights/starting-scaling-2027-ip-engine",
    };

    try {
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to capture lead");
      }

      if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "lead_form_submit", {
          event_category: "lead_generation",
          event_label: "Starting & Scaling in 2027 Through the IP Engine",
          lead_type: "pdf_download",
          page_path: "/insights/starting-scaling-2027-ip-engine",
        });
      }

      window.open("/ft-synergist-2027-ip-engine-scaling-roadmap.pdf", "_blank");
      onClose();
    } catch (error) {
      console.error("Lead submission error:", error);
      window.open("/ft-synergist-2027-ip-engine-scaling-roadmap.pdf", "_blank");
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-neutral-900 rounded-none shadow-2xl overflow-hidden border border-neutral-800 border-t-4 border-[#8F801B]">
        <div className="bg-black p-8 text-center border-b border-neutral-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#8F801B]/10 border border-[#8F801B]/20">
            <Lock className="w-8 h-8 text-[#8F801B]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Unlock 19-Slide Executive Report</h3>
          <p className="text-neutral-400 text-sm">
            Enter your details to download the complete 19-slide PCBC IP Engine analysis, financial velocity charts, and 3-year SME scaling horizon (PDF).
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4 bg-black">
          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
              Full Name
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="e.g. Frederick Tan"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 shadow-none text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
              Work Email
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="name@company.com"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 shadow-none text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
              Company Name
            </label>
            <input
              required
              name="company"
              type="text"
              placeholder="e.g. Enterprise Pte Ltd"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 shadow-none text-sm"
            />
          </div>

          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer text-xs text-neutral-400 leading-relaxed">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded-none bg-neutral-900 border-neutral-700 text-[#8F801B] focus:ring-0 focus:ring-offset-0 accent-[#8F801B]"
              />
              <span>
                I consent to FT Synergist collecting my details to provide strategic reports and business updates in accordance with the{" "}
                <Link href="/privacy-policy" target="_blank" className="text-[#8F801B] underline hover:text-white">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            {errorMsg && <p className="text-red-400 text-xs mt-1">{errorMsg}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white font-bold uppercase tracking-wider hover:bg-[#7a6d17] transition-all shadow-lg rounded-none disabled:opacity-70 disabled:cursor-not-allowed text-xs"
          >
            {isSubmitting ? (
              "Unlocking Report..."
            ) : (
              <>
                Download 19-Slide PDF Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>

          <p className="text-center text-xs text-neutral-500 mt-2">
            Available exclusively to Singapore Registered Businesses &amp; C-Suite Leaders.
          </p>
        </form>
      </div>
    </div>
  );
};

// --- 2. MAIN PAGE COMPONENT ---
export default function StartingScaling2027IPEnginePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.ftsynergist.com/insights/starting-scaling-2027-ip-engine#article",
        headline:
          "Starting & Scaling in 2027 Through the IP Engine: How Singapore Brands Navigate 4 Macroeconomic Shocks by Commercialising Defensible, Asset-Light Intellectual Property",
        description:
          "An empirical cross-sector case study examining how LEGO, Charles & Keith, Eu Yan Sang (S$808M exit), and Banyan Group commercialised asset-light Intellectual Property across 4 macroeconomic shocks using the FT Synergist PCBC Model.",
        image: "https://www.ftsynergist.com/report-2027-ip-engine-cover.png",
        author: {
          "@type": "Person",
          name: "Frederick Tan",
          jobTitle: "Principal Management Consultant, FT Synergist",
          identifier: "SCMC-1810-P0236",
          url: "https://www.ftsynergist.com/about",
        },
        publisher: {
          "@type": "Organization",
          name: "FT Synergist Pte. Ltd.",
          logo: {
            "@type": "ImageObject",
            url: "https://www.ftsynergist.com/logo.png",
          },
        },
        datePublished: "2026-11-05",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.ftsynergist.com/insights/starting-scaling-2027-ip-engine",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.ftsynergist.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Insights",
            item: "https://www.ftsynergist.com/insights",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Starting & Scaling in 2027 Through the IP Engine",
            item: "https://www.ftsynergist.com/insights/starting-scaling-2027-ip-engine",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.ftsynergist.com/insights/starting-scaling-2027-ip-engine#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What does an IP consultant in Singapore do beyond basic trademark or patent filing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "While patent attorneys handle statutory registration, a strategic IP consultant in Singapore—such as FT Synergist, listed on the IPOS GoBusiness IP Grow Directory for IP Strategy and IP Brokerage & Licensing—audits, values, unbundles, and commercialises your intangible assets (patents, trademarks, proprietary formulations, design systems, and franchise SOPs) into high-margin licensing, royalty, and CPG revenue streams.",
            },
          },
          {
            "@type": "Question",
            name: "How do Singapore SMEs fund IP consulting and intangible asset commercialisation in 2026–2027?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Singapore enterprises can combine two powerful government mechanisms: (1) Enterprise Singapore's unified EDGE Grant (effective 30 September 2026, replacing EDG, MRA, and PSG), which co-funds up to 50%–70% of qualifying IP strategy, brand architecture, and overseas market readiness consultancy; and (2) the IRAS Enterprise Innovation Scheme (EIS), which provides a 400% tax deduction on up to S$400,000 of qualifying IP registration costs (patents, trademarks, and registered designs) per Year of Assessment.",
            },
          },
          {
            "@type": "Question",
            name: "Why did Eu Yan Sang achieve an S$808 million exit while other Singapore heritage brands contracted?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Eu Yan Sang transformed unstandardized traditional remedies into defensible Culture and Product IP by partnering with CUHK, HKBU, and NUS for randomized controlled trials (RCTs), chemical herb fingerprinting, TGA pharmaceutical certification, and 900 standardized CPG SKUs. This codified IP engine enabled Rohto Pharmaceutical and Mitsui & Co. to acquire Eu Yan Sang at an S$808 million valuation in June 2024—a 38x return over the family's S$21 million buyback in 1993.",
            },
          },
          {
            "@type": "Question",
            name: "How does the PCBC Model help Singapore brands survive the 2026–2027 RTS Link and rental shocks?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The FT Synergist PCBC Model (Product, Channel, Brand, Culture) decouples revenue growth from domestic floor space and headcount. By unbundling high-margin Product IP (like Charles & Keith's handbag line generating ~50% of global sales), transitioning to asset-light Channel IP (like Banyan Group's 100+ managed resorts), protecting Brand IP across multi-tier portfolios, and validating Culture IP through clinical or institutional standards, Singapore SMEs turn macroeconomic shocks into expansion catalysts.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-[#8F801B]/20 w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <DownloadGate isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ScrollDwellTrigger
        onTrigger={() => setIsModalOpen(true)}
        dwellSeconds={45}
        scrollPercent={55}
        storageKey="ip_engine_2027_report_lead_prompt"
      />

      {/* 1. HERO SECTION */}
      <header className="relative pt-40 pb-20 px-6 text-center max-w-5xl mx-auto space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] text-[#8F801B] font-extrabold">
          IP Commercialisation &bull; Asset-Light Scaling &bull; PCBC Executive Report
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
          Starting &amp; Scaling in 2027 <br />
          Through the IP Engine:{" "}
          <span className="text-[#8F801B]">
            How Singapore Brands Navigate 4 Macroeconomic Shocks by Commercialising Defensible, Asset-Light Intellectual Property
          </span>
        </h1>

        <p className="text-base md:text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          Conventional business advice tells founders to <em>&quot;stay laser-focused on what you do; don&apos;t reinvent new values.&quot;</em> Yet when generational shifts, pandemics, geopolitical tariffs, and rent inflation strike simultaneously, static operators get crushed. Here is how <strong>LEGO Group</strong>, <strong>Charles &amp; Keith</strong>, <strong>Eu Yan Sang</strong>, and <strong>Banyan Group</strong> built compounding IP engines—and how Singapore SMEs can replicate their architecture under Enterprise Singapore&apos;s unified <strong>EDGE Grant</strong>.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all shadow-lg shadow-[#8F801B]/10 w-full sm:w-auto"
          >
            <Download className="mr-2 h-4 w-4" />
            Download 19-Slide Presentation PDF
          </button>
          <Link
            href="/edge-grant"
            className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 hover:text-white transition-all w-full sm:w-auto"
          >
            Check EDGE Grant Eligibility
            <ChevronRight className="ml-1 h-4 w-4 text-[#8F801B]" />
          </Link>
        </div>
      </header>

      {/* 2. MAIN CONTENT CONTAINER */}
      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-20">
        {/* EXECUTIVE SYNTHESIS & 4-BRAND VISUAL SHOWCASE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border border-neutral-800 p-8 md:p-12 bg-neutral-950/60 backdrop-blur-sm">
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">
                The &quot;Single-P&quot; Commodity Trap vs. The IP Engine
              </h2>
              <span className="text-[10px] uppercase font-bold tracking-wider bg-red-950/60 text-red-400 border border-red-800/50 px-2.5 py-1">
                2026–2027 Empirical Audit
              </span>
            </div>

            <p className="text-xl md:text-2xl font-light text-neutral-100 leading-relaxed italic">
              &quot;Is your business an asset-light IP engine, or just a high-overhead jobbing shop?&quot;
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed">
              In July 2026, a sobering market investigation documented the sharp contraction of celebrated Singapore F&amp;B icons across China: <strong>BreadTalk</strong> shrank from 460 China outlets to roughly 200 and exited Beijing entirely; <strong>Jumbo Seafood&apos;s</strong> China revenue fell <strong>27.6%</strong> (from S$26.1 million to S$18.3 million); and <strong>Song Fa Bak Kut Teh</strong> contracted to a single store in Shanghai.<sup>[6]</sup>
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed">
              For two decades, a generic &quot;Singapore quality halo&quot; was enough to command prime mall space abroad. Today, that halo is mere background information. The brands that compounded enterprise value across crises did so by unbundling their core know-how into defensible <strong>Product, Channel, Brand, and Culture (PCBC)</strong> intellectual property.
            </p>
          </div>

          {/* Right: 2x2 Brand Visual Grid matching Slide 1 */}
          <div className="lg:col-span-5 bg-white p-4 border-t-4 border-red-600 shadow-2xl">
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-gray-200 bg-white flex flex-col">
                <div className="relative h-32 w-full bg-white p-2">
                  <Image
                    src="/insights/ip-engine-2027/lego-system-ip.jpg"
                    alt="LEGO Group System IP"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <span className="bg-gray-50 border-t border-gray-200 py-1.5 text-center text-[11px] font-bold tracking-wider text-gray-800 uppercase">
                  LEGO Group
                </span>
              </div>

              <div className="border border-gray-200 bg-white flex flex-col">
                <div className="relative h-32 w-full bg-white p-2">
                  <Image
                    src="/insights/ip-engine-2027/charles-and-keith-design-ip.webp"
                    alt="Charles & Keith Footwear and Handbag Design IP"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <span className="bg-gray-50 border-t border-gray-200 py-1.5 text-center text-[11px] font-bold tracking-wider text-gray-800 uppercase">
                  Charles &amp; Keith
                </span>
              </div>

              <div className="border border-gray-200 bg-white flex flex-col">
                <div className="relative h-32 w-full bg-white p-2">
                  <Image
                    src="/insights/ip-engine-2027/eys-logo.png"
                    alt="Eu Yan Sang Singapore Clinical TCM IP"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <span className="bg-gray-50 border-t border-gray-200 py-1.5 text-center text-[11px] font-bold tracking-wider text-gray-800 uppercase">
                  Eu Yan Sang
                </span>
              </div>

              <div className="border border-gray-200 bg-white flex flex-col">
                <div className="relative h-32 w-full bg-white p-2">
                  <Image
                    src="/insights/ip-engine-2027/banyan-tree-logo.png"
                    alt="Banyan Tree Hotels & Resorts Asset-Light Brand IP"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <span className="bg-gray-50 border-t border-gray-200 py-1.5 text-center text-[11px] font-bold tracking-wider text-gray-800 uppercase">
                  Banyan Group
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MACRO METRIC SNAPSHOT GRID */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-neutral-950 border border-neutral-800 text-center">
            <span className="block text-3xl md:text-4xl font-extrabold text-[#8F801B] mb-1">~50%</span>
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
              C&amp;K Revenue from Handbag IP
            </span>
          </div>
          <div className="p-6 bg-neutral-950 border border-neutral-800 text-center">
            <span className="block text-3xl md:text-4xl font-extrabold text-white mb-1">S$808M</span>
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
              Eu Yan Sang Exit (38x Return)
            </span>
          </div>
          <div className="p-6 bg-neutral-950 border border-neutral-800 text-center">
            <span className="block text-3xl md:text-4xl font-extrabold text-emerald-400 mb-1">S$172.6M</span>
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
              Banyan 1H26 Residences (+38%)
            </span>
          </div>
          <div className="p-6 bg-neutral-950 border border-neutral-800 text-center">
            <span className="block text-3xl md:text-4xl font-extrabold text-[#8F801B] mb-1">50%–70%</span>
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
              Unified EDGE Grant Support
            </span>
          </div>
        </section>

        {/* 3B. THE 4 MACROECONOMIC SHOCKS OF 2026–2027 */}
        <section className="space-y-6">
          <div className="space-y-2 text-left">
            <span className="text-xs uppercase tracking-widest text-red-400 font-bold">
              2026–2027 Structural Headwinds
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              The 4 Macroeconomic Shocks Compressing Asset-Heavy Singapore Operators
            </h2>
            <p className="text-neutral-400 text-sm md:text-base">
              Why engaging a strategic{" "}
              <Link href="/ip-consultant" className="text-[#8F801B] underline hover:text-white">
                IP consultant in Singapore
              </Link>{" "}
              is no longer a legal formality, but a balance-sheet survival imperative for 2027:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-neutral-950 border border-neutral-800 border-l-4 border-l-red-600 space-y-2 text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                Shock 01 &bull; Cross-Border Price Arbitrage
              </span>
              <h3 className="text-lg font-bold text-white">
                The Johor-Singapore RTS Link (10,000 Pax/Hour)
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                With cross-border rail capacity reaching 10,000 passengers per hour per direction and a 3.3x MYR purchasing-power differential, undifferentiated Singapore retail, F&amp;B, and wellness services face up to S$2.1 billion in annual domestic consumer leakage unless protected by proprietary brand and product IP.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 border-l-4 border-l-red-600 space-y-2 text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                Shock 02 &bull; Commercial Real Estate Compression
              </span>
              <h3 className="text-lg font-bold text-white">
                34.4% Occupancy Cost Ratio &amp; 12.1% F&amp;B Lease Churn
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Suburban and prime REIT rental reversions have pushed total occupancy costs to 34.4% of gross turnover for traditional operators. Relying on physical square footage without high-margin CPG, e-commerce, or licensing revenue turns landlords into the primary beneficiary of your enterprise effort.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 border-l-4 border-l-[#8F801B] space-y-2 text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F801B]">
                Shock 03 &bull; Labor Quota &amp; Levy Tightening
              </span>
              <h3 className="text-lg font-bold text-white">
                S-Pass / Work Permit Dependency Ceilings
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Progressive Wage Model (PWM) adjustments and foreign workforce quota ratios prevent linear headcount scaling. Only codified Standard Operating Procedures (SOPs), central kitchen/GMP automation, and{" "}
                <Link href="/franchise-consultant" className="text-[#8F801B] underline hover:text-white">
                  asset-light franchise licensing
                </Link>{" "}
                decouple revenue growth from domestic payroll.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 border-l-4 border-l-[#8F801B] space-y-2 text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F801B]">
                Shock 04 &bull; Generative AI &amp; Digital Commoditisation
              </span>
              <h3 className="text-lg font-bold text-white">
                Erosion of Unprotected Service Workflows
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Generic agency, design, and operational services face rapid price compression from enterprise AI. Competitive advantage accrues to companies that own registered trademarks, patents, clinical trial datasets, and proprietary{" "}
                <Link href="/ai-digitalisation" className="text-[#8F801B] underline hover:text-white">
                  AI-enabled domain workflows
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* 4. THE PCBC IP ENGINE ARCHITECTURE (4 PILLARS) */}
        <section className="space-y-16">
          <div className="text-left space-y-2 border-b border-neutral-800 pb-6">
            <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">
              Proprietary FT Synergist Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              The PCBC IP Engine: 4 Vectors of Crisis-Proof Scaling
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-3xl">
              Maintaining consistency with our global expansion advisory frameworks, the <strong>PCBC Model (Product, Channel, Brand, Culture)</strong> diagnoses how top-performing enterprises convert operational capabilities into high-multiple intellectual property.
            </p>
          </div>

          {/* PILLAR 1: PRODUCT IP */}
          <div className="space-y-6 border-l-2 border-[#8F801B] pl-6 md:pl-8 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold flex items-center gap-2">
                <Layers className="w-4 h-4" /> Vector 01 &bull; Product IP
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                The &quot;Format Unbundling&quot; Matrix: Commercialising New IP Categories
              </h3>
            </div>

            <p className="text-neutral-300 leading-relaxed text-base">
              In 1996, brothers Charles and Keith Wong realized that buying wholesale shoes from Malaysia and China to resell at their Ang Mo Kio shop offered zero pricing power or differentiation. With less than S$50,000 in renovation capital and supplier credit, they opened their first in-house design boutique at Amara Shopping Centre.<sup>[1]</sup>
            </p>

            <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
              More importantly, they did not remain trapped in footwear. In 2005, observing Middle Eastern women in Dubai who wore traditional abayas and used bags and shoes as their primary expression of personal style, Charles &amp; Keith commercialised <strong>Handbag IP</strong>. Because handbags require no shoe-sizing inventory depth (`EU 35–41`), the category unlocked superior working-capital velocity and now generates <strong>approximately 50% of Charles &amp; Keith&apos;s global revenue</strong> across 600+ stores.<sup>[1]</sup>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 bg-neutral-950 border border-neutral-800">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">
                  Eu Yan Sang &amp; LEGO Format Evolution
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed m-0">
                  <strong>Eu Yan Sang</strong> unbundled bitter raw herbs requiring three hours of boiling into <strong>900 standardized CPG SKUs</strong> (capsules, teabags, bottled bird&apos;s nest).<sup>[4]</sup> Similarly, when <strong>LEGO Group&apos;s</strong> original plastic brick patent expired, it unbundled its system of play into <em>Mindstorms</em> robotics, video games, and Warner Bros&apos; <em>The LEGO Movie</em> ($468M global box office).
                </p>
              </div>
              <div className="p-6 bg-neutral-950 border border-neutral-800">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">
                  Banyan Group Branded Residences IP
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed m-0">
                  Rather than relying solely on nightly hotel occupancy, <strong>Banyan Group</strong> unbundled its sanctuary architectural and wellness IP into <strong>Branded Residences</strong>—generating <strong>S$172.6 million in sales in 1H2026 alone (+38% YoY)</strong>.<sup>[5]</sup> As Charles Wong summarized his product philosophy: <em>&quot;We like the Apple model — of lesser designs for the whole world.&quot;</em><sup>[1]</sup>
                </p>
              </div>
            </div>
          </div>

          {/* PILLAR 2: CHANNEL IP (WITH MANDAI RAINFOREST RESORT PHOTO & ANTARA CITATION) */}
          <div className="space-y-6 border-l-2 border-[#8F801B] pl-6 md:pl-8 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold flex items-center gap-2">
                <Globe2 className="w-4 h-4" /> Vector 02 &bull; Channel IP
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Asset-Light Decoupling &amp; Counter-Cyclical Crisis Arbitrage
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                  Historically, hospitality and retail expansion required massive balance-sheet debt to purchase land and fund store buildouts. Over the past decade, <strong>Banyan Group</strong> actively divested heavy real estate assets in China and Seychelles while retaining 20-to-30-year hotel management and brand licensing contracts—scaling past <strong>100 resorts globally</strong> (celebrating its landmark 100th property at <strong>Mandai Rainforest Resort by Banyan Tree</strong> in Singapore) with over 140 properties in its pipeline.<sup>[2, 5]</sup>
                </p>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Similarly, <strong>Charles &amp; Keith</strong> used macroeconomic crises as an entry catalyst: signing its S$20,000/month Causeway Point lease during the <strong>1997 Asian Financial Crisis</strong> (generating S$100,000 in month-one sales against a S$60,000 target), entering Indonesia in 1998 (43 stores today), partnering with Dubai&apos;s <strong>Apparel Group</strong> during the 2003 Iraq War to open <strong>over 70 Middle East stores</strong> (with 115 more planned over the next five years), and launching its own e-commerce platform in <strong>2004</strong> before entering China during the <strong>2008 Global Financial Crisis</strong>.<sup>[1]</sup>
                </p>
              </div>

              <div className="lg:col-span-5 space-y-2">
                <div className="relative h-[260px] w-full border border-neutral-800 bg-neutral-900 overflow-hidden">
                  <Image
                    src="/insights/ip-engine-2027/banyan-mandai-100th-resort.webp"
                    alt="Mandai Rainforest Resort by Banyan Tree — 100th Global Resort Milestone in Singapore"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-neutral-950 p-3 border-t-2 border-red-600">
                    <strong className="block text-xs text-white">
                      Mandai Rainforest Resort by Banyan Tree (100th Resort Milestone)
                    </strong>
                    <span className="text-[11px] text-neutral-400">
                      100+ Global Resorts &bull; 10 Asset-Light Brands &bull; &gt;140 Pipeline
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-500 leading-snug">
                  Source:{" "}
                  <a
                    href="https://en.antaranews.com/news/388969/banyan-group-celebrates-grand-opening-of-100th-resort-and-singapore-homecoming"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8F801B] underline hover:text-white"
                  >
                    Antara News — &quot;Banyan Group celebrates grand opening of 100th resort and Singapore homecoming&quot;
                  </a>
                  <sup>[2]</sup>
                </p>
              </div>
            </div>
          </div>

          {/* PILLAR 3: BRAND IP */}
          <div className="space-y-6 border-l-2 border-[#8F801B] pl-6 md:pl-8 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold flex items-center gap-2">
                <Award className="w-4 h-4" /> Vector 03 &bull; Brand IP
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Multi-Tier Portfolio Architecture &amp; Zero-Discounting Price Integrity
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-3">
                <span className="text-xs font-bold uppercase text-[#8F801B]">
                  Banyan Group&apos;s 10-Brand Ecosystem
                </span>
                <h4 className="text-white font-bold text-base">
                  Preventing Flagship Dilution Across Price Tiers
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed m-0">
                  When global hotel occupancy dropped from 90% to 0% during COVID-19 in 2020, Executive Chairman Ho Kwon Ping took a 100% pay cut and held transparent town halls, but <strong>strictly refused to panic-discount Banyan Tree room rates</strong> into mass-market territory. Instead, the group segmented demand across <strong>10 distinct brands</strong>—Ultra-Luxury (<em>Banyan Tree, Veya</em>), Upscale (<em>Angsana, Dhawa</em>), and Midtier Extended-Stay (<em>Cassia, Homm</em>)—preserving flagship pricing power for its 2025–2026 earnings surge.<sup>[5]</sup>
                </p>
              </div>

              <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-3">
                <span className="text-xs font-bold uppercase text-[#8F801B]">
                  Charles &amp; Keith&apos;s Global Fashion Legitimacy
                </span>
                <h4 className="text-white font-bold text-base">
                  LVMH Strategic Validation &amp; Met Gala Badging
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed m-0">
                  In 2011, Charles &amp; Keith sold a 20% stake to <strong>L Capital Asia (LVMH&apos;s private equity arm)</strong>. As Apparel Group CEO Neeraj Teckchandani noted, the LVMH stamp gave global mall landlords instant confidence before the Wong brothers <strong>bought back 100% control in 2016</strong>.<sup>[1]</sup> By May 2025, custom Charles &amp; Keith pieces debuted on the <strong>Met Gala red carpet</strong> worn by Shakira and Nicole Scherzinger alongside indie designer collaborations (Cecilie Bahnsen, Shushu/Tong).<sup>[1]</sup>
                </p>
              </div>
            </div>
          </div>

          {/* PILLAR 4: CULTURE IP (WITH EU YAN SANG PHOTO & INSIDE RETAIL CITATION) */}
          <div className="space-y-6 border-l-2 border-[#8F801B] pl-6 md:pl-8 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold flex items-center gap-2">
                <FlaskConical className="w-4 h-4" /> Vector 04 &bull; Culture IP
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Scientific Validation as Moat: The S$21M to S$808M Eu Yan Sang Buyback
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-2">
                <div className="relative h-[250px] w-full border border-neutral-800 bg-neutral-900 overflow-hidden">
                  <Image
                    src="/insights/ip-engine-2027/eu-yan-sang-heritage.jpg"
                    alt="Eu Yan Sang Heritage Dispensary and Scientific Standardization"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <p className="text-[11px] text-neutral-500 leading-snug">
                  Source:{" "}
                  <a
                    href="https://insideretail.asia/2018/10/15/eu-yan-sang-turns-back-to-its-heritage-roots/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8F801B] underline hover:text-white"
                  >
                    Inside Retail Asia — &quot;Eu Yan Sang turns back to its heritage roots&quot;
                  </a>
                  <sup>[3]</sup>
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                  Following the 1941 death of founder Eu Kong&apos;s son Eu Tong Sen, the Eu Yan Sang estate was divided among 13 sons from 11 wives—leading to 50 years of family fragmentation. On 29 March 1990, property developer Lum Chang acquired majority control to strip the company&apos;s real estate shell. Three years later, fourth-generation heir <strong>Richard Eu</strong> teamed up with cousins Robert and Clifford to execute a <strong>S$21 million leveraged buyback</strong>.<sup>[4]</sup>
                </p>
                <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                  Recognizing that <em>&quot;the problem wasn&apos;t TCM itself, but how it was presented,&quot;</em> Richard Eu partnered with <strong>The Chinese University of Hong Kong (CUHK), Hong Kong Baptist University, and NUS</strong> to subject century-old remedies like <em>Bak Foong Pills</em> to <strong>randomized controlled trials (RCTs)</strong>, chemical herb fingerprinting, Australian <strong>TGA pharmaceutical compliance</strong>, and <strong>EYSGAP-Herbs</strong> farm protocols.<sup>[3, 4]</sup>
                </p>
                <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                  By building an integrated network of 170+ retail stores, 30 TCM clinics, and a HK$110 million GMP factory generating S$297 million in FY2023 revenue, Eu Yan Sang became an institutional asset that <strong>Rohto Pharmaceutical (~60%) and Mitsui &amp; Co. (~30%) acquired for S$808 million in June 2024—a 38-fold return on the 1993 buyback price</strong>.<sup>[4]</sup>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. QUANTITATIVE VALIDATION TABLE */}
        <section className="space-y-6">
          <div className="space-y-2 text-left">
            <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">
              Valuation Benchmarking
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Legacy Commodity Operator vs. The PCBC Scaled IP Engine
            </h2>
            <p className="text-neutral-400 text-sm">
              Why institutional acquirers (Rohto-Mitsui, LVMH L Capital, Tower Capital/Temasek) pay 15x–38x multiples for codified IP platforms while commodity operators trade at 3x–5x EBITDA.
            </p>
          </div>

          <div className="overflow-x-auto border border-neutral-800">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-neutral-900 text-[#8F801B] uppercase tracking-wider font-bold border-b border-neutral-800">
                <tr>
                  <th className="p-4">Enterprise Vector</th>
                  <th className="p-4">Legacy Commodity Operator (The 95% Trap)</th>
                  <th className="p-4">The PCBC Scaled IP Engine (Top 5%)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900 bg-neutral-950/60 text-neutral-300">
                <tr>
                  <td className="p-4 font-semibold text-white">Primary Revenue Unit</td>
                  <td className="p-4">Manual labor hours; physical store or table turnover</td>
                  <td className="p-4 text-white font-semibold">
                    Standardized CPG (900 SKUs), Handbag/Design IP, Branded Residences &amp; Royalties
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Gross Margin Profile</td>
                  <td className="p-4 text-red-400">30% – 45% (Compressed by landlord rent &amp; wage inflation)</td>
                  <td className="p-4 text-emerald-400 font-bold">
                    65% – 85% (Near-zero marginal cost of IP replication)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Balance Sheet Exposure</td>
                  <td className="p-4">Heavy commercial security deposits, kitchen &amp; resort capex</td>
                  <td className="p-4">
                    Asset-light; third-party developers &amp; master franchisees fund 100% of buildout
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Market Trust Mechanism</td>
                  <td className="p-4">Fading &quot;Singapore quality halo&quot; or unverified claims</td>
                  <td className="p-4">
                    University Clinical RCTs (CUHK/NUS), TGA/GMP standards &amp; LVMH/Met Gala badging
                  </td>
                </tr>
                <tr className="bg-neutral-900/80">
                  <td className="p-4 font-bold text-white uppercase">Valuation Exit Multiple</td>
                  <td className="p-4 text-red-400 font-bold">3x – 6x EBITDA (Or stripped for real estate shell)</td>
                  <td className="p-4 text-[#8F801B] font-extrabold">
                    15x – 38x Valuation Multiple (e.g. Eu Yan Sang S$21M &rarr; S$808M Exit)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. 3-YEAR STRATEGIC HORIZON & ENTERPRISESG GRANT ALIGNMENT */}
        <section className="space-y-6 text-left border-l-2 border-[#8F801B] pl-6 md:pl-8">
          <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">
            3-Year Upward Growth Trajectory
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            The ASEAN SME Execution Roadmap &amp; Unified EDGE Grant Co-Funding
          </h2>

          <p className="text-neutral-300 leading-relaxed text-base">
            Singapore SMEs can co-fund up to <strong>50%–70% of qualifying consultancy expenses</strong> under the{" "}
            <strong>
              <Link href="/edg-grant" className="text-[#8F801B] underline hover:text-white">
                Enterprise Development Grant (EDG)
              </Link>
            </strong>
            ,{" "}
            <strong>
              <Link href="/mra-grant" className="text-[#8F801B] underline hover:text-white">
                Market Readiness Assistance (MRA)
              </Link>
            </strong>
            , and—effective <strong>30 September 2026</strong>—Enterprise Singapore&apos;s unified{" "}
            <strong>
              <Link href="/edge-grant" className="text-[#8F801B] underline hover:text-white">
                EDGE Grant
              </Link>
            </strong>{" "}
            across a structured three-phase trajectory:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 bg-neutral-950 border border-neutral-800 border-t-4 border-t-[#8F801B]">
              <span className="text-xs font-bold uppercase text-[#8F801B]">
                Phase 1 &bull; Months 1–12
              </span>
              <h4 className="text-white font-bold text-base my-2">Year 1: IP Foundation</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Engage a certified{" "}
                <Link href="/ip-consultant" className="text-[#8F801B] underline hover:text-white">
                  IP consultant in Singapore
                </Link>{" "}
                to conduct an Intangible Asset (IA) audit, isolate your timeless core formula, and file pre-emptive Madrid Protocol trademarks across target ASEAN and global nodes.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 border-t-4 border-t-[#8F801B]">
              <span className="text-xs font-bold uppercase text-[#8F801B]">
                Phase 2 &bull; Months 13–24
              </span>
              <h4 className="text-white font-bold text-base my-2">Year 2: Format Unbundling</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Partner with a{" "}
                <Link
                  href="/strategic-brand-marketing-development"
                  className="text-[#8F801B] underline hover:text-white"
                >
                  brand consultant in Singapore
                </Link>{" "}
                and{" "}
                <Link href="/franchise-consultant" className="text-[#8F801B] underline hover:text-white">
                  franchise consultant
                </Link>{" "}
                to commercialise high-margin CPG, SaaS, or Handbag-style unbundled categories, codify Master Franchise SOP manuals, and secure university/ISO validation.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 border-t-4 border-t-red-600">
              <span className="text-xs font-bold uppercase text-red-400">
                Phase 3 &bull; Year 3+ Multiply
              </span>
              <h4 className="text-white font-bold text-base my-2">Year 3+: Platform Scale (15x–38x)</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Scale asset-light management, licensing, and master franchise contracts regionally—re-rating enterprise valuation from a 3x–5x service multiple to a <strong>15x–38x IP platform multiple</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* 6B. 2027 IP CONSULTING SINGAPORE FUNDING & TAX ARCHITECTURE */}
        <section className="space-y-6 border border-neutral-800 bg-neutral-950/80 p-8 md:p-10 text-left">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">
              IP Consulting Singapore &bull; Sovereign Co-Funding &amp; Tax Incentives
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              The 2027 Funding Stack: Unified EDGE Grant + IRAS EIS 400% IP Tax Deduction
            </h2>
            <p className="text-neutral-400 text-sm md:text-base">
              Singapore provides the most capital-efficient jurisdiction in Asia to build, protect, and commercialise intellectual property. By working with an{" "}
              <Link href="/ip-consultant" className="text-[#8F801B] underline hover:text-white">
                IPOS GoBusiness IP Grow recognized IP consultant in Singapore
              </Link>
              , enterprises can stack non-dilutive grant support with enhanced tax deductions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-black border border-neutral-800 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F801B]">
                01 &bull; Enterprise Singapore (30 Sep 2026)
              </span>
              <h3 className="text-lg font-bold text-white">
                Unified EDGE Grant (Up to 50%–70%)
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Consolidating legacy EDG, MRA, and PSG schemes, the{" "}
                <Link href="/edge-grant" className="text-[#8F801B] underline hover:text-white">
                  EDGE Grant
                </Link>{" "}
                co-funds strategic IP commercialisation, brand portfolio architecture, franchise SOP codification, and international market entry with TR 43 / Certified Management Consultant governance.
              </p>
            </div>

            <div className="p-6 bg-black border border-neutral-800 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F801B]">
                02 &bull; IRAS Enterprise Innovation Scheme
              </span>
              <h3 className="text-lg font-bold text-white">
                EIS 400% Tax Deduction on IP Registration
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Claim a <strong>400% tax deduction</strong> on up to <strong>S$400,000</strong> of qualifying IP registration expenditure (patents, trademarks, and registered designs) per Year of Assessment—or opt for a non-taxable cash payout of up to S$20,000 (20% conversion on up to S$100,000 of qualifying spend).
              </p>
            </div>

            <div className="p-6 bg-black border border-neutral-800 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8F801B]">
                03 &bull; IPOS GoBusiness IP Grow Directory
              </span>
              <h3 className="text-lg font-bold text-white">
                IP Strategy, Valuation &amp; Licensing Advisory
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                FT Synergist is listed on the official <strong>IPOS GoBusiness IP Grow Directory</strong> for both <em>IP Strategy</em> and <em>IP Brokerage &amp; Licensing</em>—bridging the gap between statutory trademark/patent filings and commercial royalty monetization.
              </p>
            </div>
          </div>
        </section>

        {/* 6C. EXECUTIVE FAQ FOR IP CONSULTING SINGAPORE */}
        <section className="space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">
              Executive Q&amp;A
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Frequently Asked Questions: IP Consulting &amp; Intangible Asset Strategy in Singapore
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2">
              <h3 className="text-base font-bold text-white">
                1. What does an IP consultant in Singapore do beyond basic trademark or patent filing?
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed m-0">
                While patent agents and trademark attorneys handle statutory registration, a strategic{" "}
                <Link href="/ip-consultant" className="text-[#8F801B] underline hover:text-white">
                  IP consultant in Singapore
                </Link>{" "}
                —such as FT Synergist, listed on the IPOS GoBusiness IP Grow Directory for <strong>IP Strategy</strong> and <strong>IP Brokerage &amp; Licensing</strong>—audits, values, unbundles, and commercialises your intangible assets (patents, trademarks, proprietary formulations, design systems, and franchise SOPs) into high-margin licensing, royalty, and CPG revenue streams.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2">
              <h3 className="text-base font-bold text-white">
                2. How do Singapore SMEs fund IP consulting and intangible asset commercialisation in 2026–2027?
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed m-0">
                Singapore enterprises can combine two sovereign mechanisms: (1) Enterprise Singapore&apos;s unified{" "}
                <Link href="/edge-grant" className="text-[#8F801B] underline hover:text-white">
                  EDGE Grant
                </Link>{" "}
                (effective 30 September 2026, replacing{" "}
                <Link href="/edg-grant" className="text-[#8F801B] underline hover:text-white">
                  EDG
                </Link>
                ,{" "}
                <Link href="/mra-grant" className="text-[#8F801B] underline hover:text-white">
                  MRA
                </Link>
                , and PSG), which co-funds up to 50%–70% of qualifying IP strategy,{" "}
                <Link
                  href="/strategic-brand-marketing-development"
                  className="text-[#8F801B] underline hover:text-white"
                >
                  strategic brand architecture
                </Link>
                , and overseas market readiness consultancy; and (2) the IRAS Enterprise Innovation Scheme (EIS), which provides a 400% tax deduction on up to S$400,000 of qualifying patent, trademark, and design registration costs per Year of Assessment.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2">
              <h3 className="text-base font-bold text-white">
                3. Why did Eu Yan Sang achieve an S$808 million exit while other Singapore heritage brands contracted?
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed m-0">
                Eu Yan Sang transformed unstandardized traditional remedies into defensible Culture and Product IP by partnering with CUHK, HKBU, and NUS for randomized controlled trials (RCTs), chemical herb fingerprinting, Australian TGA pharmaceutical certification, and 900 standardized CPG SKUs. This codified IP engine enabled Rohto Pharmaceutical and Mitsui &amp; Co. to acquire Eu Yan Sang at an S$808 million valuation in June 2024—a 38x return over the family&apos;s S$21 million buyback in 1993.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2">
              <h3 className="text-base font-bold text-white">
                4. How does the PCBC Model help Singapore brands survive the 2026–2027 RTS Link and rental shocks?
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed m-0">
                The FT Synergist PCBC Model (Product, Channel, Brand, Culture) decouples revenue growth from domestic floor space and headcount. By unbundling high-margin Product IP (like Charles &amp; Keith&apos;s handbag line generating ~50% of global sales), transitioning to asset-light Channel IP (like Banyan Group&apos;s 100+ managed resorts), protecting Brand IP across multi-tier portfolios, and validating Culture IP through clinical or institutional standards, Singapore SMEs turn macroeconomic shocks into expansion catalysts.
              </p>
            </div>
          </div>
        </section>

        {/* 7. VERIFIED CITATIONS & FOOTNOTES */}
        <CitationFootnotes citations={ipEngineCitations} />

        {/* 8. HIGH-INTENSITY CONVERSION MAGNET */}
        <section className="py-16 bg-neutral-950 border border-neutral-900 text-center space-y-6 max-w-4xl mx-auto">
          <Lock className="w-8 h-8 text-[#8F801B] mx-auto" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Download the Complete 19-Slide Executive Presentation Deck
          </h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed">
            Access the full widescreen presentation PDF including the Format Unbundling Matrix, the S$808M Valuation Flywheel, Banyan Group&apos;s Asset-Light Velocity Graph, and the 3-Year Upward Growth Trajectory.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-10 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all shadow-lg shadow-[#8F801B]/20"
            >
              Download Full 19-Slide PDF Report
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <p className="text-[10px] text-neutral-600 tracking-wide uppercase pt-4">
            Prepared by Frederick Tan, Principal Management Consultant (SCMC-1810-P0236) &bull; Inquiries:{" "}
            <a href="mailto:fredtan@ftsynergist.com" className="text-[#8F801B] underline">
              fredtan@ftsynergist.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
