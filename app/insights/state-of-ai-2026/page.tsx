"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Download, Lock, CheckCircle2, X, TrendingUp, Factory, Zap, ShieldCheck } from "lucide-react";

// --- 1. LEAD CAPTURE MODAL COMPONENT ---
const DownloadGate = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            await fetch("https://formsubmit.co/ajax/2d67f037ef63481e387483f17259598c", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    _subject: "New Lead: State of AI 2026 Report Download",
                    _captcha: "false",
                    ...data
                })
            });

            // Triggers the download of your exact PDF report asset
            window.open("/ft-synergist-state-of-ai-southeast-asia-2026-report.pdf", "_blank");
            onClose();
        } catch (error) {
            console.error("Form submission error", error);
            window.open("/ft-synergist-state-of-ai-southeast-asia-2026-report.pdf", "_blank");
            onClose();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-md bg-neutral-900 rounded-none shadow-2xl overflow-hidden border border-neutral-800 border-t-4 border-[#8F801B]">

                <div className="bg-black p-8 text-center border-b border-neutral-800">
                    <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#8F801B]/10 border border-[#8F801B]/20">
                        <Lock className="w-8 h-8 text-[#8F801B]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Unlock Market Intelligence</h3>
                    <p className="text-neutral-400 text-sm">
                        Enter your corporate credentials to download the full 17-page blueprint report.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-5 bg-black">
                    <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Full Name</label>
                        <input
                            required
                            name="name"
                            type="text"
                            placeholder="e.g. Frederick Tan"
                            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Work Email</label>
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="name@company.com"
                            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Company Name</label>
                        <input
                            required
                            name="company"
                            type="text"
                            placeholder="e.g. FT Synergist"
                            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-4 inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white font-bold uppercase tracking-wider hover:bg-[#7a6d17] transition-all shadow-lg rounded-none disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Unlocking..." : (
                            <>
                                Download Full Report
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </button>

                    <p className="text-center text-xs text-neutral-500 mt-4">
                        Available exclusively to registered regional entities.
                    </p>
                </form>
            </div>
        </div>
    );
};

// --- 2. MAIN PAGE COMPONENT ---
export default function StateOfAIReportPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const reportSchema = {
        "@context": "https://schema.org",
        "@type": "Report",
        "name": "State of AI in Southeast Asia 2026: A Strategic Analysis for Scaling Enterprises",
        "description": "Enterprise market velocity, regulatory frameworks, and AI code governance patterns within Singapore, Indonesia, and Vietnam corridors.",
        "author": {
            "@type": "Organization",
            "name": "FT Synergist"
        },
        "datePublished": "2026-01-02"
    };

    return (
        <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-[#8F801B]/20 w-full overflow-x-hidden">

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }}
            />

            <DownloadGate isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* 1. HERO CONTEXT */}
            <header className="relative pt-40 pb-20 px-6 text-center max-w-4xl mx-auto space-y-6">
                <span className="text-xs uppercase tracking-[0.2em] text-[#8F801B] font-bold">
                    Market Intelligence &bull; Tech Advisory Node
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                    State of AI in <br />
                    <span className="text-[#8F801B] italic">Southeast Asia 2026</span>
                </h1>

                <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                    From experimental pilot architectures to mission-critical economic utility[cite: 4, 11, 12]. A strategic analysis built to weaponize proprietary enterprise data networks across SGP, IDN, and VNM[cite: 3, 6, 15].
                </p>

                <div className="pt-4">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center justify-center px-10 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all shadow-lg"
                    >
                        <Download className="mr-2 h-4 w-4" />
                        Download Full Report
                    </button>
                </div>
            </header>

            {/* 2. DUAL ROW METRICS MATRIX */}
            <main className="max-w-5xl mx-auto px-6 pb-24 space-y-24">

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-neutral-800 p-8 md:p-12 bg-neutral-950/40 backdrop-blur-sm">
                    <div className="space-y-4 text-left">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">Economic Velocity</h3>
                        <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                            $8.22 Billion <span className="text-sm font-light text-neutral-400 block mt-1">Valued regional Al footprint transitioning into a $1 Trillion GDP contribution engine by 2030[cite: 13, 36, 37].</span>
                        </p>
                    </div>
                    <div className="space-y-4 text-left border-t md:border-t-0 md:border-l border-neutral-900 pt-6 md:pt-0 md:pl-8">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">Budget Allocation Shifts</h3>
                        <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                            +67% <span className="text-sm font-light text-neutral-400 block mt-1">Aggressive multi-year increase in enterprise Al infrastructure budgets[cite: 14, 38, 39]. The window to build a proprietary data moat is closing fast[cite: 14, 17].</span>
                        </p>
                    </div>
                </section>

                {/* 3. ADVISORY BREAKDOWNS (THE STAGE 1 TEARDOWN) */}
                <section className="space-y-20">

                    {/* Section 1: The Three-Speed ASEAN Matrix */}
                    <div className="space-y-6 border-l-2 border-[#8F801B] pl-6 md:pl-8 text-left">
                        <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Strategic Pillar 01</span>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">The Three-Speed ASEAN Compliance Wall</h2>
                        <p className="text-neutral-400 leading-relaxed text-base">
                            Generic commodity software platforms fail completely within Southeast Asian operational structures[cite: 16]. Scaling cross-border networks requires specific navigation through divergent localized regulatory frameworks[cite: 15, 29]:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                            <div className="p-6 bg-neutral-950 border border-neutral-900">
                                <h4 className="text-white font-bold text-sm tracking-wide mb-2">Singapore Hub</h4>
                                <p className="text-xs text-neutral-400 leading-relaxed m-0">Mature governance paradigms powered by the Model Framework (NAIS 2.0)[cite: 44]. Focus targets high-value, protected deployment deployments[cite: 64, 68].</p>
                            </div>
                            <div className="p-6 bg-neutral-950 border border-neutral-900">
                                <h4 className="text-white font-bold text-sm tracking-wide mb-2">Indonesia Base</h4>
                                <p className="text-xs text-neutral-400 leading-relaxed m-0">Hyper-scale physical infrastructure plays targeting 900MW of data center capacity[cite: 53, 83, 84]. Managed via strict sectoral guidelines[cite: 44].</p>
                            </div>
                            <div className="p-6 bg-neutral-950 border border-neutral-900">
                                <h4 className="text-white font-bold text-sm tracking-wide mb-2">Vietnam Sector</h4>
                                <p className="text-xs text-neutral-400 leading-relaxed m-0">Hyper-growth parameters restricted by a rigid Data Law mandate[cite: 93, 95]. Requires mandatory Cross-Border Transfer Assessments (CBTIA)[cite: 44, 96].</p>
                            </div>
                        </div>

                        <p className="text-neutral-400 text-sm pt-4">
                            Singaporean firms leveraging tech transformation vectors can check grant access paths by coordinating directly through an approved SCMC management advisor via our dedicated <strong><a href="/ai-digitalisation" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">top AI digitalisation consultant</a></strong> node[cite: 72, 74].
                        </p>
                    </div>

                    {/* Section 2: Building the Intangible Asset Moat */}
                    <div className="space-y-4 border-l-2 border-[#8F801B] pl-6 md:pl-8 text-left">
                        <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Strategic Pillar 02</span>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Linguistic Defense Moats & Regional LLMs</h2>
                        <p className="text-neutral-400 leading-relaxed text-base">
                            Relying on standard global commodity software models exposes scaling firms to significant linguistic friction, as basic tools fail to map the nuanced data dialects of the ASEAN theater[cite: 106, 107]. True defensive market scale is built by taking proprietary organizational data assets and systematically fine-tuning them over hyper-local, regional frameworks (such as the SEA-LION foundation layer)[cite: 31, 109]. This produces an airtight linguistic moat that cross-border competitors cannot copy[cite: 110].
                        </p>
                        <div className="bg-neutral-950 border border-neutral-900 p-8 max-w-4xl mt-4">
                            <h4 className="font-bold text-white text-xs uppercase tracking-widest flex items-center gap-2 mb-4">
                                <ShieldCheck className="w-4 h-4 text-[#8F801B]" /> Defensible IP Strategy Takeaway
                            </h4>
                            <p className="text-neutral-400 text-sm leading-relaxed m-0 text-left">
                                Protecting these fine-tuned workflows demands a secure legal vault to prevent backend parameter leakage[cite: 14]. Before exporting technology pipelines across regional accelerators, work with a certified <strong><a href="/ip-consultant" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">top IP consultant in Singapore</a></strong> to structure your defensible global trademark, landscaping, and licensing frameworks.
                            </p>
                        </div>
                    </div>

                    {/* Section 3: Technical Debt & Governance Audits */}
                    <div className="space-y-4 border-l-2 border-[#8F801B] pl-6 md:pl-8 text-left">
                        <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Strategic Pillar 03</span>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">The Self-Taught Paradox & Code Governance</h2>
                        <p className="text-neutral-400 leading-relaxed text-base">
                            While over 72% of regional technology development assets are self-taught—driving rapid implementation velocity—it introduces massive long-term technical debt, architectural fragmentation, and security gaps[cite: 164, 165, 166, 167]. Unstructured code bases routinely trigger regulatory failures when subjected to compliance audits in mature jurisdictions[cite: 168]. Implementing standardized automated tracking structures turns technical liability into a scalable corporate asset[cite: 170].
                        </p>
                        <p className="text-neutral-400 text-sm">
                            SMEs looking to safely seed these advanced tools within new geographical networks can secure up to 70% corporate advisory backing via the enhanced Enterprise Singapore <strong><a href="/mra-grant" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">MRA grant</a></strong> pipeline[cite: 159, 161].
                        </p>
                    </div>

                </section>

                {/* 4. HIGH-INTENSITY CONVERSION MAGNET */}
                <section className="py-20 bg-neutral-950 border border-neutral-900 text-center space-y-6 max-w-4xl mx-auto">
                    <Download className="w-8 h-8 text-[#8F801B] mx-auto" />
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Unlock the 17-Page Strategic Analysis</h2>
                    <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed">
                        Access complete capital velocity charts, the comprehensive ASEAN-3 Scaling Readiness Matrix, and GTM accelerator access roadmaps[cite: 43, 48, 155].
                    </p>

                    <div className="pt-2">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center justify-center px-10 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all"
                        >
                            Download Full Report
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                    <p className="text-[10px] text-neutral-600 tracking-wide uppercase pt-4">
                        Available exclusively to regional business profiles. Verified work email required.
                    </p>
                </section>

            </main>
        </div>
    );
}