"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, ExternalLink, ShieldCheck, Globe, X, Calendar, Plus, Minus, MapPin, Building2, Rocket, Layers, Users, Megaphone, Award } from 'lucide-react';

// Dynamic imports with SSR disabled to prevent React Error 482 hydration crashes
const CitationFootnotes = dynamic(() => import('@/app/components/CitationFootnotes'), { ssr: false });
const GeoSemanticAnchors = dynamic(() => import('@/app/components/GeoSemanticAnchors'), { ssr: false });
const QuantitativeSuccessTable = dynamic(() => import('@/app/components/QuantitativeSuccessTable'), { ssr: false });

const faqItems = [
  {
    q: "What replaced the MRA Grant after 29 September 2026?",
    a: "Enterprise Singapore's Market Readiness Assistance (MRA) scheme ceased on 29 September 2026. From 30 September 2026 onwards, overseas expansion support is consolidated under the unified EDGE Grant (Internationalisation business area), offering up to 70% support for SMEs and up to 50% support for non-SMEs across seven prescribed internationalisation activities."
  },
  {
    q: "How does the S$100,000 EDGE Grant cap work for multi-market expansion, and can DTDi be claimed?",
    a: "Under the EDGE Grant, support counts towards your company's overall annual grant cap of S$100,000 across all activities combined (refreshed on 1 April each year). Companies submit one application per activity per market and may run multiple target markets concurrently. Per Enterprise Singapore's official EDGE FAQs, the Double Tax Deduction for Internationalisation (DTDi) may also be claimed on the same eligible expenses, computed net of the EDGE Grant."
  },
  {
    q: "What are the exact support rates and rules for Overseas Business Development Staff Deployment?",
    a: "Basic salary and commercial office rental are both capped at 12 months (minimum 6-month project duration). For SMEs, support is up to 70% if a Singaporean or Singapore PR is deployed, and up to 50% if a foreigner is deployed (non-SMEs: up to 50% for SC/PR, up to 30% for a foreigner). The BD staff must be a full-time permanent employee (not a shareholder or director) with documented continuous in-market physical presence covering at least 50% of the project duration."
  },
  {
    q: "What does EDGE Market Entry Setup cover, and why is its completion window 18 months?",
    a: "Market Entry Setup provides a 6-week application outcome and an 18-month completion window covering six areas: Drafting of Agreements (market-specific and annotated; generic templates are excluded), Entity Incorporation (applicant must hold >50% ownership or the legal maximum), Import/Export License, Intellectual Property (overseas registration with ownership or exclusive TTO/IHL licence), Tax Advisory, and Trade Credit Insurance."
  },
  {
    q: "Does Enterprise Singapore have an endorsed vendor list for Internationalisation?",
    a: "No. Enterprise Singapore states that there is no restriction on where consultants are sourced from, provided they meet the qualifications required for the grant activity. International Branding and International Financial and Tax Planning require SAC-accredited SS 680 certification (10-week outcome), whereas the five operational internationalisation activities require demonstrable vendor track records in the target overseas market (6-week outcome). All BGP applications must be submitted directly by the applicant company, and claims require an audit engagement letter from Enterprise Singapore's Panel of Auditors."
  }
];

