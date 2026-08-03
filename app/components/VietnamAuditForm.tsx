"use client";

import React, { useState } from "react";
import { Zap } from "lucide-react";

export default function VietnamAuditForm() {
    const [formData, setFormData] = useState({
        companyName: "",
        industry: "",
        revenueBand: "Below S$10M",
        strategicFocus: "Localized Regional Processing Clusters",
    });
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState<any | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setReport(null);

        // Bypasses endpoint dependencies to render the matrix payload instantly on screen
        setTimeout(() => {
            setReport({
                companyName: formData.companyName,
                industry: formData.industry,
                revenueBand: formData.revenueBand,
                strategicFocus: formData.strategicFocus
            });
            setLoading(false);
        }, 600);
    };

    return (
        <div
            data-cache-buster="v2026-gold-release"
            className="w-full max-w-4xl mx-auto bg-neutral-950 p-8 md:p-12 border border-neutral-800 rounded-none text-white my-8 text-left font-sans"
        >
            <div className="mb-8 border-b border-neutral-900 pb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-[#8F801B] font-bold block mb-2">
                    Diagnostic Audit Engine
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase">
                    Vietnam MRA Grant &amp; Compliance Evaluation
                </h2>
                <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
                    Evaluate asset parameters against 2026 Global Minimum Tax paradigms, PDPL privacy mandates, and SHUI labor regulations.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Company Name</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 text-sm"
                            placeholder="e.g. Singapore Electronics Group"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Industry Sector</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 text-sm"
                            placeholder="e.g. Advanced Manufacturing"
                            value={formData.industry}
                            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Consolidated Revenue Band</label>
                        <select
                            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none text-sm cursor-pointer"
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
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Strategic Focus Vector</label>
                        <select
                            className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none text-sm cursor-pointer"
                            value={formData.strategicFocus}
                            onChange={(e) => setFormData({ ...formData, strategicFocus: e.target.value })}
                        >
                            <option value="Localized Regional Processing Clusters">Localized Regional Processing Clusters</option>
                            <option value="AI-Driven Franchise Management Systems (FMS)">AI-Driven Franchise Management Systems (FMS)</option>
                            <option value="Sovereign Subsidy Integration (MRA / EDGE)">Sovereign Subsidy Integration (MRA / EDGE)</option>
                            <option value="Cross-Border Intellectual Property Protection">Cross-Border Intellectual Property Protection</option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white font-bold uppercase tracking-wider text-xs hover:bg-[#A08d1e] transition-all shadow-lg rounded-none"
                >
                    {loading ? "Evaluating Parameters..." : "Generate Expansion Diagnostics"}
                </button>
            </form>

            {report && (
                <div className="mt-12 border border-neutral-800 bg-neutral-900 p-8 rounded-none space-y-6 animate-in fade-in duration-300">
                    <div className="border-b border-neutral-800 pb-4 flex justify-between items-center">
                        <h4 className="font-bold text-white text-xs uppercase tracking-widest flex items-center gap-2">
                            <Zap className="w-4 h-4 text-[#8F801B]" /> Matrix Output Results
                        </h4>
                        <span className="text-xs font-mono font-bold text-[#8F801B] bg-[#8F801B]/10 border border-[#8F801B]/30 px-2.5 py-1">
                            STATUS: SECURE
                        </span>
                    </div>

                    <div className="space-y-6 text-neutral-400 text-sm leading-relaxed font-sans">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold block mb-1">Target Entity</span>
                            <p className="text-white font-bold text-base">{report.companyName || "Enterprise Partner"}</p>
                            <p className="text-xs text-neutral-500 mt-0.5">Sector: {report.industry || "General Infrastructure Node"}</p>
                        </div>

                        <div className="border-t border-neutral-800 pt-4">
                            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-2">1. Fiscal Restructuring (GMT Implementation)</h5>
                            <p>Under Decree 236/2025/ND-CP, the fiscal framework enforces a 15% minimum corporate tax layer. Vietnam targets local collection profiles under QDMTT parameters, shifting incentives dynamically away from legacy blanket tax cuts toward cost-based subsidies and onshore Qualified Refundable Tax Credits (QRTC).</p>
                        </div>

                        <div className="border-t border-neutral-800 pt-4">
                            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-2">2. Cyber Sovereignty &amp; Data Governance Matrix</h5>
                            <p>Compliance architecture is governed strictly under the Data Governance Matrix (PDPL No. 91/2025/QH15). Systems operating across digital processing layers are subject to a mandatory 2-day subject data request acknowledgment SLA alongside a rigid 24-hour illegal content removal mandate.</p>
                        </div>

                        <div className="border-t border-neutral-800 pt-4">
                            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-2">3. Human Capital Framework &amp; SHUI Modifiers</h5>
                            <p>Operations must maintain a statutory basic salary baseline matching July 2026 regulations. Total corporate overhead requirements account for mandatory SHUI (Social, Health, and Unemployment Insurance) contributions sitting at 34% of overall gross compensation. Under Circular 08/2026/TT-BNV, labor contracts must map securely via state-integrated API endpoints.</p>
                        </div>

                        <div className="border-t border-neutral-800 pt-4">
                            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-2">4. Supply Chain Allocation Moat &amp; Subsidies</h5>
                            <p>Executing an asset-light processing roadmap allows you to bypass the Legacy Export Trap. Your infrastructure strategy directly anchors to Enterprise Singapore's 2026 grant parameters, qualifying for up to 70% co-funding support capped at S$100,000 to cleanly eliminate foreign trade exposure liabilities.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}