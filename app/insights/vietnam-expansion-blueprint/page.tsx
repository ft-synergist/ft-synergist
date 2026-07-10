import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Download } from "lucide-react";
import VietnamAuditForm from "../../../components/VietnamAuditForm";

export const metadata: Metadata = {
    title: "Strategic Blueprint: Singapore-Vietnam Business Expansion | FT Synergist",
    description: "Navigate Vietnam expansion complexities via PCBC and DVF frameworks. Complete guide on 2026 MRA funding pillars, Global Minimum Tax (GMT), and PDPL data compliance.",
};

export default function VietnamBlueprintPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 antialiased">
            {/* Structural Header Wrapper */}
            <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/insights" className="inline-flex items-center text-sm text-slate-400 hover:text-white gap-2 transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Insights
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-bold text-red-500 tracking-widest uppercase bg-red-950/40 border border-red-900/50 px-3 py-1 rounded-full">
                            Special Report
                        </span>
                    </div>
                </div>
            </header>

            {/* Main Report Body Container */}
            <main className="max-w-4xl mx-auto px-4 py-16">
                <div className="mb-12 border-b border-slate-800 pb-8">
                    <p className="text-red-500 font-bold uppercase tracking-widest text-sm mb-3">FT Synergist Enterprise Analysis</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                        Strategic Blueprint: Navigating the Singapore-Vietnam Expansion
                    </h1>
                    <p className="text-slate-400 text-xl font-light">
                        Dismantling the Legacy Export Trap via the PCBC and DVF Optimization Frameworks.
                    </p>

                    {/* Gated Asset Download Trigger Panel */}
                    <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-red-950/50 border border-red-900/50 rounded-lg text-red-500">
                                <FileText className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Official Production Blueprint Document</h4>
                                <p className="text-xs text-slate-400">Includes complete tables, GMT safe harbors, and MRA funding maps.</p>
                            </div>
                        </div>
                        <a
                            href="/downloads/singapore-vietnam-expansion-blueprint.pdf"
                            download
                            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs py-3 px-6 rounded-lg transition-all shadow-lg whitespace-nowrap"
                        >
                            <Download className="h-4 w-4" /> Download Full PDF Report
                        </a>
                    </div>
                </div>

                {/* Abstract Content Placeholder Row */}
                <div className="space-y-8 text-slate-300 leading-relaxed">
                    <p className="text-lg text-slate-200 font-medium">
                        The bilateral economic corridor between Singapore and Vietnam has fundamentally transitioned from a transactional trade relationship into a technology-driven Comprehensive Strategic Partnership (CSP). As of mid-2026, Singapore stands as the preeminent source of foreign direct investment (FDI) into Vietnam.
                    </p>
                    <p>
                        To successfully penetrate and scale within the contemporary Vietnamese market, enterprises must abandon legacy export models that rely on centralized production and direct shipping. Instead, market entry must be executed through localized, asset-light infrastructures governed by rigid operational standardizations and strategic grant pipeline alignment.
                    </p>
                </div>

                {/* Interactive Dynamic Form Layer Injection */}
                <div className="mt-20 border-t border-slate-800 pt-16">
                    <VietnamAuditForm />
                </div>
            </main>
        </div>
    );
}