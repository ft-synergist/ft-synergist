"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import {
    ArrowRight,
    ExternalLink,
    ShieldCheck,
    TrendingUp,
    Globe,
    CheckCircle2,
    FileCheck2,
    Building2,
    Award,
    Layers,
    Compass,
    BarChart3,
    Users,
    Calendar,
    X,
    Plus,
    Minus,
} from "lucide-react";
import type { CitationItem } from "@/app/components/CitationFootnotes";

const CitationFootnotes = dynamic(() => import("@/app/components/CitationFootnotes"), { ssr: false });
const GeoSemanticAnchors = dynamic(() => import("@/app/components/GeoSemanticAnchors"), { ssr: false });

const calendarUrls: Record<string, string> = {
    "business-strategy": "https://calendar.google.com/calendar/appointments/schedules/AcZssZ10AGX_rEknl0J6WvWhScBFx2JXg6UZ0IKZIgHP7-sHFa0gy2WM_1KUR5eVStUACnbWx356zhbB?gv=true",
    "ip-strategy": "https://calendar.google.com/calendar/appointments/schedules/AcZssZ06H3HVfxJ_qIDCDbf-kOxlt7ufKnq0lLsBwSDvnJ_sIkgaNV5_0cjxSDnw4p7iPWtsvR2kHfnw?gv=true",
    "strategic-brand": "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1KtH1PGLFwfzWLr0MYr_Q9O4FLI78uRKX8FpNv0Z7A-NHMgYz2aPOT841cBzNPM8CquHvgBeAV?gv=true",
    "innovation-productivity": "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3qr3SmjWpxiA6xfoBwO1uTYv4_dX4UkWMSWHn-yY2Z5X-EsSVJiiNeFfvowWLuxBrK0kLJYrTi?gv=true",
    "market-readiness": "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2bP4LZ2IUL4kFaw3NW0IYE78GyJIplsadYgcYz4hTWFTVirByvmt9n9rH47vM0W39IbCZqyZJw?gv=true",
};

const citationsData: CitationItem[] = [
    {
        id: 1,
        label: "Enterprise Singapore — EDGE Grant: Business Strategic Planning",
        context: "Official post-30 Sep 2026 EDGE Grant activity under the Business Strategy area (up to 50% SME / 30% non-SME support; outcome in 10 weeks) to formulate strategies and processes to improve business development, better manage intellectual property assets, and optimise operations.",
        url: "https://cp.enterprisesg.gov.sg/financial-support/edge-grant/business-strategy/business-strategic-planning",
    },
    {
        id: 2,
        label: "Enterprise Singapore — EDGE Grant Overview & Business Strategy Area",
        context: "Unified grant framework replacing EDG, MRA, and PSG effective 30 September 2026, subject to an overall S$100,000 annual grant cap per company (refreshing 1 April).",
        url: "https://cp.enterprisesg.gov.sg/financial-support/edge-grant#tab=Business+Strategy",
    },
    {
        id: 3,
        label: "Enterprise Singapore — Business Excellence (BE) & Singapore Quality Class (SQC)",
        context: "National enterprise excellence framework assessing organisations across 7 pillars: Leadership, Customers, Strategy, People, Processes, Knowledge, and Results.",
        url: "https://www.enterprisesg.gov.sg/grow-your-business/boost-capabilities/quality-and-standards/business-excellence",
    },
    {
        id: 4,
        label: "TÜV SÜD PSB Singapore — Directory of Certified Management Consultants (SS 680:2021)",
        context: "Mandatory SAC-accredited management consultancy certification required for Enterprise Singapore EDGE Grant consultancy submissions (Frederick Tan: License SCMC-1810-P0236).",
        url: "https://www.tuvsud.com/en-sg/services/training/asmea/list-of-certified-consultants",
    },
    {
        id: 5,
        label: "IPOS GoBusiness IP Grow Directory — FT Synergist Pte Ltd",
        context: "Official IPOS GoBusiness IP Grow directory listing verifying FT Synergist Pte Ltd across IP Strategy Consulting, IP Brokerage and Licensing, Innovation Consultancy, and Branding Strategy.",
        url: "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd",
    },
    {
        id: 6,
        label: "Sundat (S) Pte. Ltd. — Executive Endorsement & Project Scaling Up Completion Summary (30 Apr 2025)",
        context: "Synthesized from the official Enterprise Singapore project completion endorsement by Mr. Paul Chen, Director, Sundat (S) Pte. Ltd., verifying capability transfer in AI-driven multi-market research, 3-Tier portfolio management (Australia, Bangladesh, Brazil, Vietnam, Taiwan), the 5Cs Market Entry Playbook, and Australian M&A target identification (archived on file with FT Synergist under client confidentiality).",
        url: "https://www.ftsynergist.com/business-strategic-planning#case-studies",
    },
    {
        id: 7,
        label: "TNT Surveillance Pte Ltd — Director Testimonial (15 Oct 2021) & Business Excellence Final Report (Jan 2021)",
        context: "Synthesized from the official testimonial by Mr. Joshua Tan, Director, TNT Surveillance Pte Ltd (UEN 201130424H) and audited Business Excellence assessment filings, verifying 5-year strategic roadmap execution, 10,000+ vehicle fleet scale, 72% installation manpower cost savings, and attainment of Enterprise Singapore's Business Excellence — Singapore Quality Class (SQC) award (archived on file with FT Synergist).",
        url: "https://www.ftsynergist.com/business-strategic-planning#case-studies",
    },
];