const pcbcPillars = [
  {
    code: "P",
    title: "Product — Market Fit & Pre-Emptive IP Defence",
    summary: "Adapt product/service positioning and regulatory compliance for the target jurisdiction while securing overseas trademark and IP registrations before commercial launch.",
    edgeLink: "Aligned with Market Entry Setup (Intellectual Property & Import/Export License — 18-month window)."
  },
  {
    code: "C",
    title: "Channel — Entry Vehicle, Agreements & Partner Matching",
    summary: "Select the optimal legal vehicle (wholly-owned entity, JV, or Representative Office), structure market-specific agreements, and conduct vetted 1-to-1 in-premises meetings with distributors, franchisees, or licensees.",
    edgeLink: "Aligned with Market Entry Setup, Identification of Potential Overseas Partnerships & Overseas BD Staff Deployment."
  },
  {
    code: "B",
    title: "Brand — Cross-Border Positioning & Adapted Outreach",
    summary: "Eliminate linguistic and cultural friction with international brand architecture, market-adapted PR campaigns (not direct translations), and B2B trade fair presence.",
    edgeLink: "Aligned with International Branding (SS 680), Overseas Marketing & PR & Overseas Physical Trade Fairs."
  },
  {
    code: "C",
    title: "Culture — Education-First Market Legitimacy",
    summary: "Build category trust before aggressive sales push through localized market education, experiential touchpoints, and in-market commercial presence.",
    edgeLink: "Aligned with Overseas Marketing & Public Relations (locally adapted market engagement)."
  }
];

const edgeActivities = [
  {
    name: "Identification of Potential Overseas Partnerships",
    rate: "Up to 70% SME / Up to 50% Non-SME",
    outcome: "6-week outcome · 12-month completion",
    scope: "Research and one-to-one in-person business meetings at business premises (not events or tradeshows) to establish partnerships with licensees, franchisees, agents, distributors, suppliers, JV partners, and logistics providers.",
    rules: "Vendor track record in target market required. Excludes travel, accommodation, staff costs, investor sourcing, and vendor sourcing."
  },
  {
    name: "Market Entry Setup",
    rate: "Up to 70% SME / Up to 50% Non-SME",
    outcome: "6-week outcome · 18-month completion",
    scope: "Select at least one of six areas: Drafting of Agreements, Entity Incorporation (>50% applicant ownership or legal max), Import/Export License, Intellectual Property (overseas registration), Tax Advisory, and Trade Credit Insurance.",
    rules: "Vendor track record in target market required. Generic or template-based agreements without market-specific provisions are not supported."
  },
  {
    name: "Overseas Business Development Staff Deployment",
    rate: "SME: 70% (SC/PR) · 50% (Foreigner) | Non-SME: 50% · 30%",
    outcome: "6-week outcome · 6–12 month duration",
    scope: "Basic salary and commercial office rental (both capped at 12 months) for a full-time permanent BD employee deployed in-market (cannot be a shareholder or director).",
    rules: "Continuous in-market physical presence required (work visa + local residence proof covering at least 50% of project duration; no travel to other markets)."
  },
  {
    name: "Overseas Marketing & Public Relations",
    rate: "Up to 70% SME / Up to 50% Non-SME",
    outcome: "6-week outcome · 12-month completion",
    scope: "In-store promotions, roadshows, pop-up stores, social media, and online/offline media outreach in the target overseas market.",
    rules: "Content must be adapted to local market preferences and culture (not translations or replications). Promoted products must be owned or officially represented by applicant (≥50%)."
  },
  {
    name: "Overseas Physical Trade Fairs",
    rate: "Up to 70% SME / Up to 50% Non-SME",
    outcome: "6-week outcome · 12-month completion",
    scope: "B2B overseas trade fair booth space rental and design/build (capped at 36 sqm), pitching/speaking slots, and event marketing collaterals.",
    rules: "Apply no earlier than 6 months before fair start (booth deposits prior to application permitted). Excludes LEAD-supported fairs, public/domestic-only fairs, co-shared or vendor-staffed booths, and travel."
  }
];

