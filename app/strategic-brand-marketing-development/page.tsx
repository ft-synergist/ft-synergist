"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, ShieldCheck, TrendingUp, Globe, X, Calendar, Plus, Minus, CheckCircle2, AlertCircle, FileCheck2 } from 'lucide-react';
import type { CitationItem } from '@/app/components/CitationFootnotes';

// Dynamic imports with SSR disabled to prevent React Error 482 hydration crashes
const CitationFootnotes = dynamic(() => import('@/app/components/CitationFootnotes'), { ssr: false });
const GeoSemanticAnchors = dynamic(() => import('@/app/components/GeoSemanticAnchors'), { ssr: false });
const QuantitativeSuccessTable = dynamic(() => import('@/app/components/QuantitativeSuccessTable'), { ssr: false });

const brandCitations: CitationItem[] = [
  {
    id: 1,
    label: "Enterprise Singapore — EDGE Grant: International Branding (Internationalisation)",
    context: "Official eligibility, 3 areas of support (brand research & analysis, brand strategy, brand identity refresh), up to 70% SME / 50% non-SME support levels, SS 680 requirement, and non-supported cost exclusions.",
    url: "https://cp.enterprisesg.gov.sg/financial-support/edge-grant/internationalisation/international-branding"
  },
  {
    id: 2,
    label: "Enterprise Singapore — EDGE Grant: Business Strategic Planning (Business Strategy)",
    context: "Up to 50% SME / 30% non-SME co-funding for business development strategies, intellectual property asset management, and operational optimisation (SS 680 required).",
    url: "https://cp.enterprisesg.gov.sg/financial-support/edge-grant/business-strategy/business-strategic-planning"
  },
  {
    id: 3,
    label: "Enterprise Singapore — EDGE Grant: Overseas Marketing & Public Relations",
    context: "Up to 70% SME / 50% non-SME co-funding for overseas in-market PR, roadshows, pop-up stores, and culturally adapted media outreach.",
    url: "https://cp.enterprisesg.gov.sg/financial-support/edge-grant/internationalisation/overseas-marketing-and-public-relations"
  },
  {
    id: 4,
    label: "Enterprise Singapore — Official EDGE Grant FAQs",
    context: "Programme rules effective 30 September 2026: S$100,000 annual grant cap refreshed 1 April, SAC-accredited SS 680 certification bodies, and DTDi tax deduction alignment.",
    url: "https://cp.enterprisesg.gov.sg/resources/all-faqs/edge-grant"
  },
  {
    id: 5,
    label: "IPOS GoBusiness IP Grow — Strategy & Management: Branding Strategy",
    context: "Intangible asset and branding strategy scope: brand architecture, comprehensive market strategy, customer narrative, and FT Synergist Pte Ltd service provider listing.",
    url: "https://ipgrow.gobusiness.gov.sg/types-of-ia-ip-services/strategy-and-management/ip-branding-strategy"
  }
];