const faqItems = [
    {
        q: "Why did Enterprise Singapore rename 'Business Strategy Development' to 'Business Strategic Planning' under the EDGE Grant?",
        a: "When the legacy Enterprise Development Grant (EDG), Market Readiness Assistance (MRA), and Productivity Solutions Grant (PSG) ceased on 29 September 2026, Enterprise Singapore consolidated capability support into the unified EDGE Grant effective 30 September 2026. Under the 'Business Strategy' business area, the legacy EDG 'Business Strategy Development' pillar was standardised into the specific activity titled 'Business Strategic Planning' (https://cp.enterprisesg.gov.sg/financial-support/edge-grant/business-strategy/business-strategic-planning). While the statutory activity name is Business Strategic Planning, Enterprise Singapore explicitly defines its objective as formulating strategies and processes to 'improve your business development, better manage your intellectual property assets and optimise operations.'",
    },
    {
        q: "What are the funding support levels and grant caps for Business Strategic Planning under the EDGE Grant?",
        a: "Enterprise Singapore's Business Strategic Planning activity provides up to 50% co-funding support for eligible SMEs and up to 30% support for eligible non-SMEs on qualifying professional consultancy fees, disbursed on a reimbursement basis. Support received counts toward your company's overall annual EDGE Grant cap of S$100,000 per financial year (refreshed every 1 April). Applications have a stated processing outcome timeline of approximately 10 weeks, and approved projects must be completed within 12 months from the date of approval.",
    },
    {
        q: "What project deliverables are required by Enterprise Singapore for a Business Strategic Planning claim?",
        a: "At the completion of a Business Strategic Planning project, the applicant company must submit a comprehensive Business Strategy Report covering four mandatory components: (1) Internal Analysis — existing business drivers, challenges, strengths, weaknesses, and operating model; (2) External Analysis — market size and trend analysis, and competitor analysis; (3) Growth Strategies — business models, strategic roadmaps, and action plans; and (4) Recommendations — implementation roadmap, timeline, and measurable outcomes expected.",
    },
    {
        q: "What application documents and commercial projections must be submitted on the Business Grants Portal (BGP)?",
        a: "To apply for Business Strategic Planning on BGP via Corppass, applicant companies must submit: (1) the appointed vendor's detailed proposal, quotation, and valid SS 680 certification (e.g., TÜV SÜD SCMC-1810-P0236); (2) a projection of expected revenue growth resulting from the project for 1 year after project completion; and (3) a projection of new jobs created (both overall and Singaporeans/PRs only) with a gross monthly salary above S$5,000 for 1 year after project completion.",
    },
    {
        q: "Which costs are NOT supported under the EDGE Business Strategic Planning activity?",
        a: "Enterprise Singapore supports qualifying professional consultancy service costs incurred from the date of application upon approval. Non-supported costs explicitly include expenses relating to regulatory compliance, updates to Standard Operating Procedures (SOPs), and Goods and Services Tax (GST). Additionally, retrospective projects where work commenced or any payment/deposit was made prior to BGP application submission are strictly ineligible.",
    },
    {
        q: "Is 'Business Transition Planning' also available under the EDGE Business Strategy area?",
        a: "Enterprise Singapore lists two activities under the Business Strategy tab: 'Business Strategic Planning' (active) and 'Business Transition Planning'. Per Enterprise Singapore's official portal notice, details for Business Transition Planning are still being finalised and submissions for that specific activity are not considered at this time. All active corporate strategy, business model transformation, and IP asset management roadmaps should be structured under Business Strategic Planning.",
    },
];

