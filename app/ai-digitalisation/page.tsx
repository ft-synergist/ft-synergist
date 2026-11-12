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
    Bot,
    Network,
    Layers,
    FileText,
    Users2,
    Clock,
    Sparkles
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
        a: "Under the unified EDGE Grant (effective 30 September 2026), the Automation & Digitalisation business area lists five activities. Two are covered in detail on this page: Large-scale Digital Transformation and Large-scale Automation, each offering up to 50% support for SMEs and up to 30% for non-SMEs. The other three are Single-function Digital Solutions, Integrated Enterprise Systems and Pre-scoped Equipment, which use pre-approved solution catalogues with support capped at S$30,000 within the overall company cap. All support counts toward the shared S$100,000 annual cap per company across all activities, refreshed every 1 April.",
    },
    {
        q: "What kind of AI or digital project qualifies for Large-scale Digital Transformation?",
        a: "Enterprise Singapore describes Large-scale Digital Transformation as transforming core operations through enterprise-wide digital initiatives that integrate modern technologies to improve workflows, build digital capabilities and drive sustainable growth. The project must demonstrate measurable impact on company growth and efficiency, strengthen core operations using technologies such as cloud-based enterprise platforms, data analytics and visualisation, AI/ML, RPA, workflow automation, or integration of legacy systems with new digital architecture, and involve integration and/or standardisation across systems such as business, sales and procurement.",
    },
    {
        q: "What does Large-scale Digital Transformation NOT support?",
        a: "Enterprise Singapore's non-supported costs include: automation of isolated tasks without broader business transformation (for example, software that only digitises paper forms without changing underlying processes or connecting to other systems); basic IT upgrades or infrastructure improvements (for example, more internet bandwidth, or migrating to a newer version of existing software without functional enhancements); Goods and Services Tax (GST); and ongoing maintenance costs.",
    },
    {
        q: "What does Large-scale Automation cover, and what is excluded?",
        a: "Large-scale Automation supports enterprise-wide automation and integration across production and operational systems, using advanced technologies above industry norms such as robotics, automated assembly lines, IoT-enabled smart manufacturing, automated material handling and warehousing, and process control and optimisation. Excluded costs include equipment deployed overseas, duplicate software or equipment, first-time set-up costs, basic off-the-shelf equipment such as laptops and tablets, maintenance, used or refurbished equipment, standalone software modules or features, and GST.",
    },
    {
        q: "How is an AI digitalisation consultant different from an IT software vendor?",
        a: "A software vendor typically builds or resells a specific tool, platform or piece of equipment. An independent digitalisation consultant acts as process architect and owner's representative: auditing end-to-end workflows, identifying operational bottlenecks, drafting technology-agnostic vendor specifications, managing competitive tender evaluation, governing user acceptance testing (UAT), and leading workforce change management. Because Enterprise Singapore does not fund isolated software installations or basic upgrades, independent process design ensures the transformation addresses core business bottlenecks and meets grant criteria.",
    },
    {
        q: "Is an SS 680 certified management consultant required for these two activities?",
        a: "Enterprise Singapore's published activity pages for Large-scale Digital Transformation and Large-scale Automation do not list a mandatory SS 680 certification requirement, whereas SS 680 is mandatory for Business Strategic Planning and International Branding. However, both activities require an extensive project proposal, vendor quotations, and a final consultancy report among the deliverables. FT Synergist's lead consultant, Frederick Tan, holds TÜV SÜD SCMC certification (SCMC-1810-P0236 | SS 680:2021).",
    },
    {
        q: "What projections and documents must an SME prepare before applying?",
        a: "Per Enterprise Singapore, the applicant must prepare a comprehensive project proposal with vendor proposals and quotations; audited or management-certified financial statements for the last financial year; a 3-year projection of expected revenue growth, cost savings and overseas sales (if applicable) post-project; and a 1-year projection of new jobs created (overall and Singaporeans only) paying gross monthly salary above S$5,000.",
    },
    {
        q: "Who is eligible, and who submits the grant application?",
        a: "The applicant company must be registered and operating in Singapore, have at least 30% local shareholding (direct or indirect) by Singaporeans or Singapore PRs, not have commenced work or made any payment or deposit to any vendor before submitting the application, and not have previously received grant support for the same solution. Applications must be submitted directly by the applicant company via Corppass on the Business Grants Portal (BGP). Third-party consultants or vendors are strictly prohibited from applying on behalf of the client.",
    },
    {
        q: "Were digitalisation projects like this funded before the EDGE Grant?",
        a: "Yes. Under the legacy Enterprise Development Grant (EDG), process redesign and technology adoption were supported under the Innovation & Productivity pillar. For example, Bestway Cleaning Services' operational transformation at Changi Airport Terminal 2 was conducted under an approved EDG qualifying period from 3 November 2025 to 31 October 2026. The EDG, MRA and PSG schemes officially ceased on 29 September 2026. From 30 September 2026, equivalent projects are applied for under the EDGE Grant's Automation & Digitalisation activities. Past EDG outcomes do not guarantee EDGE approval.",
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
                            "name": "AI Digitalisation Consultant Singapore | AI & Automation Use Cases",
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
                            "description": "AI digitalisation and automation advisory for Singapore SMEs: workflow redesign, systems integration and project documentation aligned with Enterprise Singapore's EDGE Grant Large-scale Digital Transformation and Large-scale Automation activities. Led by Principal Management Consultant Frederick Tan (TÜV SÜD SCMC-1810-P0236 | SS 680:2021)."
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
                    AI Digitalisation Consultant Singapore
                </h1>

                <h2 className="text-[#8F801B] bg-clip-text text-transparent bg-gradient-to-r from-[#8F801B] to-yellow-200 text-2xl sm:text-3xl md:text-4xl font-semibold -mt-2">
                    AI Consultants for SME Digital Transformation &amp; Automation
                </h2>

                <p className="max-w-3xl mx-auto text-base sm:text-xl text-gray-300 leading-relaxed font-normal">
                    Looking for a partner to digitalise your business? FT Synergist helps Singapore SME owners decide what to digitalise, redesign manual workflows, integrate the systems that limit growth, and prepare projects for Enterprise Singapore&apos;s EDGE Grant (up to 50% support for SMEs).
                </p>

                {/* PRACTICE OVERVIEW BOX */}
                <div className="p-6 md:p-8 bg-black/60 border border-[#8F801B]/50 rounded-xl max-w-3xl mx-auto text-left shadow-[0_0_30px_rgba(143,128,27,0.15)] backdrop-blur-md space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">Practice Overview</h3>
                    <p className="text-base md:text-lg leading-relaxed text-gray-200 font-medium">
                        <strong>FT Synergist</strong> advises SMEs on enterprise AI, workflow automation and systems integration. The practice is led by <strong>Frederick Tan, Principal Management Consultant, FT Synergist</strong> (TÜV SÜD Certified Management Consultant, <strong>SCMC-1810-P0236 | SS 680:2021</strong>), and FT Synergist is listed on the{" "}
                        <a href="https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-[#8F801B]">
                            IPOS GoBusiness IP Grow directory
                        </a>{" "}
                        for Innovation Consultancy.
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        EDGE co-funding for digitalisation is assessed by Enterprise Singapore on a case-by-case basis. FT Synergist does not guarantee grant approval or funding.
                    </p>
                </div>

                {/* HERO CTA BLOCK */}
                <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-4 pt-4">
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                        Book a 60-Minute Digitalisation &amp; Automation Diagnostic
                    </h3>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
                        Walk through your workflows, systems and data with a certified management consultant, and find out whether your project fits Large-scale Digital Transformation or Large-scale Automation.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                        <button
                            onClick={() => handleOpenSprintModal('innovation-productivity')}
                            className="bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center justify-center"
                        >
                            Book a Digitalisation &amp; Automation Diagnostic
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

                {/* SECTION 1: COMMON SME DIGITALISATION CHALLENGES */}
                <section className="space-y-6">
                    <div className="space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">Operational Realities</span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            1. Why Off-the-Shelf Software Fails When Workflows Aren&apos;t Redesigned
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-base">
                            Most SME digitalisation challenges are not software defects. They stem from digitising broken or fragmented processes: re-keying data between disconnected platforms, relying on outdated spreadsheets for critical decisions, and implementing software without restructuring how teams execute daily operations. We frequently address:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-2.5">
                            <div className="flex items-center gap-2.5 text-[#C5A017]">
                                <Building2 className="h-5 w-5 shrink-0" />
                                <h3 className="font-heading font-bold text-white text-lg">Disconnected Data Silos</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Sales, procurement, accounting and operations use independent platforms. Staff waste hours manually reconciling discrepancies across spreadsheets.
                            </p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-2.5">
                            <div className="flex items-center gap-2.5 text-[#C5A017]">
                                <Factory className="h-5 w-5 shrink-0" />
                                <h3 className="font-heading font-bold text-white text-lg">Manual Bottlenecks</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Production scheduling, task allocation and customer service rely on manual coordination, capping enterprise growth without adding linear headcount.
                            </p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-2.5">
                            <div className="flex items-center gap-2.5 text-[#C5A017]">
                                <LineChart className="h-5 w-5 shrink-0" />
                                <h3 className="font-heading font-bold text-white text-lg">Untapped Operational Data</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Years of customer and operational telemetry remain buried in legacy databases without predictive analytics or real-time visibility to guide business decisions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: THE ADVISORY ROLE VS IT VENDOR */}
                <section className="space-y-6">
                    <div className="space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">Independent Governance</span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            2. What FT Synergist Does: The Advisory Role vs. IT Vendor
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-base">
                            An IT software vendor sells software licences and builds custom code. FT Synergist serves as an independent process architect and management advisor, ensuring the business transformation delivers operational outcomes and complies with Enterprise Singapore criteria:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-3">
                            <div className="flex items-center gap-2 text-white font-bold text-base">
                                <Workflow className="h-5 w-5 text-[#8F801B] shrink-0" />
                                <h3>Workflow Redesign &amp; Process Architecture</h3>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                We audit your as-is operating procedures and redesign them into streamlined to-be workflows before evaluating software. Enterprise Singapore explicitly excludes software that merely automates isolated tasks without business transformation.
                            </p>
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-3">
                            <div className="flex items-center gap-2 text-white font-bold text-base">
                                <Network className="h-5 w-5 text-[#8F801B] shrink-0" />
                                <h3>Technology Evaluation &amp; Vendor Scoping</h3>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                We formulate technology-neutral functional specifications and tender briefs. This enables SME owners to obtain comparable, competitive quotations from qualified independent solution providers.
                            </p>
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-3">
                            <div className="flex items-center gap-2 text-white font-bold text-base">
                                <FileCheck2 className="h-5 w-5 text-[#8F801B] shrink-0" />
                                <h3>UAT Governance &amp; Quality Assurance</h3>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                We structure rigorous User Acceptance Testing (UAT) protocols, incident tracking registers, and pilot deployment KPIs to ensure vendors deliver against contract specifications before final sign-off.
                            </p>
                        </div>

                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-3">
                            <div className="flex items-center gap-2 text-white font-bold text-base">
                                <Users2 className="h-5 w-5 text-[#8F801B] shrink-0" />
                                <h3>Change Management &amp; Capability Transfer</h3>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Technology adoption fails when frontline staff are unprepared. We design training roadmaps, SOP handbooks, and multilingual digital learning modules to build lasting internal capability.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: PRACTICAL SME AI & AUTOMATION APPLICATIONS */}
                <section className="space-y-6">
                    <div className="space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">Practical Use Cases</span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            3. Practical SME Applications: AI, Automation &amp; Integration
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-base">
                            Rather than deploying AI for novelty, we focus on proven applications that solve specific operational bottlenecks and generate measurable productivity gains:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                            onClick={() => handleOpenSprintModal('innovation-productivity')}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
                        >
                            <div>
                                <Clock className="h-8 w-8 text-[#8F801B] mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-heading font-bold text-white text-lg mb-2">Predictive Scheduling &amp; Dispatch</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Replace fixed patrol or maintenance rounds with demand-driven task dispatch based on flight schedules, footfall sensors, or customer order volumes.
                                </p>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                                Review Scheduling Workflows <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </div>

                        <div
                            onClick={() => handleOpenSprintModal('innovation-productivity')}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
                        >
                            <div>
                                <Database className="h-8 w-8 text-[#8F801B] mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-heading font-bold text-white text-lg mb-2">ERP, CRM &amp; Legacy Integration</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Connect siloed procurement, accounting and sales platforms via modern APIs or RPA to eliminate duplicate data entry and enable real-time operational reporting.
                                </p>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                                Scope Systems Integration <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </div>

                        <div
                            onClick={() => handleOpenSprintModal('innovation-productivity')}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
                        >
                            <div>
                                <Bot className="h-8 w-8 text-[#8F801B] mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-heading font-bold text-white text-lg mb-2">AI Document &amp; Workflow Automation</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Automate invoice parsing, delivery order matching, multilingual staff learning, and operational incident escalation with human-in-the-loop oversight.
                                </p>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                                Explore Workflow Automation <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: FEATURED CASE STUDY - BESTWAY CLEANING SERVICES */}
                <section className="space-y-6">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">
                            Operational Case Study • Process Redesign &amp; Predictive Analytics
                        </span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            4. Bestway Cleaning Services – Developing Predictive Analytics for Smarter Airport Cleaning Operations
                        </h2>
                    </div>

                    <div className="bg-slate-900/90 p-6 md:p-8 rounded-2xl border border-[#8F801B]/40 shadow-xl space-y-6">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                            <div>
                                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A017] font-bold block">
                                    Operational Transformation • Changi Airport Terminal 2
                                </span>
                                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mt-1">
                                    Developing Predictive Analytics &amp; Operational Coordination Capabilities
                                </h3>
                            </div>
                            <span className="text-xs font-mono text-gray-400 bg-black/50 px-3 py-1 rounded border border-white/10">
                                Project Period: 3 Nov 2025 – 31 Oct 2026
                            </span>
                        </div>

                        {/* AUTHORITATIVE PUBLIC-FACING NARRATIVE */}
                        <div className="text-sm md:text-base text-gray-300 leading-relaxed space-y-3">
                            <p>
                                Bestway Cleaning Services engaged FT Synergist for an operational transformation initiative at Changi Airport Terminal 2.
                            </p>
                            <p>
                                The project focused on redesigning operational processes and developing predictive analytics capabilities to help the company anticipate passenger-demand hotspots, improve visibility of frontline activities and make more informed workforce deployment decisions.
                            </p>
                            <p>
                                By connecting operational information with performance dashboards and structured learning capabilities, the initiative was designed to support more responsive service delivery, better coordination and improved customer satisfaction.
                            </p>
                            <p>
                                FT Synergist contributed process redesign, workflow engineering, KPI and performance-framework development, implementation oversight and change-management support, working alongside the technology implementation partner.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm pt-2">
                            <div className="p-4 rounded-lg bg-black/60 border border-white/10 space-y-1.5">
                                <span className="font-bold text-white block">FT Synergist&apos;s role</span>
                                <p className="text-gray-300 leading-relaxed">Independent project counsel and process architect: as-is operational audit, redesigned workflow architecture, KPI and performance framework development, implementation oversight and change-management support.</p>
                            </div>
                            <div className="p-4 rounded-lg bg-black/60 border border-white/10 space-y-1.5">
                                <span className="font-bold text-white block">Technology partner</span>
                                <p className="text-gray-300 leading-relaxed">Appointed technology partner (aZaaS Pte Ltd) built the 9-module system architecture (comprising 4 AI BI Dashboard modules and 5 AI LMS modules) to FT Synergist&apos;s functional specifications.</p>
                            </div>
                            <div className="p-4 rounded-lg bg-black/60 border border-white/10 space-y-1.5">
                                <span className="font-bold text-white block">Grant context</span>
                                <p className="text-gray-300 leading-relaxed">Approved under the legacy Enterprise Development Grant (EDG). Effective 30 September 2026, equivalent large-scale enterprise digitalisation projects are assessed under the EDGE Grant.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="p-5 rounded-lg bg-black/60 border border-[#8F801B]/40 space-y-3">
                                <h4 className="text-xs font-mono uppercase tracking-wider text-[#8F801B] font-bold">
                                    Developed Technical &amp; Operational Capabilities
                                </h4>
                                <ul className="text-xs sm:text-sm text-gray-300 space-y-2 list-disc pl-4 leading-relaxed">
                                    <li><strong className="text-white">Predictive Analytics Capability:</strong> Developed predictive modeling scenarios designed to evaluate a 60-minute look-ahead window by correlating flight arrival schedules, passenger footfall telemetry, and incident density.</li>
                                    <li><strong className="text-white">9-Module System Architecture:</strong> Structured 4 AI Business Intelligence Dashboard modules for command-centre operational visibility alongside 5 AI LMS modules for structured staff learning.</li>
                                    <li><strong className="text-white">Initial Deployment Scope:</strong> Focused on Changi Airport Terminal 2 cleaning operations, with approximately 150 frontline cleaning roles as the initial operational scope.</li>
                                    <li><strong className="text-white">Multilingual Learning Framework:</strong> Structured digital learning architecture supporting English, Mandarin, Bengali and Malay to support frontline upskilling and competency development.</li>
                                </ul>
                            </div>
                            <div className="p-5 rounded-lg bg-black/60 border border-white/10 space-y-3">
                                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                                    Operational Governance &amp; Transformation Design
                                </h4>
                                <ul className="text-xs sm:text-sm text-gray-300 space-y-2 list-disc pl-4 leading-relaxed">
                                    <li><strong className="text-white">Demand-Driven Process Redesign:</strong> Re-engineered operating workflows to transition operational focus from rigid fixed patrols toward sensor- and data-informed resource allocation.</li>
                                    <li><strong className="text-white">Supervisory Visibility:</strong> Consolidated fragmented logs into unified dashboard telemetry to reduce manual shift coordination and administrative overhead.</li>
                                    <li><strong className="text-white">Human-in-the-Loop AI Oversight:</strong> Designed system logic so predictive indicators function as advisory decision support, ensuring supervisors retain final operational authority.</li>
                                    <li><strong className="text-white">Operational Scalability:</strong> Formulated standard operating procedures and system blueprints to enable modular replication across other large commercial facilities.</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-xs text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                            Source: Process Redesign Report – Iteration 2 (5 November 2026). In strict adherence to commercial confidentiality, all consulting fees, software build expenditure, grant disbursements, and internal financial projections are strictly excluded.
                        </p>
                    </div>
                </section>

                {/* SECTION 5: EDGE GRANT SOT MAPPING */}
                <section className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">
                            Enterprise Singapore EDGE Grant — Automation &amp; Digitalisation (Effective 30 Sep 2026)
                        </span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            5. How EDGE Grant Supports Large-scale Digital Transformation &amp; Automation
                        </h2>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-base">
                        The legacy EDG, MRA and PSG schemes ceased on 29 September 2026. Digitalisation and automation initiatives are now supported under the unified{" "}
                        <Link href="/edge-grant" className="text-white font-semibold underline hover:text-[#8F801B]">EDGE Grant</Link>, subject to a shared <strong>S$100,000 annual cap per company across all activities</strong> (refreshed every 1 April). Enterprise Singapore provides two primary pathways for larger-scale initiatives:
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
                                    <td className="p-4 font-semibold text-white">Official activity scope</td>
                                    <td className="p-4"><em>&ldquo;Transform core operations through enterprise-wide digital initiatives, integrating modern technologies to improve workflows, build digital capabilities, and drive sustainable growth.&rdquo;</em></td>
                                    <td className="p-4"><em>&ldquo;Develop new capabilities, improve productivity and transform through adoption of advanced technologies for enterprise-wide automation and integration across production and operational systems.&rdquo;</em></td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Supported technologies</td>
                                    <td className="p-4">Cloud-based enterprise platforms, data analytics and visualisation, AI/ML, RPA, workflow automation, or integration of legacy systems with new digital architecture</td>
                                    <td className="p-4">Robotics and automated assembly lines, IoT-enabled smart manufacturing and real-time monitoring, automated material handling and warehousing, process control and optimisation</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Integration criteria</td>
                                    <td className="p-4">Integration and/or standardisation across systems such as business, sales and procurement</td>
                                    <td className="p-4">Integration and/or standardisation across production and operational systems (e.g. production, quality control, logistics, maintenance); significant productivity improvements</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Evaluation basis</td>
                                    <td className="p-4">Assessed case-by-case by Enterprise Singapore</td>
                                    <td className="p-4">Assessed case-by-case by Enterprise Singapore</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-semibold text-white">Required business projections</td>
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
                                <h3>Non-Supported Costs: Digital Transformation</h3>
                            </div>
                            <ul className="text-xs text-gray-400 space-y-1.5 list-disc pl-4 leading-relaxed">
                                <li>Automation of isolated tasks without broader business transformation (e.g. digitising paper forms without altering underlying workflows or linking to other systems)</li>
                                <li>Basic IT upgrades or infrastructure improvements (e.g. routine bandwidth expansion, or updating software versions without functional enhancements)</li>
                                <li>Goods and Services Tax (GST)</li>
                                <li>Ongoing operational maintenance and recurring subscription renewals</li>
                            </ul>
                        </div>
                        <div className="p-5 rounded-lg bg-black/60 border border-white/10 space-y-3">
                            <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm">
                                <AlertCircle className="h-4 w-4 shrink-0" />
                                <h3>Non-Supported Costs: Automation</h3>
                            </div>
                            <ul className="text-xs text-gray-400 space-y-1.5 list-disc pl-4 leading-relaxed">
                                <li>Equipment deployed or operated overseas; used, second-hand or refurbished equipment</li>
                                <li>Existing possession of similar or duplicate equipment or software</li>
                                <li>First-time set-up or baseline operational costs essential to starting a business</li>
                                <li>Basic off-the-shelf devices (e.g. standard laptops, tablets, mobile handsets, copiers)</li>
                                <li>Standalone software modules or features lacking enterprise integration; maintenance costs; GST</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-5 rounded-lg bg-black/60 border border-[#8F801B]/40 space-y-3">
                        <div className="flex items-center gap-2 text-[#8F801B] font-bold text-sm">
                            <FileCheck2 className="h-4 w-4 shrink-0" />
                            <h3>Eligibility, Deliverables &amp; BGP Application Rules</h3>
                        </div>
                        <ul className="text-xs text-gray-300 space-y-1.5 list-disc pl-4 leading-relaxed">
                            <li><strong>Eligibility:</strong> Registered and operating in Singapore with at least 30% local shareholding (by ultimate individual Singaporean/PR ownership). Work must not have started and no payments or deposits may be made to vendors prior to BGP submission.</li>
                            <li><strong>Project Deliverables:</strong> Comprehensive project report (milestones, qualitative and quantitative benefits, challenges encountered); system demonstration with screenshots of deployed software; training attendance records; and a final consultancy report covering project scope, architecture, and verified business impact.</li>
                            <li><strong>Application Process:</strong> The applicant company must submit its own application directly via Corppass on the Business Grants Portal (BGP). Third-party vendors or consultants are strictly prohibited from submitting or managing applications on the client&apos;s behalf.</li>
                            <li><strong>Claims &amp; Auditing:</strong> The EDGE Grant is reimbursement-based. All project invoices must be paid in full before filing a single final claim on BGP, supported by an independent audit from Enterprise Singapore&apos;s Panel of Auditors.</li>
                        </ul>
                    </div>

                    <p className="text-xs text-gray-400 leading-relaxed bg-white/5 border border-white/10 rounded-lg p-4">
                        <strong className="text-gray-200">Other Automation &amp; Digitalisation activities:</strong> Single-function Digital Solutions, Integrated Enterprise Systems and Pre-scoped Equipment utilize pre-approved solution catalogues. A sub-cap of up to S$30,000 within the overall S$100,000 annual cap applies to these catalogue solutions. Consult official Enterprise Singapore directories for current pre-approved packages.
                    </p>
                </section>

                {/* SECTION 6: METHODOLOGY */}
                <section className="space-y-6">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">Consulting Governance</span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            6. Our 5-Step Digitalisation Roadmap
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-base">
                            Each phase directly aligns with the documentation and evidentiary standards required by Enterprise Singapore for large-scale enterprise initiatives:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[
                            { n: "01 • DIAGNOSE", t: "Workflow & Data Audit", d: "Map baseline operations, identify departmental bottlenecks, and evaluate integration readiness across legacy tools." },
                            { n: "02 • DESIGN", t: "Target Architecture", d: "Formulate the to-be digital architecture, data models, and measurable productivity KPIs (e.g. response time, labor hours)." },
                            { n: "03 • SCOPE", t: "Vendor Brief & RFP", d: "Draft neutral functional specifications and assist in procuring independent, comparable commercial quotations." },
                            { n: "04 • IMPLEMENT", t: "UAT Governance", d: "Oversee vendor system integration, conduct rigorous User Acceptance Testing, and monitor pilot deployment." },
                            { n: "05 • TRANSFER", t: "Training & Report", d: "Conduct workforce change management, compile training records, and produce the final consultancy impact report." },
                        ].map((s) => (
                            <div key={s.n} className="bg-white/5 p-5 rounded-xl border border-white/10 space-y-2">
                                <span className="text-xs font-mono font-bold text-[#C5A017]">{s.n}</span>
                                <h3 className="font-heading text-sm font-bold text-white">{s.t}</h3>
                                <p className="text-xs text-gray-300 leading-relaxed">{s.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 7: ADDITIONAL CLIENT TRACK RECORD & EVIDENCE */}
                <section className="space-y-6">
                    <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#8F801B] font-bold">Enterprise Track Record</span>
                        <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                            7. Selected Additional Technology &amp; AI Engagements
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-3">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A017] font-bold">Strategic Planning &amp; AI Fleet Telematics</span>
                            <h3 className="font-heading text-lg font-bold text-white">TNT Surveillance Pte Ltd</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Business strategic planning, IP co-creation and operational scaling for an AI driver-monitoring and fleet-safety technology provider. Operational outcomes: 85% reduction in driver hazard alerts within 1 month; 72% cut in per-bus installation manpower (reduced from 24 to 9 man-hours); and fleet deployment across SBS Transit, SMRT and PSA prime movers (10,000+ vehicles).
                            </p>
                            <Link href="/business-strategic-planning" className="inline-flex items-center text-xs font-bold text-[#8F801B] hover:text-white uppercase tracking-wider transition-colors">
                                View Strategic Planning Scope <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                            </Link>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-3">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A017] font-bold">Brand, IP &amp; AI Personalisation</span>
                            <h3 className="font-heading text-lg font-bold text-white">Pétale Tea Pte. Ltd.</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Strategic planning and IP commercialisation for an artisanal wellness tea brand, incorporating an AI &ldquo;Blend Your Own&rdquo; recommendation engine translating consumer mood, wellness goals and taste preferences into custom botanical formulations, demonstrated live at IPOS IP Week 2026.
                            </p>
                            <Link href="/insights/petale-tea-ip-growth-case-study" className="inline-flex items-center text-xs font-bold text-[#8F801B] hover:text-white uppercase tracking-wider transition-colors">
                                Read the IP Week Case Study <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                            </Link>
                        </div>
                    </div>

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
                                    Invited industry speaker on Advanced Driver Assistance Systems (ADAS) and AI driver monitoring frameworks alongside Ministry of Manpower representatives.
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
                                    Featured panelist on smart supply chain resilience and IoT fleet telematics architectures for cross-border logistics.
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
                                Assess Your Digital Transformation Readiness
                            </h3>
                            <p className="text-sm text-gray-300">
                                Share your current operational bottlenecks and system architecture. We will advise whether your project aligns with Large-scale Digital Transformation, Large-scale Automation, or pre-approved solution routes.
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

                {/* SECTION 8: RELATED ADVISORY */}
                <section className="space-y-4 bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h2 className="font-heading text-xl md:text-2xl font-extrabold tracking-tight text-white">
                        Related Strategic Advisory for Singapore Enterprises
                    </h2>
                    <ul className="text-sm text-gray-300 space-y-2 leading-relaxed">
                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-[#8F801B] shrink-0 mt-0.5" /><span><Link href="/business-strategic-planning" className="text-white font-semibold underline hover:text-[#8F801B]">Business Strategic Planning</Link>: Establish a 3 to 5-year strategic roadmap before committing capital to major enterprise software.</span></li>
                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-[#8F801B] shrink-0 mt-0.5" /><span><Link href="/edge-grant" className="text-white font-semibold underline hover:text-[#8F801B]">Enterprise Singapore EDGE Grant Guide</Link>: Complete breakdown of the 21 activities, S$100,000 annual cap and eligibility criteria.</span></li>
                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-[#8F801B] shrink-0 mt-0.5" /><span><Link href="/ip-consultant" className="text-white font-semibold underline hover:text-[#8F801B]">IP Consultant Singapore</Link>: Protect the proprietary algorithms, trade secrets, software code and operational data created during your transformation.</span></li>
                    </ul>
                </section>

                {/* SECTION 9: FAQ */}
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
                        Discuss your operational workflows and transformation goals with Principal Management Consultant Frederick Tan (SCMC-1810-P0236 | SS 680:2021) and leave with a clear view of scope, technical architecture, and EDGE Grant fit.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => handleOpenSprintModal('innovation-productivity')}
                            className="bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-4 px-10 rounded-lg text-lg transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center justify-center"
                        >
                            Book a Digitalisation &amp; Automation Diagnostic
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <Link
                            href="/contact"
                            className="border border-[#8F801B] text-[#8F801B] hover:bg-[#8F801B] hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all cursor-pointer inline-flex items-center justify-center group"
                        >
                            Send an Enquiry
                            <ExternalLink className="ml-5 h-5 w-5 opacity-70 group-hover:opacity-100" />
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
