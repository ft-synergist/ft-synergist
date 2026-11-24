"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Globe, ShieldCheck, Layers, TrendingUp, CheckCircle2, Quote, ArrowRight, Compass, Scale } from "lucide-react";
import CitationFootnotes, { type CitationItem } from "@/app/components/CitationFootnotes";
import GeoSemanticAnchors from "@/app/components/GeoSemanticAnchors";
import { PillarHero } from "@/components/pillar/PillarHero";
import { PillarFAQSection, type PillarFAQItem } from "@/components/pillar/PillarFAQSection";
import { PillarConversionBanner } from "@/components/pillar/PillarConversionBanner";
import { SprintBookingModal } from "@/components/pillar/SprintBookingModal";
import { SprintKey } from "@/components/pillar/sprintConfig";
import {
  PILLAR_MAIN,
  PILLAR_H2,
  PILLAR_BODY,
  PILLAR_CARD,
  PILLAR_GOVERNANCE_CARD,
} from "@/components/pillar/tokens";

const citationsData: CitationItem[] = [
  {
    id: 1,
    label: "Singapore Economic Development Board (EDB) — Expanding Your Business into Southeast Asia: A Practical Guide to Using Singapore as a Launchpad",
    context: "Singapore's 7-hour flight radius covering ASEAN's 650-million-person market, India, mainland China, and Australia; central regional hub architecture.",
    url: "https://www.edb.gov.sg/news-and-insights/expanding-your-business-into-southeast-asia-a-practical-guide-to-using-singapore-as-a-launchpad",
  },
  {
    id: 2,
    label: "Enterprise Singapore — EDGE Grant: International Branding (Internationalisation)",
    context: "Up to 70% support for SMEs and up to 50% for non-SMEs; 10-week outcome; SS 680 required; covers brand research & analysis, brand strategy, and brand identity refresh; excludes domestic-only branding and operational marketing campaigns.",
    url: "https://cp.enterprisesg.gov.sg/financial-support/edge-grant/internationalisation/international-branding",
  },
  {
    id: 3,
    label: "Enterprise Singapore — EDGE Grant: Overseas Marketing & Public Relations",
    context: "Up to 70% support for SMEs and up to 50% for non-SMEs; 6-week outcome; covers in-store promotions, roadshows, pop-ups, and market-adapted (not merely translated) media campaigns.",
    url: "https://cp.enterprisesg.gov.sg/financial-support/edge-grant/internationalisation/overseas-marketing-and-public-relations",
  },
  {
    id: 4,
    label: "Enterprise Singapore — EDGE Grant: Market Entry Setup & Identification of Potential Overseas Partnerships",
    context: "Up to 70% SME / 50% non-SME; 6-week outcome; covers overseas incorporation, IP protection, agreement drafting, and identifying overseas franchisees, distributors, and joint-venture partners.",
    url: "https://cp.enterprisesg.gov.sg/financial-support/edge-grant",
  },
  {
    id: 5,
    label: "IPOS GoBusiness IP Grow — Strategy and Management: Branding Strategy",
    context: "Official IPOS definition of Branding Strategy (brand architecture, comprehensive market strategy, compelling customer narrative) and FT Synergist Pte Ltd directory listing.",
    url: "https://ipgrow.gobusiness.gov.sg/types-of-ia-ip-services/strategy-and-management/ip-branding-strategy",
  },
];

