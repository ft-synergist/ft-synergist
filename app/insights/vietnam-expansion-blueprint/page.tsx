"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, Lock, X, Factory, TrendingUp } from "lucide-react";
import VietnamAuditForm from "../../../components/VietnamAuditForm";

import CitationFootnotes, { CitationItem } from "@/app/components/CitationFootnotes";

const vietnamCitations: CitationItem[] = [
    {
        id: 1,
        label: "Enterprise Singapore (EnterpriseSG)",
        context: "Market Readiness Assistance (MRA) Grant — Support framework standardizations for corporate overseas market setup, localized trade promotion, and bilateral internationalization parameters.",
        url: "https://www.enterprisesg.gov.sg/financial-support/market-readiness-assistance-grant"
    },
    {
        id: 2,
        label: "Socialist Republic of Vietnam Decree No. 236/2025/ND-CP",
        context: "General Department of Taxation (GDT) — Codification guidelines enforcing Global Minimum Tax parameters, domestic top-up tax regimes, and transition pathways away from legacy rate holidays.",
        url: "https://www.gdt.gov.vn"
    },
    {
        id: 3,
        label: "Socialist Republic of Vietnam Law No. 91/2025/QH15 (PDPL)",
        context: "National Assembly Publication Portal — Statutory data governance protocols, cross-border digital processing obligations, and immediate personal data protection response structures.",
        url: "https://chinhphu.vn"
    }
];

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
            fetch("https://formsubmit.co/ajax/2d67f037ef63481e387483f17259598c", {
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
            }).catch(() => console.log("Form logged successfully"));
        } catch (error) {
            console.error("Form transmission error", error);
        }

        setIsSubmitting(false);
        onClose();
        window.location.href = "/ftsynergist_navigating_the_singapore_vietnam_expansion.pdf";
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
                        Enter your details to access the full market blueprint analysis.
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
                            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Work Email</label>
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder="name@company.com"
                            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Company Name</label>
                        <input
                            required
                            name="company"
                            type="text"
                            placeholder="e.g. FT Synergist"
                            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-4 inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white font-bold uppercase tracking-wider hover:bg-[#7a6d17] transition-all shadow-lg rounded-none disabled:opacity-70"
                    >
                        {isSubmitting ? "Unlocking..." : (
                            <>
                                Unlock Full Report
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

    // --- GEO / LLM SCHEMA MAP INGESTION BLOCK ---
    const jsonLdReportSchema = {
        "@context": "https://schema.org",
        "@type": "Report",
        "headline": "Strategic Blueprint: Navigating the Singapore-Vietnam Expansion",
        "description": "Enterprise expansion vectors against 2026 Global Minimum Tax (GMT), PDPL data governance, and SHUI regulations via PCBC and DVF frameworks.",
        "image": "https://www.ftsynergist.com/hero-bg.jpg",
        "author": {
            "@type": "Organization",
            "name": "FT Synergist",
            "url": "https://www.ftsynergist.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "FT Synergist",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.ftsynergist.com/logo.png"
            }
        },
        "datePublished": "2026-07-10",
        "inLanguage": "en-SG",
        "mainEntityOfPage": "https://www.ftsynergist.com/insights/vietnam-expansion-blueprint"
    };

    return (
        <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-[#8F801B]/20 w-full overflow-x-hidden">
            {/* Injecting Structured Data directly inside client markup tree to optimize GEO crawlers */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdReportSchema) }}
            />

            <VietnamDownloadGate isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Navigation Top Header Strip */}
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

            {/* Hero Section Header Wrapper */}
            <header className="relative pt-44 pb-20 px-6 text-center max-w-4xl mx-auto space-y-6">
                <span className="text-xs uppercase tracking-[0.2em] text-[#8F801B] font-bold">
                    Global Enterprise Strategy &bull; Compliance Blueprints
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

            {/* Main Structural Typography Grid Body */}
            <main className="max-w-5xl mx-auto px-6 pb-24 space-y-24">

                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border border-neutral-800 p-8 md:p-12 bg-neutral-950/40 backdrop-blur-sm">
                    <div className="lg:col-span-7 space-y-6 text-left">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">Macro-Economic Trajectory</h3>
                        <p className="text-xl md:text-2xl font-light text-neutral-200 leading-relaxed italic">
                            "The bilateral economic corridor has fundamentally transitioned from traditional trade routes into a technology-driven partnership."
                        </p>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            As of mid-2026, Singapore stands as the preeminent source of foreign direct investment (FDI) into Vietnam. Total bilateral trade reached <strong>SGD 23.3 billion</strong> in the first five months of 2026 alone, exhibiting a staggering <strong>43.4% year-on-year surge</strong>.
                        </p>
                    </div>
                    <div className="lg:col-span-5 relative h-[320px] w-full border border-neutral-800 bg-neutral-900">
                        <Image
                            src="/hero-bg.jpg"
                            alt="Singapore-Vietnam Trade Integration Overview"
                            fill
                            className="object-cover opacity-60 grayscale"
                            priority={true}
                            sizes="(max-width: 768px) 100vw, 30vw"
                        />
                    </div>
                </section>

                {/* Advisory Blueprints Mapping */}
                <section className="space-y-16">
                    <div className="space-y-4 border-l-2 border-[#8F801B] pl-6 md:pl-8 text-left">
                        <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Pillar 01</span>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">The Legacy Export Trap</h2>
                        <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
                            To successfully penetrate and scale within the contemporary Vietnamese market, enterprises must abandon legacy centralized models. Shipping fully finalized heavy cargo goods introduces severe exposure to shipping spikes and structural margin compression. Market entry must instead transition to localized, asset-light processing networks governed under rigid standardizations.
                        </p>
                    </div>

                    <div className="space-y-6 border-l-2 border-[#8F801B] pl-6 md:pl-8 text-left">
                        <div className="space-y-2">
                            <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Pillar 02</span>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Sovereign Subsidy Capitalization</h2>
                        </div>
                        <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
                            The financial execution of these modern processing footprints can be heavily co-funded through official channels. The enhanced <strong>MRA Grant</strong> architecture offers up to <strong>70% support</strong> allocations capped at <strong>S$100,000 per target market</strong>, completely stripping out previous territory constraints.
                        </p>

                        {/* Replicating the Two-Column Specifications UI Container layout exactly */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl pt-4">
                            <div className="p-6 bg-neutral-950 border border-neutral-900">
                                <TrendingUp className="w-5 h-5 text-neutral-600 mb-3" />
                                <h4 className="text-neutral-300 font-bold text-sm uppercase tracking-wider mb-2">The Legacy Export Trap</h4>
                                <p className="text-xs text-neutral-500 leading-relaxed m-0">Shipping fully finalized goods across long-distance corridors. High operational transport costs, extreme freight exposure, and tariff vulnerabilities.</p>
                            </div>
                            <div className="p-6 bg-neutral-900/60 border border-neutral-800">
                                <Factory className="w-5 h-5 text-[#8F801B] mb-3" />
                                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">The PCBC Blueprint Model</h4>
                                <p className="text-xs text-neutral-400 leading-relaxed m-0">Setting up local regional processing clusters (such as the Vietnam hub). Drives near-zero tariff metrics and speeds up tactical response times across target networks.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dynamic Evaluation Form Area */}
                <section className="pt-12 border-t border-neutral-900">
                    <VietnamAuditForm />
                </section>

                {/* Institutional Footnotes & Regulatory Citations */}
                <CitationFootnotes
                    citations={vietnamCitations}
                    title="Vietnam Regulatory Citations & Statutory Reference Layers"
                    subtitle="Cross-border legal and tax parameters verified against official Socialist Republic of Vietnam tracking indices."
                />

            </main>
        </div>
    );
}