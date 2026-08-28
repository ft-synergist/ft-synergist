"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft, ArrowRight, Award, CheckCircle2, Globe2, Sparkles, TrendingUp, ShieldCheck, FileText, Calendar, Building, Zap, ChevronRight } from "lucide-react";
import CitationFootnotes, { CitationItem } from "@/app/components/CitationFootnotes";

const ipWeekCitations: CitationItem[] = [
  {
    id: 1,
    label: "Intellectual Property Office of Singapore (IPOS) — IP Week 2026",
    context: "IP Marketplace Programme & Showcase: 'Unlocking Intangible Assets: How SMEs can Leverage IP to Accelerate Business Growth' presented by IP Grow.",
    url: "https://www.ipweek2026.sg/ipmp-programme.html"
  },
  {
    id: 2,
    label: "GoBusiness Singapore — IP Grow Service Provider Directory",
    context: "FT Synergist Pte Ltd listed under IA/IP Services (Branding Strategy, Innovation Consultancy, IP Brokerage & Licensing, IP Strategy Consulting).",
    url: "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd#ia-ip-services"
  },
  {
    id: 3,
    label: "Enterprise Singapore (EnterpriseSG) — Core Capabilities Support",
    context: "Co-funding frameworks for strategic business scaling, intangible asset unbundling, and market readiness evaluation for homegrown Singapore brands.",
    url: "https://www.enterprisesg.gov.sg"
  }
];

