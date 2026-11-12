"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Script from "next/script";
import {
    ArrowRight,
    ExternalLink,
    ShieldCheck,
    TrendingUp,
    Globe,
    Lightbulb,
    CheckCircle2,
    FileCheck2,
    Building2,
    Scale,
    X,
    Calendar,
    Plus,
    Minus,
} from "lucide-react";
import type { CitationItem } from "@/app/components/CitationFootnotes";

// Dynamic imports with SSR disabled to prevent React Error 482 hydration crashes
const CitationFootnotes = dynamic(() => import("@/app/components/CitationFootnotes"), { ssr: false });
const GeoSemanticAnchors = dynamic(() => import("@/app/components/GeoSemanticAnchors"), { ssr: false });
const QuantitativeSuccessTable = dynamic(() => import("@/app/components/QuantitativeSuccessTable"), { ssr: false });

const ipCitations: CitationItem[] = [
    {
        id: 1,
        label: "IPOS GoBusiness IP Grow — Types of IA/IP Services",
        context: "Official taxonomy of 20 IA/IP service directories grouped into 4 key categories (Strategy and Management, Commercialisation and Financing, IP Search and Registration, and Others).",
        url: "https://ipgrow.gobusiness.gov.sg/types-of-ia-ip-services",
    },
    {
        id: 2,
        label: "IPOS GoBusiness IP Grow — IP Strategy Consulting",
        context: "Prescribed scope for identifying key IP assets, evaluating commercial risks and opportunities, and aligning IP management with business growth objectives.",
        url: "https://ipgrow.gobusiness.gov.sg/types-of-ia-ip-services/strategy-and-management/ip-strategy-consulting",
    },
    {
        id: 3,
        label: "IPOS GoBusiness IP Grow — IP Brokerage and Licensing",
        context: "Prescribed scope for monetising technology, brands, recipes, and know-how via F&B/enterprise franchising, brand licensing, technology licensing, and licensee negotiations.",
        url: "https://ipgrow.gobusiness.gov.sg/types-of-ia-ip-services/commercialisation-and-financing/ip-brokerage-licensing",
    },
    {
        id: 4,
        label: "IPOS GoBusiness IP Grow — Innovation Consultancy & Branding Strategy",
        context: "Prescribed scopes under Strategy and Management for R&D/business model innovation consultancy and brand architecture/narrative development.",
        url: "https://ipgrow.gobusiness.gov.sg/types-of-ia-ip-services/strategy-and-management",
    },
    {
        id: 5,
        label: "IPOS GoBusiness IP Grow Directory — FT Synergist Pte Ltd",
        context: "Official directory listing verifying FT Synergist Pte Ltd across 4 IA/IP scopes: Branding Strategy, Innovation Consultancy, IP Brokerage and Licensing, and IP Strategy Consulting.",
        url: "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd",
    },
    {
        id: 6,
        label: "Enterprise Singapore — EDGE Grant: Business Strategic Planning",
        context: "Official post-30 Sep 2026 EDGE Grant activity (up to 50% SME / 30% non-SME support) to formulate strategies and processes to improve business development, better manage intellectual property assets, and optimise operations.",
        url: "https://cp.enterprisesg.gov.sg/financial-support/edge-grant/business-strategy/business-strategic-planning",
    },
];