export default function InternationalisationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('market-readiness');
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
        event_label: "internationalisation_sprint_booking_click",
        value: 1
      });
    }
  };

  const handleOpenSprintModal = (presetService?: string) => {
    setSelectedService(presetService || 'market-readiness');
    setIsModalOpen(true);
    trackLead();
  };

  const handleLaunchCalendar = (e: React.FormEvent) => {
    e.preventDefault();
    const targetUrl = calendarUrls[selectedService];
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      }, 150);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased font-sans w-full overflow-x-hidden relative">
      {/* GEO / AI SCHEMA MARKUP FOR FAQPAGE */}
      <Script id="internationalisation-faq-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.a
            }
          }))
        })}
      </Script>

      {/* HERO BANNER SECTION */}
      <header className="relative pt-36 pb-20 px-4 text-center max-w-5xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8F801B]/15 border border-[#8F801B]/40 text-[#C5A017] text-xs font-bold uppercase tracking-wider">
          <Globe className="h-3.5 w-3.5" />
          EDGE Grant Internationalisation Advisory (Successor to MRA)
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Internationalisation Consultant Singapore <br className="hidden sm:inline" />
          <span className="text-[#8F801B] bg-clip-text text-transparent bg-gradient-to-r from-[#8F801B] to-yellow-200">
            Cross-Border Market Entry &amp; EDGE Advisory
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-base sm:text-xl text-gray-300 leading-relaxed font-normal">
          De-risk overseas expansion across ASEAN and global markets using FT Synergist&apos;s proprietary <strong>PCBC Model</strong>. Structure compliant market entry setup, partner matching, in-market BD deployment, and overseas promotion under Enterprise Singapore&apos;s <strong>EDGE Grant</strong> (up to 70% SME / 50% non-SME support).
        </p>

        {/* VERIFIED EXPERT ANSWER ALERT BOX */}
        <div className="p-6 md:p-8 bg-black/60 border border-[#8F801B]/50 rounded-xl max-w-3xl mx-auto text-left shadow-[0_0_30px_rgba(143,128,27,0.15)] backdrop-blur-md">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#8F801B] mb-2">Verified Advisory Overview</h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-200 font-medium">
            <strong>FT Synergist</strong> is a Singapore management consultancy led by Principal Management Consultant Frederick Tan (SAC-accredited SS 680 SCMC). We advise Singapore enterprises on cross-border entity structuring, joint venture agreements, overseas IP registration, and partner acquisition aligned with Enterprise Singapore&apos;s <strong>EDGE Grant Internationalisation</strong> framework (which replaced MRA on 30 September 2026).
          </p>
        </div>

        {/* HERO CTA BLOCK */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-4 pt-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Planning Overseas Expansion Across ASEAN or Global Markets?
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Book a 60-minute Internationalisation &amp; Market Entry Sprint to map your target-market entry vehicle, IP protection, and EDGE Grant activity sequencing.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => handleOpenSprintModal('market-readiness')}
              className="bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center justify-center"
            >
              Book Internationalisation Sprint
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <Link
              href="/contact"
              className="border border-[#8F801B] text-[#8F801B] hover:bg-[#8F801B] hover:text-white font-bold py-4 px-6 rounded-lg text-base transition-all cursor-pointer inline-flex items-center justify-center group"
            >
              Quick Sprint Booking
              <ExternalLink className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100" />
            </Link>
          </div>

          {/* 2026 MRA -> EDGE TRANSITION NOTICE */}
          <div className="mt-8 p-4 rounded-xl bg-white/5 border border-[#8F801B]/40 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm backdrop-blur-sm max-w-3xl mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">EnterpriseSG Policy Update</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm">
                MRA ceased on <strong>29 September 2026</strong>. From <strong>30 September 2026</strong> onwards, overseas expansion support is governed under the unified <strong>EDGE Grant (Internationalisation)</strong>—up to 70% for SMEs and up to 50% for non-SMEs, within an overall <strong>S$100,000 annual company cap</strong> (refreshed 1 April).
              </p>
            </div>
            <Link href="/edge-grant" className="shrink-0 text-[#8F801B] hover:text-yellow-300 font-bold underline inline-flex items-center text-xs sm:text-sm">
              EDGE Grant Overview <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN EDITORIAL HOUSING */}
      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-20">

        {/* SECTION 1: PROPRIETARY PCBC MODEL */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              1. The PCBC Internationalisation Model (Product · Channel · Brand · Culture)
            </h2>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Grant eligibility alone does not create overseas revenue. FT Synergist structures cross-border expansion around our proprietary <strong>PCBC Model</strong>—aligning product localisation, legal channel architecture, linguistic brand positioning, and cultural market legitimacy before capital is committed. See how this methodology applies in our <Link href="/insights/wang-lao-ji-global-expansion-strategy" className="text-white font-bold underline hover:text-[#8F801B]">Wang Lao Ji / Project WALOVI Global Expansion analysis</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pcbcPillars.map((pillar) => (
              <div key={pillar.title} className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-lg bg-[#8F801B]/20 border border-[#8F801B]/50 text-[#C5A017] font-heading font-extrabold flex items-center justify-center text-lg">
                    {pillar.code}
                  </span>
                  <h3 className="font-heading font-bold text-white text-lg leading-snug">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {pillar.summary}
                </p>
                <p className="text-xs text-[#C5A017] font-medium pt-1">
                  {pillar.edgeLink}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: ENTERPRISE SINGAPORE PRESCRIBED EDGE INTERNATIONALISATION ACTIVITIES */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              2. Enterprise Singapore EDGE Internationalisation Activities
            </h2>
            <p className="text-gray-300 leading-relaxed text-base">
              Under Enterprise Singapore&apos;s <a href="https://www.enterprisesg.gov.sg/financial-support/edge-grant#tab=Internationalisation" target="_blank" rel="noopener noreferrer" className="text-white font-bold underline hover:text-[#8F801B] inline-flex items-center gap-1">EDGE Grant Internationalisation tab <ExternalLink className="h-3.5 w-3.5" /></a>, companies submit one application per activity per market and may run multiple target markets concurrently, subject to the shared <strong>S$100,000 annual company cap</strong>. Below are the five operational market-entry activities (all <strong>6-week application outcome</strong>), complemented by our <Link href="/strategic-brand-marketing-development" className="text-white font-bold underline hover:text-[#8F801B]">International Branding</Link> and International Financial &amp; Tax Planning capabilities (10-week outcome, SS 680 required).
            </p>
          </div>

          <div className="space-y-4">
            {edgeActivities.map((act) => (
              <div key={act.name} className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-heading font-bold text-white text-lg">
                    {act.name}
                  </h3>
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-[#8F801B]/20 text-[#C5A017] px-2.5 py-1 rounded border border-[#8F801B]/40">
                    {act.rate}
                  </span>
                </div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {act.outcome}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {act.scope}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed border-t border-white/10 pt-2">
                  <strong className="text-gray-300">Key conditions &amp; exclusions:</strong> {act.rules}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-slate-900/90 border border-white/10 text-sm text-gray-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <strong className="text-white">Need overseas brand architecture or cross-border tax structuring?</strong> Explore <Link href="/strategic-brand-marketing-development" className="text-[#C5A017] underline font-semibold">International Branding (70% SME / 50% non-SME)</Link> or pair overseas expansion with <Link href="/franchise-consultant" className="text-[#C5A017] underline font-semibold">Franchise &amp; Master Licensing</Link>.
            </div>
          </div>
        </section>

        {/* SECTION 3: CONSULTANT QUALIFICATION & GOVERNANCE */}
        <section className="bg-slate-900/90 p-6 md:p-8 rounded-2xl border border-[#8F801B]/40 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-[#C5A017]" />
            <span className="text-xs uppercase tracking-wider font-bold text-[#C5A017]">
              EnterpriseSG Governance &amp; Consultant Qualification Standard
            </span>
          </div>
          <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-white">
            How Enterprise Singapore Evaluates Internationalisation Consultants
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Enterprise Singapore does not maintain a closed list of endorsed internationalisation vendors—there is no restriction on where consultants are sourced from, provided they meet the activity&apos;s qualification requirements and have no related-party dealings with the applicant. Under EDGE:
          </p>
          <ul className="space-y-2 text-sm text-gray-300 list-disc pl-5">
            <li><strong>SS 680 Certification (SAC-accredited):</strong> Mandatory for <em>International Branding</em> and <em>International Financial and Tax Planning</em>.</li>
            <li><strong>Target-Market Vendor Track Record:</strong> Mandatory for the five operational internationalisation activities (Partnerships, Market Entry Setup, BD Staff Deployment, Overseas Marketing &amp; PR, Physical Trade Fairs).</li>
            <li><strong>Applicant-Only BGP Submission &amp; Audit:</strong> Applications must be submitted directly by the applicant company on the Business Grants Portal (Corppass)—third-party submission is prohibited. Claims are single and final, require an audit engagement letter from Enterprise Singapore&apos;s Panel of Auditors (claim submitted within 14 working days of signing), and are reimbursed via PayNow Corporate (14 working days) or GIRO (up to 8 weeks).</li>
          </ul>
          <p className="text-sm text-gray-300 leading-relaxed pt-1">
            <strong>FT Synergist satisfies both tracks</strong>—holding SAC-accredited SS 680 (SCMC) certification, demonstrable ASEAN/global market-entry execution, and registered IA/IP service provider status on <a href="https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd#ia-ip-services" target="_blank" rel="noopener noreferrer" className="text-white font-bold underline hover:text-[#8F801B] inline-flex items-center gap-1">IPOS GoBusiness IP Grow <ExternalLink className="h-3 w-3" /></a> (<em>Branding Strategy</em>, <em>Innovation Consultancy</em>, <em>IP Brokerage and Licensing</em>, and <em>IP Strategy Consulting</em>).
          </p>
        </section>

        {/* SECTION 4: REGIONAL MARKET ENTRY CASE STUDIES (3-CARD GRID) */}
        <section className="space-y-6">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
            3. Cross-Border Market Entry Track Record
          </h2>
          <p className="text-gray-300 leading-relaxed text-base">
            Selected ASEAN and global market-entry engagements across legal structuring, regulatory licensing, IP registration, and trade promotion:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {/* Card 1: Philippines Anti-Dummy JV */}
            <div
              onClick={() => handleOpenSprintModal('market-readiness')}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <Building2 className="h-8 w-8 text-[#8F801B] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-white text-lg mb-1">Singapore-based Commercial Group (Anonymized)</h3>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#8F801B] mb-3">Philippines Market Entry (Anti-Dummy Law)</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Architected a legally-compliant 30% Foreign / 70% Local Shareholding Joint Venture to navigate the Philippine Foreign Investment Negative List. Scope included drafting a bespoke Shareholders&apos; Agreement (SHA) to protect the Singapore parent entity&apos;s minority stake, voting rights, and profit repatriation channels, alongside IPOPHL trademark registration.
                </p>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                Review Philippines Setup <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </div>

            {/* Card 2: Anonymized Engineering Firm — Ho Chi Minh City, Vietnam */}
            <div
              onClick={() => handleOpenSprintModal('market-readiness')}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <MapPin className="h-8 w-8 text-[#8F801B] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-white text-lg mb-1">Singapore-based Engineering Firm (Anonymized)</h3>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#8F801B] mb-3">Ho Chi Minh City, Vietnam Market Entry</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Structured a phased market-entry and incorporation roadmap into Ho Chi Minh City, Vietnam. Scope covered legal vehicle evaluation, regulatory licensing sequencing, post-licensing corporate &amp; tax setup, and pre-emptive trademark protection—approved for Enterprise Singapore grant support.
                </p>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                Review Vietnam Roadmap <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </div>

            {/* Card 3: Sundat Australia Trade Promotion */}
            <div
              onClick={() => handleOpenSprintModal('market-readiness')}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <Rocket className="h-8 w-8 text-[#8F801B] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-white text-lg mb-1">Sundat (S) Pte Ltd</h3>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#8F801B] mb-3">Australia Trade Fair &amp; Market Promotion</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Provided direct operational support for overseas market promotion in Australia, including strategic framework for pitching and trade fair participation at Hannover Fairs Australia, ensuring international brand alignment and grant compliance.
                </p>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                Review Australia Strategy <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 5: QUANTIFIABLE TRACK RECORD */}
        <section className="space-y-6">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
            4. Quantifiable Valuation Lift Track Record
          </h2>
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-2 shadow-sm text-white">
            <QuantitativeSuccessTable />
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#8F801B]/20 border border-[#8F801B]/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-heading text-xl font-extrabold text-white">
                Structure up to 70% EDGE Internationalisation Co-Funding
              </h3>
              <p className="text-sm text-gray-300">
                Evaluate your target markets, PCBC roadmap, and S$100,000 annual cap allocation with a Principal Management Consultant.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={() => handleOpenSprintModal('market-readiness')}
                className="bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center"
              >
                Assess EDGE Eligibility
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <Link
                href="/contact"
                className="border border-[#8F801B] text-[#8F801B] hover:bg-[#8F801B] hover:text-white font-bold py-3.5 px-5 rounded-lg text-sm transition-all cursor-pointer inline-flex items-center justify-center group"
              >
                Quick Sprint Booking
                <ExternalLink className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6: FREQUENTLY ASKED QUESTIONS */}
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
                        Enterprise Singapore&apos;s Market Readiness Assistance (MRA) scheme ceased on 29 September 2026. From 30 September 2026 onwards, overseas expansion support is consolidated under the unified <Link href="/edge-grant" className="text-white font-bold underline hover:text-[#8F801B]">EDGE Grant</Link> (Internationalisation business area), offering up to 70% support for SMEs and up to 50% support for non-SMEs across seven prescribed internationalisation activities.
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
            De-Risk Your Overseas Market Entry Today.
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg">
            Structure legally-defensible, EDGE Grant-supported international expansion with a Principal Management Consultant, FT Synergist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleOpenSprintModal('market-readiness')}
              className="bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-4 px-10 rounded-lg text-lg transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center justify-center"
            >
              Book Internationalisation Sprint
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <Link
              href="/contact"
              className="border border-[#8F801B] text-[#8F801B] hover:bg-[#8F801B] hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all cursor-pointer inline-flex items-center justify-center group"
            >
              Quick Sprint Booking
              <ExternalLink className="ml-2 h-5 w-5 opacity-70 group-hover:opacity-100" />
            </Link>
          </div>
        </section>
      </main>

      {/* STICKY BAR FOR MOBILE */}
      {mounted && showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-[#8F801B]/40 px-4 py-3 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-[#8F801B]" />
            <span className="text-xs font-bold text-white uppercase tracking-wide">Internationalisation Sprint</span>
          </div>
          <button
            onClick={() => handleOpenSprintModal('market-readiness')}
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
                  <option value="market-readiness">Internationalisation &amp; Market Entry Sprint</option>
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

      {/* FOOTER INFRASTRUCTURE */}
      <footer className="w-full border-t border-neutral-800 bg-neutral-900/50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <CitationFootnotes />
        </div>
        <div className="w-full border-t border-neutral-800/40 py-6">
          <GeoSemanticAnchors
            primaryHeading="How does FT Synergist structure ASEAN & global market entry under EDGE Internationalisation?"
            primaryDescription="Operating as an Internationalisation Consultant in Singapore, FT Synergist applies its proprietary PCBC Model (Product, Channel, Brand, Culture) to structure legally-compliant overseas entities, pre-emptive IP registrations, vetted 1-to-1 partner matching, in-market BD deployment, and locally adapted PR under Enterprise Singapore's EDGE Grant Internationalisation framework."
          />
        </div>
      </footer>
    </div>
  );
}

