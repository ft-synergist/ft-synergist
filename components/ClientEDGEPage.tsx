"use client";

import { usePersonaModal } from "@/components/providers/PersonaModalProvider";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Globe,
    Plus,
    Minus,
    Linkedin,
    ExternalLink,
    Calendar,
    Layers,
    Cpu,
    TrendingUp,
    FileText,
    Leaf,
    DollarSign,
    Clock,
    Award,
    Building2,
    AlertCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Helper function to send data to GA4
const trackLead = () => {
    if (typeof window !== "undefined") {
        const win = window as unknown as { gtag?: (event: string, action: string, options: Record<string, unknown>) => void };
        if (win.gtag) {
            win.gtag("event", "generate_lead", {
                event_category: "engagement",
                event_label: "edge_eligibility_check",
                value: 1
            });
        }
    }
};

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function ClientEDGEPage() {
    const { openModal } = usePersonaModal();
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const handleButtonClick = () => {
        openModal();
        trackLead();
    };

    const businessAreas = [
        {
            name: "Automation",
            description: "Robotics, process hardware, and machinery to elevate workflow productivity and operational speed.",
            icon: Cpu,
        },
        {
            name: "Digitalisation",
            description: "Single-function software, integrated ERP/CRM enterprise platforms, and digital capability adoption.",
            icon: Layers,
        },
        {
            name: "Business Strategy",
            description: "Strategic business roadmap design, operating model restructuring, and enterprise transformation.",
            icon: ShieldCheck,
        },
        {
            name: "Financial Management",
            description: "Financial governance, capital structure advisory, risk management frameworks, and internal controls.",
            icon: DollarSign,
        },
        {
            name: "Innovation",
            description: "Proprietary product development, R&D enhancement, and defensible intellectual property creation.",
            icon: TrendingUp,
        },
        {
            name: "Internationalisation",
            description: "Market entry research, foreign presence setup, and cross-border commercial expansion.",
            icon: Globe,
        },
        {
            name: "Standards",
            description: "Attainment and compliance with national and international industry standards and certifications.",
            icon: Award,
        },
        {
            name: "Sustainability",
            description: "Decarbonisation roadmaps, resource efficiency upgrades, and environmental sustainability reporting.",
            icon: Leaf,
        },
    ];

    const faqs = [
        {
            question: "Are the EDG, MRA and PSG schemes still available?",
            answer: "Yes, EDG, MRA, and PSG remain available for applications until 29 September 2026. Applications submitted before 30 September 2026 will continue to be assessed based on the requirements of the relevant scheme. Ongoing projects under these three schemes will not be affected and will be supported until project completion and claim disbursement. After 30 September 2026, no new application will be accepted under these schemes, and the EDGE Grant becomes the sole application pathway."
        },
        {
            question: "What is the EDGE Grant and what does it replace?",
            answer: "The EDGE Grant is Enterprise Singapore's unified grant framework launching on 30 September 2026. It streamlines and consolidates three legacy schemes—the Enterprise Development Grant (EDG), Market Readiness Assistance (MRA), and Productivity Solutions Grant (PSG)—into a single grant mechanism enabling businesses to access support more seamlessly."
        },
        {
            question: "What does EDGE stand for?",
            answer: "EDGE is not an acronym. Enterprise Singapore chose the name EDGE to convey the intent of the support: enabling local enterprises to gain a competitive edge over their competitors in Singapore and international markets."
        },
        {
            question: "What are the funding support levels and grant caps under the EDGE Grant?",
            answer: "Under the EDGE Grant, support levels are up to 70% of qualifying costs for SMEs and up to 50% for non-SMEs, disbursed on a reimbursement basis. Each company has an annual grant cap of up to S$100,000 across all 8 business areas and 100+ eligible activities combined, resetting annually. Within the S$100,000 cap, up to S$30,000 can be used for single-function digital solutions, integrated enterprise systems, and selected automation activities."
        },
        {
            question: "How is the Productivity Solutions Grant (PSG) folded into EDGE?",
            answer: "The Productivity Solutions Grant (PSG) ceases on 29 September 2026 alongside EDG and MRA. Pre-scoped IT equipment and off-the-shelf software solutions previously funded through PSG will be integrated into EDGE under the Automation and Digitalisation business areas. Companies will be able to deploy up to S$30,000 of their S$100,000 annual grant cap toward single-function digital solutions, integrated enterprise systems, and selected automation activities."
        },
        {
            question: "What business areas and activities does EDGE cover?",
            answer: "EDGE covers 8 business areas across 100+ activities: Automation, Digitalisation, Business Strategy, Financial Management, Innovation, Internationalisation, Standards, and Sustainability."
        },
        {
            question: "Who can apply for the EDGE Grant?",
            answer: "Applicants must be business entities registered and operating in Singapore with at least 30% local shareholding held by Singapore Citizens and/or Singapore Permanent Residents. Other requirements may apply depending on the specific supportable activity."
        },
        {
            question: "Can a business apply for EDGE if it has previously applied for or received funding under EDG, MRA, or PSG?",
            answer: "Yes. Businesses that have previously applied for or received funding under EDG, MRA, or PSG are fully eligible to apply for the EDGE Grant once it opens on 30 September 2026."
        },
        {
            question: "Can vendors be changed after an EDGE application is submitted?",
            answer: "Change requests are only allowed for changes to project end date and claim due date. Should businesses wish to make any other changes (such as changing vendor), they must terminate the existing project on the Business Grants Portal (BGP) and submit a new application."
        },
        {
            question: "Is the EDGE Grant available to non-SMEs and larger businesses?",
            answer: "Yes. A significant structural change from the legacy schemes is that the EDGE Grant extends support to all Singapore-registered businesses, including non-SMEs. SMEs are supported at up to 70% of qualifying costs, while non-SMEs are supported at up to 50%. This is a direct expansion from EDG, MRA, and PSG, which were primarily SME-focused schemes."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center md:py-36 lg:py-44 overflow-hidden">
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/hero-bg.png"
                        alt="Singapore Skyline"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 max-w-5xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-[#C5A017]/40 bg-[#C5A017]/10 text-[#C5A017] text-xs md:text-sm font-semibold uppercase tracking-wider">
                        <Calendar className="h-4 w-4" />
                        Enterprise Singapore Official Grant Cutover
                    </div>

                    <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-2xl mb-8 leading-tight">
                        EDGE Grant Singapore 2026: What Replaces EDG, MRA &amp; PSG
                    </h1>

                    {/* Transition Bridge Callout */}
                    <div className="mx-auto max-w-3xl mb-8 p-6 rounded-xl border border-[#C5A017] bg-black/60 backdrop-blur-md text-left shadow-[0_0_30px_rgba(197,160,23,0.15)]">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-[11px] uppercase font-bold tracking-wider text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
                                Official Transition Directives
                            </span>
                        </div>
                        <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-medium">
                            Enterprise Singapore has announced that the <strong>Enterprise Development Grant (EDG)</strong>, <strong>Market Readiness Assistance (MRA)</strong>, and <strong>Productivity Solutions Grant (PSG)</strong> will cease on <strong>29 September 2026</strong>. From <strong>30 September 2026</strong>, the new <strong>EDGE Grant</strong> becomes the sole application pathway. Ongoing applications and approved projects under EDG, MRA, and PSG will continue to be processed and supported through completion and claim disbursement.
                        </p>
                    </div>

                    <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-300 drop-shadow-md mb-10 leading-relaxed">
                        Prepare your enterprise for the consolidated grant framework. Understand verified support levels, the S$100,000 annual funding cap, and strategic roadmap requirements with certified management consulting expertise.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <button
                            onClick={handleButtonClick}
                            className="bg-[#8F801B] btn-start-journey inline-flex items-center justify-center rounded-md px-8 py-4 text-base sm:text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#A08d1e] cursor-pointer"
                        >
                            Check Grant Eligibility
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Key Facts Section */}
            <section id="key-facts" className="py-20 bg-[#0a0a0a] border-y border-white/10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1.5 mb-3 border border-[#C5A017]/30 rounded-full bg-[#C5A017]/10">
                            <span className="text-xs font-bold text-[#C5A017] uppercase tracking-wider">Enterprise Singapore Framework</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                            Key Facts: Verified EDGE Grant Guidelines
                        </h2>
                        <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
                            Essential verified terms governing the consolidation of EDG, MRA, and PSG into the EDGE Grant.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/* Fact 1 */}
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between">
                            <div>
                                <div className="inline-flex p-3 rounded-lg bg-white/10 text-[#C5A017] mb-4">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Scheme Cessation Date</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    EDG, MRA and PSG cease on <strong>29 September 2026</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Fact 2 */}
                        <div className="p-6 rounded-xl border border-[#C5A017]/40 bg-[#C5A017]/5 flex flex-col justify-between">
                            <div>
                                <div className="inline-flex p-3 rounded-lg bg-[#C5A017]/20 text-[#C5A017] mb-4">
                                    <Calendar className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Sole Application Pathway</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    The EDGE Grant becomes the sole application pathway from <strong>30 September 2026</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Fact 3 */}
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between">
                            <div>
                                <div className="inline-flex p-3 rounded-lg bg-white/10 text-[#C5A017] mb-4">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Ongoing Projects &amp; Claims</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Ongoing EDG, MRA, or PSG submissions/projects continue to be processed; claims may still be submitted upon project completion after the cutover.
                                </p>
                            </div>
                        </div>

                        {/* Fact 4 */}
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between">
                            <div>
                                <div className="inline-flex p-3 rounded-lg bg-white/10 text-[#C5A017] mb-4">
                                    <DollarSign className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Funding Support Levels</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Support levels: up to <strong>70%</strong> of qualifying costs for SMEs, up to <strong>50%</strong> for non-SMEs.
                                </p>
                            </div>
                        </div>

                        {/* Fact 5 */}
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between">
                            <div>
                                <div className="inline-flex p-3 rounded-lg bg-white/10 text-[#C5A017] mb-4">
                                    <Layers className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Annual Funding Cap</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Funding cap: up to <strong>S$100,000</strong> in total grant support per company per year, across all activities combined (this replaces having separate caps per grant).
                                </p>
                            </div>
                        </div>

                        {/* Fact 6 */}
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between">
                            <div>
                                <div className="inline-flex p-3 rounded-lg bg-white/10 text-[#C5A017] mb-4">
                                    <FileText className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Disbursement Model</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Grant support is disbursed on a <strong>reimbursement basis</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Fact 7 */}
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col justify-between">
                            <div>
                                <div className="inline-flex p-3 rounded-lg bg-white/10 text-[#C5A017] mb-4">
                                    <Calendar className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Annual Cap Reset Date</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    The S$100,000 annual grant cap <strong>refreshes on 1 April each year</strong>.
                                </p>
                            </div>
                        </div>

                        {/* Fact 8 */}
                        <div className="p-6 rounded-xl border border-[#C5A017]/40 bg-[#C5A017]/5 flex flex-col justify-between">
                            <div>
                                <div className="inline-flex p-3 rounded-lg bg-[#C5A017]/20 text-[#C5A017] mb-4">
                                    <Building2 className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Open to Non-SMEs</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Unlike legacy schemes, EDGE extends grant support to <strong>all Singapore-registered businesses</strong>, including non-SMEs, at up to <strong>50%</strong> of qualifying costs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Coverage Banner */}
                    <div className="mt-8 p-6 rounded-xl border border-white/15 bg-white/5 text-center max-w-4xl mx-auto">
                        <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                            Comprehensive Scope Across 8 Business Areas &amp; 100+ Activities
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            EDGE covers 8 business areas across 100+ activities: <strong>Automation</strong>, <strong>Digitalisation</strong>, <strong>Business Strategy</strong>, <strong>Financial Management</strong>, <strong>Innovation</strong>, <strong>Internationalisation</strong>, <strong>Standards</strong>, and <strong>Sustainability</strong>.
                        </p>
                    </div>

                    {/* Visible Citation Line (Mandatory) */}
                    <div className="mt-8 text-center text-xs sm:text-sm text-gray-400">
                        Source:{" "}
                        <a
                            href="https://www.enterprisesg.gov.sg/resources/all-faqs/edge-grant"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#C5A017] underline hover:text-yellow-300 transition-colors inline-flex items-center gap-1 font-medium"
                        >
                            Enterprise Singapore, EDGE Grant FAQ (verified 10 September 2026)
                            <ExternalLink className="h-3.5 w-3.5 inline" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Explicit PSG Consolidation Section */}
            <section id="psg-transition" className="py-24 bg-black relative">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 mb-4 border border-[#C5A017]/30 rounded-full bg-[#C5A017]/10">
                            <span className="text-xs font-bold text-[#C5A017] uppercase tracking-wider">Scheme Consolidation</span>
                        </div>
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white mb-4">
                            Productivity Solutions Grant (PSG) Transition to EDGE
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                            Understanding how the Productivity Solutions Grant (PSG) is integrated alongside EDG and MRA into the unified EDGE framework.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#C5A017]"></span>
                                PSG Folded into the EDGE Framework
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                Historically, the <strong>Productivity Solutions Grant (PSG)</strong> supported businesses adopting pre-scoped IT solutions, software, and equipment to enhance productivity. Alongside EDG and MRA, PSG will officially cease on <strong>29 September 2026</strong>.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Starting <strong>30 September 2026</strong>, businesses will no longer apply for PSG as an independent grant. Its supportable activities are unified directly into EDGE under the <strong>Automation</strong> and <strong>Digitalisation</strong> business areas.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#C5A017]"></span>
                                S$30,000 Digital Solutions &amp; Systems Allocation
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                Under the consolidated EDGE framework, each eligible company has a total annual grant cap of up to <strong>S$100,000</strong> across all activities combined.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Within this annual S$100,000 grant cap, companies can utilize up to <strong>S$30,000</strong> specifically on single-function digital solutions, integrated enterprise systems, and selected automation activities—preserving the accessibility of essential operational tools previously subsidized under PSG.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#C5A017]"></span>
                                Pre-Approved Vendors vs. Appointed Consultants
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                For activities with pre-approved vendors (similar to the classic PSG mechanism), businesses choose from assessed vendor lists.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                For strategic capability upgrade projects (such as Business Strategy, Innovation, and Internationalisation), businesses may engage qualified external consultants. Note that change requests for vendors after submission are not permitted under EDGE—projects must be terminated and reapplied if vendors change.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-[#C5A017]"></span>
                                Existing PSG Submissions &amp; Claims Processing
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                Any PSG application submitted before 30 September 2026 will continue to be evaluated against PSG criteria.
                            </p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Approved PSG projects proceed unaffected until project completion and claim disbursement. After 29 September 2026, no new PSG submissions will be accepted, and all new productivity requests transition to EDGE.
                            </p>
                        </div>
                    </div>

                    {/* Internal link to PSG insight */}
                    <div className="mt-10 text-center">
                        <Link
                            href="/insights/what-happens-to-psg-after-september-2026"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C5A017] hover:text-white transition-colors underline underline-offset-4"
                        >
                            Read the full PSG-to-EDGE Transition Guide
                            <ExternalLink className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* The 8 Business Areas of EDGE */}
            <section id="business-areas" className="py-24 bg-[#0a0a0a] border-t border-white/10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 mb-4 border border-[#C5A017]/30 rounded-full bg-[#C5A017]/10">
                            <span className="text-xs font-bold text-[#C5A017] uppercase tracking-wider">Consolidated Capability Matrix</span>
                        </div>
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white mb-4">
                            The 8 Business Areas Covered Under EDGE
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                            The EDGE Grant unifies more than 100 supportable activities across 8 dedicated business areas under one annual grant cap.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {businessAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-[#C5A017]/50 hover:bg-white/10 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="p-3 rounded-lg bg-white/10 text-[#C5A017] inline-block mb-4">
                                        <area.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{area.name}</h3>
                                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                        {area.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility Criteria */}
            <section id="eligibility" className="py-20 bg-black border-t border-white/10">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="inline-block px-4 py-1.5 mb-3 border border-[#C5A017]/30 rounded-full bg-[#C5A017]/10">
                        <span className="text-xs font-bold text-[#C5A017] uppercase tracking-wider">Applicant Requirements</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Who Can Apply for the EDGE Grant?</h2>
                    <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-10">
                        Enterprise Singapore enforces standard eligibility baselines for all applicants under the EDGE framework.
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2 text-left">
                        <div className="flex items-start bg-white/5 p-6 rounded-xl border border-white/10">
                            <CheckCircle2 className="w-6 h-6 text-[#C5A017] mr-4 shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-bold text-white text-base mb-1">Singapore Registered Entity</h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                    The applicant must be a business entity registered and operating in Singapore.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start bg-white/5 p-6 rounded-xl border border-white/10">
                            <CheckCircle2 className="w-6 h-6 text-[#C5A017] mr-4 shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-bold text-white text-base mb-1">Min. 30% Local Shareholding</h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                    Must maintain at least 30% local shareholding held by Singaporean(s) and/or Singapore PR(s).
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="mt-6 text-xs text-gray-400">
                        Note: Other activity-specific requirements may apply depending on the selected project type under the 8 business areas.
                    </p>
                </div>
            </section>

            {/* Apply Now vs. Wait Decision Framework */}
            <section id="apply-now-or-wait" className="py-20 bg-[#0a0a0a] border-t border-white/10">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1.5 mb-3 border border-[#C5A017]/30 rounded-full bg-[#C5A017]/10">
                            <span className="text-xs font-bold text-[#C5A017] uppercase tracking-wider">Practical Decision Framework</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Should You Apply Now, or Wait for EDGE?</h2>
                        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                            The right timing depends on your specific project. Use this scenario-based framework to decide.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {/* Scenario A */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                            <div className="shrink-0">
                                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-extrabold text-sm">A</div>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <h3 className="font-bold text-white text-base">Your project is ready now and fits current EDG, MRA, or PSG criteria</h3>
                                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full whitespace-nowrap">Apply Now</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">EDG, MRA, and PSG remain fully open on the Business Grants Portal until 29 September 2026. Their requirements are established and processing continues as normal. Delaying carries real risk: EDGE's individual activity funding percentages and documentation requirements have not yet been published. For most projects that are ready to go, applying now under known rules is the lower-risk path.</p>
                            </div>
                        </div>

                        {/* Scenario B */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                            <div className="shrink-0">
                                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-extrabold text-sm">B</div>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <h3 className="font-bold text-white text-base">Your project involves deepening an existing overseas market (not a new one)</h3>
                                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full whitespace-nowrap">Consider Waiting</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">MRA currently requires a &ldquo;new market&rdquo; criterion — support is tied to entering a market you have not previously operated in. EDGE removes this restriction entirely, and raises overseas expansion support from 50% to 70% for SMEs. If your project is about deepening an existing overseas presence, timing your application around the EDGE launch on 30 September 2026 could be the stronger commercial decision — provided your timeline has flexibility of a few months.</p>
                            </div>
                        </div>

                        {/* Scenario C */}
                        <div className="rounded-xl border border-[#C5A017]/40 bg-[#C5A017]/5 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                            <div className="shrink-0">
                                <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#C5A017]/20 border border-[#C5A017]/40 text-[#C5A017] font-extrabold text-sm">C</div>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <h3 className="font-bold text-white text-base">Your business is a non-SME (larger enterprise or MNC)</h3>
                                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#C5A017]/20 text-[#C5A017] border border-[#C5A017]/30 px-2 py-0.5 rounded-full whitespace-nowrap">Prepare Now — Apply at EDGE Launch</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">Non-SMEs are currently excluded from EDG, PSG, and MRA support in most cases. EDGE extends eligibility to all Singapore-registered businesses, including non-SMEs, at up to 50% of qualifying project costs. Use the period before 30 September 2026 to scope your projects, gather cost estimates, and identify which capability-building, productivity, or internationalisation activities to fund — so you are ready to apply the moment EDGE opens.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Epistemic Transparency — What Remains Unconfirmed */}
            <section id="what-is-unconfirmed" className="py-20 bg-black border-t border-white/10">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
                        <div className="flex items-start gap-4 mb-6">
                            <AlertCircle className="h-6 w-6 text-[#C5A017] shrink-0 mt-0.5" />
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">What Enterprise Singapore Has Not Yet Confirmed About EDGE</h2>
                                <p className="text-gray-400 text-sm">Several guides have published granular EDGE details beyond what is officially confirmed. The following specifics are not yet published — treat any third-party claims on these points with caution until official guidelines appear on the Business Grants Portal.</p>
                            </div>
                        </div>
                        <ul className="space-y-3">
                            {[
                                "Precise co-funding percentage tiers for individual domestic transformation and productivity activities (beyond the confirmed 70% SME / 50% non-SME headline rates)",
                                "The complete list of pre-approved vendors and pre-scoped packages under EDGE's Digitalisation and Automation areas (the EDGE equivalent of the PSG vendor catalogue)",
                                "Full documentation and evidence requirements for the unified EDGE application workflow",
                                "Detailed qualification criteria for each of the 100+ supported activities across the 8 business areas",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                    <span className="shrink-0 mt-2 h-1.5 w-1.5 rounded-full bg-[#C5A017]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs text-gray-500 mt-8 border-t border-white/10 pt-6">
                            Monitor the{" "}
                            <a href="https://www.businessgrants.gov.sg" target="_blank" rel="noopener noreferrer" className="text-[#C5A017] hover:underline">Business Grants Portal</a>
                            {" "}and{" "}
                            <a href="https://www.enterprisesg.gov.sg/resources/all-faqs/edge-grant" target="_blank" rel="noopener noreferrer" className="text-[#C5A017] hover:underline">Enterprise Singapore&apos;s official EDGE Grant FAQ</a>
                            {" "}for updates as they are published.
                        </p>
                    </div>
                </div>
            </section>

            {/* Principal Consultant Advisory */}
            <section className="py-20 bg-[#0a0a0a] border-t border-white/10">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="rounded-2xl border border-[#C5A017]/40 bg-white/5 p-8 md:p-12 shadow-[0_0_30px_rgba(197,160,23,0.1)]">
                        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
                            <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full border-4 border-[#C5A017] shadow-xl">
                                <Image
                                    src="/frederick-tan-scmc-certified-edg-consultant.jpg"
                                    alt="Frederick Tan - Certified Management Consultant"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <div className="mb-2 inline-flex items-center rounded-full bg-[#C5A017]/20 px-4 py-1 border border-[#C5A017]/50">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#C5A017]">
                                        TÜV SÜD Certified SCMC
                                    </span>
                                </div>
                                <h2 className="mb-1 text-2xl sm:text-3xl font-bold text-white">Frederick Tan</h2>
                                <p className="mb-4 text-lg text-[#C5A017]">Principal Consultant</p>

                                <p className="mb-6 text-gray-300 leading-relaxed text-xs sm:text-sm">
                                    Strategic capability transformation projects require certified management consultants to satisfy Enterprise Singapore proposal standards. Listed in the official IPOS GoBusiness Service Provider Directory, FT Synergist guides Singapore enterprises through capability diagnostics, business strategy, and compliant grant submission roadmaps.
                                </p>

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center md:justify-start">
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <ShieldCheck className="h-4 w-4 text-[#C5A017]" />
                                        <span>
                                            License:{" "}
                                            <a
                                                href="https://www.tuvsud.com/en-sg/services/training/asmea/list-of-certified-consultants"
                                                target="_blank"
                                                rel="nofollow noopener noreferrer"
                                                className="text-white font-bold hover:text-[#C5A017] hover:underline inline-flex items-center gap-1"
                                            >
                                                SCMC-1810-P0236
                                                <ExternalLink className="h-3 w-3 opacity-70" />
                                            </a>
                                        </span>
                                    </div>
                                    <div className="hidden h-4 w-px bg-white/20 sm:block"></div>
                                    <a
                                        href="https://www.linkedin.com/in/tanfrederick/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-xs font-medium text-white hover:text-[#C5A017] transition-colors"
                                    >
                                        <Linkedin className="h-4 w-4" />
                                        <span>LinkedIn Profile</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive FAQ Section */}
            <section id="faq" className="py-24 bg-black border-t border-white/10">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 mb-3 border border-[#C5A017]/30 rounded-full bg-[#C5A017]/10">
                            <span className="text-xs font-bold text-[#C5A017] uppercase tracking-wider">Frequently Asked Questions</span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                            EDGE Grant FAQs
                        </h2>
                        <p className="text-gray-400 mt-2 text-sm sm:text-base">
                            Official answers regarding the transition from EDG, MRA, and PSG to EDGE.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-[#C5A017]/30 transition-colors">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="flex w-full items-center justify-between p-6 text-left font-bold text-base sm:text-lg text-white hover:bg-white/5 transition-colors focus:outline-none"
                                >
                                    <span>{faq.question}</span>
                                    {openFaqIndex === index ? (
                                        <Minus className="h-5 w-5 text-[#C5A017] flex-shrink-0 ml-4" />
                                    ) : (
                                        <Plus className="h-5 w-5 text-[#C5A017] flex-shrink-0 ml-4" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openFaqIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-gray-300 text-sm leading-relaxed border-t border-white/10">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Institutional References */}
            <aside aria-label="Institutional Citations" className="bg-[#0a0a0a] border-t border-white/10 py-12 text-neutral-400 text-xs">
                <div className="container mx-auto px-4 max-w-5xl">
                    <p className="font-semibold text-gray-300 uppercase tracking-wider mb-4">
                        Institutional References &amp; Regulatory Authorities
                    </p>
                    <ol className="space-y-2 list-decimal list-inside leading-relaxed text-neutral-400">
                        <li>
                            Enterprise Singapore. &quot;EDGE Grant FAQ.&quot; Official guidelines, transition timeline, and scheme consolidation terms.{' '}
                            <a
                                href="https://www.enterprisesg.gov.sg/resources/all-faqs/edge-grant"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#C5A017] hover:underline font-medium"
                            >
                                https://www.enterprisesg.gov.sg/resources/all-faqs/edge-grant
                            </a>
                        </li>
                        <li>
                            TÜV SÜD PSB Singapore. &quot;Certified Management Consultants Directory.&quot; SCMC registration listings for enterprise capability development advisory.{' '}
                            <a
                                href="https://www.tuvsud.com/en-sg/services/training/asmea/list-of-certified-consultants"
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className="text-[#C5A017] hover:underline font-medium"
                            >
                                [TÜV SÜD Directory]
                            </a>
                        </li>
                    </ol>
                </div>
            </aside>

            {/* Bottom CTA */}
            <section className="bg-[#C5A017] py-20 text-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4 text-black">
                        Prepare for the EDGE Grant Framework
                    </h2>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg font-medium text-black/80 mb-8">
                        Assess your eligibility, align your 2026 transformation initiatives, and navigate the transition before the 29 September 2026 cutover.
                    </p>
                    <button
                        onClick={handleButtonClick}
                        className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-base sm:text-lg font-bold text-black shadow-xl transition-transform hover:scale-105 cursor-pointer"
                    >
                        Check Grant Eligibility
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </section>
        </div>
    );
}