const faqItems = [
    {
        q: "How does an IP Strategy Consultant in Singapore differ from a Patent Agent, Trade Mark Agent, or IP Law Firm?",
        a: "Under the official IPOS GoBusiness IP Grow taxonomy, IP services are divided across four distinct categories: (1) Strategy and Management, (2) Commercialisation and Financing, (3) IP Search and Registration, and (4) Others. Patent Agents, Trade Mark Agents, and Registered Design Agents operate under 'IP Search and Registration' to conduct availability searches and prepare/file statutory applications. Law firms typically provide 'Contract Drafting', 'Dispute Resolution', and formal 'IP Due Diligence'. FT Synergist operates upstream in 'Strategy and Management' and 'Commercialisation and Financing'—identifying key intangible assets (technology, data, content, brands, and know-how), aligning them with business growth objectives, and structuring commercial licensing and franchise models that legal and filing counterparts then register and codify.",
    },
    {
        q: "Which specific IA/IP services is FT Synergist officially listed for on the IPOS GoBusiness IP Grow directory?",
        a: "On the official IPOS GoBusiness IP Grow Service Provider Directory (ft-synergist-pte-ltd), FT Synergist Pte Ltd is listed across four prescribed IA/IP service directories: (1) IP Strategy Consulting (Strategy and Management, project fees starting from S$15,000), (2) IP Brokerage and Licensing (Commercialisation and Financing, project fees starting from S$20,000), (3) Innovation Consultancy (Strategy and Management, project fees starting from S$15,000), and (4) Branding Strategy (Strategy and Management, project fees starting from S$8,000).",
    },
    {
        q: "How does Enterprise Singapore's EDGE Grant support IP management and business strategy projects after 30 September 2026?",
        a: "Effective 30 September 2026, Enterprise Singapore replaced EDG, MRA, and PSG with the unified EDGE Grant (capped at S$100,000 per company per financial year from 1 April to 31 March). Under the 'Business Strategy' business area, the official 'Business Strategic Planning' activity provides up to 50% support for SMEs and up to 30% support for non-SMEs to 'formulate strategies and processes to improve your business development, better manage your intellectual property assets and optimise operations.' Where an enterprise is adapting its brand strategy for a new overseas market, the 'International Branding' activity under 'Internationalisation' provides up to 70% support for SMEs and up to 50% for non-SMEs.",
    },
    {
        q: "Why is SS 680:2021 (TÜV SÜD SCMC) certification mandatory for EDGE Grant IP and Business Strategic Planning applications?",
        a: "Enterprise Singapore mandates that external management consultants engaged for EDGE Grant consultancy activities hold valid SS 680:2021 certification (such as the TÜV SÜD Singapore Certified Management Consultant, SCMC, or Registered Management Consultant, RMC). When submitting a Business Strategic Planning application on the Business Grants Portal (BGP), the applicant must upload the consultant's proposal, the vendor's SS 680 certificate, and the consultant's NRIC. Principal Management Consultant Frederick Tan holds active TÜV SÜD SCMC certification (License SCMC-1810-P0236).",
    },
    {
        q: "What deliverables and 1-year KPIs are required for an EDGE Business Strategic Planning engagement involving IP assets?",
        a: "Per Enterprise Singapore's official Business Strategic Planning scope, the project must be completed within 12 months and produce a comprehensive Business Strategy Report covering four mandatory components: (1) Internal analysis, (2) External analysis (including market size and competitor analysis), (3) Growth strategies (including business models, roadmaps, and management of intellectual property assets), and (4) Implementation recommendations. Applicants must also submit 1-year projections for expected revenue growth and new jobs created paying more than S$5,000/month. Regulatory compliance costs, standard operating procedure (SOP) updates, and GST are not supported.",
    },
    {
        q: "What does IP Brokerage and Licensing cover for Singapore SMEs?",
        a: "As defined by IPOS GoBusiness IP Grow under 'IP Brokerage and Licensing', a company's intellectual property—such as its technology, brand, recipes, and operational know-how—can be monetised beyond direct product sales through F&B and enterprise franchising, brand licensing, and technology licensing. As an IP brokerage and licensing advisor, FT Synergist acts as an intermediary to help businesses develop protective licensing structures, identify and evaluate suitable local or overseas licensees, and support commercial negotiations to generate recurring royalty streams.",
    },
    {
        q: "How does Innovation Consultancy connect to intangible asset creation?",
        a: "Under the IPOS GoBusiness IP Grow 'Innovation Consultancy' scope, innovation consultants work with businesses using data analysis and market research to identify untapped value and growth opportunities—from optimising research and development (R&D) processes to exploring new revenue streams, markets, or business models—and guide practical implementation so innovative concepts translate into commercial outcomes and protectable intangible assets.",
    },
    {
        q: "How are intangible assets and IP evaluated for fundraising, joint ventures, or M&A transactions?",
        a: "Under IPOS GoBusiness IP Grow's 'Valuation (with IA/IP considerations)' framework and International Valuation Standards (IVS), traditional financial valuations often understate off-balance-sheet intangible assets. Specialised IA/IP valuation assessments supplement financial comparables by evaluating how a company's IP mitigates business risks and enhances the stability of future cash flows across three recognised methodologies: the Income Approach (Discounted Cash Flow and Relief-from-Royalty), the Market Approach (comparable licensing and transaction multiples), and the Cost Approach (reproduction and replacement cost). FT Synergist prepares the upstream commercial IP inventory, licensing cash-flow models, and strategic roadmaps that work alongside independent valuation specialists and tax advisors during corporate transactions.",
    },
];