const faqItems = [
  {
    q: "How does the unified EDGE Grant cover International Branding and Brand Strategy projects?",
    a: "Effective 30 September 2026, Enterprise Singapore's unified EDGE Grant (which replaced EDG, MRA, and PSG) funds cross-border branding under the International Branding activity (Internationalisation business area) at up to 70% support for SMEs and up to 50% for non-SMEs. Companies may select at least one of three official areas of support: (1) Brand research and analysis, (2) Development of brand strategy, and (3) Development or refresh of brand identity to facilitate expansion into overseas markets. For domestic corporate growth and IP asset management, EDGE supports Business Strategic Planning (Business Strategy business area) at up to 50% for SMEs and up to 30% for non-SMEs. All supported activities count toward the company's overall annual grant cap of S$100,000 (refreshed every 1 April). Ongoing legacy EDG projects submitted before 30 September 2026 continue to be processed to completion."
  },
  {
    q: "How is a Strategic Brand & Management Consultant (SS 680 / SCMC) different from a traditional marketing or design agency?",
    a: "A traditional marketing or creative agency focuses on executing ad campaigns, buying media, and producing visual collateral. A strategic brand and management consultancy treats the brand as an intangible asset—structuring the brand architecture, customer value narrative, and market positioning roadmap before downstream execution begins. Under Enterprise Singapore's EDGE Grant rules, management consultancy costs for International Branding and Business Strategic Planning are only supportable if the engaged consultant holds SAC-accredited SS 680 certification (such as TÜV SÜD SCMC, SBACC, or IMCS) and is proposed upfront in the Business Grants Portal (BGP) application."
  },
  {
    q: "What costs are supported versus non-supported under EDGE International Branding?",
    a: "Under EDGE International Branding, supported costs cover professional service fees for an SAC-accredited SS 680 management consultant. Non-supported costs explicitly include: (1) Activities aimed at generating domestic business opportunities, (2) Goods and Services Tax (GST), and (3) Operational expenditure such as collateral production, website development, social media management, implementation of the brand development roadmap, and marketing plans or campaigns. Companies executing in-market promotional outreach in an overseas target market may apply separately under EDGE's Overseas Marketing & Public Relations activity (up to 70% for SMEs / 50% for non-SMEs), while pre-approved CRM and enterprise digital systems are supported under Automation & Digitalisation (subject to the S$30,000 digital sub-cap or 50% Large-scale Digital Transformation)."
  },
  {
    q: "What is the processing timeline, project duration, and required deliverable for an EDGE International Branding project?",
    a: "An EDGE International Branding application has an official processing outcome timeline of 10 weeks, and the approved project must be completed within 12 months from the date of approval. At project completion, the company must submit a report outlining the findings, outcomes, and how the completed project supported the company's overseas expansion plans: (1) Brand research and analysis (brand audit, competitor analysis, gap analysis), (2) Development of brand strategy (positioning, target segments, brand architecture or portfolio strategy, and strategic roadmap for target markets), and/or (3) Development or refresh of brand identity (brand elements and guidelines). Before submitting the final reimbursement claim on BGP, the applicant must also engage an audit firm from Enterprise Singapore's Panel of Auditors."
  },
  {
    q: "What documents and KPI projections are required when applying for EDGE International Branding on BGP?",
    a: "To apply on the Business Grants Portal (BGP) prior to commencing work or paying any deposit, the applicant company must prepare four mandatory submissions: (1) An outline of its overseas market strategy and expansion plan, (2) The vendor's proposal corresponding to branding initiatives for the target market, vendor's quotation, and SAC-accredited SS 680 certification, (3) A projection of expected overseas sales as a result of the project for 1 year after project completion, and (4) A projection of new jobs created (overall and Singaporeans only) with a gross monthly salary above S$5,000 for 1 year after project completion."
  },
  {
    q: "Does EDGE support rebranding existing Singapore SMEs, and can expenses qualify for DTDi tax deductions?",
    a: "Yes. Under EDGE International Branding, 'Development or refresh of brand identity (including brand elements and guidelines)' is explicitly listed as one of the three supportable areas, provided the rebranding facilitates expansion into a target overseas market rather than solely domestic business opportunities. Furthermore, per Enterprise Singapore's official EDGE FAQs, companies can also claim the Double Tax Deduction for Internationalisation (DTDi) on the same eligible internationalisation expenses, with qualifying tax deduction expenses computed net of the EDGE grant."
  },
  {
    q: "Who is eligible to apply for EDGE International Branding and Business Strategic Planning?",
    a: "To qualify for the EDGE Grant, the applicant business entity must: (1) Be registered and operating in Singapore, (2) Have at least 30% ownership (direct or indirect) by Singaporean(s) and/or Singapore Permanent Resident(s), determined by ultimate individual ownership, and (3) Not have started work or made any payment or deposit to a supplier, vendor, or third party prior to application submission on BGP. Under Enterprise Singapore's definition, an SME is a company with group annual sales turnover of not more than S$100 million OR group employment size of no more than 200 workers."
  },
  {
    q: "What if my SME focuses on domestic corporate growth strategy and IP asset alignment before expanding overseas?",
    a: "If your immediate priority is domestic strategic transformation rather than a specific overseas market launch, we structure the engagement under EDGE's Business Strategic Planning activity (Business Strategy business area), which provides up to 50% support for SMEs and up to 30% for non-SMEs (10-week outcome, 12-month completion window). This activity funds professional consultancy costs to formulate business development strategies, better manage intellectual property (IP) assets, and optimise operating models—delivering an internal/external market analysis, competitor audit, business model roadmap, and implementation action plan."
  }
];

export default function StrategicBrandMarketingDevelopmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('strategic-brand');
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Locked 5 Sprint Google Calendar Schedule Mapping
  const calendarUrls: Record<string, string> = {
    "business-strategy": "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ06H3HVfxJ_qIDCDbf-kOxlt7ufKnq0lLsBwSDvnJ_sIkgaNV5_0cjxSDnw4p7iPWtsvR2kHfnw?gv=true",
    "strategic-brand": "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1KtH1PGLFwfzWLr0MYr_Q9O4FLI78uRKX8FpNv0Z7A-NHMgYz2aPOT841cBzNPM8CquHvgBeAV?gv=true",
    "innovation-productivity": "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3qr3SmjWpxiA6xfoBwO1uTYv4_dX4UkWMSWHn-yY2Z5X-EsSVJiiNeFfvowWLuxBrK0kLJYrTi?gv=true",
    "market-readiness": "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2bP4LZ2IUL4kFaw3NW0IYE78GyJIplsadYgcYz4hTWFTVirByvmt9n9rH47vM0W39IbCZqyZJw?gv=true",
    "franchise-licensing": "https://calendar.google.com/calendar/appointments/schedules/AcZssZ10AGX_rEknl0J6WvWhScBFx2JXg6UZ0IKZIgHP7-sHFa0gy2WM_1KUR5eVStUACnbWx356zhbB?gv=true"
  };

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const trackLead = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "generate_lead", {
        event_category: "engagement",
        event_label: "brand_sprint_booking_click",
        value: 1
      });
    }
  };

  const handleOpenSprintModal = (presetService?: string) => {
    setSelectedService(presetService || 'strategic-brand');
    setIsModalOpen(true);
    trackLead();
  };

  const handleLaunchCalendar = (e: React.FormEvent) => {
    e.preventDefault();
    const targetUrl = calendarUrls[selectedService];
    if (typeof window !== "undefined") {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased font-sans w-full overflow-x-hidden relative">
      {/* UNIFIED SCHEMA MARKUP: SERVICE + PROVIDER + FAQPAGE */}
      <Script id="brand-faq-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://www.ftsynergist.com/strategic-brand-marketing-development#service",
              "name": "Brand Consultant Singapore | International Branding & Strategic Brand Marketing Development",
              "serviceType": [
                "Brand Consultancy for SMEs",
                "International Branding Consultant Singapore",
                "Brand Strategy Consultant Singapore",
                "Strategic Brand & Marketing Development"
              ],
              "provider": {
                "@type": "ProfessionalService",
                "name": "FT Synergist",
                "url": "https://www.ftsynergist.com/",
                "telephone": "+6598628906",
                "email": "fredtan@ftsynergist.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "7 Temasek Boulevard, #12-07 Suntec Tower One",
                  "addressLocality": "Singapore",
                  "postalCode": "038987",
                  "addressCountry": "SG"
                },
                "sameAs": [
                  "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd",
                  "https://www.tuvsud.com/en-sg/services/training/asmea/list-of-certified-consultants",
                  "https://www.linkedin.com/company/ft-synergist"
                ]
              },
              "areaServed": {
                "@type": "Country",
                "name": "Singapore"
              },
              "description": "Brand Consultant Singapore & International Branding advisory for SMEs and enterprises. Led by Principal Management Consultant Frederick Tan (TÜV SÜD SCMC-1810-P0236 | SS 680) for brand research, brand architecture, brand identity refresh, and EDGE / EDG grant co-funded expansion roadmaps."
            },
            {
              "@type": "FAQPage",
              "@id": "https://www.ftsynergist.com/strategic-brand-marketing-development#faq",
              "mainEntity": faqItems.map(item => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.a
                }
              }))
            }
          ]
        })}
      </Script>

      {/* HERO BANNER SECTION */}
      <header className="relative pt-36 pb-20 px-4 text-center max-w-5xl mx-auto space-y-8">
        {/* 1. EXACT MATCH H1 + INTERNATIONAL BRANDING SUB-HEADING */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Brand Consultant Singapore <br className="hidden sm:inline" />
          <span className="text-[#8F801B] bg-clip-text text-transparent bg-gradient-to-r from-[#8F801B] to-yellow-200">
            International Branding &amp; Strategic Marketing Development
          </span>
        </h1>

        {/* 2. SUBHEADER (EXECUTIVE DOCTRINE: BRAND AS INTANGIBLE ENTERPRISE ASSET) */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-gray-300 leading-relaxed font-normal">
          Beyond a logo or slogan, a brand is an intangible enterprise asset that governs how customers perceive value, differentiates your business from competitors, and defends market share across Singapore and international markets.
        </p>

        {/* 3. PRACTICE OVERVIEW BOX */}
        <div className="p-6 md:p-8 bg-black/60 border border-[#8F801B]/50 rounded-xl max-w-3xl mx-auto text-left shadow-[0_0_30px_rgba(143,128,27,0.15)] backdrop-blur-md">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#8F801B] mb-2">Practice Overview</h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-200 font-medium">
            <strong>FT Synergist</strong> advises Singapore SMEs and growth enterprises on <strong>brand strategy, international branding, and intangible asset commercialisation</strong>. Backed by over two decades of first-hand operator and master-franchisee experience scaling Singapore brands into overseas markets across <strong>China, Malaysia, Indonesia, and Vietnam</strong>—including a successful commercial exit—our practice structures coherent brand architectures, compelling customer narratives, and cross-border go-to-market roadmaps. Led by <strong>Frederick Tan, Principal Management Consultant, FT Synergist</strong> (TÜV SÜD Certified Management Consultant, <strong>SCMC-1810-P0236 | SS 680:2021</strong>), engagements qualify for co-funding under Enterprise Singapore&apos;s <strong>EDGE Grant</strong> (up to 70% SME support for <em>International Branding</em>; up to 50% for <em>Business Strategic Planning</em>).
          </p>
        </div>

        {/* 4. HERO CTA BLOCK */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-4 pt-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Structure Your Brand Architecture &amp; Regional Expansion Roadmap
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Book a 60-minute strategy sprint with our SS 680 certified management consultant to evaluate your brand positioning, portfolio architecture, and EnterpriseSG EDGE Grant eligibility.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleOpenSprintModal('strategic-brand')}
              className="bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center justify-center"
            >
              Book Your Brand Strategy Sprint
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* 2026 EDGE GRANT POLICY NOTICE (LOCKED S.O.T. ALIGNED) */}
          <div className="mt-8 p-5 rounded-xl bg-white/5 border border-[#8F801B]/40 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm backdrop-blur-sm max-w-3xl mx-auto">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
                  EnterpriseSG EDGE Grant Policy (Effective 30 Sep 2026)
                </span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                EDG, MRA, and PSG ceased on 29 September 2026. Under the unified <strong>EDGE Grant</strong> (shared <strong>S$100,000 annual cap</strong> refreshed 1 April), cross-border brand strategy is supported under <strong>International Branding</strong> (<em>Internationalisation</em>: <strong>up to 70% for SMEs / 50% for non-SMEs</strong>), while domestic growth &amp; IP roadmaps are supported under <strong>Business Strategic Planning</strong> (<em>Business Strategy</em>: <strong>up to 50% for SMEs / 30% for non-SMEs</strong>).
              </p>
            </div>
            <Link href="/edge-grant" className="shrink-0 text-[#8F801B] hover:text-yellow-300 font-bold underline inline-flex items-center text-xs sm:text-sm">
              Explore EDGE Grant <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN EDITORIAL HOUSING */}
      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-20">

        {/* SECTION 1: 3 CORE PILLARS (BRAND CONSULTANCY FOR SMES & INTERNATIONAL BRANDING) */}
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              1. Brand Consultancy for SMEs &amp; International Branding: Core Advisory Pillars
            </h2>
            <p className="text-gray-300 leading-relaxed text-base">
              An effective brand strategy is a structured plan that defines how your business creates, protects, and scales its desired identity and value proposition. Our practice structures advisory mandates across three core pillars—aligned directly with the three supportable areas under Enterprise Singapore&apos;s <strong>EDGE International Branding</strong> framework:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar Card 1: Area 1 - Brand Research & Analysis */}
            <div
              onClick={() => handleOpenSprintModal('strategic-brand')}
              className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <ShieldCheck className="h-8 w-8 text-[#8F801B] group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#8F801B]/20 text-yellow-300 border border-[#8F801B]/40">
                    Scope 01
                  </span>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  Brand Research, Audit &amp; Competitor Gap Analysis
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Executing primary and secondary market diagnosis—comprehensive <strong>brand audits</strong>, customer perception analysis, <strong>competitor benchmarking</strong>, and <strong>market gap analysis</strong> across Singapore and target overseas markets to identify defensible positioning white space.
                </p>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                Audit Brand Gaps <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </div>

            {/* Pillar Card 2: Area 2 - Development of Brand Strategy */}
            <div
              onClick={() => handleOpenSprintModal('strategic-brand')}
              className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="h-8 w-8 text-[#8F801B] group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#8F801B]/20 text-yellow-300 border border-[#8F801B]/40">
                    Scope 02
                  </span>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  Strategic Brand Architecture &amp; Market Positioning
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Developing a structured <strong>brand architecture and portfolio strategy</strong>, defining target segments, crafting a compelling value narrative that resonates with buyers, and formulating a <strong>strategic roadmap to market your goods and services</strong> across domestic and regional markets.
                </p>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                Refine Positioning <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </div>

            {/* Pillar Card 3: Area 3 - Development or Refresh of Brand Identity */}
            <div
              onClick={() => handleOpenSprintModal('strategic-brand')}
              className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Globe className="h-8 w-8 text-[#8F801B] group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#8F801B]/20 text-yellow-300 border border-[#8F801B]/40">
                    Scope 03
                  </span>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  Brand Identity Refresh &amp; Cross-Border Guidelines
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Leading the <strong>development or refresh of brand identity</strong>—codifying distinctive <strong>brand elements and governance guidelines</strong> prepared for trademark protection, regional licensing, franchising, and{" "}
                  <Link
                    href="/mra-grant"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white font-bold underline hover:text-[#8F801B] transition-colors"
                  >
                    overseas market entry
                  </Link>
                  .
                </p>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                Build GTM Roadmap <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </div>
          </div>

          {/* SECTION 1B: VERIFIED ENTERPRISESG EDGE GRANT MATRIX FOR BRAND & MARKETING */}
          <div className="bg-slate-900/90 p-6 md:p-8 rounded-xl border border-white/15 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[10px] uppercase tracking-wider font-bold bg-[#8F801B]/20 text-[#8F801B] px-3 py-1 rounded border border-[#8F801B]/40">
                Enterprise Singapore Grant Architecture
              </span>
              <span className="text-xs text-gray-400 font-mono">
                Annual Cap: S$100,000 / Year (Resets 1 April)
              </span>
            </div>

            <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-white">
              How Brand, Marketing &amp; Growth Projects Map to the Unified EDGE Grant
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Under the unified <Link href="/edge-grant" className="text-white font-bold underline hover:text-[#8F801B]">EDGE Grant</Link>, Enterprise Singapore categorizes cross-border brand strategy, domestic corporate strategy, and overseas promotional execution into separate activities. Because scope or vendor changes are not permitted after Business Grants Portal (BGP) submission without terminating and reapplying, engagements should be mapped to the appropriate track upfront:
            </p>

            <div className="overflow-x-auto rounded-lg border border-white/10">
              <table className="min-w-full text-left text-xs sm:text-sm text-gray-300 border-collapse">
                <thead>
                  <tr className="bg-black/70 text-white font-semibold border-b border-white/10">
                    <th className="p-3.5 border-r border-white/10">EDGE Activity &amp; Business Area</th>
                    <th className="p-3.5 border-r border-white/10">Support Level (SME / Non-SME)</th>
                    <th className="p-3.5 border-r border-white/10">Outcome &amp; Duration</th>
                    <th className="p-3.5">Eligible Scope &amp; Consultant Requirement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-black/40">
                  <tr>
                    <td className="p-3.5 font-bold text-white border-r border-white/10">
                      International Branding
                      <span className="block text-[11px] font-normal text-[#8F801B] mt-0.5">Area: Internationalisation</span>
                    </td>
                    <td className="p-3.5 font-semibold text-yellow-400 border-r border-white/10">
                      Up to 70% (SME)<br />
                      <span className="text-gray-400 font-normal">Up to 50% (Non-SME)</span>
                    </td>
                    <td className="p-3.5 border-r border-white/10">
                      10 weeks outcome<br />
                      <span className="text-gray-400">Complete within 12 months</span>
                    </td>
                    <td className="p-3.5 leading-relaxed">
                      Professional service costs for (1) Brand research &amp; analysis, (2) Development of brand strategy, and/or (3) Development or refresh of brand identity to facilitate overseas expansion. <strong>Requires SAC-accredited SS 680 consultant certification.</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white border-r border-white/10">
                      <Link href="/business-strategic-planning" className="text-white underline hover:text-[#8F801B]">
                        Business Strategic Planning
                      </Link>
                      <span className="block text-[11px] font-normal text-[#8F801B] mt-0.5">Area: Business Strategy</span>
                    </td>
                    <td className="p-3.5 font-semibold text-white border-r border-white/10">
                      Up to 50% (SME)<br />
                      <span className="text-gray-400 font-normal">Up to 30% (Non-SME)</span>
                    </td>
                    <td className="p-3.5 border-r border-white/10">
                      10 weeks outcome<br />
                      <span className="text-gray-400">Complete within 12 months</span>
                    </td>
                    <td className="p-3.5 leading-relaxed">
                      Professional service costs to formulate strategies and processes to improve business development, better manage <Link href="/ip-consultant" className="text-white underline hover:text-[#8F801B]">intellectual property (IP) assets</Link>, and optimise operations. <strong>Requires SAC-accredited SS 680 consultant certification.</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-white border-r border-white/10">
                      Overseas Marketing &amp; Public Relations
                      <span className="block text-[11px] font-normal text-[#8F801B] mt-0.5">Area: Internationalisation</span>
                    </td>
                    <td className="p-3.5 font-semibold text-yellow-400 border-r border-white/10">
                      Up to 70% (SME)<br />
                      <span className="text-gray-400 font-normal">Up to 50% (Non-SME)</span>
                    </td>
                    <td className="p-3.5 border-r border-white/10">
                      6 weeks outcome<br />
                      <span className="text-gray-400">Complete within 12 months</span>
                    </td>
                    <td className="p-3.5 leading-relaxed">
                      In-market outreach in target overseas markets: in-store promotions, roadshows, pop-up stores, and publicity across social/online/offline media with localized content adaptation (not mere translation). Requires vendor track record in the target market.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* SUPPORTED VS NON-SUPPORTED COSTS & MANDATORY BGP DOCUMENTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              <div className="p-5 rounded-lg bg-black/60 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <h4>Non-Supported Costs (International Branding)</h4>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Under Enterprise Singapore&apos;s activity parameters, <strong>International Branding</strong> covers strategic professional consultancy and explicitly <strong>excludes</strong>:
                </p>
                <ul className="text-xs text-gray-400 space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li>Activities aimed at generating <strong>domestic business opportunities</strong>;</li>
                  <li>Operational expenditure such as <strong>collateral production, website development, social media management</strong>, implementation of brand development roadmaps, marketing plans, or campaigns;</li>
                  <li>Goods and Services Tax (<strong>GST</strong>) and retrospective work started or deposits paid before BGP submission.</li>
                </ul>
              </div>

              <div className="p-5 rounded-lg bg-black/60 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-[#8F801B] font-bold text-sm">
                  <FileCheck2 className="h-4 w-4 shrink-0" />
                  <h4>Mandatory BGP Application Documents &amp; KPIs</h4>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Before submitting an <strong>International Branding</strong> application via Corppass on the Business Grants Portal (BGP), applicants must prepare:
                </p>
                <ul className="text-xs text-gray-400 space-y-1.5 list-disc pl-4 leading-relaxed">
                  <li><strong>Outline of overseas market strategy</strong> and expansion plan;</li>
                  <li>Vendor&apos;s proposal for the target market, quotation, and <strong>SAC-accredited SS 680 certification</strong>;</li>
                  <li><strong>1-year projection of expected overseas sales</strong> resulting from the project;</li>
                  <li><strong>1-year projection of new jobs created</strong> (overall and Singaporeans only) with <strong>gross monthly salary above S$5,000</strong>.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SECTION 1C: STRATEGIC CONSULTANCY SCOPE VS DOWNSTREAM CAMPAIGN EXECUTION */}
          <div className="bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 space-y-5">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
              Distinguishing Strategic Brand Consultancy from Downstream Campaign Execution
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              When scoping a brand transformation or market entry mandate, enterprises should separate upstream strategic advisory from downstream creative and media execution:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-5 rounded-lg bg-black/70 border border-[#8F801B]/40 space-y-2.5">
                <div className="flex items-center gap-2 font-bold text-white">
                  <CheckCircle2 className="h-4 w-4 text-[#8F801B] shrink-0" />
                  <span>Upstream Strategy &amp; Intangible Asset Management (SS 680 Scope)</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Addresses market research, competitor gap analysis, brand architecture, customer value narratives, <Link href="/ip-consultant" className="text-white underline hover:text-[#8F801B]">IP and trademark portfolio alignment</Link>, and multi-market commercial roadmaps. Under EDGE <em>International Branding</em> (up to 70% SME support) and <em>Business Strategic Planning</em> (up to 50% SME support), this scope must be led by an SAC-accredited SS 680 certified management consultant.
                </p>
              </div>
              <div className="p-5 rounded-lg bg-black/40 border border-white/10 space-y-2.5">
                <div className="flex items-center gap-2 font-bold text-gray-200">
                  <Globe className="h-4 w-4 text-gray-400 shrink-0" />
                  <span>Downstream Creative Production &amp; Media Execution</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Covers operational implementation—website development, collateral production, social media management, advertising, and in-market PR events. Under EDGE, routine collateral and website production are excluded from <em>International Branding</em>, while overseas PR, roadshows, and localized media outreach are supported under the separate <em>Overseas Marketing &amp; Public Relations</em> activity.
                </p>
              </div>
            </div>
          </div>

          {/* Governance Credentials & Case Study Feature */}
          <div className="bg-slate-900/90 p-6 md:p-8 rounded-xl border border-[#8F801B]/40 shadow-xl space-y-6 mt-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[10px] uppercase tracking-wider font-bold bg-[#8F801B]/20 text-[#8F801B] px-3 py-1 rounded border border-[#8F801B]/40">
                Governance &amp; Case Study Record
              </span>
              <span className="text-xs text-yellow-400/90 font-mono">
                IPOS IP Week 2026 Speaker
              </span>
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-white">
              Accredited Management Consultancy &amp; IPOS IP Week 2026 Feature
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              <strong>Frederick Tan, Principal Management Consultant, FT Synergist</strong>, holds active accreditation as a TÜV SÜD Singapore Certified Management Consultant (SCMC) under License <strong>SCMC-1810-P0236</strong> (SAC-accredited SS 680 standard). FT Synergist Pte Ltd is listed on the official <a href="https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd#ia-ip-services" target="_blank" rel="noopener noreferrer" className="text-white font-bold underline hover:text-[#8F801B]">IPOS GoBusiness IP Grow Directory</a> across four practice areas: <strong>Branding Strategy</strong>, <strong>IP Strategy Consulting</strong>, <strong>Innovation Consultancy</strong>, and <strong>IP Brokerage &amp; Licensing</strong>.
            </p>

            {/* Case Study Feature Callout */}
            <div className="bg-black/70 p-5 rounded-lg border border-neutral-700 flex flex-col sm:flex-row items-center gap-5">
              <div className="relative w-full sm:w-44 aspect-[16/10] sm:aspect-square shrink-0 rounded overflow-hidden border border-neutral-700">
                <img
                  src="/insights/ipos-ip-week-2026/frederick-tan-rosemary-kwa-ip-week-panel.jpg"
                  alt="Frederick Tan speaking at IPOS IP Week 2026"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2 text-left w-full">
                <span className="text-[11px] font-mono text-[#8F801B] uppercase font-bold tracking-wider">
                  Featured Case Study @ Marina Bay Sands
                </span>
                <h4 className="text-white font-bold text-base hover:text-[#8F801B] transition-colors">
                  <Link href="/insights/petale-tea-ip-growth-case-study">
                    Unlocking Intangible Assets: How Strategic Branding &amp; AI Scaled Pétale Tea by 400%
                  </Link>
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Presented at IPOS IP Week 2026 (IP Marketplace): See how unbundling intangible assets and creating an AI-driven personalizing recommendation engine unlocked blue-chip contracts (Google, Meta, Tiffany &amp; Co.) and Indonesian expansion.
                </p>
                <div className="pt-1">
                  <Link
                    href="/insights/petale-tea-ip-growth-case-study"
                    className="inline-flex items-center text-xs font-bold text-[#8F801B] hover:text-white uppercase tracking-wider transition-colors"
                  >
                    Read Full Brand Transformation Story <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: QUANTIFIABLE TRACK RECORD */}
        <section className="space-y-6">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
            2. Quantifiable Enterprise Track Record
          </h2>
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-2 shadow-sm text-white">
            <QuantitativeSuccessTable />
          </div>

          {/* Post-Table High-Converting Banner */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#8F801B]/20 border border-[#8F801B]/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-heading text-xl font-extrabold text-white">
                Planning a brand transformation or regional expansion?
              </h3>
              <p className="text-sm text-gray-300">
                Evaluate your brand architecture and structure an EnterpriseSG EDGE International Branding or Business Strategic Planning roadmap with an SCMC (SS 680) consultant.
              </p>
            </div>
            <button
              onClick={() => handleOpenSprintModal('strategic-brand')}
              className="shrink-0 bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center"
            >
              Request Brand Strategy Advisory
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </section>

        {/* SECTION 3: FREQUENTLY ASKED QUESTIONS (LOCKED TO MATCH EDG CSS) */}
        <section className="space-y-8 pt-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#121212] border border-white/10 rounded-xl overflow-hidden transition-all duration-200 hover:border-[#8F801B]/50"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-white font-semibold text-base md:text-lg pr-4 leading-snug">
                    {item.q}
                  </span>
                  {openFaqIndex === index ? (
                    <Minus className="h-5 w-5 flex-shrink-0 text-[#8F801B]" />
                  ) : (
                    <Plus className="h-5 w-5 flex-shrink-0 text-gray-400" />
                  )}
                </button>

                {openFaqIndex === index && (
                  <div className="px-6 pb-6 text-sm md:text-base text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                    {index === 0 ? (
                      <>
                        {item.a} Explore our dedicated <Link href="/edge-grant" className="text-white font-bold underline hover:text-[#8F801B]">EDGE Grant Singapore</Link> and <Link href="/edg-grant" className="text-white font-bold underline hover:text-[#8F801B]">EDG Grant Advisory</Link> guides.
                      </>
                    ) : (
                      item.a
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CONVERSION BANNER */}
        <section className="bg-slate-900 border-t border-b border-[#8F801B]/30 py-16 px-6 rounded-2xl text-center space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Architect a Defensible Brand &amp; Market Expansion Strategy
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg">
            Partner with a TÜV SÜD Certified Management Consultant (SCMC-1810-P0236 | SS 680) to build brand equity and structure your Enterprise Singapore grant roadmap.
          </p>
          <button
            onClick={() => handleOpenSprintModal('strategic-brand')}
            className="bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-4 px-10 rounded-lg text-lg transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center justify-center"
          >
            Book Your Brand Strategy Sprint
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </section>
      </main>

      {/* STICKY BAR FOR MOBILE */}
      {mounted && showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-[#8F801B]/40 px-4 py-3 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-[#8F801B]" />
            <span className="text-xs font-bold text-white uppercase tracking-wide">Brand Strategy Sprint</span>
          </div>
          <button
            onClick={() => handleOpenSprintModal('strategic-brand')}
            className="bg-[#8F801B] text-white font-bold py-2 px-4 rounded text-xs transition-transform hover:scale-105 cursor-pointer flex items-center gap-1"
          >
            <span>Book Now</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* MODAL WITH 5 LOCKED SPRINT TITLES */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-[#8F801B]/30">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-slate-900 p-2 rounded-full cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>

            <form onSubmit={handleLaunchCalendar} className="space-y-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  Select Your Strategic Sprint
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Pick your focus area to launch the Google Calendar booking tool.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-2">
                  Select Sprint Focus *
                </label>
                <select
                  required
                  value={selectedService}
                  className="w-full border border-slate-300 rounded-lg p-3.5 text-sm focus:ring-2 focus:ring-[#8F801B] outline-none bg-white text-slate-900 font-medium"
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="business-strategy">Business Strategy Sprint</option>
                  <option value="strategic-brand">Brand Strategy Sprint</option>
                  <option value="innovation-productivity">Innovation &amp; Productivity Sprint</option>
                  <option value="market-readiness">Market Readiness Assistance (MRA) Sprint</option>
                  <option value="franchise-licensing">Franchise &amp; IP Strategy Sprint</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-4 rounded-lg text-base transition-colors shadow-lg cursor-pointer flex items-center justify-center"
              >
                Launch Strategy Calendar
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER INFRASTRUCTURE WITH VERIFIED CITATIONS & CUSTOMIZED BRAND ANCHORS */}
      <footer className="w-full border-t border-neutral-800 bg-neutral-900/50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <CitationFootnotes
            citations={brandCitations}
            title="Official Enterprise Singapore EDGE Grant & Statutory Reference Layer"
            subtitle="Grant support levels, eligible areas of support, non-supported costs, and SS 680 consultancy requirements verified against primary regulatory registries."
          />
        </div>
        <div className="w-full border-t border-neutral-800/40 py-6">
          <GeoSemanticAnchors
            primaryHeading="Brand Consultant Singapore: International Branding & Strategic Brand Architecture"
            primaryDescription={
              <>
                FT Synergist is a Singapore{" "}
                <Link href="/strategic-brand-marketing-development" className="text-white font-semibold underline hover:text-[#8F801B] transition-colors">
                  Brand Consultant
                </Link>
                {" "}and{" "}
                <Link href="/strategic-brand-marketing-development" className="text-white font-semibold underline hover:text-[#8F801B] transition-colors">
                  International Branding practice
                </Link>
                . Led by TÜV SÜD SCMC certified Principal Management Consultant Frederick Tan (SCMC-1810-P0236 | SS 680:2021), we formulate EDGE-aligned International Branding roadmaps (up to 70% SME co-funding for overseas expansion) and Business Strategic Planning architectures (up to 50% SME co-funding) that convert brand positioning and intellectual property into sustainable enterprise growth.
              </>
            }
          />
        </div>
      </footer>
    </div>
  );
}
