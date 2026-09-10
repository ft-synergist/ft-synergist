"use client";

import React, { useState } from "react";
import {
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Building2,
  DollarSign,
  Sparkles,
  Lock,
  RefreshCw,
  HelpCircle,
  FileCheck
} from "lucide-react";

export function PSGToEDGEMigrationAudit() {
  // Step 1: Solutions currently in use
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([
    "CRM Platform (e.g. Salesforce / HubSpot / Beyond Borders)",
    "Accounting & ERP Software",
  ]);

  // Step 2: Enterprise Classification
  const [isSME, setIsSME] = useState<boolean>(true);
  const [annualSoftwareSpend, setAnnualSoftwareSpend] = useState<number>(35000);
  const [hasStrategicPlan, setHasStrategicPlan] = useState<boolean>(true);

  // Form Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableSolutions = [
    { id: "CRM", label: "CRM & Sales Pipeline (e.g. Beyond Borders / Salesforce)" },
    { id: "ERP", label: "Accounting & Enterprise ERP (e.g. Xero / SAP / NetSuite)" },
    { id: "Inventory", label: "Inventory, Warehouse & POS Systems" },
    { id: "Cybersecurity", label: "Endpoint Cybersecurity & Threat Monitoring" },
    { id: "HR", label: "HR, Payroll & Attendance Automation" },
    { id: "CustomOps", label: "Specialized Hardware & Automation Equipment" },
  ];

  const toggleSolution = (label: string) => {
    if (selectedSolutions.includes(label)) {
      if (selectedSolutions.length > 1) {
        setSelectedSolutions(selectedSolutions.filter((s) => s !== label));
      }
    } else {
      setSelectedSolutions([...selectedSolutions, label]);
    }
  };

  // Calculations
  const coFundingRate = isSME ? 0.70 : 0.50;
  const rawSoftwareSupport = annualSoftwareSpend * coFundingRate;
  
  // The official EDGE S$30k Digitalisation sub-cap
  const eligibleSoftwareSupport = Math.min(rawSoftwareSupport, 30000);
  const excessUnfunded = Math.max(0, rawSoftwareSupport - 30000);
  
  // Remaining headroom for high-order strategy under S$100k annual cap
  const remainingStrategyHeadroom = 100000 - eligibleSoftwareSupport;
  
  // Readiness Score calculation
  const readinessScore = isSME && eligibleSoftwareSupport > 0 ? (hasStrategicPlan ? 94 : 78) : 65;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/2d67f037ef63481e387483f17259598c", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Lead: PSG-to-EDGE Migration Audit — ${company}`,
          _captcha: "false",
          name,
          email,
          company,
          phone,
          tier: isSME ? "SME (Up to 70%)" : "Non-SME (Up to 50%)",
          selectedSolutions: selectedSolutions.join("; "),
          annualSoftwareSpend: `S$${annualSoftwareSpend.toLocaleString()}`,
          estimatedDigitalGrant: `S$${Math.round(eligibleSoftwareSupport).toLocaleString()}`,
          remainingStrategyHeadroom: `S$${Math.round(remainingStrategyHeadroom).toLocaleString()}`,
          readinessScore: `${readinessScore}%`,
        }),
      });
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    }
    setIsSubmitting(false);
  };

  return (
    <div id="psg-migration-audit" className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-10 text-white my-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-800/60 text-red-300 rounded-full text-xs font-bold uppercase tracking-wider">
          <FileCheck className="w-3.5 h-3.5" />
          Interactive Diagnostic Tool
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          PSG-to-EDGE Software Migration &amp; Sub-Cap Audit
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
          PSG ceases on 29 September 2026. Test your software migration viability, model your S$30,000 Digitalisation sub-cap, and calculate your remaining S$70,000 strategic transformation headroom under EDGE.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-8">

          {/* Section 1: Enterprise Tier */}
          <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-[#8F801B] block">
              1. Enterprise Qualification Tier
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setIsSME(true)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isSME
                    ? "border-[#8F801B] bg-[#8F801B]/15 text-white"
                    : "border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:border-neutral-700"
                }`}
              >
                <div className="font-bold text-sm text-white">Singapore SME</div>
                <div className="text-xs text-[#C5A017] font-semibold mt-0.5">70% Co-Funding Support</div>
                <p className="text-[10px] text-neutral-400 mt-1">≤S$100M revenue / ≤200 staff</p>
              </button>

              <button
                type="button"
                onClick={() => setIsSME(false)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  !isSME
                    ? "border-[#8F801B] bg-[#8F801B]/15 text-white"
                    : "border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:border-neutral-700"
                }`}
              >
                <div className="font-bold text-sm text-white">Non-SME Scale-Up</div>
                <div className="text-xs text-neutral-300 font-semibold mt-0.5">50% Co-Funding Support</div>
                <p className="text-[10px] text-neutral-400 mt-1">&gt;S$100M revenue / &gt;200 staff</p>
              </button>
            </div>
          </div>

          {/* Section 2: Current Software Inventory */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">
                2. Software / Hardware Solutions to Migrate
              </label>
              <span className="text-[11px] text-neutral-500">{selectedSolutions.length} selected</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {availableSolutions.map((sol) => {
                const isSelected = selectedSolutions.includes(sol.label);
                return (
                  <button
                    key={sol.id}
                    type="button"
                    onClick={() => toggleSolution(sol.label)}
                    className={`p-3 rounded-lg border text-left text-xs transition-all flex items-center justify-between ${
                      isSelected
                        ? "border-[#8F801B] bg-[#8F801B]/10 text-white font-medium"
                        : "border-neutral-800/80 bg-neutral-900/40 text-neutral-400 hover:border-neutral-700"
                    }`}
                  >
                    <span>{sol.label}</span>
                    {isSelected ? (
                      <CheckCircle2 className="w-4 h-4 text-[#8F801B] shrink-0 ml-2" />
                    ) : (
                      <span className="w-4 h-4 rounded-full border border-neutral-700 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3: Annual Budget */}
          <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-widest text-[#8F801B] block">
              3. Annual Qualifying Software &amp; IT Subscription Spend (SGD)
            </label>
            <div className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-xl space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-300">Total Software / SaaS Expenditure</span>
                <span className="text-[#C5A017] font-mono font-bold">S${annualSoftwareSpend.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="80000"
                step="2500"
                value={annualSoftwareSpend}
                onChange={(e) => setAnnualSoftwareSpend(Number(e.target.value))}
                className="w-full accent-[#8F801B] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500">
                <span>S$5,000</span>
                <span>S$42,857 (Max 70% SME Sub-Cap)</span>
                <span>S$80,000</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Output & Lead Capture (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

          {/* Scorecard Box */}
          <div className="p-6 bg-gradient-to-b from-neutral-900 to-black border border-[#8F801B]/40 rounded-xl space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="text-xs font-mono uppercase text-[#8F801B] font-bold">Migration Scorecard</span>
              <span className="text-xs px-2.5 py-0.5 bg-green-950 border border-green-800 text-green-400 rounded-full font-bold">
                {readinessScore}% Readiness
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs text-neutral-400">
                <span>PSG-Equivalent Support:</span>
                <span className="text-white font-mono font-bold text-sm text-[#C5A017]">
                  S${Math.round(eligibleSoftwareSupport).toLocaleString()} / yr
                </span>
              </div>
              <div className="flex justify-between text-xs text-neutral-400">
                <span>EDGE Digital Sub-Cap Limit:</span>
                <span className="text-neutral-300 font-mono">S$30,000 / yr</span>
              </div>
              <div className="flex justify-between text-xs text-neutral-400">
                <span>Remaining Strategic Headroom:</span>
                <span className="text-green-400 font-mono font-bold">
                  S${Math.round(remainingStrategyHeadroom).toLocaleString()} / yr
                </span>
              </div>
            </div>

            {excessUnfunded > 0 && (
              <div className="p-3 bg-amber-950/40 border border-amber-800/60 rounded text-[11px] text-amber-300 leading-snug">
                ⚠️ Your software spend exceeds the S$30,000 digital sub-cap by <strong>S${Math.round(excessUnfunded).toLocaleString()}</strong>. Consider packaging excess scopes into <strong>Innovation &amp; Workflow Automation</strong> under full S$100k EDGE support.
              </div>
            )}
          </div>

          {/* Form Action */}
          <div className="p-6 bg-black border border-neutral-800 rounded-xl">
            {isSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#8F801B] mx-auto" />
                <h4 className="text-lg font-bold text-white">Migration Audit Generated</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Our Senior Certified Management Consultant (SCMC) will contact you with your tailored PSG-to-EDGE migration roadmap within 1 business day.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs text-[#8F801B] underline hover:text-white"
                >
                  Run another audit
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5 mb-2">
                  <Lock className="w-3.5 h-3.5 text-[#8F801B]" />
                  Download Migration Audit Report &amp; SCMC Review
                </div>
                <div>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-xs rounded focus:outline-none focus:border-[#8F801B]"
                  />
                </div>
                <div>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Corporate Email (name@company.com)"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-xs rounded focus:outline-none focus:border-[#8F801B]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    required
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company Name"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-xs rounded focus:outline-none focus:border-[#8F801B]"
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Mobile / Office (+65)"
                    className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 text-white text-xs rounded focus:outline-none focus:border-[#8F801B]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-[#7a6d17] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                >
                  {isSubmitting ? "Generating Audit Report..." : (
                    <>
                      Request Official Migration Audit <ArrowRight className="w-3.5 h-3.5" />
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
