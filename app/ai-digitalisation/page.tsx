"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Script from 'next/script';
import {
    ArrowRight,
    ExternalLink,
    ShieldCheck,
    X,
    Calendar,
    Plus,
    Minus,
    Cpu,
    Database,
    Workflow,
    AlertCircle,
    FileCheck2,
    CheckCircle2,
    Building2,
    Factory,
    LineChart,
} from 'lucide-react';
import type { CitationItem } from '@/app/components/CitationFootnotes';

// Dynamic imports with SSR disabled to prevent React Error 482 hydration crashes
const CitationFootnotes = dynamic(() => import('@/app/components/CitationFootnotes'), { ssr: false });
const GeoSemanticAnchors = dynamic(() => import('@/app/components/GeoSemanticAnchors'), { ssr: false });

// Every EDGE figure on this page is locked to docs/verified-edge-facts-2026-11-12.md and the hash-pinned
// activity snapshots: automation-and-digitalisation__large-scale-digital-transformation / __large-scale-automation.
const aiCitations: CitationItem[] = [
    {
        id: 1,
        label: "Enterprise Singapore — EDGE Grant: Large-scale Digital Transformation (Automation & Digitalisation)",
        context: "Up to 50% support for SMEs and up to 30% for non-SMEs; project conditions, non-supported costs, project deliverables and application documents.",
        url: "https://www.enterprisesg.gov.sg/financial-support/edge-grant/automation-and-digitalisation/large-scale-digital-transformation",
    },
    {
        id: 2,
        label: "Enterprise Singapore — EDGE Grant: Large-scale Automation (Automation & Digitalisation)",
        context: "Up to 50% support for SMEs and up to 30% for non-SMEs; advanced automation project conditions, non-supported costs and deliverables.",
        url: "https://www.enterprisesg.gov.sg/financial-support/edge-grant/automation-and-digitalisation/large-scale-automation",
    },
    {
        id: 3,
        label: "Enterprise Singapore — Official EDGE Grant FAQs",
        context: "S$100,000 annual cap across all activities (refreshed 1 April); S$30,000 digital and equipment sub-cap; applicant-only application; EDG, MRA and PSG ceased 29 September 2026.",
        url: "https://cp.enterprisesg.gov.sg/resources/all-faqs/edge-grant",
    },
    {
        id: 4,
        label: "IPOS GoBusiness IP Grow Directory — FT Synergist Pte Ltd",
        context: "Official provider listing, including Innovation Consultancy.",
        url: "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd",
    },
];

