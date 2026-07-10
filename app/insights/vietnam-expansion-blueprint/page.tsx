"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, Lock, X, FileText, Globe, ShieldCheck, AlertTriangle } from "lucide-react";
import VietnamAuditForm from "../../../components/VietnamAuditForm";

// --- 1. LEAD CAPTURE MODAL COMPONENT ---
const VietnamDownloadGate = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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
                    _subject: "New Lead: Vietnam Report Download",
                    _captcha: "false",
                    ...data
                })
            });
            // Forces absolute root path download to guarantee no 404 breaks
            window.open("/strategic_blueprint_report.html", "_blank");
            onClose();
        } catch (error) {
            console.error("Form submission error", error);
            window.open("/strategic_blueprint_report.html", "_blank");
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
                    <h3 className="text-2xl font-bold text-white mb-2">Unlock Strategic Report</h3>
                    <p className="text-neutral-400 text-sm">
                        Enter your enterprise validation metrics to access the full blueprint.
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
                                Unlock Blueprint
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

// --- 2. MAIN PAGE COMPONENT ---
export default function VietnamBlueprintPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-[#8F801B]/20 w-full overflow-x-hidden">
            <VietnamDownloadGate isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Navigation Header Strip */}
            <nav className="border-b border-neutral-900 bg-black/90 backdrop-blur fixed top-0 left-0 right-0 z-40">
                <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
                    <Link href="/insights" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white gap-2 transition-colors group">
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Insights
                    </Link>
                    <span className="text-xs font-bold text-[#8F801B] tracking-widest uppercase bg-neutral-900/50 border border-neutral-800 px-3 py-1 rounded-none">
                        Special Report
                    </span>
                </div>
            </nav>

            {/* 1. HERO SECTION - PURE WANG LAO JI GRID ALIGNMENT */}
            <header className="relative pt-44 pb-16 px-6 text-center max-w-4xl mx-auto space-y-6">
                <span className="text-xs uppercase tracking-[0.2em] text-[#8F801B] font-bold">
                    Cross-Border Infrastructure &bull; Compliance Blueprints
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                    Navigating the Strategic <br />
                    <span className="text-[#8F801B] italic">Singapore-Vietnam Expansion</span>
                </h1>

                <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                    Dismantling regulatory complexities via PCBC and DVF frameworks—from the 2026 Global Minimum Tax down to absolute localized data sovereignty compliance mandates.
                </p>

                <div className="pt-4">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center justify-center px-10 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all shadow-lg shadow-[#8F801B]/10"
                    >
                        <Download className="mr-2 h-4 w-4" />
                        Download Strategic Report
                    </button>
                </div>
            </header>

            {/* 2. CONTENT SECTIONS */}
            <main className="max-w-5xl mx-auto px-6 pb-24 space-y-24">

                {/* Abstract Insight Module Block */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border border-neutral-800 p-8 md:p-12 bg-neutral-950/40 backdrop-blur-sm">
                    <div className="lg:col-span-7 space-y-6 text-left">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">Macro-Economic Trajectory</h3>
                        <p className="text-xl md:text-2xl font-light text-neutral-200 leading-relaxed italic">
                            "The bilateral economic corridor has evolved from transactional trading into a deeply integrated, technology-driven Comprehensive Strategic Partnership."
                        </p>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            As of mid-2026, Singapore stands as the preeminent source of foreign direct investment (FDI) into Vietnam. Total bilateral trade reached <strong>SGD 23.3 billion</strong> in the first five months of 2026 alone, exhibiting a staggering <strong>43.4% year-on-year surge</strong> concentrated in electronics and hardware nodes.
                        </p>
                    </div>
                    <div className="lg:col-span-5 relative h-[320px] w-full border border-neutral-800 bg-neutral-900">
                        <Image
                            src="/hero-bg.jpg"
                            alt="Singapore-Vietnam Trade Integration Overview"
                            fill
                            className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                            priority={true}
                            sizes="(max-width: 768px) 100vw, 30vw"
                        />
                    </div>
                </section>

                {/* Structural Framework Breakdown */}
                <section className="space-y-16">
                    <div className="space-y-4 border-l-2 border-[#8F801B] pl-6 md:pl-8">
                        <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Pillar 01</span>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">The Legacy Export Trap</h2>
                        <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
                            To successfully penetrate and scale within the contemporary Vietnamese market, enterprises must abandon legacy centralized models. Shipping fully finalized heavy cargo goods introduces severe exposure to shipping spikes and structural margin compression. Market entry must instead transition to localized, asset-light processing networks governed under rigid standardizations.
                        </p>
                    </div>

                    <div className="space-y-4 border-l-2 border-[#8F801B] pl-6 md:pl-8">
                        <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Pillar 02</span>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Sovereign Subsidy Capitalization</h2>
                        <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
                            The financial execution of these modern processing footprints can be heavily co-funded through official channels. Under the enhanced 2026 frameworks, Enterprise Singapore's unified **MRA Grant** architecture offers up to **70% support** allocations capped at **S$100,000 per target market**, completely stripping out previous territory constraints.
                        </p>
                    </div>
                </section>

                {/* 3. DYNAMIC AUDIT LAYER INJECTION */}
                <section className="pt-12 border-t border-neutral-900">
                    <VietnamAuditForm />
                </section>

            </main>
        </div>
    );
}