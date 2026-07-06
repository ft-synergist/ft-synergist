"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Download, Lock, CheckCircle2, X, TrendingUp, Factory, Zap, ShieldCheck } from "lucide-react";

// --- 1. LEAD CAPTURE MODAL COMPONENT ---
const DownloadGate = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-md bg-white rounded-none shadow-2xl overflow-hidden border-t-4 border-[#8F801B]">

                <div className="bg-black p-8 text-center border-b border-neutral-800">
                    <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors">
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

                <form onSubmit={handleSubmit} className="p-8 space-y-5 bg-white">
                    <div>
                        <label className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Full Name</label>
                        <input
                            required
                            name="name"
                            type="text"
                            placeholder="e.g. Frederick Tan"
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-black focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Work Email</label>
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="name@company.com"
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-black focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Company Name</label>
                        <input
                            required
                            name="company"
                            type="text"
                            placeholder="e.g. FT Synergist"
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-black focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none"
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

                    <p className="text-center text-xs text-neutral-400 mt-4">
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

    return (
        <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-[#8F801B]/20 w-full overflow-x-hidden">

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
                    From experimental pilot frameworks to mission-critical economic utility. A strategic analysis engineered to monetize proprietary enterprise data networks across Singapore, Indonesia, and Vietnam.
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
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">Market Velocity</h3>
                        <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                            $8.22 Billion <span className="text-sm font-light text-neutral-400 block mt-1">Active regional AI infrastructure footprint, projected to scale rapidly toward a $1 Trillion economic GDP contribution by 2030.</span>
                        </p>
                    </div>
                    <div className="space-y-4 text-left border-t md:border-t-0 md:border-l border-neutral-900 pt-6 md:pt-0 md:pl-8">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">Strategic Urgency</h3>
                        <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                            +67% <span className="text-sm font-light text-neutral-400 block mt-1">Aggressive multi-year surge in enterprise AI budgets. Bypassing generic commodity models is required to build a defensible operational moat.</span>
                        </p>
                    </div>
                </section>

                {/* 3. ADVISORY BREAKDOWNS */}
                <section className="space-y-20">

                    {/* Section 1: The Three-Speed ASEAN Matrix */}
                    <div className="space-y-6 border-l-2 border-[#8F801B] pl-6 md:pl-8 text-left">
                        <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Strategic Pillar 01</span>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">The Three-Speed ASEAN Compliance Wall</h2>
                        <p className="text-neutral-400 leading-relaxed text-base">
                            Generic commodity software platforms fail completely within Southeast Asian operational structures. Only 1% of regional firms achieve true operational AI maturity, stalled by deep cross-border regulatory fragmentation:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">

                            {/* Column 1: Singapore */}
                            <div className="p-6 bg-neutral-950 border border-neutral-900 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xl inline-block select-none" aria-hidden="true">🇸🇬</span>
                                        <h4 className="text-white font-bold text-sm tracking-wide">Singapore Hub</h4>
                                    </div>
                                    <p className="text-xs text-neutral-400 leading-relaxed m-0">
                                        Mature governance paradigms directed by the Model Governance Framework (NAIS 2.0). Captures 55% of total regional funding velocity ($2.4B volume hub).
                                    </p>
                                </div>
                            </div>

                            {/* Column 2: Indonesia */}
                            <div className="p-6 bg-neutral-950 border border-neutral-900 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xl inline-block select-none" aria-hidden="true">🇮🇩</span>
                                        <h4 className="text-white font-bold text-sm tracking-wide">Indonesia Base</h4>
                                    </div>
                                    <p className="text-xs text-neutral-400 leading-relaxed m-0">
                                        Hyper-scale physical infrastructure plays targeting 900MW of data center capacity. Dominated by sectoral OJK fintech guidelines and credit automation pipelines.
                                    </p>
                                </div>
                            </div>

                            {/* Column 3: Vietnam */}
                            <div className="p-6 bg-neutral-950 border border-neutral-900 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xl inline-block select-none" aria-hidden="true">🇻🇳</span>
                                        <h4 className="text-white font-bold text-sm tracking-wide">Vietnam Sector</h4>
                                    </div>
                                    <p className="text-xs text-neutral-400 leading-relaxed m-0">
                                        Hyper-growth parameters (capital inflows up 169%) governed by a strict domestic cloud mandate and rigid Cross-Border Transfer Impact Assessments (CBTIA).
                                    </p>
                                </div>
                            </div>

                        </div>

                        <p className="text-neutral-400 text-sm pt-4">
                            Eligible Singapore SMEs can leverage official government frameworks to defray 50% of the qualifying costs required to execute an AI-powered technological leap. Coordinate with a certified SCMC advisor via our dedicated <strong><a href="/ai-digitalisation" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">top AI digitalisation consultant</a></strong> pipeline.
                        </p>
                    </div>

                    {/* Section 2: Building the Intangible Asset Moat */}
                    <div className="space-y-4 border-l-2 border-[#8F801B] pl-6 md:pl-8 text-left">
                        <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Strategic Pillar 02</span>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Linguistic Moats & Fine-Tuned Regional LLMs</h2>
                        <p className="text-neutral-400 leading-relaxed text-base">
                            Standard global commodity engines completely fail to accurately extract meaning from the 1,200+ distinct languages and localized regional dialects that define the ASEAN digital economy. True commercial scale requires local enterprises to systematically fine-tune domain-specific workflows over custom regional open models (such as the SEA-LION architecture). By anchoring algorithms to hyper-local context, firms build a linguistic defense perimeter that global competitors cannot dismantle.
                        </p>
                        <div className="bg-neutral-950 border border-neutral-900 p-8 max-w-4xl mt-4">
                            <h4 className="font-bold text-white text-xs uppercase tracking-widest flex items-center gap-2 mb-4">
                                <ShieldCheck className="w-4 h-4 text-[#8F801B]" /> Defensible IP Strategy Takeaway
                            </h4>
                            <p className="text-neutral-400 text-sm leading-relaxed m-0 text-left">
                                Securing these highly tailored algorithmic data layers requires robust, formalized asset mapping to prevent code and weight theft. Before exporting technology pipelines across regional accelerators, work with a certified <strong><a href="/ip-consultant" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">top IP consultant in Singapore</a></strong> to structure your defensible global trademark, landscaping, and licensing frameworks.
                            </p>
                        </div>
                    </div>

                    {/* Section 3: Technical Debt & Governance Audits */}
                    <div className="space-y-4 border-l-2 border-[#8F801B] pl-6 md:pl-8 text-left">
                        <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Strategic Pillar 03</span>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">The Self-Taught Paradox & Code Governance</h2>
                        <p className="text-neutral-400 leading-relaxed text-base">
                            While over 72% of regional technology development assets operate as self-taught engineers—driving exceptional initial deployment speed—this unstructured execution creates severe technical debt, architectural fragmentation, and security gaps. These vulnerabilities trigger immediate compliance failures when exposed to institutional risk assessments. Implementing rigid, certified code governance audits converts technical liability into standard, highly fundable corporate assets.
                        </p>
                        <p className="text-neutral-400 text-sm">
                            Singaporean firms scaling workflows into new geographic sectors like Indonesia or Vietnam must ensure their execution matches standardized capability development benchmarks to remain qualified for regulatory framework co-funding.
                        </p>
                    </div>

                </section>
            </main>
        </div>
    );
}