export default function BusinessStrategicPlanningPage() {
    const [isStickyVisible, setIsStickyVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("business-strategy");
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsStickyVisible(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLaunchCalendar = (e: React.FormEvent) => {
        e.preventDefault();
        const targetUrl = calendarUrls[selectedService] || calendarUrls["business-strategy"];
        window.open(targetUrl, "_blank", "noopener,noreferrer");
        setIsModalOpen(false);
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
            },
        })),
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.ftsynergist.com/business-strategic-planning#service",
        name: "Business Strategic Planning & Enterprise Growth Strategy Consulting Singapore",
        alternateName: "Business Strategy Development Consulting Singapore",
        serviceType: [
            "Business Strategic Planning",
            "Business Strategy Development",
            "Corporate Growth Strategy & M&A Roadmapping",
            "Business Excellence & Singapore Quality Class (SQC) Advisory",
            "Intellectual Property Asset Management Strategy",
        ],
        provider: {
            "@type": "ProfessionalService",
            name: "FT Synergist Pte Ltd",
            url: "https://www.ftsynergist.com",
            email: "fredtan@ftsynergist.com",
            address: {
                "@type": "PostalAddress",
                streetAddress: "7 Temasek Boulevard, #12-07 Suntec Tower One",
                addressLocality: "Singapore",
                postalCode: "038987",
                addressCountry: "SG",
            },
            founder: {
                "@type": "Person",
                name: "Frederick Tan",
                jobTitle: "Principal Management Consultant, FT Synergist",
                hasCredential: {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "Singapore Certified Management Consultant (SCMC)",
                    recognizedBy: {
                        "@type": "Organization",
                        name: "TÜV SÜD PSB Singapore (SS 680:2021)",
                    },
                    identifier: "SCMC-1810-P0236",
                },
            },
        },
        areaServed: {
            "@type": "Country",
            name: "Singapore",
        },
        description:
            "Enterprise Singapore EDGE Grant Business Strategic Planning consultancy led by Principal Management Consultant Frederick Tan (TÜV SÜD SCMC-1810-P0236). Formulating corporate growth strategies, business models, intellectual property management roadmaps, and Singapore Quality Class (SQC) operational frameworks.",
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
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
                name: "EDGE Grant",
                item: "https://www.ftsynergist.com/edge-grant",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Business Strategic Planning",
                item: "https://www.ftsynergist.com/business-strategic-planning",
            },
        ],
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#8F801B] selection:text-white font-sans pb-24">
            <Script
                id="business-strategic-planning-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="business-strategic-planning-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="business-strategic-planning-breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* SERVICE SELECTOR MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="relative w-full max-w-md rounded-2xl border border-[#8F801B]/40 bg-zinc-900 p-6 sm:p-8 text-white shadow-2xl">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <div className="mb-6">
                            <span className="inline-block rounded-full bg-[#8F801B]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8F801B] mb-2">
                                Direct Principal Calendar
                            </span>
                            <h3 className="text-xl font-bold text-white">
                                Book 60-Minute Strategy Diagnostic
                            </h3>
                            <p className="mt-1 text-xs text-gray-400">
                                Select your primary advisory focus to open the dedicated Google Calendar schedule with Frederick Tan (SCMC-1810-P0236).
                            </p>
                        </div>
                        <form onSubmit={handleLaunchCalendar} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                                    Advisory Pillar
                                </label>
                                <select
                                    value={selectedService}
                                    onChange={(e) => setSelectedService(e.target.value)}
                                    className="w-full rounded-lg border border-white/20 bg-black px-4 py-3 text-sm text-white focus:border-[#8F801B] focus:outline-none"
                                >
                                    <option value="business-strategy">
                                        Business Strategic Planning (EDGE 50%/30%)
                                    </option>
                                    <option value="ip-strategy">
                                        IP Strategy &amp; Intangible Asset Commercialisation
                                    </option>
                                    <option value="strategic-brand">
                                        Strategic Brand &amp; International Branding (EDGE 70%/50%)
                                    </option>
                                    <option value="innovation-productivity">
                                        AI Digitalisation &amp; Process Redesign
                                    </option>
                                    <option value="market-readiness">
                                        Overseas Market Expansion &amp; M&amp;A
                                    </option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#8F801B] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#7a6c16] transition-all cursor-pointer"
                            >
                                <Calendar className="h-4 w-4" />
                                Launch Google Calendar Booking
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <main className="max-w-5xl mx-auto px-6 pt-16 space-y-16">
                {/* HERO SECTION */}
                <header className="space-y-6 border-b border-white/10 pb-12">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono uppercase tracking-widest bg-[#8F801B]/20 text-[#8F801B] rounded-full border border-[#8F801B]/40 font-bold">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            EnterpriseSG EDGE Grant: Business Strategy Area
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono uppercase tracking-widest bg-white/5 text-gray-300 rounded-full border border-white/15">
                            TÜV SÜD SCMC-1810-P0236 (SS 680:2021)
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono uppercase tracking-widest bg-emerald-500/15 text-emerald-400 rounded-full border border-emerald-500/30 font-bold">
                            Up to 50% SME / 30% Non-SME Support
                        </span>
                    </div>

                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                        Business Strategic Planning Consultant Singapore{" "}
                        <span className="block text-[#8F801B] mt-2 text-2xl md:text-3xl font-bold">
                            Enterprise Growth Roadmaps, IP Asset Alignment &amp; Operational Excellence
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed font-normal">
                        Effective <strong>30 September 2026</strong>, Enterprise Singapore unified the legacy EDG{" "}
                        <em>Business Strategy Development</em> pillar into the official{" "}
                        <Link
                            href="/edge-grant"
                            className="text-white font-semibold underline hover:text-[#8F801B] transition-colors"
                        >
                            EDGE Grant
                        </Link>{" "}
                        activity:{" "}
                        <a
                            href="https://cp.enterprisesg.gov.sg/financial-support/edge-grant/business-strategy/business-strategic-planning"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-semibold underline hover:text-[#8F801B] transition-colors"
                        >
                            Business Strategic Planning
                        </a>
                        . Led by <strong>Frederick Tan, Principal Management Consultant, FT Synergist</strong> (TÜV SÜD License{" "}
                        <strong>SCMC-1810-P0236</strong>), we partner with Singapore SMEs and mid-market enterprises to{" "}
                        <em>
                            &ldquo;formulate strategies and processes to improve your business development, better manage your intellectual property assets and optimise operations.&rdquo;
                        </em>
                    </p>

                    {/* STATUTORY SUMMARY STRIP */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                            <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-400">
                                Co-Funding Support
                            </span>
                            <span className="text-lg sm:text-xl font-extrabold text-[#8F801B]">
                                Up to 50% / 30%
                            </span>
                            <span className="block text-[11px] text-gray-400 mt-0.5">
                                SMEs (50%) • Non-SMEs (30%)
                            </span>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                            <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-400">
                                Approval Timeline
                            </span>
                            <span className="text-lg sm:text-xl font-extrabold text-white">
                                ~10 Weeks
                            </span>
                            <span className="block text-[11px] text-gray-400 mt-0.5">
                                Complete within 12 months
                            </span>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                            <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-400">
                                Annual Grant Cap
                            </span>
                            <span className="text-lg sm:text-xl font-extrabold text-white">
                                S$100,000 / Yr
                            </span>
                            <span className="block text-[11px] text-gray-400 mt-0.5">
                                Refreshes 1 April annually
                            </span>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                            <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-400">
                                Mandatory Standard
                            </span>
                            <span className="text-lg sm:text-xl font-extrabold text-emerald-400">
                                SS 680:2021
                            </span>
                            <span className="block text-[11px] text-gray-400 mt-0.5">
                                TÜV SÜD SCMC-1810-P0236
                            </span>
                        </div>
                    </div>

                    {/* HERO DIAGNOSTIC OFFER CARD */}
                    <div className="pt-4">
                        <div className="rounded-2xl border border-[#8F801B]/50 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 sm:p-8 space-y-5 shadow-2xl">
                            <div className="space-y-2">
                                <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">
                                    Executive Strategy Consultation
                                </span>
                                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                                    Complimentary 60-Minute Business Strategic Planning Diagnostic
                                </h2>
                                <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
                                    Evaluate your company&apos;s current growth bottlenecks, operating model, and cross-border expansion readiness against Enterprise Singapore&apos;s <strong>Business Strategic Planning</strong> framework before submitting on the Business Grants Portal (BGP).
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                <div className="bg-black/50 border border-white/10 rounded-lg p-3.5 flex items-start gap-3">
                                    <span className="text-xs font-mono font-bold text-[#8F801B] bg-[#8F801B]/15 px-2 py-0.5 rounded border border-[#8F801B]/30 shrink-0 mt-0.5">
                                        01
                                    </span>
                                    <p className="text-xs sm:text-sm text-gray-200 leading-snug">
                                        <strong>Internal &amp; Operating Model Diagnostic:</strong> Assess existing revenue drivers, departmental silos, and Business Excellence (SQC) readiness.
                                    </p>
                                </div>
                                <div className="bg-black/50 border border-white/10 rounded-lg p-3.5 flex items-start gap-3">
                                    <span className="text-xs font-mono font-bold text-[#8F801B] bg-[#8F801B]/15 px-2 py-0.5 rounded border border-[#8F801B]/30 shrink-0 mt-0.5">
                                        02
                                    </span>
                                    <p className="text-xs sm:text-sm text-gray-200 leading-snug">
                                        <strong>Market Sizing &amp; Competitor Gap Audit:</strong> Identify high-margin domestic and regional growth engines versus low-ROI legacy channels.
                                    </p>
                                </div>
                                <div className="bg-black/50 border border-white/10 rounded-lg p-3.5 flex items-start gap-3">
                                    <span className="text-xs font-mono font-bold text-[#8F801B] bg-[#8F801B]/15 px-2 py-0.5 rounded border border-[#8F801B]/30 shrink-0 mt-0.5">
                                        03
                                    </span>
                                    <p className="text-xs sm:text-sm text-gray-200 leading-snug">
                                        <strong>IP Asset &amp; Business Model Alignment:</strong> Connect proprietary know-how, brands, and technology to scalable commercial models.
                                    </p>
                                </div>
                                <div className="bg-black/50 border border-white/10 rounded-lg p-3.5 flex items-start gap-3">
                                    <span className="text-xs font-mono font-bold text-[#8F801B] bg-[#8F801B]/15 px-2 py-0.5 rounded border border-[#8F801B]/30 shrink-0 mt-0.5">
                                        04
                                    </span>
                                    <p className="text-xs sm:text-sm text-gray-200 leading-snug">
                                        <strong>EDGE Grant Scope &amp; KPI Structuring:</strong> Calibrate 1-year revenue growth and high-value job creation (&gt;S$5,000/mo) projections for BGP.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                                <a
                                    href={calendarUrls["business-strategy"]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#8F801B] rounded-lg hover:bg-[#7a6c16] transition-all shadow-lg shadow-[#8F801B]/25 cursor-pointer shrink-0"
                                >
                                    <Calendar className="mr-2 h-4 w-4" />
                                    Book 60-Minute Strategy Diagnostic
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="inline-flex items-center justify-center px-5 py-4 text-xs sm:text-sm font-semibold text-gray-200 bg-black/60 border border-white/20 rounded-lg hover:border-[#8F801B] hover:text-white transition-all cursor-pointer shrink-0"
                                >
                                    Switch Advisory Track
                                </button>
                                <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
                                    Direct consultation with <strong>Frederick Tan, Principal Management Consultant, FT Synergist</strong> (
                                    <a href="mailto:fredtan@ftsynergist.com" className="text-gray-200 underline hover:text-[#8F801B]">
                                        fredtan@ftsynergist.com
                                    </a>
                                    ).
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* SECTION 1: THE 4 MANDATORY ENTERPRISESG DELIVERABLES & 2 BGP PROJECTIONS */}
                <section className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">
                            Statutory Deliverable Architecture
                        </span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            What Enterprise Singapore Mandates in a Business Strategic Planning Project
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                            Under Enterprise Singapore&apos;s official{" "}
                            <a
                                href="https://cp.enterprisesg.gov.sg/financial-support/edge-grant/business-strategy/business-strategic-planning"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white underline hover:text-[#8F801B]"
                            >
                                Business Strategic Planning guidelines
                            </a>
                            , grant claims are evaluated against a formal <strong>Business Strategy Report</strong> containing four prescribed deliverables, supported by two mandatory 1-year commercial projections at application stage:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Deliverable 1 */}
                        <div className="bg-black/50 p-6 rounded-xl border border-white/10 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono uppercase tracking-wider text-[#8F801B] font-bold">
                                    Mandatory Deliverable 01
                                </span>
                                <Compass className="h-5 w-5 text-[#8F801B]" />
                            </div>
                            <h3 className="text-lg font-bold text-white">
                                1. Internal Analysis &amp; Operating Model Diagnostic
                            </h3>
                            <p className="text-xs text-gray-300 italic border-l-2 border-[#8F801B] pl-3">
                                EnterpriseSG Verbatim Scope: &ldquo;Existing business drivers, challenges, strengths, weaknesses, operating model.&rdquo;
                            </p>
                            <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside leading-relaxed">
                                <li>Face-to-face GAP diagnostics with senior leadership and department heads across the 7 Business Excellence (BE) pillars</li>
                                <li>Audit of unit economics, product/service margin contribution, and operational bottlenecks</li>
                                <li>Inventory of off-balance-sheet intellectual property (trademarks, proprietary software, trade secrets, and customer data)</li>
                            </ul>
                        </div>

                        {/* Deliverable 2 */}
                        <div className="bg-black/50 p-6 rounded-xl border border-white/10 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono uppercase tracking-wider text-[#8F801B] font-bold">
                                    Mandatory Deliverable 02
                                </span>
                                <BarChart3 className="h-5 w-5 text-[#8F801B]" />
                            </div>
                            <h3 className="text-lg font-bold text-white">
                                2. External Analysis: Market Sizing &amp; Competitor Benchmarking
                            </h3>
                            <p className="text-xs text-gray-300 italic border-l-2 border-[#8F801B] pl-3">
                                EnterpriseSG Verbatim Scope: &ldquo;Market size and trend analysis, competitor analysis.&rdquo;
                            </p>
                            <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside leading-relaxed">
                                <li>AI-augmented quantitative market sizing (TAM/SAM/SOM) across domestic and target overseas territories</li>
                                <li>Granular competitor benchmarking across pricing, channel distribution, regulatory barriers, and value propositions</li>
                                <li>Regulatory &amp; macro-industry trend mapping (e.g., LTA master plans, APVMA/HSA licensing hurdles, 5G/AI adoption shifts)</li>
                            </ul>
                        </div>

                        {/* Deliverable 3 */}
                        <div className="bg-black/50 p-6 rounded-xl border border-white/10 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono uppercase tracking-wider text-[#8F801B] font-bold">
                                    Mandatory Deliverable 03
                                </span>
                                <TrendingUp className="h-5 w-5 text-[#8F801B]" />
                            </div>
                            <h3 className="text-lg font-bold text-white">
                                3. Growth Strategies: Business Models &amp; Strategic Roadmaps
                            </h3>
                            <p className="text-xs text-gray-300 italic border-l-2 border-[#8F801B] pl-3">
                                EnterpriseSG Verbatim Scope: &ldquo;Business models, strategic roadmaps, action plans.&rdquo;
                            </p>
                            <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside leading-relaxed">
                                <li>Multi-speed portfolio architecture separating primary growth engines, strategic operational hubs, and cash-generation markets</li>
                                <li>Market entry mode selection (Acquisition/M&amp;A, Joint Ventures, Master Franchising, or Direct Co-Creation)</li>
                                <li>Deployment of Desirability-Viability-Feasibility (DVF) and FT Synergist&apos;s repeatable <strong>&ldquo;5Cs&rdquo; Execution Playbook</strong> (<em>Choose, Comprehend, Connect, Customize, Compete</em>)</li>
                            </ul>
                        </div>

                        {/* Deliverable 4 */}
                        <div className="bg-black/50 p-6 rounded-xl border border-white/10 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono uppercase tracking-wider text-[#8F801B] font-bold">
                                    Mandatory Deliverable 04
                                </span>
                                <FileCheck2 className="h-5 w-5 text-[#8F801B]" />
                            </div>
                            <h3 className="text-lg font-bold text-white">
                                4. Recommendations: Implementation Roadmap &amp; Governance
                            </h3>
                            <p className="text-xs text-gray-300 italic border-l-2 border-[#8F801B] pl-3">
                                EnterpriseSG Verbatim Scope: &ldquo;Implementation roadmap and timeline, measurable outcomes expected.&rdquo;
                            </p>
                            <ul className="text-xs text-gray-400 space-y-1.5 list-disc list-inside leading-relaxed">
                                <li>12-to-36 month phased execution Gantt chart with departmental KPIs, quarterly/weekly planning cadences, and capital allocation</li>
                                <li>Leadership alignment workshops to cascade updated Vision, Mission, and Values (VMV) across all operating units</li>
                                <li>Preparation for national institutional benchmarks such as <strong>Enterprise Singapore Business Excellence — Singapore Quality Class (SQC)</strong></li>
                            </ul>
                        </div>
                    </div>

                    {/* Mandatory BGP Application Projections Banner */}
                    <div className="bg-black/70 border border-[#8F801B]/40 rounded-xl p-6 space-y-3">
                        <div className="flex items-center gap-2 text-[#8F801B] font-bold text-xs uppercase tracking-wider">
                            <Users className="h-4 w-4 shrink-0" />
                            <span>Mandatory BGP Application Documents &amp; 1-Year Commercial Projections</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            Before submitting a <strong>Business Strategic Planning</strong> application on the Business Grants Portal (BGP), Enterprise Singapore requires three mandatory submission components:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                <p className="text-xs font-bold text-white mb-1">1. Certified Consultant Proposal</p>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Vendor&apos;s detailed consultancy proposal, itemised quotation, and valid <strong>SS 680 certification</strong> (Frederick Tan: TÜV SÜD License <strong>SCMC-1810-P0236</strong>).
                                </p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                <p className="text-xs font-bold text-white mb-1">2. 1-Year Revenue Growth Projection</p>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Quantified projection of expected top-line revenue growth directly attributable to the project for <strong>1 year after project completion</strong>.
                                </p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                <p className="text-xs font-bold text-white mb-1">3. High-Value Job Creation (&gt;S$5,000/mo)</p>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Projection of new jobs created (overall and Singaporeans/PRs only) with <strong>gross monthly salary above S$5,000</strong> for 1 year after completion.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: REASONS TO BELIEVE & SYNTHESIZED ENTERPRISE CASE STUDIES */}
                <section id="case-studies" className="space-y-10">
                    <div className="space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">
                            Reasons to Believe • Verified Advisory Track Record
                        </span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            Why Singapore Enterprise Leaders Trust FT Synergist
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
                            Enterprise leaders engage FT Synergist for hands-on boardroom advisory that translates Enterprise Singapore frameworks into commercial execution, capability transfer, and national recognition. Below are synthesized executive endorsements and verified project outcomes referenced in our institutional evidence registry.
                        </p>
                    </div>

                    {/* SYNTHESIZED EXECUTIVE TESTIMONIALS (REASONS TO BELIEVE) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-[#8F801B]/50 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 sm:p-7 space-y-4 shadow-xl flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8F801B] font-bold">
                                        Executive Testimonial • Global Portfolio &amp; M&amp;A
                                    </span>
                                    <span className="text-xs font-mono text-[#8F801B]">[Citation 6]</span>
                                </div>
                                <blockquote className="text-sm sm:text-base text-gray-200 italic leading-relaxed border-l-2 border-[#8F801B] pl-4">
                                    &ldquo;The engagement with FT Synergist has been transformative. Stepping back to assess our business strategically, we have developed an ambitious global roadmap and have equipped our management team with invaluable new capabilities in strategic planning and data-driven analysis.&rdquo;
                                </blockquote>
                            </div>
                            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                                <div>
                                    <strong className="text-white block text-sm">Paul Chen</strong>
                                    <span>Director, Sundat (S) Pte. Ltd.</span>
                                </div>
                                <span className="text-[11px] text-gray-400">Agrochemical Manufacturing</span>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 sm:p-7 space-y-4 shadow-xl flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                                        Executive Testimonial • Singapore Quality Class (SQC)
                                    </span>
                                    <span className="text-xs font-mono text-emerald-400">[Citation 7]</span>
                                </div>
                                <blockquote className="text-sm sm:text-base text-gray-200 italic leading-relaxed border-l-2 border-emerald-500 pl-4">
                                    &ldquo;Frederick quickly built trust with our senior leadership, distilling the Business Excellence framework into practical examples our team could immediately contextualise. His consulting expertise and decisive guidance helped us navigate evolving business continuity plans and attain the Singapore Quality Class award from Enterprise Singapore.&rdquo;
                                </blockquote>
                            </div>
                            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                                <div>
                                    <strong className="text-white block text-sm">Joshua Tan</strong>
                                    <span>Director, TNT Surveillance Pte Ltd</span>
                                </div>
                                <span className="text-[11px] text-gray-400">AI Mobility &amp; Telematics</span>
                            </div>
                        </div>
                    </div>

                    {/* CASE STUDY 1: SUNDAT (S) PTE. LTD. */}
                    <div className="rounded-2xl border border-[#8F801B]/40 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 sm:p-8 space-y-6 shadow-xl">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                            <div className="space-y-1.5">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-wider bg-[#8F801B]/20 text-[#8F801B] rounded border border-[#8F801B]/40 font-bold">
                                        Case Study 01 • Agrochemical Manufacturing &amp; Global M&amp;A
                                    </span>
                                    <span className="px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-wider bg-white/10 text-gray-300 rounded">
                                        Completed Mar – Apr 2025 [6]
                                    </span>
                                </div>
                                <h3 className="text-2xl font-extrabold text-white">
                                    Sundat (S) Pte. Ltd. — &ldquo;Project Scaling Up&rdquo; Global Portfolio &amp; M&amp;A Strategy
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-400">
                                    Singapore-headquartered global agrochemical manufacturer operating a core ASEAN manufacturing hub in Vietnam and innovation subsidiary in Taiwan.
                                </p>
                            </div>
                            <div className="shrink-0 bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-right">
                                <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-400">
                                    Target Tier-1 Market Quantified
                                </span>
                                <span className="text-xl font-extrabold text-[#8F801B]">
                                    ~USD 5.65B
                                </span>
                                <span className="block text-[11px] text-gray-300">
                                    Australian Agrochemical Market
                                </span>
                            </div>
                        </div>

                        {/* Strategic Mandate vs FT Synergist Architecture */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-black/50 p-5 rounded-xl border border-white/10 space-y-3">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-200">
                                    Strategic Mandate &amp; Institutional Foundations
                                </h4>
                                <ul className="text-xs text-gray-300 space-y-2 leading-relaxed">
                                    <li>
                                        <strong className="text-white">Transitioning from Export Volume to Brand &amp; Portfolio Equity:</strong> Building on Sundat&apos;s deep regulatory expertise and the cost advantages of its Vietnam manufacturing hub to establish defensible brand equity and sustainable agriculture differentiation across international markets.
                                    </li>
                                    <li>
                                        <strong className="text-white">Cross-Departmental Vision &amp; Knowledge Alignment:</strong> Embedding the 7 pillars of Enterprise Singapore&apos;s <strong>Business Excellence Framework</strong> (<em>Leadership, Customers, Strategy, Process, People, Knowledge, Results</em>) to unify leadership direction and institutionalise cross-market learning.
                                    </li>
                                    <li>
                                        <strong className="text-white">Precision Capital &amp; Resource Allocation:</strong> Replacing uniform export allocation with a tiered global portfolio structure tailored to each country&apos;s regulatory profile and return potential.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-black/50 p-5 rounded-xl border border-[#8F801B]/30 space-y-3">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-[#8F801B]">
                                    FT Synergist Advisory &amp; Capability Transfer
                                </h4>
                                <ul className="text-xs text-gray-300 space-y-2 leading-relaxed">
                                    <li>
                                        <strong className="text-white">AI-Driven 5-Market Quantitative Research:</strong> Evaluated <strong>Australia, Brazil, Vietnam, Bangladesh, and Taiwan</strong> using AI data synthesis, <strong>DVF (Desirability, Viability, Feasibility)</strong>, and <strong>Portfolio Management</strong> frameworks.
                                    </li>
                                    <li>
                                        <strong className="text-white">Acquisition-Led Australian Entry (~USD 5.65B Market):</strong> Demonstrated that APVMA registration timelines favored an M&amp;A acquisition entry over organic registration—connecting Sundat with Australian business brokers through FT Synergist to evaluate acquisition targets.
                                    </li>
                                    <li>
                                        <strong className="text-white">Codified &ldquo;5Cs&rdquo; Market Entry Playbook:</strong> Equipped management with a repeatable 5Cs execution framework (<em>Choose, Comprehend, Connect, Customize, Compete</em>) and a 2-day Mission, Vision &amp; Values (MVV) leadership alignment retreat.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Sundat 5 Deliverables Execution Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs">
                                <thead>
                                    <tr className="border-b border-white/15 bg-black/60 text-gray-300 font-mono uppercase">
                                        <th className="py-3 px-4">Deliverable Milestone</th>
                                        <th className="py-3 px-4">Completion Date</th>
                                        <th className="py-3 px-4">Verified Strategic Output &amp; Capability Transferred</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10 text-gray-300">
                                    <tr>
                                        <td className="py-3 px-4 font-bold text-white">1. Qualitative GAP Analysis</td>
                                        <td className="py-3 px-4 font-mono text-[#8F801B]">18 Mar 2025</td>
                                        <td className="py-3 px-4">Executive sessions with management &amp; key appointment holders; embedded 7-pillar Business Excellence Framework across operations.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-bold text-white">2. AI Quantitative Market Research</td>
                                        <td className="py-3 px-4 font-mono text-[#8F801B]">02 Apr 2025</td>
                                        <td className="py-3 px-4">Quantified Australia (~USD 5.65B), Brazil, Vietnam, Bangladesh, and Taiwan using AI market synthesis, DVF, and Portfolio Management.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-bold text-white">3. Competitive SWOT Analysis</td>
                                        <td className="py-3 px-4 font-mono text-[#8F801B]">04 Apr 2025</td>
                                        <td className="py-3 px-4">Leveraged Vietnam manufacturing hub advantages &amp; regulatory speed to build a defensible, brand-driven agrochemical growth model.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-bold text-white">4. 3-Tier Bring-to-Market Strategy</td>
                                        <td className="py-3 px-4 font-mono text-[#8F801B]">15 Apr 2025</td>
                                        <td className="py-3 px-4"><strong>Tier 1 Growth Engines:</strong> Australia (M&amp;A), Bangladesh (Brand Equity), Brazil (BD) • <strong>Tier 2 Strategic Hubs:</strong> Vietnam (ASEAN hub), Taiwan (Innovation &amp; Cash).</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-bold text-white">5. New Market Entry Playbook</td>
                                        <td className="py-3 px-4 font-mono text-[#8F801B]">28 Apr 2025</td>
                                        <td className="py-3 px-4">Codified <strong>5Cs Execution Process</strong>, entry mode menu (M&amp;A, JVs, Strategic Alliances), Australian broker target search, and 2-day MVV Strategic Retreat.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Executive Endorsement Quote Card for Sundat */}
                        <div className="bg-black/60 p-5 rounded-xl border-l-4 border-[#8F801B] space-y-2">
                            <blockquote className="text-xs sm:text-sm text-gray-200 italic leading-relaxed">
                                &ldquo;The engagement with FT Synergist has been transformative. Stepping back to assess our business strategically, we have developed an ambitious global roadmap and have equipped our management team with invaluable new capabilities in strategic planning and data-driven analysis.&rdquo;
                            </blockquote>
                            <div className="text-xs text-gray-400 pt-1 flex items-center justify-between">
                                <span className="font-bold text-white">— Paul Chen, Director, Sundat (S) Pte. Ltd.</span>
                                <span className="font-mono text-[#8F801B]">[Citation 6]</span>
                            </div>
                        </div>
                    </div>

                    {/* CASE STUDY 2: TNT SURVEILLANCE PTE LTD */}
                    <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 sm:p-8 space-y-6 shadow-xl">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                            <div className="space-y-1.5">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-wider bg-[#8F801B]/20 text-[#8F801B] rounded border border-[#8F801B]/40 font-bold">
                                        Case Study 02 • AI Fleet Telematics, IP Co-Creation &amp; Singapore Quality Class
                                    </span>
                                    <span className="px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-wider bg-emerald-500/15 text-emerald-400 rounded border border-emerald-500/30 font-bold">
                                        Awarded EnterpriseSG Singapore Quality Class (SQC) [7]
                                    </span>
                                </div>
                                <h3 className="text-2xl font-extrabold text-white">
                                    TNT Surveillance Pte Ltd (TNTS) — 5-Year Strategic Roadmap &amp; Business Excellence Transformation
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-400">
                                    Singapore intelligent transport safety and AI video telematics provider (67 staff across 7 departments; ISO 9001:2015, BizSAFE Level 4, BCA ME04, and Government EPPU S9 tender grade up to S$30M).
                                </p>
                            </div>
                            <div className="shrink-0 bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-right">
                                <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-400">
                                    Equipped Fleet Scale
                                </span>
                                <span className="text-xl font-extrabold text-[#8F801B]">
                                    10,000+ Vehicles
                                </span>
                                <span className="block text-[11px] text-gray-300">
                                    50% YoY Growth (3,000+ in 2015)
                                </span>
                            </div>
                        </div>

                        {/* Visual Banner Image */}
                        <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10">
                            <Image
                                src="/ft-synergist-tnt-surveillance-business-strategy.png"
                                alt="Frederick Tan guiding TNT Surveillance Pte Ltd leadership on Business Strategic Planning and Singapore Quality Class (SQC)"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-5">
                                <p className="text-xs sm:text-sm text-gray-200 max-w-3xl">
                                    <strong>Strategic Repositioning (June 2019 – Jan 2021):</strong> Guided by Frederick Tan, TNTS evolved from a regional CCTV hardware installer into an AI-driven mobility safety platform aligned with the <strong>Land Transport Authority (LTA) Land Transport Master Plan 2040</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Audited Quantitative Metrics Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="bg-black/60 p-4 rounded-xl border border-white/10">
                                <span className="block text-[10px] font-mono uppercase text-gray-400">
                                    Public Bus &amp; Port Share (2019)
                                </span>
                                <span className="text-lg sm:text-xl font-extrabold text-white">
                                    97% – 100%
                                </span>
                                <span className="block text-[11px] text-gray-400 mt-0.5">
                                    97% SBST (3,398 buses) • 100% SMRT (1,250) • 100% PSA (1,335 prime movers)
                                </span>
                            </div>
                            <div className="bg-black/60 p-4 rounded-xl border border-white/10">
                                <span className="block text-[10px] font-mono uppercase text-gray-400">
                                    Installation Manpower Saved
                                </span>
                                <span className="text-lg sm:text-xl font-extrabold text-emerald-400">
                                    72% Cost Cut
                                </span>
                                <span className="block text-[11px] text-gray-400 mt-0.5">
                                    24 ➔ 9 man-hrs/bus (S$640 ➔ S$180/bus across SBST/SMRT/PSA)
                                </span>
                            </div>
                            <div className="bg-black/60 p-4 rounded-xl border border-white/10">
                                <span className="block text-[10px] font-mono uppercase text-gray-400">
                                    Driver Hazard Alert Drop
                                </span>
                                <span className="text-lg sm:text-xl font-extrabold text-[#8F801B]">
                                    85% in 1 Month
                                </span>
                                <span className="block text-[11px] text-gray-400 mt-0.5">
                                    1,216 ➔ 182 alerts (30-vehicle sample; &gt;34 incidents averted/vehicle/mo)
                                </span>
                            </div>
                            <div className="bg-black/60 p-4 rounded-xl border border-white/10">
                                <span className="block text-[10px] font-mono uppercase text-gray-400">
                                    People &amp; Financial Results
                                </span>
                                <span className="text-lg sm:text-xl font-extrabold text-white">
                                    599.6% ROI
                                </span>
                                <span className="block text-[11px] text-gray-400 mt-0.5">
                                    Turnover halved (19.44% ➔ 8.93%); training scaled to 10.88% of payroll
                                </span>
                            </div>
                        </div>

                        {/* Strategic & Operational Breakdown */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-black/50 p-5 rounded-xl border border-white/10 space-y-2.5">
                                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                                    <Layers className="h-4 w-4 text-[#8F801B]" />
                                    Proprietary IP Ecosystem &amp; Tier-1 Co-Creation
                                </h4>
                                <ul className="text-xs text-gray-300 space-y-2 leading-relaxed">
                                    <li>
                                        <strong className="text-white">4-Component Holistic Safety Platform:</strong> Transitioned from commodity CCTV distribution to proprietary software/hardware integration: <strong>T-GUARD®</strong> (Automated Command Centre), <strong>T-SEEDS</strong> (Safety Eco Education Driving System telematics), <strong>T-DA</strong> (pupil-identification machine vision Driver Fatigue Alert), and <strong>T-FA</strong> (AI Forward Collision Warning with 2.7s advance alert &amp; &lt;0.7s headway monitoring).
                                    </li>
                                    <li>
                                        <strong className="text-white">Co-Creation with SBS Transit &amp; ST Engineering:</strong> Partnered with <strong>SBS Transit</strong> on the Safe Green Eco System (<em>SAGE</em>) and co-developed <em>DriveSafe (I-SAW-U)</em> and <em>ISAFE</em> with <strong>ST Engineering</strong> (4 cameras + 2 ultrasonic sensors trialed across 20 public buses).
                                    </li>
                                    <li>
                                        <strong className="text-white">Regional Aviation &amp; Transit Expansion:</strong> Expanded beyond Singapore public transport into <strong>Malaysia</strong> (Air Products) and <strong>Hong Kong</strong> (<strong>Cathay Pacific, KMB, Citybus</strong>).
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-black/50 p-5 rounded-xl border border-white/10 space-y-2.5">
                                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                                    <Award className="h-4 w-4 text-[#8F801B]" />
                                    Audited Operational &amp; Service Excellence (BE Report Section 7)
                                </h4>
                                <ul className="text-xs text-gray-300 space-y-2 leading-relaxed">
                                    <li>
                                        <strong className="text-white">91.7% Supervisor Inspection OPEX &amp; Time Savings:</strong> Deploying remote <em>T-Vast</em> inspection reduced supervisor site visits from 12 trips / 15 hours per month (S$462/mo) to 1 trip / 1.25 hours per month (S$38.50/mo).
                                    </li>
                                    <li>
                                        <strong className="text-white">95.0 Customer Satisfaction Score (CSAT):</strong> Outperformed the SMU Institute of Service Excellence (CSISG) national benchmark (74.3) with <strong>100% commissioning checklist compliance</strong>, a <strong>1.19%</strong> defect rate (H1 2020), and <strong>97.3% of Flexnet maintenance cases resolved within 24 hours</strong> (1,202 of 1,235 cases).
                                    </li>
                                    <li>
                                        <strong className="text-white">COVID-19 Business Continuity &amp; SQC Attainment:</strong> Activated split-team BCP, buffer stock governance, and Quarterly/Weekly/Daily Planner cadences, passing rigorous audit by Enterprise Singapore Principal Assessor Low Iynee&apos;s panel to earn the <strong>Singapore Quality Class (SQC)</strong> award.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Executive Endorsement Quote Card for TNTS */}
                        <div className="bg-black/60 p-5 rounded-xl border-l-4 border-emerald-500 space-y-2">
                            <blockquote className="text-xs sm:text-sm text-gray-200 italic leading-relaxed">
                                &ldquo;Frederick quickly built trust with our senior leadership, distilling the Business Excellence framework into practical examples our team could immediately contextualise. His consulting expertise and decisive guidance helped us navigate evolving business continuity plans and attain the Singapore Quality Class award from Enterprise Singapore.&rdquo;
                            </blockquote>
                            <div className="text-xs text-gray-400 pt-1 flex items-center justify-between">
                                <span className="font-bold text-white">— Joshua Tan, Director, TNT Surveillance Pte Ltd</span>
                                <span className="font-mono text-emerald-400">[Citation 7]</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: STATUTORY EDGE GRANT CO-FUNDING, ELIGIBILITY & EXCLUSIONS */}
                <section className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">
                            Enterprise Singapore Statutory Governance (Post-30 Sep 2026)
                        </span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            EDGE Grant Co-Funding Parameters, Eligibility &amp; Cost Exclusions
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                            All <strong>Business Strategic Planning</strong> engagements are structured in strict compliance with Enterprise Singapore&apos;s verified activity rules on{" "}
                            <a
                                href="https://cp.enterprisesg.gov.sg/financial-support/edge-grant/business-strategy/business-strategic-planning"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white underline hover:text-[#8F801B]"
                            >
                                cp.enterprisesg.gov.sg
                            </a>
                            :
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-black/50 p-6 rounded-xl border border-white/10 space-y-3">
                            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                                <CheckCircle2 className="h-4 w-4 shrink-0" />
                                <span>Entity Eligibility Baseline</span>
                            </div>
                            <ul className="text-xs text-gray-300 space-y-2 leading-relaxed">
                                <li>
                                    <strong>Singapore Registered &amp; Operating:</strong> Business entity must be registered and operating in Singapore.
                                </li>
                                <li>
                                    <strong>Min. 30% Local Shareholding:</strong> At least 30% ownership (direct or indirect) held by Singaporean(s) and/or Singapore PR(s), determined by ultimate individual ownership.
                                </li>
                                <li>
                                    <strong>Strictly No Retrospective Work:</strong> Must not have started work or made any payment or deposit to a vendor prior to BGP application submission.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-black/50 p-6 rounded-xl border border-white/10 space-y-3">
                            <div className="flex items-center gap-2 text-[#8F801B] font-bold text-xs uppercase tracking-wider">
                                <Building2 className="h-4 w-4 shrink-0" />
                                <span>Supported vs. Non-Supported Costs</span>
                            </div>
                            <ul className="text-xs text-gray-300 space-y-2 leading-relaxed">
                                <li>
                                    <strong className="text-emerald-400">Supported Costs:</strong> Qualifying third-party professional consultancy service costs incurred from the date of application (covered upon approval).
                                </li>
                                <li>
                                    <strong className="text-red-400">Non-Supported Costs:</strong> Expenses relating to <strong>regulatory compliance</strong>, updates to <strong>Standard Operating Procedures (SOPs)</strong>, and <strong>Goods and Services Tax (GST)</strong>.
                                </li>
                                <li>
                                    <strong>Disbursement Timeline:</strong> Reimbursed via PayNow Corporate (within 14 working days after claim approval) or GIRO (up to 8 weeks).
                                </li>
                            </ul>
                        </div>

                        <div className="bg-black/50 p-6 rounded-xl border border-white/10 space-y-3">
                            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                                <ShieldCheck className="h-4 w-4 shrink-0" />
                                <span>Change Requests &amp; Policy Notes</span>
                            </div>
                            <ul className="text-xs text-gray-300 space-y-2 leading-relaxed">
                                <li>
                                    <strong>Permitted Change Requests:</strong> Only changes to <em>project end date</em> and <em>claim due date</em> are permitted after commencement (vendor changes require project termination and re-application).
                                </li>
                                <li>
                                    <strong>Direct Corppass Submission:</strong> Third-party companies are strictly prohibited from applying for or managing the grant on behalf of the applicant company.
                                </li>
                                <li>
                                    <strong>Note on Business Transition Planning:</strong> EnterpriseSG&apos;s second activity under Business Strategy (<em>Business Transition Planning</em>) has details still being finalised and does not accept submissions at this time.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Cross-Pillar Interlinking */}
                    <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
                        <span>Complementary FT Synergist Advisory Pillars:</span>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/ip-consultant" className="text-white underline hover:text-[#8F801B]">
                                IP Strategy &amp; Advisory (IPOS IP Grow) →
                            </Link>
                            <Link href="/strategic-brand-marketing-development" className="text-white underline hover:text-[#8F801B]">
                                Strategic Brand &amp; International Branding (EDGE 70%/50%) →
                            </Link>
                            <Link href="/franchise-consultant" className="text-white underline hover:text-[#8F801B]">
                                Franchise &amp; Licensing Advisory →
                            </Link>
                            <Link href="/internationalisation" className="text-white underline hover:text-[#8F801B]">
                                Overseas Market Expansion →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
                <section className="space-y-6 pt-4 border-t border-white/10">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">
                            Statutory &amp; Commercial FAQ
                        </span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            Frequently Asked Questions: Business Strategic Planning (EDGE Grant)
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {faqItems.map((item, idx) => {
                            const isOpen = openFaq === idx;
                            return (
                                <div
                                    key={idx}
                                    className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                                        className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white hover:bg-white/[0.04] transition-colors cursor-pointer"
                                    >
                                        <span className="pr-4">{item.q}</span>
                                        {isOpen ? (
                                            <Minus className="h-4 w-4 text-[#8F801B] shrink-0" />
                                        ) : (
                                            <Plus className="h-4 w-4 text-[#8F801B] shrink-0" />
                                        )}
                                    </button>
                                    {isOpen && (
                                        <div className="px-5 pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                                            {item.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* BOTTOM CONVERSION BANNER */}
                <section className="rounded-2xl border border-[#8F801B]/50 bg-gradient-to-r from-[#8F801B]/20 via-black to-black p-8 sm:p-10 text-center space-y-5">
                    <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">
                        Start Your 1-to-5-Year Corporate Transformation
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto">
                        Architect Your Business Strategic Planning Roadmap with Certified SCMC Advisory
                    </h2>
                    <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Schedule a complimentary 60-minute diagnostic with <strong>Frederick Tan, Principal Management Consultant, FT Synergist</strong> (TÜV SÜD License <strong>SCMC-1810-P0236</strong>) to structure your Business Strategy Report, IP alignment, and EDGE Grant submission.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={calendarUrls["business-strategy"]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#8F801B] rounded-lg hover:bg-[#7a6c16] transition-all shadow-lg cursor-pointer"
                        >
                            <Calendar className="mr-2 h-4 w-4" />
                            Book 60-Minute Strategy Diagnostic
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                        <a
                            href="mailto:fredtan@ftsynergist.com"
                            className="inline-flex items-center justify-center px-6 py-4 text-xs sm:text-sm font-semibold text-gray-200 bg-white/5 border border-white/15 rounded-lg hover:border-[#8F801B] hover:text-white transition-all"
                        >
                            Email fredtan@ftsynergist.com
                            <ExternalLink className="ml-2 h-3.5 w-3.5" />
                        </a>
                    </div>
                </section>
            </main>

            {/* MOBILE STICKY CTA BAR */}
            {isStickyVisible && (
                <div className="fixed bottom-0 inset-x-0 z-50 bg-black/95 backdrop-blur-md border-t border-[#8F801B]/40 p-3 sm:hidden">
                    <a
                        href={calendarUrls["business-strategy"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center py-3 px-4 bg-[#8F801B] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg"
                    >
                        Book 60-Min Business Strategy Diagnostic
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </a>
                </div>
            )}

            {/* FOOTER CITATIONS & GEO SEMANTIC ANCHORS */}
            <footer className="max-w-5xl mx-auto px-6 mt-16 space-y-8">
                <div className="border-t border-neutral-800 pt-8">
                    <CitationFootnotes citations={citationsData} />
                </div>
                <div className="w-full border-t border-neutral-800/40 py-6">
                    <GeoSemanticAnchors
                        primaryHeading="Business Strategic Planning & Strategy Development Consultant Singapore"
                        primaryDescription={
                            <>
                                FT Synergist is a Singapore management consultancy and{" "}
                                <Link
                                    href="/business-strategic-planning"
                                    className="text-white font-semibold underline hover:text-[#8F801B] transition-colors"
                                >
                                    Business Strategic Planning Consultant Singapore
                                </Link>{" "}
                                advising SMEs and mid-market enterprises on corporate growth roadmaps, intellectual property asset management, M&amp;A market entry, and Singapore Quality Class (SQC) Business Excellence under Enterprise Singapore&apos;s EDGE Grant. Led by Principal Management Consultant Frederick Tan (TÜV SÜD SCMC-1810-P0236 | SS 680:2021).
                            </>
                        }
                    />
                </div>
            </footer>
        </div>
    );
}

