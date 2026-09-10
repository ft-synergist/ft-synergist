"use client";

import React, { useState } from "react";
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Building2,
  DollarSign,
  Layers,
  Sparkles,
  Lock,
  RefreshCw,
  Info
} from "lucide-react";

export function EDGEGrantCalculator() {
  // Step 1: Enterprise Structure
  const [isLocalShareholding, setIsLocalShareholding] = useState<boolean>(true);
  const [isSME, setIsSME] = useState<boolean>(true);

  // Step 2: Selected Areas
  const [selectedAreas, setSelectedAreas] = useState<string[]>([
    "Business Strategy",
    "Digitalisation",
  ]);

  // Step 3: Estimated Budgets
  const [consultancyBudget, setConsultancyBudget] = useState<number>(80000);
  const [softwareBudget, setSoftwareBudget] = useState<number>(30000);

  // Lead Form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const businessAreasList = [
    { id: "Automation", name: "Automation (Hardware/Robotics)", subCap: true },
    { id: "Digitalisation", name: "Digitalisation (Enterprise Systems/ERP/CRM)", subCap: true },
    { id: "Business Strategy", name: "Business Strategy & Strategic Branding", subCap: false },
    { id: "Financial Management", name: "Financial Governance & Risk", subCap: false },
    { id: "Innovation", name: "Innovation & Proprietary IP", subCap: false },
    { id: "Internationalisation", name: "Internationalisation (Market Deepening)", subCap: false },
    { id: "Standards", name: "Standards & ISO/SS Certification", subCap: false },
    { id: "Sustainability", name: "Sustainability & Decarbonisation", subCap: false },
  ];

  const toggleArea = (id: string) => {
    if (selectedAreas.includes(id)) {
      if (selectedAreas.length > 1) {
        setSelectedAreas(selectedAreas.filter((a) => a !== id));
      }
    } else {
      setSelectedAreas([...selectedAreas, id]);
    }
  };

  // Calculations
  const supportRate = isSME ? 0.70 : 0.50;
  
  // Software / Automation is subject to S$30,000 sub-cap
  const rawSoftwareGrant = softwareBudget * supportRate;
  const eligibleSoftwareGrant = Math.min(rawSoftwareGrant, 30000);
  
  // Strategic / Other consultancy
  const rawConsultancyGrant = consultancyBudget * supportRate;
  
  // Total Grant capped at S$100,000 annual limit
  const totalGrantUncapped = eligibleSoftwareGrant + rawConsultancyGrant;
  const finalEstimatedGrant = Math.min(totalGrantUncapped, 100000);
  const companyCoPay = (consultancyBudget + softwareBudget) - finalEstimatedGrant;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/2d67f037ef63481e387483f17259598c", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Lead: EDGE Grant Calculator Diagnostic — ${company}`,
          _captcha: "false",
          name,
          email,
          company,
          isSME: isSME ? "SME (Up to 70%)" : "Non-SME (Up to 50%)",
          has30PercentLocal: isLocalShareholding ? "Yes (Eligible)" : "No (<30% Local)",
          selectedAreas: selectedAreas.join(", "),
          consultancyBudget: `S$${consultancyBudget.toLocaleString()}`,
          softwareBudget: `S$${softwareBudget.toLocaleString()}`,
          estimatedGrant: `S$${Math.round(finalEstimatedGrant).toLocaleString()}`,
          companyCoPay: `S$${Math.round(companyCoPay).toLocaleString()}`,
        }),
      });
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    }
    setIsSubmitting(false);
  };

  return (
    <div id="edge-calculator" className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-10 text-white">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8F801B]/20 border border-[#8F801B]/40 text-[#C5A017] rounded-full text-xs font-bold uppercase tracking-wider">
          <Calculator className="w-3.5 h-3.5" />
          Interactive Strategic Tool
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          EDGE Grant 2026 Co-Funding &amp; Cap Calculator
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400">
          Model your enterprise grant allocation across the 8 business areas, S$30k digital sub-cap, and S$100k annual ceiling.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Section 1: Business Classification */}
          <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-[#8F801B] block">
              1. Enterprise Classification
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setIsSME(true)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isSME
                    ? "border-[#8F801B] bg-[#8F801B]/15 text-white"
                    : "border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:border-neutral-700"
                }`}
              >
                <div className="font-bold text-sm text-white flex items-center justify-between">
                  <span>SME Tier</span>
                  <span className="text-xs px-2 py-0.5 bg-[#8F801B] text-black font-extrabold rounded">70% Support</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Group Revenue ≤S$100M or Staff ≤200
                </p>
              </button>

              <button
                type="button"
                onClick={() => setIsSME(false)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  !isSME
                    ? "border-[#8F801B] bg-[#8F801B]/15 text-white"
                    : "border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:border-neutral-700"
                }`}
              >
                <div className="font-bold text-sm text-white flex items-center justify-between">
                  <span>Non-SME Tier</span>
                  <span className="text-xs px-2 py-0.5 bg-neutral-700 text-white font-bold rounded">50% Support</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Group Revenue &gt;S$100M or Staff &gt;200
                </p>
              </button>
            </div>

            {/* Shareholding Check */}
            <div className="flex items-center gap-3 p-3 bg-neutral-900/70 border border-neutral-800 rounded-lg text-xs">
              <input
                type="checkbox"
                id="shareholding"
                checked={isLocalShareholding}
                onChange={(e) => setIsLocalShareholding(e.target.checked)}
                className="w-4 h-4 accent-[#8F801B] rounded"
              />
              <label htmlFor="shareholding" className="text-neutral-300 cursor-pointer">
                Company has at least <strong>30% local shareholding</strong> (Singapore Citizens / PRs).
              </label>
            </div>
            {!isLocalShareholding && (
              <p className="text-xs text-red-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                EDGE requires ≥30% local equity. Non-compliant entities cannot tap EDGE co-funding.
              </p>
            )}
          </div>

          {/* Section 2: Business Areas */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">
                2. Target Business Areas (Select all that apply)
              </label>
              <span className="text-[11px] text-neutral-500">{selectedAreas.length} selected</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {businessAreasList.map((area) => {
                const isSelected = selectedAreas.includes(area.id);
                return (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => toggleArea(area.id)}
                    className={`p-3 rounded-lg border text-left text-xs transition-all flex items-center justify-between ${
                      isSelected
                        ? "border-[#8F801B] bg-[#8F801B]/10 text-white font-semibold"
                        : "border-neutral-800/80 bg-neutral-900/40 text-neutral-400 hover:border-neutral-700"
                    }`}
                  >
                    <span>{area.name}</span>
                    {isSelected ? (
                      <CheckCircle2 className="w-4 h-4 text-[#8F801B] shrink-0" />
                    ) : (
                      <span className="w-4 h-4 rounded-full border border-neutral-700 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3: Budget Sliders */}
          <div className="space-y-5">
            <label className="text-xs font-bold uppercase tracking-widest text-[#8F801B] block">
              3. Project Scope &amp; Estimated Budget (SGD)
            </label>

            {/* Strategic Consultancy Budget */}
            <div className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-300 font-medium">Strategic Consultancy &amp; Transformation Budget</span>
                <span className="text-[#C5A017] font-bold font-mono">S${consultancyBudget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="0"
                max="200000"
                step="5000"
                value={consultancyBudget}
                onChange={(e) => setConsultancyBudget(Number(e.target.value))}
                className="w-full accent-[#8F801B] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500">
                <span>S$0</span>
                <span>S$100k</span>
                <span>S$200k+</span>
              </div>
            </div>

            {/* Digital Solutions & Equipment Budget */}
            <div className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-300 font-medium">Digital Solutions &amp; Automation Budget (PSG scope)</span>
                <span className="text-[#C5A017] font-bold font-mono">S${softwareBudget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="0"
                max="80000"
                step="2500"
                value={softwareBudget}
                onChange={(e) => setSoftwareBudget(Number(e.target.value))}
                className="w-full accent-[#8F801B] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500">
                <span>S$0</span>
                <span>S$30k (Sub-cap limit)</span>
                <span>S$80k</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Output & Lead Capture (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          {/* Grant Calculation Summary Card */}
          <div className="p-6 bg-gradient-to-b from-neutral-900 to-black border border-[#8F801B]/40 rounded-xl space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="text-xs font-mono uppercase text-[#8F801B] font-bold">Estimated Grant Support</span>
              <span className="text-xs px-2 py-0.5 bg-[#8F801B]/20 text-[#C5A017] rounded font-bold">
                {Math.round(supportRate * 100)}% Support
              </span>
            </div>

            {/* Big Grant Number */}
            <div className="text-center py-2 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono text-[#C5A017]">
                S${Math.round(finalEstimatedGrant).toLocaleString()}
              </div>
              <p className="text-xs text-neutral-400">
                Estimated Government Co-Funding (Reimbursement)
              </p>
            </div>

            {/* Breakdown Items */}
            <div className="space-y-2.5 text-xs border-t border-neutral-800 pt-3">
              <div className="flex justify-between text-neutral-400">
                <span>Total Qualifying Project:</span>
                <span className="text-white font-mono font-medium">
                  S${(consultancyBudget + softwareBudget).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Digital / Software Allocation:</span>
                <span className="text-white font-mono font-medium">
                  S${Math.round(eligibleSoftwareGrant).toLocaleString()}
                  {rawSoftwareGrant > 30000 && <span className="text-[#8F801B] text-[10px] ml-1">(Capped @ S$30k)</span>}
                </span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Strategy / Scope Allocation:</span>
                <span className="text-white font-mono font-medium">
                  S${Math.round(rawConsultancyGrant).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-neutral-300 font-bold border-t border-neutral-800/80 pt-2">
                <span>Net Company Co-Pay:</span>
                <span className="text-white font-mono">
                  S${Math.round(companyCoPay).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Cap notices */}
            {totalGrantUncapped >= 100000 && (
              <div className="p-2.5 bg-amber-950/40 border border-amber-800/60 rounded text-[11px] text-amber-300 leading-snug">
                ⚠️ Your calculated project grant reaches the <strong>S$100,000 annual ceiling</strong>. Cap resets on <strong>1 April</strong>.
              </div>
            )}
          </div>

          {/* Form / Lead Action */}
          <div className="p-6 bg-black border border-neutral-800 rounded-xl">
            {isSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#8F801B] mx-auto" />
                <h4 className="text-lg font-bold text-white">Diagnostic Received</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Our Senior Certified Management Consultant (SCMC) will review your scope model and contact you within 1 business day.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs text-[#8F801B] underline hover:text-white"
                >
                  Recalculate another project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5 mb-2">
                  <Lock className="w-3.5 h-3.5 text-[#8F801B]" />
                  Lock In Your SCMC Pre-Assessment
                </div>
                <div>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-xs rounded focus:outline-none focus:border-[#8F801B]"
                  />
                </div>
                <div>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Work Email (name@company.com)"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-xs rounded focus:outline-none focus:border-[#8F801B]"
                  />
                </div>
                <div>
                  <input
                    required
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Name (e.g. Acme Pte Ltd)"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-xs rounded focus:outline-none focus:border-[#8F801B]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !isLocalShareholding}
                  className="w-full py-3 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-[#7a6d17] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                >
                  {isSubmitting ? (
                    "Analyzing Scope..."
                  ) : (
                    <>
                      Request Official SCMC Roadmap <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
                <p className="text-[10px] text-neutral-500 text-center">
                  Certified SCMC Consultant (SCMC-1810-P0236, TÜV SÜD). Strict NDA &amp; PDPA compliance.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