const faqItems: PillarFAQItem[] = [
  {
    q: "What is the difference between International Branding and International Marketing for Singapore SMEs?",
    a: "International branding defines your brand architecture, value proposition, positioning, and identity guidelines so your business commands trust across foreign markets before spending on campaigns. International marketing is the downstream planning, pricing, promotion, and distribution of offers across borders—adapting channels, campaigns, and local media to each country. Under Enterprise Singapore's EDGE Grant, these are funded as two separate Internationalisation activities: International Branding (10-week outcome, requires an SAC-accredited SS 680 management consultant) and Overseas Marketing & Public Relations (6-week outcome).",
  },
  {
    q: "Why do SMEs use Singapore as a launchpad for ASEAN and Asia-Pacific expansion?",
    a: "Singapore's compact domestic market encourages SMEs to scale regionally early. As highlighted by the Singapore Economic Development Board (EDB), Singapore sits within a 7-hour flight radius of ASEAN's 650-million-person market, India, mainland China, and Australia. SMEs anchor headquarters, governance, brand standards, and intellectual property in Singapore while sequencing localised execution into Malaysia, Indonesia, Vietnam, Thailand, and the Philippines.",
  },
  {
    q: "Does the EDGE Grant fund marketing campaigns or websites under International Branding?",
    a: "No. Under Enterprise Singapore's EDGE Grant International Branding activity (up to 70% support for SMEs and up to 50% for non-SMEs), supported costs cover professional service fees for an SAC-accredited SS 680 management consultant across brand research and analysis, development of brand strategy, and development or refresh of brand identity for overseas markets. Domestic-only branding, collateral production, website development, social media management, and marketing campaigns are explicitly non-supported under International Branding—though adapted overseas campaigns may be applied for separately under Overseas Marketing & Public Relations.",
  },
  {
    q: "Who qualifies for EDGE Grant International Branding co-funding?",
    a: "To qualify under Enterprise Singapore's EDGE Grant, the applicant business entity must be registered and operating in Singapore on a for-profit basis, have at least 30% ownership (direct or indirect) by Singaporean(s) and/or Singapore PR(s) determined by ultimate individual ownership, and not have started work or made any payment or deposit prior to Business Grants Portal (BGP) submission. Support counts toward the shared S$100,000 annual grant cap per company (refreshed 1 April), and eligible internationalisation expenses may also qualify for Double Tax Deduction for Internationalisation (DTDi) net of the grant.",
  },
  {
    q: "How should SMEs protect their brand before entering ASEAN markets?",
    a: "Before launching overseas campaigns or appointing foreign distributors, SMEs should align brand architecture with trade mark availability and filing strategy in each target jurisdiction—since IP rights can only be enforced where they are registered. Under EDGE's Market Entry Setup activity (up to 70% SME / 50% non-SME, 6-week outcome), eligible companies can co-fund overseas IP protection and agreement drafting alongside specialist trade mark agents and legal counsel.",
  },
];

const fiveStepPlaybook = [
  {
    step: "Step 01",
    title: "Market Sequencing & Demand Validation",
    body: "Treat Singapore as a command centre and validation testbed rather than assuming domestic positioning transfers intact. Evaluate competitor white space, purchasing power, and buyer expectations in priority ASEAN markets (Malaysia, Indonesia, Vietnam, Thailand) before committing capital.",
    edgeTie: "EDGE International Branding — Area 1: Brand research and analysis (brand audit, competitor analysis, gap analysis).",
  },
  {
    step: "Step 02",
    title: "Brand Architecture & Localisation Beyond Translation",
    body: "Per IPOS GoBusiness IP Grow's Branding Strategy framework, a brand is more than a logo—it is how customers perceive and experience your goods and services. Keep core equity anchored in Singapore's governance and quality reputation while adapting value narratives, naming, and brand identity guidelines to local cultural norms.",
    edgeTie: "EDGE International Branding — Area 2 (Brand Strategy) & Area 3 (Brand Identity Refresh), SS 680 required.",
  },
  {
    step: "Step 03",
    title: "Channel, Licensing & Regional Partnership Strategy",
    body: "Choose the right cross-border entry mode—direct e-commerce, local distributors, joint ventures, or asset-light franchising and licensing. Equip local partners with clear brand governance manuals and sales enablement kits so channel execution does not dilute brand equity.",
    edgeTie: "EDGE Identification of Potential Overseas Partnerships (franchisees, distributors, JV partners; 6-week outcome, up to 70% SME).",
  },
  {
    step: "Step 04",
    title: "Adapted In-Market Promotion & Performance Tracking",
    body: "Match each APAC market's dominant search, social, and payment platforms rather than running a single domestic ad stack. Track acquisition cost and conversion by country, and verify regional fulfilment and after-sales readiness before scaling media spend.",
    edgeTie: "EDGE Overseas Marketing & Public Relations (in-store promotions, roadshows, pop-ups, adapted media; 6-week outcome, up to 70% SME).",
  },
  {
    step: "Step 05",
    title: "Trade Mark Protection, Compliance & EDGE Budget Readiness",
    body: "Verify trade mark and domain availability in target markets before spending on brand awareness, and structure cross-border licensing agreements early. Apply on the Business Grants Portal (BGP) via Corppass before starting work or paying any deposit—and layer DTDi tax deductions net of grant support.",
    edgeTie: "EDGE Market Entry Setup (overseas incorporation, IP protection, agreement drafting; 6-week outcome, up to 70% SME).",
  },
];

export default function InternationalBrandingLaunchpadPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<SprintKey>("strategic-brand");

  const handleOpenSprintModal = (presetService?: SprintKey) => {
    setSelectedService(presetService || "strategic-brand");
    setIsModalOpen(true);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "International Branding vs. International Marketing: How Singapore SMEs Use Singapore as an ASEAN Launchpad Under EDGE",
        description:
          "How Singapore SMEs separate International Branding (SS 680, up to 70% EDGE) from Overseas Marketing & PR when expanding across ASEAN from Singapore.",
        author: {
          "@type": "Person",
          name: "Frederick Tan",
          jobTitle: "Principal Management Consultant, FT Synergist",
          url: "https://www.ftsynergist.com/about",
        },
        publisher: {
          "@type": "Organization",
          name: "FT Synergist",
          url: "https://www.ftsynergist.com/",
        },
        datePublished: "2026-11-24",
        dateModified: "2026-11-24",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.ftsynergist.com/insights/international-branding-singapore-asean-launchpad",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased font-sans w-full overflow-x-hidden relative">
      <script
        id="intl-branding-insight-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PillarHero
        badge="International Branding & ASEAN Expansion · Updated Nov 2026"
        badgeIcon={<Globe className="h-3.5 w-3.5" />}
        h1Main="International Branding vs. International Marketing:"
        h1Accent="Using Singapore as an ASEAN Launchpad"
        subheader="Why Singapore SMEs must structure brand architecture before funding cross-border campaigns—and how Enterprise Singapore's EDGE Grant separates up to 70% International Branding from Overseas Marketing & PR."
        expertBoxLabel="Executive Definition — Frederick Tan, Principal Management Consultant, FT Synergist (SCMC-1810-P0236)"
        expertBoxContent={
          <>
            <strong>International branding</strong> builds the strategic brand architecture, value proposition, and identity guidelines that make your business recognisable and defensible across foreign markets. <strong>International marketing</strong> is the downstream planning, pricing, promotion, and distribution of goods or services across borders, adapted to local culture, regulations, and channels. Under Enterprise Singapore&apos;s <Link href="/edge-grant" className="text-white underline hover:text-[#C5A017]">EDGE Grant</Link>, both are supported under <strong>Internationalisation</strong> (up to 70% for SMEs / 50% for non-SMEs)—but under distinct rules, timelines, and consultant standards.
          </>
        }
        ctaHeading="Structuring Your Brand for ASEAN Expansion?"
        ctaSubheading="Evaluate your brand architecture, ASEAN sequencing, and 70% EDGE International Branding eligibility with an SS 680 certified Brand Consultant in Singapore."
        primaryCtaLabel="Book Brand Strategy Sprint"
        onOpenSprintModal={() => handleOpenSprintModal("strategic-brand")}
      />

      <main className={PILLAR_MAIN}>
        {/* SECTION 1: WHY SINGAPORE AS A LAUNCHPAD */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className={PILLAR_H2}>
              1. Why International Branding Matters for SMEs Using Singapore as a Launchpad
            </h2>
            <p className={PILLAR_BODY}>
              Singapore&apos;s compact domestic population means scaling revenue and achieving economies of scale requires looking beyond local borders early. According to the{" "}
              <a
                href="https://www.edb.gov.sg/news-and-insights/expanding-your-business-into-southeast-asia-a-practical-guide-to-using-singapore-as-a-launchpad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold underline hover:text-[#C5A017]"
              >
                Singapore Economic Development Board (EDB)
              </a>
              , Singapore sits within a <strong>7-hour flight radius of ASEAN&apos;s 650-million-person market</strong>, alongside India, mainland China, and Australia.
            </p>
            <p className={PILLAR_BODY}>
              However, regional proximity does not guarantee regional conversion. ASEAN spans distinct languages, regulatory regimes, purchasing power tiers, and digital ecosystems across Malaysia, Indonesia, Vietnam, Thailand, and the Philippines. Companies that treat overseas expansion as a simple translation exercise routinely burn media spend on tone-deaf campaigns. Engaging a certified{" "}
              <Link href="/strategic-brand-marketing-development" className="text-white font-bold underline hover:text-[#C5A017]">
                Brand Consultant Singapore
              </Link>{" "}
              establishes a coherent{" "}
              <Link href="/strategic-brand-marketing-development" className="text-white font-bold underline hover:text-[#C5A017]">
                Brand Strategy Singapore
              </Link>{" "}
              foundation—anchoring governance, quality credibility, and IP in Singapore while calibrating positioning for each target market.
            </p>
          </div>

          {/* THE HARD TRUTH CALLOUT */}
          <blockquote className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#8F801B]/20 via-neutral-900 to-black border-l-4 border-[#C5A017] shadow-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5A017] font-bold">
              <Quote className="h-4 w-4 text-[#C5A017]" />
              <span>The Hard Truth · FT Synergist</span>
            </div>
            <p className="font-heading text-xl md:text-2xl font-bold text-white leading-snug">
              &ldquo;Translating a Singapore brochure into Bahasa or Vietnamese is not international branding. It is the fastest way to subsidise your overseas competitors.&rdquo;
            </p>
            <p className="font-sans text-xs sm:text-sm text-gray-300">
              Without brand architecture and competitor gap analysis upfront, overseas ad spend buys impressions for a value proposition local buyers do not trust.
            </p>
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={PILLAR_CARD}>
              <Compass className="h-6 w-6 text-[#C5A017] mb-3" />
              <h3 className="font-heading font-bold text-white text-lg mb-2">Overcome Domestic Scale Limits</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Diversify revenue across multiple economies so a single domestic downturn or cost spike does not compress group margins.
              </p>
            </div>
            <div className={PILLAR_CARD}>
              <Layers className="h-6 w-6 text-[#C5A017] mb-3" />
              <h3 className="font-heading font-bold text-white text-lg mb-2">Build Brand as an Intangible Asset</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                As IPOS notes under <em>Branding Strategy</em>, a well-managed brand grows in commercial worth over time—creating pricing power, customer loyalty, and licensing leverage.
              </p>
            </div>
            <div className={PILLAR_CARD}>
              <ShieldCheck className="h-6 w-6 text-[#C5A017] mb-3" />
              <h3 className="font-heading font-bold text-white text-lg mb-2">De-Risk With EDGE &amp; DTDi</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Eligible Singapore enterprises can co-fund up to <strong>70% (SMEs) / 50% (non-SMEs)</strong> under EDGE Internationalisation and claim DTDi tax deductions net of grant support.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: EDGE GRANT SEPARATION TABLE */}
        <section className={PILLAR_GOVERNANCE_CARD}>
          <div className="flex flex-wrap items-center gap-2">
            <Scale className="h-5 w-5 text-[#C5A017]" />
            <span className="text-xs uppercase tracking-wider font-bold text-[#C5A017]">
              Enterprise Singapore EDGE Grant S.O.T. Alignment
            </span>
          </div>
          <h2 className={PILLAR_H2}>
            2. International Branding vs. International Marketing Under EDGE
          </h2>
          <p className={PILLAR_BODY}>
            Most generic articles lump branding and marketing together. In Singapore, confusing the two leads directly to rejected Business Grants Portal (BGP) claims. Following the 29 September 2026 cessation of EDG, MRA, and PSG, Enterprise Singapore separates strategy from campaign execution inside the <strong>EDGE Grant Internationalisation</strong> business area (all counting toward your shared <strong>S$100,000 annual company cap</strong>, refreshed 1 April):
          </p>

          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/15 text-[#C5A017] uppercase tracking-wider text-[11px]">
                  <th className="py-3 pr-4 font-bold">Dimension</th>
                  <th className="py-3 pr-4 font-bold">EDGE: International Branding</th>
                  <th className="py-3 font-bold">EDGE: Overseas Marketing &amp; PR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-gray-300">
                <tr>
                  <td className="py-3.5 pr-4 font-semibold text-white">Official Scope</td>
                  <td className="py-3.5 pr-4">Develop and refine brand strategy to strengthen value proposition for overseas customers (brand research &amp; analysis; brand strategy; brand identity refresh).</td>
                  <td className="py-3.5">Conduct marketing and PR activities in the target market (in-store promotions, roadshows, pop-ups, market-adapted online/offline media).</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold text-white">Support Level</td>
                  <td className="py-3.5 pr-4 text-[#C5A017] font-semibold">Up to 70% SME / Up to 50% Non-SME</td>
                  <td className="py-3.5 text-[#C5A017] font-semibold">Up to 70% SME / Up to 50% Non-SME</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold text-white">Application Outcome</td>
                  <td className="py-3.5 pr-4">10 weeks (12-month completion window)</td>
                  <td className="py-3.5">6 weeks</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold text-white">Consultant Requirement</td>
                  <td className="py-3.5 pr-4"><strong>SAC-accredited SS 680 certification required</strong> (e.g. TÜV SÜD SCMC, SBACC, IMCS).</td>
                  <td className="py-3.5">Relevant vendor track record; content must be adapted to the target market (not merely translated).</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold text-white">Key Exclusions</td>
                  <td className="py-3.5 pr-4">Domestic-only branding, collateral production, website development, social media management, marketing plans/campaigns, GST.</td>
                  <td className="py-3.5">Products not owned or officially represented (≥50%) by the applicant; unadapted direct translations; GST.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 pt-2">
            Need domestic corporate growth and IP asset management before expanding overseas? That sits under EDGE{" "}
            <Link href="/business-strategic-planning" className="text-white underline hover:text-[#C5A017]">
              Business Strategic Planning
            </Link>{" "}
            (up to 50% SME / 30% non-SME, SS 680 required).
          </p>
        </section>

        {/* SECTION 3: 5-STEP PLAYBOOK */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className={PILLAR_H2}>
              3. The 5-Step Singapore-to-ASEAN International Branding Playbook
            </h2>
            <p className={PILLAR_BODY}>
              Using Singapore as an APAC command centre works when brand architecture, channel structure, and IP protection move in sequence. Here is the five-stage operational framework FT Synergist applies alongside our PCBC Model (Product, Channel, Brand, Culture):
            </p>
          </div>

          <div className="space-y-4">
            {fiveStepPlaybook.map((item) => (
              <div key={item.step} className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#8F801B]/25 text-[#C5A017] border border-[#8F801B]/40">
                    {item.step}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{item.body}</p>
                <p className="text-xs text-[#C5A017] font-medium pt-1">
                  <CheckCircle2 className="h-3.5 w-3.5 inline mr-1.5" />
                  {item.edgeTie}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: IP & CROSS-BORDER PROOF */}
        <section className={PILLAR_GOVERNANCE_CARD}>
          <div className="flex flex-wrap items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[#C5A017]" />
            <span className="text-xs uppercase tracking-wider font-bold text-[#C5A017]">
              Connecting Brand Strategy, IP &amp; Regional Scaling
            </span>
          </div>
          <h2 className={PILLAR_H2}>
            4. Why Brand Strategy Must Be Paired With IP &amp; Channel Execution
          </h2>
          <p className={PILLAR_BODY}>
            FT Synergist Pte Ltd is listed on the official <strong>IPOS GoBusiness IP Grow Directory</strong> across four practice areas—<strong>Branding Strategy</strong>, <strong>IP Strategy Consulting</strong>, <strong>IP Brokerage and Licensing</strong>, and <strong>Innovation Consultancy</strong>—and led by TÜV SÜD SCMC-certified Principal Management Consultant Frederick Tan (<strong>SCMC-1810-P0236 | SS 680</strong>).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-black/50 p-5 rounded-xl border border-white/10 space-y-2">
              <h3 className="font-heading font-bold text-white text-base">Asset-Light Regional Scaling</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Explore how regional brand positioning pairs with localised production and partner ecosystems in our{" "}
                <Link href="/insights/wang-lao-ji-global-expansion-strategy" className="text-white underline hover:text-[#C5A017]">
                  Wang Lao Ji Global Expansion Strategy
                </Link>{" "}
                and{" "}
                <Link href="/insights/petale-tea-ip-growth-case-study" className="text-white underline hover:text-[#C5A017]">
                  Petale Tea IP Growth Case Study
                </Link>
                .
              </p>
            </div>
            <div className="bg-black/50 p-5 rounded-xl border border-white/10 space-y-2">
              <h3 className="font-heading font-bold text-white text-base">Explore Related Advisory Pillars</h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300">
                <li>
                  <Link href="/strategic-brand-marketing-development" className="text-[#C5A017] underline hover:text-white inline-flex items-center gap-1">
                    Brand Consultant Singapore &amp; International Branding <ArrowRight className="h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="/internationalisation" className="text-[#C5A017] underline hover:text-white inline-flex items-center gap-1">
                    ASEAN Market Entry &amp; EDGE Internationalisation <ArrowRight className="h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="/ip-consultant" className="text-[#C5A017] underline hover:text-white inline-flex items-center gap-1">
                    IP Strategy Consulting, Valuation &amp; Licensing <ArrowRight className="h-3 w-3" />
                  </Link>
                </li>
                <li>
                  <Link href="/franchise-consultant" className="text-[#C5A017] underline hover:text-white inline-flex items-center gap-1">
                    Franchise &amp; Master Licensing Expansion <ArrowRight className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 5: FAQ */}
        <PillarFAQSection
          heading="Frequently Asked Questions: International Branding & EDGE Grant"
          items={faqItems}
        />

        {/* SECTION 6: CITATIONS & CONVERSION */}
        <CitationFootnotes citations={citationsData} />

        <PillarConversionBanner
          variant="bottom"
          heading="Build Your ASEAN Brand Architecture Before You Spend on Overseas Campaigns."
          subheading="Structure an EDGE Grant-compliant International Branding roadmap (up to 70% SME support) with Frederick Tan, Principal Management Consultant, FT Synergist (SCMC-1810-P0236)."
          primaryCtaLabel="Book Brand Strategy Sprint"
          onOpenSprintModal={() => handleOpenSprintModal("strategic-brand")}
        />
      </main>

      <SprintBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedService}
        onSelectService={setSelectedService}
        stickyLabel="Brand Strategy Sprint"
        onOpenFromSticky={() => handleOpenSprintModal("strategic-brand")}
      />

      <footer className="w-full border-t border-neutral-800 bg-neutral-900/50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <GeoSemanticAnchors />
        </div>
      </footer>
    </div>
  );
}