export default function PetaleTeaIPCaseStudy() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.ftsynergist.com/insights/petale-tea-ip-growth-case-study#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://www.ftsynergist.com/insights/petale-tea-ip-growth-case-study"
        },
        "headline": "Unlocking Intangible Assets: How to Leverage Your IP to Grow Your Business by 400%",
        "description": "The definitive case study of Pétale Tea presented at IPOS IP Week 2026 by Frederick Tan (FT Synergist) and Rosemary Kwa (Pétale Tea), demonstrating how strategic branding, predictive AI, and asset-light licensing unlocked 400% growth.",
        "image": "https://www.ftsynergist.com/insights/ipos-ip-week-2026/frederick-tan-rosemary-kwa-ip-week-panel.jpg",
        "datePublished": "2026-08-27T09:00:00+08:00",
        "dateModified": "2026-08-28T15:00:00+08:00",
        "author": {
          "@type": "Person",
          "name": "Frederick Tan",
          "jobTitle": "Principal Consultant & Certified Management Consultant (SCMC)",
          "worksFor": {
            "@type": "Organization",
            "name": "FT Synergist Pte Ltd",
            "url": "https://www.ftsynergist.com"
          },
          "sameAs": [
            "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd#ia-ip-services",
            "https://www.linkedin.com/in/frederick-tan-scmc/"
          ]
        },
        "publisher": {
          "@type": "Organization",
          "name": "FT Synergist Pte Ltd",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.ftsynergist.com/brand/FT_Synergist_Logo.jpeg"
          }
        },
        "about": [
          {
            "@type": "Event",
            "name": "IPOS IP Week 2026 - IP Marketplace",
            "startDate": "2026-08-26",
            "endDate": "2026-08-27",
            "location": {
              "@type": "Place",
              "name": "Marina Bay Sands Expo & Convention Centre, Singapore"
            },
            "organizer": {
              "@type": "GovernmentOrganization",
              "name": "Intellectual Property Office of Singapore (IPOS)",
              "url": "https://www.ipos.gov.sg"
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.ftsynergist.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Insights",
            "item": "https://www.ftsynergist.com/insights"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Pétale Tea IP & IA Case Study",
            "item": "https://www.ftsynergist.com/insights/petale-tea-ip-growth-case-study"
          }
        ]
      }
    ]
  };

  const phases = [
    {
      step: 1,
      tag: "Phase 1: Asset Unbundling",
      title: "Unbundling Hidden Intangible Assets (IA) from Physical Commodities",
      summary: "How Pétale Tea shifted from selling loose tea leaves by weight to treating blooming craftsmanship, visual storytelling, and proprietary blending recipes as high-margin Intangible Assets.",
      detail: (
        <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
          <p>
            In traditional retail, tea is commoditized and priced by physical weight, creating a low-margin race to the bottom. During Phase 1 of the consultancy engagement, <strong>FT Synergist worked with Rosemary Kwa</strong> to unbundle the physical tea leaf from its high-value <em>Intangible Asset (IA) portfolio</em>.
          </p>
          <div className="p-4 bg-neutral-900 border-l-4 border-[#8F801B] my-4">
            <p className="italic text-gray-200 text-sm">
              &ldquo;In tea rooms, I learned that tea is never just a drink—it’s a sensory experience. If we had just sold loose tea leaves by weight, we would have been trapped in a commodity race. We realized our true IP wasn’t the physical leaf; it was the visual spectacle—watching delicate flowers unfurl slowly in warm water to create a &apos;moment of pause&apos;. By unbundling that artistic craftsmanship, visual storytelling, and proprietary blending recipes into a distinct IA portfolio, we transformed an ancient commodity into an experiential wellness brand.&rdquo;
            </p>
            <span className="block mt-2 text-xs text-[#c4b340] font-semibold">— Rosemary Kwa, Founder of Pétale Tea (at IPOS IP Week 2026)</span>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li><strong>Sensory & Visual IP:</strong> Trademarking and protecting distinctive blooming flower tea assemblies and branded visual presentation.</li>
            <li><strong>Proprietary Blending Formulas:</strong> Cataloging recipes as protected trade secrets to prevent imitation.</li>
            <li><strong>Experiential Packaging Architecture:</strong> Shifting customer willingness-to-pay from functional refreshment to mindful ritual and premium luxury gifting.</li>
          </ul>
        </div>
      )
    },
    {
      step: 2,
      tag: "Phase 2: Blue-Chip ESG Door-Opener",
      title: "Zero-Waste Sustainability as a Commercial Door-Opener for Global Blue-Chips",
      summary: "Productizing a zero-waste, 100% loose-leaf blooming tea portfolio to fulfill strict ESG gifting mandates for Google, Meta, Tiffany & Co., Capella Hotel, and Singapore Airlines.",
      detail: (
        <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
          <p>
            Rather than treating sustainability as an overhead or regulatory burden, FT Synergist positioned zero-waste product architecture as Pétale Tea’s primary business development engine.
          </p>
          <div className="p-4 bg-neutral-900 border-l-4 border-[#8F801B] my-4">
            <p className="italic text-gray-200 text-sm">
              &ldquo;Multinational corporations and premier lifestyle hubs want elevated gifting that fulfills strict ESG mandates. Traditional tea bags generate immense plastic micro-waste and packaging trash. We productized a green, zero-waste IA portfolio—100% loose-leaf, blooming teas completely free of tea bags, housed in eco-friendly packaging, and paired with interactive workshops. When you show global brands that your product delivers a luxury experience while actively reducing their carbon footprint, sustainability stops being a compliance cost and becomes your ultimate commercial door-opener.&rdquo;
            </p>
            <span className="block mt-2 text-xs text-[#c4b340] font-semibold">— Rosemary Kwa, Founder of Pétale Tea</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            <div className="bg-black/60 p-3 border border-neutral-800 text-center rounded">
              <span className="block text-xs text-[#8F801B] font-bold">Tech Blue-Chips</span>
              <span className="text-sm font-semibold text-white">Google & Meta</span>
            </div>
            <div className="bg-black/60 p-3 border border-neutral-800 text-center rounded">
              <span className="block text-xs text-[#8F801B] font-bold">Ultra Luxury</span>
              <span className="text-sm font-semibold text-white">Tiffany & Co.</span>
            </div>
            <div className="bg-black/60 p-3 border border-neutral-800 text-center rounded">
              <span className="block text-xs text-[#8F801B] font-bold">Hospitality</span>
              <span className="text-sm font-semibold text-white">Capella Hotel</span>
            </div>
            <div className="bg-black/60 p-3 border border-neutral-800 text-center rounded">
              <span className="block text-xs text-[#8F801B] font-bold">National Flagship</span>
              <span className="text-sm font-semibold text-white">Singapore Airlines</span>
            </div>
          </div>
        </div>
      )
    },
    {
      step: 3,
      tag: "Phase 3: AI Hyper-Personalization",
      title: "Building the AI 'Blend Your Own' (BYO) Recommendation Engine",
      summary: "Backed by Enterprise Singapore (50% co-funded Project Scaling Up), FT Synergist guided the development of a predictive AI algorithm that converts mood, wellness goals, and taste into custom formulations.",
      detail: (
        <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
          <p>
            Through rigorous quantitative and qualitative market research during the <strong>Enterprise Singapore Project Scaling Up</strong>, FT Synergist identified that modern consumers demanded personalization without clinical complexity.
          </p>
          <p>
            At the IPOS IP Week 2026 session, Frederick Tan and Rosemary demonstrated this live to over 150 attendees using a stage QR code that directed delegates straight into the algorithm.
          </p>
          <div className="p-4 bg-neutral-900 border-l-4 border-[#8F801B] my-4">
            <p className="italic text-gray-200 text-sm">
              &ldquo;It transforms subjective consumer taste into a proprietary data asset. Instead of guessing market trends, our predictive AI algorithm analyzes consumer wellness preferences in real time. It elevates us from a traditional tea vendor into a data-backed wellness platform, ensuring hyper-personalized, premium tea remains accessible to modern consumers.&rdquo;
            </p>
            <span className="block mt-2 text-xs text-[#c4b340] font-semibold">— Presentation Demo at IPOS IP Marketplace 2026</span>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
            <li><strong>Predictive Taste Modeling:</strong> Dynamic algorithmic matching based on stress levels, circadian rhythm, flavor palate, and wellness targets.</li>
            <li><strong>Proprietary Data Moat:</strong> Every user interaction feeds anonymized consumer preference telemetry back into Pétale Tea’s product R&D pipeline.</li>
          </ul>
        </div>
      )
    },
    {
      step: 4,
      tag: "Phase 4: Asset-Light 400% Scaling",
      title: "Asset-Light Multi-Market Scaling into Indonesia, US & Australia (+400% Growth)",
      summary: "Scaling across international borders without heavy overseas factory capex by deploying master distribution licensing, agency fulfillment, and trademark licensing.",
      detail: (
        <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
          <p>
            Traditional overseas F&B expansion requires heavy capital expenditure: factory setup, leased retail footprints, overseas payroll, and severe supply chain risks. FT Synergist structured an <strong>asset-light licensing architecture</strong> that grew revenue by over 400%:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
            <div className="p-4 bg-black/80 border border-neutral-800 rounded">
              <h4 className="text-white font-bold text-sm flex items-center gap-2 mb-2">
                <Globe2 className="w-4 h-4 text-[#8F801B]" /> Indonesia Expansion
              </h4>
              <p className="text-xs text-gray-300">
                Deployed an asset-light master distribution and licensing framework with vetted local Indonesian distribution partners. Pétale Tea provides brand equity, proprietary formulas, and QA governance, while local partners fund localized logistics and distribution.
              </p>
            </div>
            <div className="p-4 bg-black/80 border border-neutral-800 rounded">
              <h4 className="text-white font-bold text-sm flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-[#8F801B]" /> US & Australia Expansion
              </h4>
              <p className="text-xs text-gray-300">
                Scaled via Amazon US and Amazon Australia utilizing localized third-party agency fulfillment (3PL) and programmatic ad management, maintaining lean headcount in Singapore while driving high-volume international revenue.
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            *Pipeline expansion underway targeting Hong Kong, the United Kingdom, Japan, and South Korea.
          </p>
        </div>
      )
    },
    {
      step: 5,
      tag: "Phase 5: Storytelling IP Series",
      title: "The Next Frontier: Singapore's First Storytelling Tea Series",
      summary: "Transforming functional beverage products into lifelong emotional narrative frameworks, capturing high-intent lifestyle moments from luxury retail to wedding fairs.",
      detail: (
        <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
          <p>
            The culmination of the IP roadmap is the launch of the <strong>Storytelling Tea Concept</strong>—building experiential narrative IP that ties tea moments to global travel and personal milestones (e.g. Kyoto bamboo forests, Ubud rice terraces, Kampong Glam heritage, and wedding partnerships like Hitcheed).
          </p>
          <div className="p-4 bg-neutral-900 border-l-4 border-[#8F801B] my-4">
            <p className="italic text-gray-200 text-sm">
              &ldquo;Our next frontier is establishing Singapore&apos;s first Storytelling Tea Concept—because we believe tea should be a story you feel and experience, not just consume. Moving forward, Pétale Tea isn’t just selling tea; we are building an emotional narrative framework where Pétale Tea journeys through every chapter of your life.&rdquo;
            </p>
            <span className="block mt-2 text-xs text-[#c4b340] font-semibold">— Rosemary Kwa, Founder of Pétale Tea</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-[#8F801B] selection:text-white">
      {/* Schema Injection */}
      <Script id="petale-case-study-schema" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      {/* Navigation Breadcrumb Bar */}
      <div className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link
            href="/insights"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-2" /> Back to Insights
          </Link>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#8F801B]/20 text-[#e6d875] border border-[#8F801B]/30">
              <Award className="w-3 h-3 text-[#8F801B]" /> IPOS IP Week 2026 Feature
            </span>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Header Badge & Meta */}
        <div className="space-y-4 text-center md:text-left mb-10">
          <div className="inline-flex flex-wrap items-center gap-2 justify-center md:justify-start">
            <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded">
              Official IP Marketplace Case Study
            </span>
            <span className="text-neutral-500 text-xs">•</span>
            <span className="text-neutral-400 text-xs font-medium">Presented by IP Grow</span>
            <span className="text-neutral-500 text-xs">•</span>
            <span className="text-[#8F801B] text-xs font-semibold">26–27 August 2026 | Marina Bay Sands</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Unlocking Intangible Assets: How to Leverage Your IP to Grow Your Business by 400%
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-4xl">
            Inside the IPOS IP Week 2026 showcase featuring <strong>Frederick Tan</strong> (Principal Consultant, FT Synergist) and <strong>Rosemary Kwa</strong> (Founder, Pétale Tea): A masterclass in unbundling intangible assets, deploying predictive AI, and executing asset-light multi-market scaling.
          </p>

          {/* Speaker Byline */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800 text-xs text-neutral-400">
            <div className="flex items-center gap-4">
              <div>
                <span className="block text-white font-semibold">Mr. Frederick Tan</span>
                <span className="text-neutral-400">Principal Consultant, FT Synergist (SCMC Certified)</span>
              </div>
              <div className="h-6 w-px bg-neutral-800" />
              <div>
                <span className="block text-white font-semibold">Ms. Rosemary Kwa</span>
                <span className="text-neutral-400">Founder, Pétale Tea Private Limited</span>
              </div>
            </div>
            <div className="text-neutral-500">
              Reading Time: 7 mins
            </div>
          </div>
        </div>

        {/* Hero Photo Panel */}
        <div className="relative aspect-[16/10] md:aspect-[16/9] w-full rounded-xl overflow-hidden border border-neutral-800 shadow-2xl mb-12 bg-neutral-900">
          <Image
            src="/insights/ipos-ip-week-2026/frederick-tan-rosemary-kwa-ip-week-panel.jpg"
            alt="Frederick Tan and Rosemary Kwa speaking on stage at IPOS IP Week 2026 Marina Bay Sands"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-xs text-neutral-300 flex items-center justify-between">
            <span>Live Panel at Marina Bay Sands Expo & Convention Centre, Singapore</span>
            <span className="hidden sm:inline bg-black/60 px-2 py-1 rounded text-white font-mono">IP Marketplace 2026</span>
          </div>
        </div>

        {/* Key Metrics / Snapshot Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="bg-neutral-950 p-5 rounded-lg border border-neutral-800/80 hover:border-[#8F801B]/50 transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-[#8F801B] font-mono mb-1">+400%</div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Revenue Scaling</div>
            <div className="text-[11px] text-neutral-400">Asset-light licensing vs brick-and-mortar capex</div>
          </div>

          <div className="bg-neutral-950 p-5 rounded-lg border border-neutral-800/80 hover:border-[#8F801B]/50 transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono mb-1">50%</div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-1">EnterpriseSG Co-Funded</div>
            <div className="text-[11px] text-neutral-400">Core Capability & Project Scaling Up framework</div>
          </div>

          <div className="bg-neutral-950 p-5 rounded-lg border border-neutral-800/80 hover:border-[#8F801B]/50 transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-[#8F801B] font-mono mb-1">AI Engine</div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Blend Your Own</div>
            <div className="text-[11px] text-neutral-400">Predictive mood & wellness formula algorithm</div>
          </div>

          <div className="bg-neutral-950 p-5 rounded-lg border border-neutral-800/80 hover:border-[#8F801B]/50 transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono mb-1">3+ Global</div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-1">Markets Live</div>
            <div className="text-[11px] text-neutral-400">Indonesia, Amazon US & Australia expansion</div>
          </div>
        </div>

        {/* Executive Summary */}
        <section className="mb-14 space-y-6 text-neutral-300 leading-relaxed">
          <h2 className="text-2xl font-serif font-bold text-white tracking-tight border-b border-neutral-800 pb-3 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#8F801B]" /> Executive Summary
          </h2>
          <p>
            Many small and medium enterprises (SMEs) view Intellectual Property (IP) merely as an unavoidable legal fee or a defensive filing requirement. In this landmark showcase at <strong>IPOS IP Week 2026 (IP Marketplace)</strong>, Frederick Tan, Principal Consultant at FT Synergist, joined Rosemary Kwa, Founder of Pétale Tea, to demonstrate how viewing intangible assets as a commercial driver unlocks exponential enterprise valuation and multi-market scale.
          </p>
          <p>
            Through an Enterprise Singapore-supported consultancy engagement, Pétale Tea transformed from Singapore&apos;s first blooming tea artisan into a high-growth, data-backed wellness enterprise that licenses its IP globally, lands multinational ESG gifting contracts, and runs a predictive AI recommendation engine.
          </p>
        </section>

        {/* 5-Phase Interactive Transformation Roadmap */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-bold text-white tracking-tight flex items-center gap-2">
              <Zap className="w-6 h-6 text-[#8F801B]" /> The 5-Phase IP Scaling Framework
            </h2>
            <span className="text-xs text-neutral-500 font-mono hidden sm:inline">Select a phase to explore</span>
          </div>

          {/* Phase Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
            {phases.map((p) => (
              <button
                key={p.step}
                onClick={() => setActiveTab(p.step)}
                className={`text-left p-3 rounded-lg border transition-all text-xs font-medium ${
                  activeTab === p.step
                    ? "bg-[#8F801B]/20 border-[#8F801B] text-white shadow-lg shadow-[#8F801B]/10"
                    : "bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                }`}
              >
                <span className={`block font-mono text-[10px] font-bold ${activeTab === p.step ? "text-[#e6d875]" : "text-neutral-500"}`}>
                  0{p.step}
                </span>
                <span className="line-clamp-1 font-semibold">{p.tag.split(":")[1] || p.tag}</span>
              </button>
            ))}
          </div>

          {/* Active Phase Card */}
          {phases.map(
            (p) =>
              activeTab === p.step && (
                <div key={p.step} className="p-6 md:p-8 bg-neutral-950 border border-neutral-800 rounded-xl space-y-4 animate-in fade-in duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#8F801B] font-mono">{p.tag}</span>
                    <span className="text-xs text-neutral-500">Phase 0{p.step} of 05</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{p.title}</h3>
                  <p className="text-sm text-neutral-300 italic">{p.summary}</p>
                  <div className="pt-2">{p.detail}</div>
                </div>
              )
          )}
        </section>

        {/* Visual Verification & Credibility Gallery */}
        <section className="mb-16 space-y-6">
          <h2 className="text-2xl font-serif font-bold text-white tracking-tight border-b border-neutral-800 pb-3 flex items-center gap-2">
            <Building className="w-6 h-6 text-[#8F801B]" /> Institutional Validation & Marketplace Credentials
          </h2>
          <p className="text-sm text-neutral-300">
            FT Synergist is an accredited service provider officially listed on the <strong>IPOS GoBusiness IP Grow Directory</strong> and recognized across government and corporate ecosystems in Singapore and ASEAN.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 space-y-3">
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-neutral-900 border border-neutral-800">
                <Image
                  src="/insights/ipos-ip-week-2026/ipos-ip-marketplace-stage-backdrop.jpg"
                  alt="IPOS IP Marketplace 2026 stage backdrop featuring Frederick Tan and Rosemary Kwa"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold">Main Stage Showcase @ Marina Bay Sands</h4>
                <p className="text-xs text-neutral-400">Featured presentation for Singapore IP Week 2026 organized by the Intellectual Property Office of Singapore (IPOS).</p>
              </div>
            </div>

            <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 space-y-3">
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-neutral-900 border border-neutral-800">
                <Image
                  src="/insights/ipos-ip-week-2026/ipos-ip-week-partners-grid.png"
                  alt="IP Week 2026 partner showcase featuring FT Synergist alongside leading legal and advisory institutions"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold">Featured Among Tier-1 IP & Advisory Firms</h4>
                <p className="text-xs text-neutral-400">FT Synergist represented alongside EY-Parthenon, Drew & Napier, WongPartnership, Foo Kon Tan, and Spruson & Ferguson.</p>
              </div>
            </div>

            <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 space-y-3">
              <div className="relative aspect-[16/10] rounded overflow-hidden bg-neutral-900 border border-neutral-800">
                <Image
                  src="/insights/ipos-ip-week-2026/gobusiness-ip-grow-ft-synergist-directory.png"
                  alt="FT Synergist profile on GoBusiness IP Grow directory"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold">GoBusiness IP Grow Directory Listing</h4>
                <p className="text-xs text-neutral-400">Verified provider for Branding Strategy, Innovation Consultancy, IP Brokerage & Licensing, and IP Strategy Consulting.</p>
              </div>
            </div>

            <div className="bg-neutral-950 p-4 rounded-lg border border-neutral-800 space-y-3">
              <div className="relative aspect-[16/10] rounded overflow-hidden bg-neutral-900 border border-neutral-800">
                <Image
                  src="/insights/ipos-ip-week-2026/ip-grow-growth-stages-framework.png"
                  alt="IP Grow Framework: Build & Launch, Go Global, Raise Capital, Forge Partnerships, Resolve Disputes"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold">Full Lifecycle IP Growth Capabilities</h4>
                <p className="text-xs text-neutral-400">Covering Build & Launch, Go Global, Raise Capital, and Forge Partnerships under statutory Singapore frameworks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Takeaways for Business Leaders */}
        <section className="mb-16 p-8 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black border border-[#8F801B]/40 rounded-xl space-y-6">
          <h2 className="text-2xl font-serif font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#8F801B]" /> 3 Strategic Takeaways for Singapore Enterprises
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8F801B]/20 border border-[#8F801B] flex items-center justify-center text-[#e6d875] font-bold text-sm">
                1
              </div>
              <div>
                <h4 className="text-white font-bold text-sm md:text-base">Unbundle before you scale</h4>
                <p className="text-xs md:text-sm text-neutral-300 mt-1">
                  Don&apos;t just sell physical widgets or standard service hours. Audit and isolate your true intangible assets—proprietary algorithms, secret formulas, brand narratives, and customer data telemetry—and protect them as tradeable equity.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8F801B]/20 border border-[#8F801B] flex items-center justify-center text-[#e6d875] font-bold text-sm">
                2
              </div>
              <div>
                <h4 className="text-white font-bold text-sm md:text-base">Transform ESG & AI into commercial assets</h4>
                <p className="text-xs md:text-sm text-neutral-300 mt-1">
                  Sustainability and AI are not compliance line items or tech buzzwords. When properly productized, zero-waste credentials unlock tier-1 enterprise accounts, while predictive AI algorithms create defensible data moats.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8F801B]/20 border border-[#8F801B] flex items-center justify-center text-[#e6d875] font-bold text-sm">
                3
              </div>
              <div>
                <h4 className="text-white font-bold text-sm md:text-base">Deploy asset-light licensing across ASEAN</h4>
                <p className="text-xs md:text-sm text-neutral-300 mt-1">
                  You do not need to raise millions in capex to expand into Indonesia, Vietnam, or the US. License your brand, formulation IP, and standard operating procedures to well-capitalized in-market partners who carry the operational risk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Direct CTA Module: Complimentary 1-Hour Scaling Up Sprint */}
        <section className="mb-16 p-8 md:p-10 bg-black border-2 border-[#8F801B] rounded-xl text-center md:text-left relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#8F801B]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 bg-[#8F801B] text-black font-bold text-xs uppercase tracking-widest rounded-full inline-block">
                As Featured on GoBusiness IP Grow
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                Book Your Complimentary 1-Hour Scaling Up Sprint
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Get a tailored roadmap to identify your intangible assets, uncover cross-border market opportunities, and structure scalable licensing models with SCMC-certified advisory.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-neutral-400 pt-2">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#8F801B]" /> SCMC Certified Consultant</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#8F801B]" /> EnterpriseSG Grant Support</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#8F801B]" /> IPOS GoBusiness Listed</span>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end">
              <Link
                href="/ip-consultant"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 bg-[#8F801B] hover:bg-[#a69524] text-black font-bold text-sm tracking-wide transition-all shadow-xl hover:shadow-[#8F801B]/20 text-center rounded-lg"
              >
                Claim Your Free Sprint <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <span className="text-[11px] text-neutral-500 mt-2">Zero obligation • 1-on-1 Executive Advisory</span>
            </div>
          </div>
        </section>

        {/* Citation Footnotes */}
        <CitationFootnotes items={ipWeekCitations} />

      </article>
    </div>
  );
}