const faqItems = [
    {
        q: "Which Enterprise Singapore EDGE Grant activities support AI, automation and digital transformation for SMEs?",
        a: "Under the unified EDGE Grant (effective 30 September 2026), the Automation & Digitalisation business area lists five activities. Two are covered in detail on this page: Large-scale Digital Transformation and Large-scale Automation, each offering up to 50% support for SMEs and up to 30% for non-SMEs. The other three are Single-function Digital Solutions, Integrated Enterprise Systems and Pre-scoped Equipment; their pre-approved solution catalogues are published by Enterprise Singapore and their rates are not stated on this page. All support counts toward the S$100,000 annual cap per company across all activities, refreshed every 1 April.",
    },
    {
        q: "What kind of AI or digital project qualifies for Large-scale Digital Transformation?",
        a: "Enterprise Singapore describes the activity as transforming core operations through enterprise-wide digital initiatives that integrate modern technologies to improve workflows, build digital capabilities and drive sustainable growth. The project must demonstrate measurable impact on company growth and efficiency, strengthen core operations using technologies such as cloud-based enterprise platforms, data analytics and visualisation, AI/ML, RPA, workflow automation, or integration of legacy systems with new digital architecture, and involve integration and/or standardisation across systems such as business, sales and procurement.",
    },
    {
        q: "What does Large-scale Digital Transformation NOT support?",
        a: "Enterprise Singapore's non-supported costs include (but are not limited to): automation of isolated tasks without broader business transformation (for example, software that only digitises paper forms without changing underlying processes or connecting to other systems); basic IT upgrades or infrastructure improvements (for example, more internet bandwidth, or migrating to a newer version of existing software without functional enhancements); Goods and Services Tax (GST); and maintenance costs.",
    },
    {
        q: "What does Large-scale Automation cover, and what is excluded?",
        a: "Large-scale Automation supports enterprise-wide automation and integration across production and operational systems, using advanced technologies above industry norms such as robotics and automated assembly lines, IoT-enabled smart manufacturing, automated material handling and warehousing, and process control and optimisation. The project must integrate or standardise across production and operational systems and achieve significant productivity improvements. Excluded costs include equipment deployed overseas, duplicate software or equipment, first-time set-up costs, basic off-the-shelf equipment such as laptops and tablets, maintenance, used or refurbished equipment, standalone software modules or features, and GST.",
    },
    {
        q: "Is an SS 680 certified management consultant required for these two activities?",
        a: "The two activity pages summarised here do not list an SS 680 consultant requirement; SS 680 is stated for other EDGE activities such as Business Strategic Planning and International Branding. Both activities require a vendor proposal and quotation, and a final consultancy report is among the project deliverables. Always confirm the current requirements on the official activity page and in your Letter of Offer. FT Synergist's lead consultant, Frederick Tan, holds TÜV SÜD SCMC certification (SCMC-1810-P0236 | SS 680:2021).",
    },
    {
        q: "What documents and projections do I need before applying?",
        a: "Per Enterprise Singapore, prepare a project proposal with vendor proposals and quotations; audited or management-certified financial statements for the last financial year; a projection of expected revenue growth, cost savings and overseas sales (if applicable) for 3 years after project completion; and a projection of new jobs created (overall and Singaporeans only) with gross monthly salary above S$5,000 for 1 year after project completion.",
    },
    {
        q: "Who is eligible, and who submits the application?",
        a: "The business entity must be registered and operating in Singapore, have at least 30% ownership (direct or indirect) by Singaporean(s) and/or Singapore PR(s) determined by ultimate individual ownership, not have started work or made any payment or deposit to a supplier, vendor or third party before submitting the application, and not have previously applied for grant support for the same solution. The applicant company applies through Corppass on the Business Grants Portal (BGP). Third-party companies are not permitted to apply for or manage the grant on behalf of the applicant company.",
    },
    {
        q: "How are claims and disbursements handled?",
        a: "The EDGE Grant is reimbursement-based. Only expenses approved in the Letter of Offer are eligible, all project expenses must be paid in full before claiming, and a single final claim is submitted on BGP after engaging an audit firm from Enterprise Singapore's Panel of Auditors and signing the audit engagement letter. Disbursement is made within 14 working days of claim approval via PayNow Corporate, or up to eight weeks via GIRO. Per Enterprise Singapore, claims for activities other than single-function digital solutions and pre-scoped equipment open on 1 January 2027.",
    },
    {
        q: "How is an AI digitalisation consultant different from a general IT vendor?",
        a: "A general IT vendor typically supplies and maintains software, hardware and infrastructure. An AI digitalisation consultant starts from the business case: which workflows, data and systems limit growth, what should be integrated or standardised, and how the result is measured. Because EDGE does not support isolated task automation, basic IT upgrades or standalone modules, the diagnostic and integration design stage largely determines whether a project meets Enterprise Singapore's conditions.",
    },
    {
        q: "Did the old Enterprise Development Grant (EDG) Innovation & Productivity track fund this kind of project?",
        a: "Yes, but EDG, MRA and PSG ceased on 29 September 2026. From 30 September 2026, digitalisation and automation projects are applied for under the EDGE Grant. Projects submitted under the legacy schemes before the cessation date continue under their original terms.",
    },
];