export default function IPConsultantPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("ip-strategy");
    const [showStickyBar, setShowStickyBar] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    // Locked Sprint Google Calendar Schedule Mapping
    const calendarUrls: Record<string, string> = {
        "ip-strategy":
            "https://calendar.google.com/calendar/appointments/schedules/AcZssZ10AGX_rEknl0J6WvWhScBFx2JXg6UZ0IKZIgHP7-sHFa0gy2WM_1KUR5eVStUACnbWx356zhbB?gv=true",
        "business-strategy":
            "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ06H3HVfxJ_qIDCDbf-kOxlt7ufKnq0lLsBwSDvnJ_sIkgaNV5_0cjxSDnw4p7iPWtsvR2kHfnw?gv=true",
        "strategic-brand":
            "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1KtH1PGLFwfzWLr0MYr_Q9O4FLI78uRKX8FpNv0Z7A-NHMgYz2aPOT841cBzNPM8CquHvgBeAV?gv=true",
        "innovation-productivity":
            "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3qr3SmjWpxiA6xfoBwO1uTYv4_dX4UkWMSWHn-yY2Z5X-EsSVJiiNeFfvowWLuxBrK0kLJYrTi?gv=true",
        "market-readiness":
            "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2bP4LZ2IUL4kFaw3NW0IYE78GyJIplsadYgcYz4hTWFTVirByvmt9n9rH47vM0W39IbCZqyZJw?gv=true",
        "franchise-licensing":
            "https://calendar.google.com/calendar/appointments/schedules/AcZssZ10AGX_rEknl0J6WvWhScBFx2JXg6UZ0IKZIgHP7-sHFa0gy2WM_1KUR5eVStUACnbWx356zhbB?gv=true",
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
                event_label: "ip_sprint_booking_click",
                value: 1,
            });
        }
    };

    const handleOpenSprintModal = (presetService: string = "ip-strategy") => {
        setSelectedService(presetService);
        setIsModalOpen(true);
        trackLead();
    };

    const handleLaunchCalendar = (e: React.FormEvent) => {
        e.preventDefault();
        const targetUrl = calendarUrls[selectedService] || calendarUrls["ip-strategy"];
        if (typeof window !== "undefined") {
            window.open(targetUrl, "_blank", "noopener,noreferrer");
        }
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-black text-white antialiased font-sans w-full overflow-x-hidden relative">
            {/* GEO / AI SCHEMA MARKUP FOR FAQPAGE & SERVICE */}
            <Script id="ip-faq-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "FAQPage",
                            "mainEntity": faqItems.map((item) => ({
                                "@type": "Question",
                                "name": item.q,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": item.a,
                                },
                            })),
                        },
                        {
                            "@type": "Service",
                            "name": "IP Consultant Singapore | IP Strategy & Advisory, Licensing & Commercialisation",
                            "serviceType": [
                                "IP Strategy Consulting",
                                "IP Brokerage and Licensing",
                                "Innovation Consultancy",
                                "Branding Strategy",
                            ],
                            "provider": {
                                "@type": "Organization",
                                "name": "FT Synergist Pte Ltd",
                                "url": "https://www.ftsynergist.com",
                            },
                            "areaServed": ["SG", "MY", "ID", "VN", "CN"],
                            "description":
                                "Intangible asset and intellectual property advisory for Singapore SMEs across IP Strategy Consulting, IP Brokerage and Licensing, Innovation Consultancy, and Branding Strategy.",
                        },
                    ],
                })}
            </Script>

            {/* HERO BANNER SECTION */}
            <header className="relative pt-36 pb-20 px-4 text-center max-w-5xl mx-auto space-y-8">
                {/* 1. EXACT MATCH H1 */}
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                    IP Consultant Singapore <br className="hidden sm:inline" />
                    <span className="text-[#8F801B] bg-clip-text text-transparent bg-gradient-to-r from-[#8F801B] to-yellow-200 text-2xl sm:text-3xl md:text-4xl block mt-3 font-semibold">
                        IP Strategy &amp; Advisory, Licensing &amp; Intangible Asset Management
                    </span>
                </h1>

                {/* 2. SUBHEADER */}
                <p className="max-w-3xl mx-auto text-base sm:text-xl text-gray-300 leading-relaxed font-normal">
                    Identify, protect, and commercialise your enterprise&apos;s intangible assets—from technology, data, and trade secrets to brands, recipes, and operating systems—across Singapore and ASEAN.
                </p>

                {/* 3. PRACTICE OVERVIEW BOX (UNDERSTATED INSTITUTIONAL TONE) */}
                <div className="p-6 md:p-8 bg-black/60 border border-[#8F801B]/50 rounded-xl max-w-3xl mx-auto text-left shadow-[0_0_30px_rgba(143,128,27,0.15)] backdrop-blur-md space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">
                            Practice Overview — IP Strategy &amp; Advisory
                        </h2>
                        <a
                            href="https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-[#8F801B] transition-colors font-mono"
                        >
                            <span>IPOS GoBusiness IP Grow Directory: FT Synergist Pte Ltd</span>
                            <ExternalLink className="h-3 w-3" />
                        </a>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-gray-200">
                        According to Brand Finance data cited by IPOS, global intangible asset value has grown 11% annually since 1996 to surpass physical assets at over US$74 trillion. From proprietary technology, software, and data to brand equity, recipes, and operational know-how, intellectual property (IP) and intangible assets (IA) are primary drivers of competitive advantage, recurring licensing revenue, and long-term enterprise value.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed text-gray-300">
                        Backed by over two decades of first-hand operator, master-franchisee, and management consulting experience scaling Singapore businesses into China, Malaysia, Indonesia, and Vietnam—including a successful commercial exit—<strong>FT Synergist</strong> advises SMEs and growth enterprises on <strong>IP Strategy Consulting</strong>, <strong>IP Brokerage and Licensing</strong>, <strong>Innovation Consultancy</strong>, and <strong>Branding Strategy</strong>.
                    </p>
                    <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-400">
                        <span>
                            Lead Advisor: <strong className="text-white">Frederick Tan</strong>, Principal Management Consultant, FT Synergist (<span className="font-mono text-[#C5A017]">SCMC-1810-P0236 | SS 680:2021</span>)
                        </span>
                        <Link
                            href="/edge-grant"
                            className="text-[#8F801B] hover:text-white font-semibold underline inline-flex items-center gap-1"
                        >
                            <span>EDGE Business Strategic Planning (Up to 50% SME)</span>
                            <ArrowRight className="h-3 w-3" />
                        </Link>
                    </div>
                </div>

                {/* 4. 2026 STATUTORY GRANT & IPOS DIRECTORY NOTICE */}
                <div className="max-w-3xl mx-auto p-5 rounded-xl bg-slate-900/90 border border-white/15 text-left space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#8F801B]/20 text-[#C5A017] border border-[#8F801B]/40 font-bold">
                            2026 EnterpriseSG EDGE Grant &amp; IPOS Alignment
                        </span>
                        <span className="text-xs text-gray-400 font-mono">Effective 30 September 2026</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        Effective 30 September 2026, the legacy EDG Core Capabilities track ceased and transitioned into the unified{" "}
                        <Link href="/edge-grant" className="text-white font-semibold underline hover:text-[#8F801B]">
                            Enterprise Singapore EDGE Grant
                        </Link>
                        . Under the <strong>Business Strategy</strong> business area, the official{" "}
                        <a
                            href="https://cp.enterprisesg.gov.sg/financial-support/edge-grant/business-strategy/business-strategic-planning"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline hover:text-[#8F801B]"
                        >
                            Business Strategic Planning
                        </a>{" "}
                        activity provides <strong>up to 50% support for SMEs (up to 30% for non-SMEs)</strong> to{" "}
                        <em>&ldquo;formulate strategies and processes to improve your business development, better manage your intellectual property assets and optimise operations.&rdquo;</em>{" "}
                        Where brand strategy is adapted for new overseas market entry,{" "}
                        <Link href="/strategic-brand-marketing-development" className="text-white underline hover:text-[#8F801B]">
                            International Branding
                        </Link>{" "}
                        under <strong>Internationalisation</strong> provides <strong>up to 70% support for SMEs (up to 50% for non-SMEs)</strong>.
                    </p>
                </div>

                {/* 5. HERO CTA BLOCK */}
                <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-4 pt-2">
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                        Ready to Structure and Commercialise Your Intangible Assets?
                    </h2>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
                        Schedule a 1-hour Scaling Up Sprint to evaluate your IP portfolio, licensing architecture, and EDGE Grant eligibility.
                    </p>
                    <div className="pt-2">
                        <button
                            onClick={() => handleOpenSprintModal("ip-strategy")}
                            className="bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center justify-center"
                        >
                            Book 60-Minute IP Strategy Sprint
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </div>
            </header>

            {/* MAIN EDITORIAL HOUSING */}
            <main className="max-w-4xl mx-auto px-6 pb-24 space-y-20">
                {/* SECTION 1: CORE IP STRATEGY & ADVISORY PILLARS */}
                <section className="space-y-6">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">
                            Core Advisory Capabilities
                        </span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            1. IP Strategy &amp; Advisory Pillars
                        </h2>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-base">
                        Our practice structures intangible asset protection, innovation roadmaps, and cross-border licensing across four core advisory pillars. Select any pillar below to schedule a diagnostic consultation:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Scope 01: IP Strategy Consulting */}
                        <div
                            onClick={() => handleOpenSprintModal("ip-strategy")}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <ShieldCheck className="h-8 w-8 text-[#8F801B] group-hover:scale-110 transition-transform" />
                                    <span className="text-[11px] font-mono text-gray-400 bg-black/50 px-2.5 py-1 rounded border border-white/10">
                                        Strategy &amp; Management • From S$15,000
                                    </span>
                                </div>
                                <h3 className="font-heading font-bold text-white text-xl mb-2">
                                    Scope 01: IP Strategy Consulting
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    Proper identification of key IP and intangible assets—across technology, data, content, trade secrets, and operational know-how—followed by a structured evaluation of the commercial risks and opportunities of each asset.
                                </p>
                                <ul className="text-xs text-gray-400 space-y-1.5 mb-6 list-disc list-inside">
                                    <li>Aligning the protection, management, and use of IP assets directly with corporate business goals</li>
                                    <li>Preventing loss or neglect of off-balance-sheet intangible assets</li>
                                    <li>Strengthening market defensibility to attract new partnerships and investment</li>
                                </ul>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                                Launch IP Strategy Consulting Sprint <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </div>

                        {/* Scope 02: IP Brokerage and Licensing */}
                        <div
                            onClick={() => handleOpenSprintModal("franchise-licensing")}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <Globe className="h-8 w-8 text-[#8F801B] group-hover:scale-110 transition-transform" />
                                    <span className="text-[11px] font-mono text-gray-400 bg-black/50 px-2.5 py-1 rounded border border-white/10">
                                        Commercialisation &amp; Financing • From S$20,000
                                    </span>
                                </div>
                                <h3 className="font-heading font-bold text-white text-xl mb-2">
                                    Scope 02: IP Brokerage and Licensing
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    Monetising your company&apos;s intellectual property—such as proprietary technology, brands, recipes, and operating systems—beyond direct product sales through structured licensing and franchising.
                                </p>
                                <ul className="text-xs text-gray-400 space-y-1.5 mb-6 list-disc list-inside">
                                    <li>F&amp;B and enterprise franchise models, brand licensing, and technology licensing structures</li>
                                    <li>Proactively sourcing required IP or identifying and evaluating suitable local and ASEAN licensees</li>
                                    <li>Supporting and facilitating commercial negotiations to conclude licensing transactions</li>
                                </ul>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                                Structure Licensing &amp; Brokerage Roadmap <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </div>

                        {/* Scope 03: Innovation Consultancy */}
                        <div
                            onClick={() => handleOpenSprintModal("innovation-productivity")}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <Lightbulb className="h-8 w-8 text-[#8F801B] group-hover:scale-110 transition-transform" />
                                    <span className="text-[11px] font-mono text-gray-400 bg-black/50 px-2.5 py-1 rounded border border-white/10">
                                        Strategy &amp; Management • From S$15,000
                                    </span>
                                </div>
                                <h3 className="font-heading font-bold text-white text-xl mb-2">
                                    Scope 03: Innovation Consultancy
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    Working closely with leadership teams using data analysis and primary market research to uncover untapped commercial value and systematic growth opportunities.
                                </p>
                                <ul className="text-xs text-gray-400 space-y-1.5 mb-6 list-disc list-inside">
                                    <li>Optimising research and development (R&amp;D) and product development processes</li>
                                    <li>Exploring new revenue streams, target markets, and scalable business models</li>
                                    <li>Guiding practical implementation to translate innovative concepts into tangible commercial outcomes</li>
                                </ul>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                                Explore Innovation Consultancy <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </div>

                        {/* Scope 04: Branding Strategy */}
                        <div
                            onClick={() => handleOpenSprintModal("strategic-brand")}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <TrendingUp className="h-8 w-8 text-[#8F801B] group-hover:scale-110 transition-transform" />
                                    <span className="text-[11px] font-mono text-gray-400 bg-black/50 px-2.5 py-1 rounded border border-white/10">
                                        Strategy &amp; Management • From S$8,000
                                    </span>
                                </div>
                                <h3 className="font-heading font-bold text-white text-xl mb-2">
                                    Scope 04: Branding Strategy
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    Developing a structured plan that defines how your business creates and promotes its desired identity—governing how customers perceive and experience your goods, services, and values.
                                </p>
                                <ul className="text-xs text-gray-400 space-y-1.5 mb-6 list-disc list-inside">
                                    <li>Structuring coherent brand architectures and comprehensive go-to-market strategies</li>
                                    <li>Crafting compelling brand narratives that resonate with target customer segments</li>
                                    <li>Growing brand equity, customer loyalty, revenue, and market share locally and overseas</li>
                                </ul>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                                View Branding Strategy &amp; International Branding <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: ENTERPRISE SINGAPORE EDGE GRANT MAPPING FOR IP & BUSINESS STRATEGY */}
                <section className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">
                            Statutory Grant Co-Funding Parameters (Post-30 Sep 2026)
                        </span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            2. Enterprise Singapore EDGE Grant Support for IP &amp; Strategic Planning
                        </h2>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-base">
                        Under Enterprise Singapore&apos;s unified{" "}
                        <Link href="/edge-grant" className="text-white font-semibold underline hover:text-[#8F801B]">
                            EDGE Grant
                        </Link>
                        , intellectual property management and corporate growth strategy are explicitly co-funded under the{" "}
                        <strong>Business Strategic Planning</strong> activity (and overseas brand expansion under{" "}
                        <strong>International Branding</strong>), subject to a shared <strong>S$100,000 annual grant cap</strong> per financial year (1 April to 31 March):
                    </p>

                    <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/60">
                        <table className="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead>
                                <tr className="border-b border-white/15 bg-white/5 text-gray-200">
                                    <th className="p-4 font-bold">EDGE Grant Parameter</th>
                                    <th className="p-4 font-bold">Business Strategic Planning (Business Strategy Tab)</th>
                                    <th className="p-4 font-bold">International Branding (Internationalisation Tab)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10 text-gray-300">
                                <tr>
                                    <td className="p-4 font-semibold text-white">Official EnterpriseSG Objective</td>
                                    <td className="p-4">
                                        <em>&ldquo;Formulate strategies and processes to improve your business development, better manage your intellectual property assets and optimise operations.&rdquo;</em>
                                    </td>
                                    <td className="p-4">
                                        <em>&ldquo;Develop a brand strategy to establish, refresh and differentiate your brand in a new overseas market, based on market and customer research.&rdquo;</em>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Support Level</td>
                                    <td className="p-4 font-semibold text-[#C5A017]">
                                        Up to 50% for SMEs / Up to 30% for non-SMEs
                                    </td>
                                    <td className="p-4 font-semibold text-[#C5A017]">
                                        Up to 70% for SMEs / Up to 50% for non-SMEs
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Typical Processing &amp; Duration</td>
                                    <td className="p-4">~10 weeks processing; complete within 12 months</td>
                                    <td className="p-4">~10 weeks processing; complete within 12 months</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Mandatory Consultant Accreditation</td>
                                    <td className="p-4">
                                        <strong>SS 680:2021 Certified Management Consultant</strong> (TÜV SÜD SCMC or RMC; certificate + NRIC submitted via BGP)
                                    </td>
                                    <td className="p-4">
                                        <strong>SS 680:2021 Certified Management Consultant</strong> (TÜV SÜD SCMC or RMC; certificate + NRIC submitted via BGP)
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Mandatory Deliverable Report</td>
                                    <td className="p-4">
                                        <strong>Business Strategy Report</strong> covering: (1) Internal analysis, (2) External analysis (market size &amp; competitor analysis), (3) Growth strategies (business models, roadmaps &amp; IP asset management), and (4) Implementation recommendations
                                    </td>
                                    <td className="p-4">
                                        <strong>Final Engagement Report</strong> covering brand research/audit, strategic brand blueprint (3–5 yr plan), and brand identity guidelines
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Mandatory 1-Year BGP Projections</td>
                                    <td className="p-4">
                                        (1) 1-year expected revenue growth projection; and (2) 1-year projection of new jobs created paying <strong>more than S$5,000/month</strong>
                                    </td>
                                    <td className="p-4">
                                        (1) 1-year expected overseas sales projection; and (2) 1-year projection of new jobs created paying <strong>more than S$5,000/month</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Non-Supported Costs (Verbatim)</td>
                                    <td className="p-4 text-gray-400">
                                        Regulatory compliance, standard operating procedure (SOP) updates, and GST
                                    </td>
                                    <td className="p-4 text-gray-400">
                                        Implementation of brand strategies, production of marketing collaterals, media buy, digital marketing ads, and GST
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* SECTION 3: THE 20-SERVICE IPOS TAXONOMY & UPSTREAM VS DOWNSTREAM BOUNDARY */}
                <section className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">
                            Governance &amp; Ecosystem Scope Boundary
                        </span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            3. Navigating the 4 Categories of IPOS GoBusiness IP Grow
                        </h2>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-base">
                        Effective intangible asset governance requires engaging the right specialist at each stage of the corporate lifecycle. Under the official{" "}
                        <a
                            href="https://ipgrow.gobusiness.gov.sg/types-of-ia-ip-services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline hover:text-[#8F801B]"
                        >
                            IPOS GoBusiness IP Grow taxonomy
                        </a>
                        , upstream management consulting and licensing brokerage are distinct from statutory filing agencies, law firms, and independent financial valuers:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-black/60 p-6 rounded-xl border border-[#8F801B]/40 space-y-3">
                            <div className="flex items-center gap-2 text-[#C5A017] font-bold text-sm uppercase tracking-wider">
                                <CheckCircle2 className="h-4 w-4 shrink-0" />
                                <span>Upstream Strategy &amp; Commercialisation (FT Synergist Registered Scopes)</span>
                            </div>
                            <ul className="text-xs sm:text-sm text-gray-300 space-y-2.5 leading-relaxed">
                                <li>
                                    <strong className="text-white">IP Strategy Consulting:</strong> Identifying key off-balance-sheet IA/IP assets, evaluating commercial risks and opportunities, and aligning IP roadmaps with corporate growth.
                                </li>
                                <li>
                                    <strong className="text-white">IP Brokerage and Licensing:</strong> Designing F&amp;B/enterprise franchise systems, brand licensing, and technology licensing frameworks; identifying and negotiating with prospective licensees.
                                </li>
                                <li>
                                    <strong className="text-white">Innovation Consultancy:</strong> Data analysis and market research to optimise R&amp;D processes and commercialise new revenue streams, markets, and business models.
                                </li>
                                <li>
                                    <strong className="text-white">Branding Strategy:</strong> Developing brand architecture, positioning, and customer narratives to grow brand equity and market share.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-black/60 p-6 rounded-xl border border-white/10 space-y-3">
                            <div className="flex items-center gap-2 text-gray-300 font-bold text-sm uppercase tracking-wider">
                                <Scale className="h-4 w-4 shrink-0 text-gray-400" />
                                <span>Specialist Filing, Legal &amp; Financial Counterparts on IP Grow</span>
                            </div>
                            <ul className="text-xs sm:text-sm text-gray-400 space-y-2.5 leading-relaxed">
                                <li>
                                    <strong className="text-gray-200">IP Search and Registration (7 Directories):</strong> Statutory filing and clearance executed by certified <em>Patent Agents</em>, <em>Trade Mark Agents</em>, and <em>Registered Design Agents</em>, alongside <em>Freedom-To-Operate (FTO)</em>, <em>IP Database</em>, <em>IP Intelligence and Search</em>, and <em>IP Watch</em> providers.
                                </li>
                                <li>
                                    <strong className="text-gray-200">Legal &amp; Training Services (&ldquo;Others&rdquo; — 3 Directories):</strong> Formal <em>Contract Drafting</em> (licences, NDAs, R&amp;D collaborations) and <em>Dispute Resolution</em> (infringement, mediation, arbitration, litigation) provided by law firms, plus <em>IP Training</em> institutes.
                                </li>
                                <li>
                                    <strong className="text-gray-200">Specialist Financing &amp; Tax Advisory:</strong> Independent <em>Valuation (with IA/IP considerations)</em> and <em>Tax Advisory (with IA/IP considerations)</em> provided by specialist valuation firms, accountants, and tax lawyers for M&amp;A, fundraising, and R&amp;D tax reliefs.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: IA/IP VALUATION CONSIDERATIONS FOR CORPORATE TRANSACTIONS */}
                <section className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">
                            Commercial Preparation for Fundraising, JVs &amp; M&amp;A
                        </span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            4. Preparing Your Intangible Assets for Valuation &amp; Licensing Transactions
                        </h2>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-base">
                        As highlighted under IPOS GoBusiness IP Grow&apos;s framework for{" "}
                        <a
                            href="https://ipgrow.gobusiness.gov.sg/types-of-ia-ip-services/commercialisation-and-financing/valuation-services-ip"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline hover:text-[#8F801B]"
                        >
                            Valuation (with IA/IP considerations)
                        </a>
                        , traditional valuation methods that look only at historical financials and market comparables often fail to capture the value and risk-mitigation profile of an IP-rich enterprise. Before engaging an independent valuer for a fundraise, joint venture, M&amp;A transaction, or technology/franchise licence, FT Synergist helps leadership teams structure the underlying commercial IP inventory and royalty models across the three recognised valuation frameworks:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-black/60 p-6 rounded-xl border border-white/10 space-y-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B]">Cash-Flow Predictability</span>
                            <h3 className="font-heading text-lg font-bold text-white">Income Approach (DCF &amp; Relief-from-Royalty)</h3>
                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                Assesses how registered trademarks, patents, and franchise/licensing agreements enhance the stability and predictability of future cash flows or save hypothetical third-party royalty payments.
                            </p>
                        </div>

                        <div className="bg-black/60 p-6 rounded-xl border border-white/10 space-y-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B]">Transactional Benchmarks</span>
                            <h3 className="font-heading text-lg font-bold text-white">Market Approach (Comparable Licensing &amp; Deals)</h3>
                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                Benchmarks commercial royalty rates, franchise fees, and territorial licensing structures against comparable arm&apos;s-length IP transactions in Singapore and ASEAN.
                            </p>
                        </div>

                        <div className="bg-black/60 p-6 rounded-xl border border-white/10 space-y-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B]">Asset Reconstruction</span>
                            <h3 className="font-heading text-lg font-bold text-white">Cost Approach (Reproduction &amp; Replacement)</h3>
                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                Documents the R&amp;D expenditure, software engineering, and proprietary workflow investments required to reproduce or replace early-stage intangible assets.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: VERIFIED CLIENT TESTIMONIALS FROM IPOS GOBUSINESS IP GROW & IP WEEK SHOWCASE */}
                <section className="space-y-8">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">
                            Verified Client Record on IPOS GoBusiness IP Grow
                        </span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            5. Published Client Outcomes &amp; IPOS IP Week 2026 Case Study
                        </h2>
                    </div>

                    {/* 3 Verbatim Testimonials from IPOS GoBusiness IP Grow Directory */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col justify-between space-y-4">
                            <div className="space-y-3">
                                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A017] font-bold">
                                    Robust Growth Strategy &amp; IP Monetisation
                                </span>
                                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                                    &ldquo;FT Synergist guided us in charting a robust 5-year growth strategy. Through detailed DVF market scanning, they identified the top 10 markets for our crop protection chemicals, helping us prioritize expansion and monetization of our IP. Their structured, data-driven approach transformed our business from traditional operations to a proactive, scalable model.&rdquo;
                                </p>
                            </div>
                            <div className="pt-3 border-t border-white/10 text-xs text-gray-400">
                                <strong className="text-white block">Paul Chen</strong>
                                Managing Director, Sundat (S) Pte Ltd
                            </div>
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col justify-between space-y-4">
                            <div className="space-y-3">
                                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A017] font-bold">
                                    IP-Driven Multi-Market Expansion
                                </span>
                                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                                    &ldquo;We engaged FT Synergist to unify our strategy for scaling our Vietnamese cuisine brand. Frederick and his team helped us spin off three hybrid models under our Saigon Legend Express brand and expand locally and overseas, with sustainability embedded in every step... building long-term capabilities in IP-driven expansion.&rdquo;
                                </p>
                            </div>
                            <div className="pt-3 border-t border-white/10 text-xs text-gray-400">
                                <strong className="text-white block">Thina Nguyen</strong>
                                Founder, Mei Le Pte Ltd
                            </div>
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col justify-between space-y-4">
                            <div className="space-y-3">
                                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A017] font-bold">
                                    Franchise &amp; Licensing Growth
                                </span>
                                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                                    &ldquo;We partnered with FT Synergist to scale our Ban Mian business and develop a 5-year roadmap for franchise growth. Frederick worked closely with us to ensure our central kitchen became a profit centre rather than the pitfalls of a cost centre... Within two years, our outlets grew from 4 to over 30.&rdquo;
                                </p>
                            </div>
                            <div className="pt-3 border-t border-white/10 text-xs text-gray-400">
                                <strong className="text-white block">Brandon Toh</strong>
                                Director, Branwood Holdings Pte Ltd
                            </div>
                        </div>
                    </div>

                    {/* IPOS IP Week 2026 Feature Callout */}
                    <div className="bg-slate-900/90 p-6 md:p-8 rounded-xl border border-[#8F801B]/40 shadow-xl space-y-6">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-[10px] uppercase tracking-wider font-bold bg-[#8F801B]/20 text-[#8F801B] px-3 py-1 rounded border border-[#8F801B]/40">
                                IPOS IP Week @ SG 2026 Showcase
                            </span>
                            <a
                                href="https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-yellow-400/90 font-mono hover:underline inline-flex items-center gap-1"
                            >
                                <span>Verify on IPOS GoBusiness IP Grow</span>
                                <ExternalLink className="h-3 w-3" />
                            </a>
                        </div>
                        <div className="bg-black/70 p-5 rounded-lg border border-neutral-700 flex flex-col sm:flex-row items-center gap-5">
                            <div className="relative w-full sm:w-44 aspect-[16/10] sm:aspect-square shrink-0 rounded overflow-hidden border border-neutral-700">
                                <img
                                    src="/insights/ipos-ip-week-2026/frederick-tan-rosemary-kwa-ip-week-panel.jpg"
                                    alt="Frederick Tan speaking at IPOS IP Week 2026 with Rosemary Kwa"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-2 text-left w-full">
                                <span className="text-[11px] font-mono text-[#8F801B] uppercase font-bold tracking-wider">
                                    Marina Bay Sands Panel Feature
                                </span>
                                <h3 className="text-white font-bold text-base hover:text-[#8F801B] transition-colors">
                                    <Link href="/insights/petale-tea-ip-growth-case-study">
                                        Unlocking Intangible Assets: How to Leverage Your IP to Grow Your Business by 400%
                                    </Link>
                                </h3>
                                <p className="text-xs text-gray-300 leading-relaxed">
                                    Presented at Marina Bay Sands with Rosemary Kwa (Founder, Pétale Tea). Explore how unbundling intangible assets, brand architecture, and predictive AI unlocked enterprise accounts (Google, Meta, Singapore Airlines) and regional licensing readiness.
                                </p>
                                <div className="pt-1">
                                    <Link
                                        href="/insights/petale-tea-ip-growth-case-study"
                                        className="inline-flex items-center text-xs font-bold text-[#8F801B] hover:text-white uppercase tracking-wider transition-colors"
                                    >
                                        Read Full IP Week Case Study <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-2 shadow-sm text-white">
                        <QuantitativeSuccessTable />
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
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* BOTTOM CONVERSION BANNER */}
                <section className="bg-slate-900 border-t border-b border-[#8F801B]/30 py-16 px-6 rounded-2xl text-center space-y-6">
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                        Structure Your IP &amp; Intangible Asset Roadmap
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg">
                        Work with an IPOS GoBusiness IP Grow listed management consultancy and TÜV SÜD SCMC certified advisor (SCMC-1810-P0236) to align your intangible assets with corporate growth and EDGE Grant support.
                    </p>
                    <button
                        onClick={() => handleOpenSprintModal("ip-strategy")}
                        className="bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-4 px-10 rounded-lg text-lg transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center justify-center"
                    >
                        Book 60-Minute IP Strategy Sprint
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </section>
            </main>

            {/* STICKY BAR FOR MOBILE */}
            {mounted && showStickyBar && (
                <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-[#8F801B]/40 px-4 py-3 flex items-center justify-between shadow-2xl">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-[#8F801B]" />
                        <span className="text-xs font-bold text-white uppercase tracking-wide">60-Min IP Sprint</span>
                    </div>
                    <button
                        onClick={() => handleOpenSprintModal("ip-strategy")}
                        className="bg-[#8F801B] text-white font-bold py-2 px-4 rounded text-xs transition-transform hover:scale-105 cursor-pointer flex items-center gap-1"
                    >
                        <span>Book Now</span>
                        <ArrowRight className="h-3 w-3" />
                    </button>
                </div>
            )}

            {/* MODAL WITH SPRINT SELECTION */}
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
                                    <option value="ip-strategy">IP Strategy &amp; Advisory Sprint (60 Mins)</option>
                                    <option value="business-strategy">Business Strategic Planning Sprint</option>
                                    <option value="strategic-brand">Brand Strategy &amp; International Branding Sprint</option>
                                    <option value="innovation-productivity">Innovation &amp; Productivity Sprint</option>
                                    <option value="market-readiness">Overseas Expansion (EDGE / MRA) Sprint</option>
                                    <option value="franchise-licensing">Franchise &amp; IP Licensing Sprint</option>
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

            {/* FOOTER INFRASTRUCTURE WITH VERIFIED CITATIONS & IP ANCHORS */}
            <footer className="w-full border-t border-neutral-800 bg-neutral-900/50">
                <div className="max-w-4xl mx-auto px-6 py-10">
                    <CitationFootnotes citations={ipCitations} />
                </div>
                <div className="w-full border-t border-neutral-800/40 py-6">
                    <GeoSemanticAnchors
                        primaryHeading="IP Consultant Singapore: IP Strategy Consulting, Brokerage & Licensing"
                        primaryDescription={
                            <>
                                FT Synergist is a Singapore management consultancy and{" "}
                                <Link href="/ip-consultant" className="text-white font-semibold underline hover:text-[#8F801B] transition-colors">
                                    IP Consultant Singapore
                                </Link>{" "}
                                advising SMEs and growth enterprises on IP Strategy Consulting, IP Brokerage and Licensing, Innovation Consultancy, and Branding Strategy. Led by Principal Management Consultant Frederick Tan (TÜV SÜD SCMC-1810-P0236 | SS 680:2021; listed on the IPOS GoBusiness IP Grow directory).
                            </>
                        }
                    />
                </div>
            </footer>
        </div>
    );
}
