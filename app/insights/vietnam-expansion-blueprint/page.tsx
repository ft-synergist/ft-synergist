import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Download } from "lucide-react";
import VietnamAuditForm from "../../../components/VietnamAuditForm";

export const metadata: Metadata = {
    title: "Strategic Blueprint: Singapore-Vietnam Business Expansion | FT Synergist",
    description: "Navigate Vietnam expansion complexities via PCBC and DVF frameworks. Complete guide on 2026 MRA funding pillars, Global Minimum Tax (GMT), and PDPL data compliance[cite: 2].",
};

export default function VietnamBlueprintPage() {
    return (
        <div className="min-h-screen bg-black text-white antialiased">
            {/* Premium Header Menu Bar */}
            <header className="border-b border-neutral-800 bg-black sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
                    <Link href="/insights" className="inline-flex items-center text-sm text-neutral-400 hover:text-white gap-2 transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>
                    <span className="text-xs font-bold text-primary tracking-widest uppercase bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
                        Special Report
                    </span>
                </div>
            </header>

            {/* Corporate Report Content Body */}
            <main className="max-w-4xl mx-auto px-4 py-16">
                <div className="mb-12 border-b border-neutral-800 pb-8">
                    <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">FT Synergist Enterprise Analysis</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                        Strategic Blueprint: Navigating the Singapore-Vietnam Expansion
                    </h1>
                    <p className="text-neutral-400 text-xl font-light">
                        Dismantling the Legacy Export Trap via the PCBC and DVF Optimization Frameworks[cite: 1, 2].
                    </p>

                    {/* Active Blueprint Download Panel */}
                    <div className="mt-8 p-6 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-lg text-primary">
                                <FileText className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Official Production Blueprint Document</h4>
                                <p className="text-xs text-neutral-400">Includes comprehensive economic tables and MRA grant maps[cite: 1, 2].</p>
                            </div>
                        </div>
                        {/* Routed safely to point to your public HTML document copy to prevent 404 breaks */}
                        <a
                            href="/strategic_blueprint_report.html"
                            download="Singapore-Vietnam-Expansion-Blueprint.html"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-opacity-90 text-white font-bold uppercase tracking-wider text-xs py-3 px-6 rounded-lg transition-all shadow-lg whitespace-nowrap"
                        >
                            <Download className="h-4 w-4" /> Download Blueprint Document
                        </a>
                    </div>
                </div>

                {/* Text Content Sections */}
                <div className="space-y-8 text-neutral-300 text-base leading-relaxed font-normal">
                    <p className="text-lg text-white font-medium">
                        The bilateral economic corridor between Singapore and Vietnam has fundamentally transitioned from a transactional trade relationship into a technology-driven Comprehensive Strategic Partnership (CSP)[cite: 1, 2]. As of mid-2026, Singapore stands as the preeminent source of foreign direct investment (FDI) into Vietnam[cite: 1, 2].
                    </p>
                    <p>
                        To successfully penetrate and scale within the contemporary Vietnamese market, enterprises must abandon legacy export models that rely on centralized production and direct shipping[cite: 1, 2]. Instead, market entry must be executed through localized, asset-light infrastructures governed by rigid operational standardizations and strategic grant pipeline alignment[cite: 1, 2].
                    </p>
                </div>

                {/* Interactive Lead-Gen Form Segment */}
                <div className="mt-20 border-t border-neutral-800 pt-16">
                    <VietnamAuditForm />
                </div>
            </main>
        </div>
    );
}