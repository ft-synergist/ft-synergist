"use client";

import React, { useState } from "react";

export default function VietnamAuditForm() {
    const [formData, setFormData] = useState({
        companyName: "",
        industry: "",
        revenueBand: "Below S$10M",
        strategicFocus: "Localized Regional Processing Clusters",
    });
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setReport(null);

        try {
            const response = await fetch("/api/vietnam-audit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || "Failed to generate compliance diagnostics.");

            setReport(data.auditReport);
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred during valuation.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-[#0f172a] p-8 rounded-2xl shadow-2xl border border-slate-800 text-white my-8">
            <div className="mb-6 text-center">
                <span className="text-[#dc2626] font-bold tracking-widest uppercase text-xs block mb-2">
                    AI-Powered Lead Engine
                </span>
                <h2 className="text-2xl font-black tracking-tight text-white uppercase">
                    Vietnam MRA Grant & Compliance Audit Matrix
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                    Evaluate your expansion vector against the 2026 GMT, PDPL, and SHUI regulatory parameters instantly.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Company Name
                    </label>
                    <input
                        type="text"
                        required
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#dc2626] transition-colors"
                        placeholder="e.g., Singapore Electronics Group"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Core Industry Sector
                    </label>
                    <input
                        type="text"
                        required
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#dc2626] transition-colors"
                        placeholder="e.g., Advanced Semiconductor Manufacturing"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Consolidated Revenue Band
                    </label>
                    <select
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#dc2626] transition-colors"
                        value={formData.revenueBand}
                        onChange={(e) => setFormData({ ...formData, revenueBand: e.target.value })}
                    >
                        <option value="Below S$10M">Below S$10M</option>
                        <option value="S$10M - S$50M">S$10M - S$50M</option>
                        <option value="S$50M - S$100M">S$50M - S$100M</option>
                        <option value="Above S$100M (Pillar 2 Focus)">Above S$100M (Pillar 2 Focus)</option>
                    </select>
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Primary Strategic Focus Area
                    </label>
                    <select
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#dc2626] transition-colors"
                        value={formData.strategicFocus}
                        onChange={(e) => setFormData({ ...formData, strategicFocus: e.target.value })}
                    >
                        <option value="Localized Regional Processing Clusters">Localized Regional Processing Clusters</option>
                        <option value="AI-Driven Franchise Management Systems (FMS)">AI-Driven Franchise Management Systems (FMS)</option>
                        <option value="Sovereign Subsidy Integration (MRA / EDGE)">Sovereign Subsidy Integration (MRA / EDGE)</option>
                        <option value="Cross-Border Intellectual Property Protection">Cross-Border Intellectual Property Protection</option>
                    </select>
                </div>

                <div className="md:col-span-2 mt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#dc2626] hover:bg-red-700 text-white font-bold uppercase tracking-wider text-sm py-3 px-6 rounded-lg transition-all shadow-lg disabled:opacity-50 flex justify-center items-center"
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Evaluating Market Compliance Vectors...
                            </span>
                        ) : (
                            "Generate Expansion Diagnostics Report"
                        )}
                    </button>
                </div>
            </form>

            {error && (
                <div className="mt-6 p-4 bg-red-950/50 border border-red-800 rounded-xl text-red-200 text-sm">
                    <strong>System Conflict Detected:</strong> {error}
                </div>
            )}

            {report && (
                <div className="mt-8 p-6 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 shadow-inner">
                    <div className="border-b border-slate-700 pb-3 mb-4 flex justify-between items-center">
                        <h3 className="font-heading font-bold text-lg text-white uppercase tracking-tight">
                            Strategic Evaluation Matrix Output
                        </h3>
                        <span className="text-emerald-400 text-xs font-mono bg-emerald-950/50 border border-emerald-800 px-2 py-0.5 rounded">
                            Verified Status: Pass
                        </span>
                    </div>
                    <div className="prose prose-invert max-w-none text-sm text-slate-300 whitespace-pre-line leading-relaxed">
                        {report}
                    </div>
                </div>
            )}
        </div>
    );
}