export default function AIDigitalisationPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('innovation-productivity');
    const [showStickyBar, setShowStickyBar] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    // Locked Sprint Google Calendar Schedule Mapping
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
            setShowStickyBar(window.scrollY > 600);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const trackLead = () => {
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "generate_lead", {
                event_category: "engagement",
                event_label: "ai_sprint_booking_click",
                value: 1
            });
        }
    };

    const handleOpenSprintModal = (presetService?: string) => {
        setSelectedService(presetService || 'innovation-productivity');
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
            {/* GEO / AI SCHEMA MARKUP: SERVICE + FAQPAGE */}
            <Script id="ai-faq-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Service",
                            "@id": "https://www.ftsynergist.com/ai-digitalisation#service",
                            "name": "AI Digitalisation Consultant Singapore | Enterprise AI & Large-Scale Automation",
                            "serviceType": [
                                "AI Digitalisation Consulting",
                                "Digital Transformation Consulting",
                                "Workflow Automation Consulting",
                                "EDGE Grant Large-scale Digital Transformation and Large-scale Automation Advisory"
                            ],
                            "provider": {
                                "@type": "ProfessionalService",
                                "name": "FT Synergist",
                                "url": "https://www.ftsynergist.com/",
                                "email": "fredtan@ftsynergist.com",
                                "sameAs": [
                                    "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd",
                                    "https://www.linkedin.com/company/ft-synergist"
                                ]
                            },
                            "areaServed": { "@type": "Country", "name": "Singapore" },
                            "audience": { "@type": "BusinessAudience", "name": "Singapore SMEs" },
                            "description": "Digitalisation and AI advisory for Singapore SMEs: diagnostics, integration design and project documentation aligned with Enterprise Singapore's EDGE Grant Large-scale Digital Transformation and Large-scale Automation activities. Led by Principal Management Consultant Frederick Tan (TÜV SÜD SCMC-1810-P0236 | SS 680:2021)."
                        },
                        {
                            "@type": "FAQPage",
                            "@id": "https://www.ftsynergist.com/ai-digitalisation#faq",
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
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                    AI Digitalisation Consultant Singapore <br className="hidden sm:inline" />
                    <span className="text-[#8F801B] bg-clip-text text-transparent bg-gradient-to-r from-[#8F801B] to-yellow-200 text-2xl sm:text-3xl md:text-4xl block mt-3 font-semibold">
                        Enterprise AI, Workflow Automation &amp; Digital Transformation for SMEs
                    </span>
                </h1>

                <p className="max-w-3xl mx-auto text-base sm:text-xl text-gray-300 leading-relaxed font-normal">
                    Looking for a partner to digitalise your business? FT Synergist helps Singapore SME owners decide what to digitalise, integrate the systems that limit growth, and prepare projects for Enterprise Singapore&apos;s EDGE Grant (up to 50% support for SMEs).
                </p>

                {/* PRACTICE OVERVIEW BOX */}
                <div className="p-6 md:p-8 bg-black/60 border border-[#8F801B]/50 rounded-xl max-w-3xl mx-auto text-left shadow-[0_0_30px_rgba(143,128,27,0.15)] backdrop-blur-md space-y-3">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">Practice Overview</h2>
                    <p className="text-base md:text-lg leading-relaxed text-gray-200 font-medium">
                        <strong>FT Synergist</strong> advises SMEs on enterprise AI, workflow automation and systems integration. The practice is led by <strong>Frederick Tan, Principal Management Consultant, FT Synergist</strong> (TÜV SÜD Certified Management Consultant, <strong>SCMC-1810-P0236 | SS 680:2021</strong>), and FT Synergist is listed on the{" "}
                        <a href="https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-[#8F801B]">
                            IPOS GoBusiness IP Grow directory
                        </a>{" "}
                        for Innovation Consultancy.
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        EDGE co-funding for digitalisation is assessed by Enterprise Singapore on a case-by-case basis. FT Synergist does not guarantee approval.
                    </p>
                </div>

                {/* HERO CTA BLOCK */}
                <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-4 pt-4">
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                        Book a 60-Minute Digitalisation &amp; Automation Diagnostic
                    </h2>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
                        Walk through your workflows, systems and data with a certified management consultant, and find out whether your project fits Large-scale Digital Transformation or Large-scale Automation.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                        <button
                            onClick={() => handleOpenSprintModal('innovation-productivity')}
                            className="bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center justify-center"
                        >
                            Book Your Diagnostic
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <Link
                            href="/contact"
                            className="border border-[#8F801B] text-[#8F801B] hover:bg-[#8F801B] hover:text-white font-bold py-4 px-6 rounded-lg text-base transition-all cursor-pointer inline-flex items-center justify-center group"
                        >
                            Send an Enquiry
                            <ExternalLink className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100" />
                        </Link>
                    </div>
                </div>
            </header>

            {/* MAIN EDITORIAL HOUSING */}
            <main className="max-w-4xl mx-auto px-6 pb-24 space-y-20">

                {/* SECTION 1: WHO WE ADVISE */}
                <section className="space-y-6">
                    <div className="space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">Client Fit</span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            1. Is Your Business Ready to Digitalise?
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-base">
                            Most SME digitalisation problems are not software problems. They are workflow, data and integration problems: information re-keyed between systems, decisions made on spreadsheets that are out of date, and teams that cannot see the same numbers. We typically advise SMEs that:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-2.5">
                            <div className="flex items-center gap-2.5 text-[#C5A017]">
                                <Building2 className="h-5 w-5 shrink-0" />
                                <h3 className="font-heading font-bold text-white text-lg">Run on disconnected systems</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Sales, procurement, finance and operations each use a separate tool, and staff reconcile the differences by hand.
                            </p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-2.5">
                            <div className="flex items-center gap-2.5 text-[#C5A017]">
                                <Factory className="h-5 w-5 shrink-0" />
                                <h3 className="font-heading font-bold text-white text-lg">Face manpower constraints</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Production, warehousing, scheduling or back-office work is labour-heavy and difficult to scale without adding headcount.
                            </p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-2.5">
                            <div className="flex items-center gap-2.5 text-[#C5A017]">
                                <LineChart className="h-5 w-5 shrink-0" />
                                <h3 className="font-heading font-bold text-white text-lg">Hold data they cannot use</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Years of operational data exist, but no dashboards, forecasting or AI models turn it into decisions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: THREE ADVISORY PILLARS */}
                <section className="space-y-6">
                    <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                        2. Core Digitalisation &amp; Automation Advisory Pillars
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-base">
                        Our advisory is organised around the technology categories Enterprise Singapore names in its project conditions for large-scale digital and automation projects:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                            onClick={() => handleOpenSprintModal('innovation-productivity')}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
                        >
                            <div>
                                <Workflow className="h-8 w-8 text-[#8F801B] mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-heading font-bold text-white text-lg mb-2">Workflow Automation &amp; Systems Integration</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Redesigning end-to-end processes and connecting business, sales and procurement systems, including integration of legacy systems with new digital architecture, RPA and workflow automation.
                                </p>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                                Review My Workflows <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </div>

                        <div
                            onClick={() => handleOpenSprintModal('innovation-productivity')}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
                        >
                            <div>
                                <Database className="h-8 w-8 text-[#8F801B] mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-heading font-bold text-white text-lg mb-2">Data Analytics, Visualisation &amp; AI/ML</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Cloud-based enterprise platforms, dashboards and predictive models that turn operational data into forecasts and decisions, with measurable growth and efficiency targets.
                                </p>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                                Scope an AI Use Case <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </div>

                        <div
                            onClick={() => handleOpenSprintModal('innovation-productivity')}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
                        >
                            <div>
                                <Cpu className="h-8 w-8 text-[#8F801B] mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-heading font-bold text-white text-lg mb-2">Enterprise-wide Automation</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Integrating production, quality control, logistics and maintenance workflows, including smart manufacturing, automated material handling and process control, where the project fits the Large-scale Automation conditions.
                                </p>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                                Assess Automation Fit <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: EDGE GRANT SOT MAPPING */}
                <section className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">
                            Enterprise Singapore EDGE Grant — Automation &amp; Digitalisation (Effective 30 Sep 2026)
                        </span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            3. How EDGE Grant Supports Large-scale Digital Transformation &amp; Automation
                        </h2>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-base">
                        EDG, MRA and PSG ceased on 29 September 2026. Digitalisation and automation projects are now assessed under the unified{" "}
                        <Link href="/edge-grant" className="text-white font-semibold underline hover:text-[#8F801B]">EDGE Grant</Link>, with a shared <strong>S$100,000 annual cap per company across all activities</strong> (refreshed every 1 April). Two activities cover enterprise-scale projects:
                    </p>

                    <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/60">
                        <table className="w-full text-left border-collapse text-xs sm:text-sm">
                            <thead>
                                <tr className="border-b border-white/15 bg-white/5 text-gray-200">
                                    <th className="p-4 font-bold">Parameter</th>
                                    <th className="p-4 font-bold">Large-scale Digital Transformation</th>
                                    <th className="p-4 font-bold">Large-scale Automation</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10 text-gray-300">
                                <tr>
                                    <td className="p-4 font-semibold text-white">Support level</td>
                                    <td className="p-4 font-semibold text-[#C5A017]">Up to 50% for SMEs / up to 30% for non-SMEs</td>
                                    <td className="p-4 font-semibold text-[#C5A017]">Up to 50% for SMEs / up to 30% for non-SMEs</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Official description</td>
                                    <td className="p-4"><em>&ldquo;Transform core operations through enterprise-wide digital initiatives, integrating modern technologies to improve workflows, build digital capabilities, and drive sustainable growth.&rdquo;</em></td>
                                    <td className="p-4"><em>&ldquo;Develop new capabilities, improve productivity and transform through adoption of advanced technologies for enterprise-wide automation and integration across production and operational systems.&rdquo;</em></td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Technologies named</td>
                                    <td className="p-4">Cloud-based enterprise platforms, data analytics and visualisation, AI/ML, RPA, workflow automation, or integration of legacy systems with new digital architecture</td>
                                    <td className="p-4">Robotics and automated assembly lines, IoT-enabled smart manufacturing and real-time monitoring, automated material handling and warehousing, process control and optimisation</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Integration requirement</td>
                                    <td className="p-4">Integration and/or standardisation across systems such as business, sales and procurement</td>
                                    <td className="p-4">Integration and/or standardisation across production and operational systems (e.g. production, quality control, logistics, maintenance); significant productivity improvements (cost savings, revenue or output gains)</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Application outcome</td>
                                    <td className="p-4">Case-by-case</td>
                                    <td className="p-4">Case-by-case</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Mandatory projections</td>
                                    <td className="p-4">3-year revenue growth, cost savings and overseas sales (if applicable); 1-year new jobs paying above S$5,000/month (overall and Singaporeans only)</td>
                                    <td className="p-4">3-year revenue growth, cost savings and overseas sales (if applicable); 1-year new jobs paying above S$5,000/month (overall and Singaporeans only)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                        <div className="p-5 rounded-lg bg-black/60 border border-white/10 space-y-3">
                            <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm">
                                <AlertCircle className="h-4 w-4 shrink-0" />
                                <h3>Non-supported costs: Digital Transformation</h3>
                            </div>
                            <ul className="text-xs text-gray-400 space-y-1.5 list-disc pl-4 leading-relaxed">
                                <li>Automation of isolated tasks without broader business transformation (e.g. software that only digitises paper forms without changing processes or connecting to other systems)</li>
                                <li>Basic IT upgrades or infrastructure improvements (e.g. more internet bandwidth, or newer versions of existing software without functional enhancements)</li>
                                <li>Goods and Services Tax (GST)</li>
                                <li>Maintenance costs</li>
                            </ul>
                        </div>
                        <div className="p-5 rounded-lg bg-black/60 border border-white/10 space-y-3">
                            <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm">
                                <AlertCircle className="h-4 w-4 shrink-0" />
                                <h3>Non-supported costs: Automation</h3>
                            </div>
                            <ul className="text-xs text-gray-400 space-y-1.5 list-disc pl-4 leading-relaxed">
                                <li>Equipment used or deployed overseas; used, refurbished or second-hand equipment</li>
                                <li>Existing possession of similar or duplicate software or equipment</li>
                                <li>First-time set-up or basic operational costs essential to starting a business</li>
                                <li>Basic, widely adopted, off-the-shelf equipment (e.g. copiers, laptops, tablets, mobile phones)</li>
                                <li>Standalone modules or features of a software or solution</li>
                                <li>Replacement of obsolete machinery without technology upgrading, unless part of a larger integrated system; maintenance costs; GST</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-5 rounded-lg bg-black/60 border border-[#8F801B]/40 space-y-3">
                        <div className="flex items-center gap-2 text-[#8F801B] font-bold text-sm">
                            <FileCheck2 className="h-4 w-4 shrink-0" />
                            <h3>Eligibility, Deliverables &amp; Application Documents (Both Activities)</h3>
                        </div>
                        <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-4 leading-relaxed">
                            <li><strong>Eligibility:</strong> registered and operating in Singapore; at least 30% Singaporean/PR ownership (by ultimate individual ownership); no work started or payment made before applying; no previous application for grant support for the same solution.</li>
                            <li><strong>Deliverables:</strong> project report (milestones, qualitative and quantitative benefits, challenges); solution demonstration with screenshots of deployed systems; training records, if applicable; and a final consultancy report covering objectives, scope, implementation overview and business impact assessment.</li>
                            <li><strong>Prepare:</strong> project proposal with vendor proposals and quotations; audited or management-certified financial statements for the last financial year; the projections listed above.</li>
                            <li><strong>Process:</strong> the applicant applies through Corppass on the Business Grants Portal; third parties may not apply or manage the grant on its behalf. Reimbursement only, after an audit by a firm on Enterprise Singapore&apos;s Panel of Auditors.</li>
                        </ul>
                    </div>

                    <p className="text-xs text-gray-400 leading-relaxed bg-white/5 border border-white/10 rounded-lg p-4">
                        <strong className="text-gray-200">Other Automation &amp; Digitalisation activities:</strong> Single-function Digital Solutions, Integrated Enterprise Systems and Pre-scoped Equipment use Enterprise Singapore&apos;s pre-approved solution catalogues. Per Enterprise Singapore, up to S$30,000 within the S$100,000 annual cap is available for single-function digital solutions, integrated enterprise systems and pre-scoped equipment. Check the official activity pages for current catalogue solutions and rates.
                    </p>
                </section>

                {/* SECTION 4: METHODOLOGY */}
                <section className="space-y-6">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">How We Work</span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            4. Our 5-Step Digitalisation Roadmap
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-base">
                            Each step maps to what Enterprise Singapore asks applicants to evidence for large-scale projects.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[
                            { n: "01 • DIAGNOSE", t: "Workflow & Data Review", d: "Map current workflows, systems and data; identify where integration or standardisation is needed." },
                            { n: "02 • DESIGN", t: "Target Architecture", d: "Define the digital architecture, the technologies and the measurable business case, including growth and efficiency targets." },
                            { n: "03 • SCOPE", t: "Vendor Brief & Quotations", d: "Prepare the project proposal and a vendor brief so quotations are comparable. Vendors should be independent of the applicant." },
                            { n: "04 • IMPLEMENT", t: "Integration & Upskilling", d: "Oversee integration with your appointed vendors and build internal capability through training." },
                            { n: "05 • DOCUMENT", t: "Evidence & Report", d: "Compile the project report, system demonstration, training records and final consultancy report required for claim." },
                        ].map((s) => (
                            <div key={s.n} className="bg-white/5 p-5 rounded-xl border border-white/10 space-y-2">
                                <span className="text-xs font-mono font-bold text-[#C5A017]">{s.n}</span>
                                <h3 className="font-heading text-sm font-bold text-white">{s.t}</h3>
                                <p className="text-xs text-gray-300 leading-relaxed">{s.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 5: TRACK RECORD */}
                <section className="space-y-6">
                    <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                        5. Selected Technology &amp; Data-Driven Engagements
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-3">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A017] font-bold">Strategic Planning &amp; IP Co-Creation • 18 Months</span>
                            <h3 className="font-heading text-lg font-bold text-white">TNT Surveillance Pte Ltd</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Business strategic planning, IP co-creation and Singapore Quality Class (SQC) preparation for an AI driver-monitoring and fleet-safety technology company. Reported outcomes: 85% drop in driver hazard alerts in 1 month; 72% cut in per-bus installation manpower (24 to 9 man-hours); and fleet presence across SBS Transit, SMRT and PSA prime movers (10,000+ vehicles).
                            </p>
                            <Link href="/business-strategic-planning" className="inline-flex items-center text-xs font-bold text-[#8F801B] hover:text-white uppercase tracking-wider transition-colors">
                                View Strategic Planning Scope <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                            </Link>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-3">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A017] font-bold">Brand, IP &amp; AI Personalisation</span>
                            <h3 className="font-heading text-lg font-bold text-white">Pétale Tea Pte. Ltd.</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Strategic planning and IP unbundling for a wellness tea brand, including an AI &ldquo;Blend Your Own&rdquo; recommendation engine that converts mood, wellness goals and taste into custom blends. The engine was demonstrated live at IPOS IP Week 2026.
                            </p>
                            <Link href="/insights/petale-tea-ip-growth-case-study" className="inline-flex items-center text-xs font-bold text-[#8F801B] hover:text-white uppercase tracking-wider transition-colors">
                                Read the IP Week Case Study <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                            </Link>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        Outcomes are specific to each client&apos;s engagement and are not a forecast of results for other businesses.
                    </p>

                    {/* Verified industry panels */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden shadow-lg flex flex-col justify-between">
                            <div className="p-4 space-y-3">
                                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-white/10">
                                    <img
                                        src="/wshc-sla-webinar-fleet-ai.png"
                                        alt="Frederick Tan presenting AI fleet safety frameworks at Workplace Safety and Health Council (WSHC) SLA Webinar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="font-bold text-white text-base">WSH Council &amp; SLA Forum: Workplace Safety &amp; Fleet AI</h3>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Speaker on Advanced Driver Assistance Systems (ADAS) and AI driver monitoring frameworks alongside Ministry of Manpower representatives.
                                </p>
                            </div>
                            <div className="p-4 bg-white/5 border-t border-white/10 flex items-center justify-between">
                                <span className="text-[11px] font-semibold text-[#8F801B]">Official Event Record</span>
                                <a
                                    href="https://www.tal.sg/wshc/events/forum/2021/sla-webinar-on-keeping-our-workplace-safe-and-accident-free"
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className="text-xs font-bold text-white hover:text-[#8F801B] underline inline-flex items-center gap-1"
                                >
                                    View WSHC Event Record <ExternalLink className="h-3 w-3" />
                                </a>
                            </div>
                        </div>

                        <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden shadow-lg flex flex-col justify-between">
                            <div className="p-4 space-y-3">
                                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-white/10">
                                    <img
                                        src="/IOT_asia_plus_17_march_2022.jpeg"
                                        alt="Frederick Tan speaking on Connected Transport and Supply Chain AI at IoT Asia Plus Conference"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="font-bold text-white text-base">IoT Asia+: Connected Transport &amp; Logistics AI</h3>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Panelist on smart supply chain resilience and IoT fleet telematics architectures.
                                </p>
                            </div>
                            <div className="p-4 bg-white/5 border-t border-white/10 flex items-center justify-between">
                                <span className="text-[11px] font-semibold text-[#8F801B]">Industry Conference Panel</span>
                                <a
                                    href="https://www.linkedin.com/posts/iotasia_share-6905065414028611584-SI9S/"
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className="text-xs font-bold text-white hover:text-[#8F801B] underline inline-flex items-center gap-1"
                                >
                                    View IoT Asia Record <ExternalLink className="h-3 w-3" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#8F801B]/20 border border-[#8F801B]/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                        <div className="space-y-2 text-center md:text-left">
                            <h3 className="font-heading text-xl font-extrabold text-white">
                                Not sure whether your project fits EDGE?
                            </h3>
                            <p className="text-sm text-gray-300">
                                Bring your current systems and pain points. We will advise whether the project suits Large-scale Digital Transformation, Large-scale Automation, or one of the pre-approved solution routes.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                            <button
                                onClick={() => handleOpenSprintModal('innovation-productivity')}
                                className="bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center"
                            >
                                Book Your Diagnostic
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                            <Link
                                href="/contact"
                                className="border border-[#8F801B] text-[#8F801B] hover:bg-[#8F801B] hover:text-white font-bold py-3.5 px-5 rounded-lg text-sm transition-all cursor-pointer inline-flex items-center justify-center"
                            >
                                Send an Enquiry
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SECTION 6: RELATED ADVISORY */}
                <section className="space-y-4 bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h2 className="font-heading text-xl md:text-2xl font-extrabold tracking-tight text-white">
                        Related Advisory for SMEs Planning Digital Growth
                    </h2>
                    <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-[#8F801B] shrink-0 mt-0.5" /><span><Link href="/business-strategic-planning" className="text-white font-semibold underline hover:text-[#8F801B]">Business Strategic Planning</Link>: a 4-part business strategy report before committing to a large technology investment.</span></li>
                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-[#8F801B] shrink-0 mt-0.5" /><span><Link href="/edge-grant" className="text-white font-semibold underline hover:text-[#8F801B]">EDGE Grant guide</Link>: all activities, the S$100,000 cap and eligibility.</span></li>
                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-[#8F801B] shrink-0 mt-0.5" /><span><Link href="/ip-consultant" className="text-white font-semibold underline hover:text-[#8F801B]">IP Consultant Singapore</Link>: protecting the data, software and know-how your digital project creates.</span></li>
                    </ul>
                </section>

                {/* SECTION 7: FAQ */}
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
                                        {index === 0 && (
                                            <>
                                                {" "}See the full <Link href="/edge-grant" className="text-white font-bold underline hover:text-[#8F801B]">EDGE Grant Singapore</Link> guide.
                                            </>
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
                        Plan Your Digitalisation Project Before You Commit to a Vendor
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg">
                        Discuss your workflows and goals with Principal Management Consultant Frederick Tan (SCMC-1810-P0236 | SS 680:2021) and leave with a clear view of scope, fit with EDGE, and next steps.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => handleOpenSprintModal('innovation-productivity')}
                            className="bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-4 px-10 rounded-lg text-lg transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center justify-center"
                        >
                            Book Your Diagnostic
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <Link
                            href="/contact"
                            className="border border-[#8F801B] text-[#8F801B] hover:bg-[#8F801B] hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all cursor-pointer inline-flex items-center justify-center group"
                        >
                            Send an Enquiry
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
                        <span className="text-xs font-bold text-white uppercase tracking-wide">Digitalisation Diagnostic</span>
                    </div>
                    <button
                        onClick={() => handleOpenSprintModal('innovation-productivity')}
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
                                    <option value="innovation-productivity">Digitalisation &amp; Automation Diagnostic (60 Mins)</option>
                                    <option value="business-strategy">Business Strategic Planning Sprint</option>
                                    <option value="strategic-brand">Brand Strategy Sprint</option>
                                    <option value="market-readiness">Overseas Expansion Sprint</option>
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

            {/* FOOTER INFRASTRUCTURE WITH VERIFIED CITATIONS */}
            <footer className="w-full border-t border-neutral-800 bg-neutral-900/50">
                <div className="max-w-4xl mx-auto px-6 py-10">
                    <CitationFootnotes
                        citations={aiCitations}
                        title="Official Enterprise Singapore EDGE Grant Reference Layer"
                        subtitle="Support levels, project conditions, non-supported costs and application requirements for Automation & Digitalisation activities, verified against Enterprise Singapore's published activity pages."
                    />
                </div>
                <div className="w-full border-t border-neutral-800/40 py-6">
                    <GeoSemanticAnchors
                        primaryHeading="AI Digitalisation Consultant Singapore: Enterprise AI, Automation & Digital Transformation"
                        primaryDescription={
                            <>
                                FT Synergist is a Singapore management consultancy and{" "}
                                <Link href="/ai-digitalisation" className="text-white font-semibold underline hover:text-[#8F801B] transition-colors">
                                    AI Digitalisation Consultant
                                </Link>{" "}
                                for SMEs. Led by Principal Management Consultant Frederick Tan (TÜV SÜD SCMC-1810-P0236 | SS 680:2021), the practice prepares digitalisation and automation projects for Enterprise Singapore&apos;s EDGE Grant Large-scale Digital Transformation and Large-scale Automation activities (up to 50% SME support).
                            </>
                        }
                    />
                </div>
            </footer>
        </div>
    );
}
