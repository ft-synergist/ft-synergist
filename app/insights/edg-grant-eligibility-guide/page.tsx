"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Download, Lock, X, ChevronRight, HelpCircle, FileText, Award, Building2, Zap } from "lucide-react";

// --- LEAD CAPTURE MODAL COMPONENT ---
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
          _subject: "New Lead: EDG Grant Eligibility Guide Download",
          _captcha: "false",
          ...data
        })
      });

      window.location.href = "/edg-grant";
      onClose();
    } catch (error) {
      console.error("Form submission error", error);
      window.location.href = "/edg-grant";
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
          <h3 className="text-2xl font-bold text-white mb-2">Check EDG Eligibility</h3>
          <p className="text-neutral-400 text-sm">
            Speak directly with a TÜV SÜD Accredited SCMC Consultant to audit your project grant readiness.
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
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 shadow-none text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Work Email</label>
            <input
              required
              name="email"
              type="email"
              placeholder="name@company.com"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 shadow-none text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Company Name</label>
            <input
              required
              name="company"
              type="text"
              placeholder="e.g. FT Synergist"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 shadow-none text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white font-bold uppercase tracking-wider hover:bg-[#7a6d17] transition-all shadow-lg rounded-none disabled:opacity-70 disabled:cursor-not-allowed text-xs"
          >
            {isSubmitting ? "Submitting..." : (
              <>
                Request Confidential Eligibility Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>

          <p className="text-center text-xs text-neutral-500 mt-4">
            Certified SCMC Management Consultancy (SCMC-1810-P0236).
          </p>
        </form>
      </div>
    </div>
  );
};

export default function EDGGrantEligibilityGuidePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const guideJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "EDG Grant Eligibility Guide 2026: Enterprise Singapore Criteria, Co-Funding Support & Project Scopes",
        "description": "Comprehensive guide to Enterprise Singapore's Enterprise Development Grant (EDG) eligibility criteria, co-funding support tiers, supported pillars, and mandatory SCMC certified consultant governance.",
        "image": "https://www.ftsynergist.com/hero-bg.jpg",
        "author": {
          "@type": "Organization",
          "name": "FT Synergist"
        },
        "publisher": {
          "@type": "Organization",
          "name": "FT Synergist",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.ftsynergist.com/logo.png"
          }
        },
        "datePublished": "2026-01-15",
        "dateModified": "2026-09-01"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the core eligibility criteria for the EDG Grant in Singapore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To qualify for the Enterprise Development Grant (EDG), an enterprise must: 1. Be registered and operating in Singapore. 2. Have a minimum of 30% local (Singaporean or Singapore PR) shareholding. 3. Be in a financially viable position to fund the non-grant portion of project costs."
            }
          },
          {
            "@type": "Question",
            "name": "What percentage of funding does the EDG Grant support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The EDG supports up to 50% of qualifying project costs for local SMEs. For targeted strategic projects aligned with deep industry transformation or sustainability, support may be enhanced up to 70% subject to Enterprise Singapore evaluation."
            }
          },
          {
            "@type": "Question",
            "name": "Why is engaging a Certified Management Consultant mandatory for EDG projects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enterprise Singapore mandates that third-party management consultants engaged for EDG projects must hold recognized certification (such as SCMC, RMC, or PMC) to ensure project governance, methodology rigor, and valid commercial outcome delivery."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-[#8F801B]/20 w-full overflow-x-hidden">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideJsonLd) }}
      />

      <DownloadGate isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* 1. HERO HEADER */}
      <header className="relative pt-40 pb-16 px-6 text-center max-w-5xl mx-auto space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] text-[#8F801B] font-extrabold">
          Enterprise Singapore Grant Advisory &bull; 2026 Definitive Framework
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
          EDG Grant Eligibility Guide: <br />
          <span className="text-[#8F801B]">Enterprise Singapore Qualifying Criteria &amp; Project Scopes</span>
        </h1>

        <p className="text-base md:text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          Navigate Enterprise Singapore&apos;s Enterprise Development Grant (EDG). Learn qualifying criteria, co-funding support caps, supported project pillars, and mandatory SCMC certified consultant governance.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/edg-grant"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all shadow-lg shadow-[#8F801B]/10 w-full sm:w-auto"
          >
            Explore EDG Advisory Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 hover:text-white transition-all w-full sm:w-auto"
          >
            Check Company Eligibility
            <ShieldCheck className="ml-2 h-4 w-4 text-[#8F801B]" />
          </button>
        </div>
      </header>

      {/* 2. MAIN CONTENT BODY */}
      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-20">

        {/* CORE ELIGIBILITY CHECKLIST */}
        <section className="border border-neutral-800 p-8 md:p-12 bg-neutral-950/60 backdrop-blur-sm space-y-8 text-left">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#8F801B]" /> Core EDG Eligibility Checklist
            </h2>
            <span className="text-xs text-[#8F801B] font-mono uppercase font-bold border border-[#8F801B]/30 px-3 py-1 bg-[#8F801B]/10">
              EnterpriseSG Baseline Criteria
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
              <span className="text-2xl font-extrabold text-[#8F801B]">01</span>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">Registered in SG</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Business entity must be legally registered and actively operating in Singapore under ACRA.
              </p>
            </div>
            <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
              <span className="text-2xl font-extrabold text-[#8F801B]">02</span>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">30% Local Equity</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Company must hold a minimum of 30% direct or indirect local shareholding (Singaporean or PR).
              </p>
            </div>
            <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
              <span className="text-2xl font-extrabold text-[#8F801B]">03</span>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">Financial Viability</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Entity must demonstrate financial readiness to fund non-grant co-sharing project components.
              </p>
            </div>
          </div>
        </section>

        {/* 3 SUPPORTED PROJECT PILLARS */}
        <section className="space-y-6 text-left border-l-2 border-[#8F801B] pl-6 md:pl-8">
          <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Project Scopes</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">The Three Pillars of EDG Support</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 bg-neutral-950 border border-neutral-900 space-y-3">
              <div className="flex items-center gap-2 text-[#8F801B]">
                <Building2 className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Pillar 1</span>
              </div>
              <h3 className="text-white font-bold text-lg">Core Capabilities</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Helps businesses build foundations for growth. Scopes include <strong>Strategic Brand &amp; Marketing Development</strong>, <strong>Business Strategy</strong>, Human Capital Development, and Financial Management.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-900 space-y-3">
              <div className="flex items-center gap-2 text-[#8F801B]">
                <Zap className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Pillar 2</span>
              </div>
              <h3 className="text-white font-bold text-lg">Innovation &amp; Productivity</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Supports operational redesign and technology adoption. Scopes include Process Redesign, Automation, Product Development, and AI System Integration.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-900 space-y-3">
              <div className="flex items-center gap-2 text-[#8F801B]">
                <Award className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Pillar 3</span>
              </div>
              <h3 className="text-white font-bold text-lg">Market Access</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Assists Singapore enterprises expanding overseas. Scopes include Overseas Market Setup, Mergers &amp; Acquisitions, and Standards Certification.
              </p>
            </div>
          </div>
        </section>

        {/* MANDATORY SCMC CERTIFIED CONSULTANT GOVERNANCE */}
        <section className="bg-neutral-950 border border-neutral-800 p-8 space-y-6 text-left">
          <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#8F801B]" /> Mandatory Certified Consultant Requirement
            </h3>
            <span className="text-xs text-neutral-400 font-mono">TÜV SÜD SCMC-1810-P0236</span>
          </div>

          <p className="text-sm text-neutral-300 leading-relaxed m-0">
            Enterprise Singapore strictly mandates that all third-party management consultants engaged for EDG projects <strong>must hold recognized certification</strong>—such as the Singapore Certified Management Consultant (SCMC) accredited by TÜV SÜD PSB, RMC, or PMC. Uncertified consultant proposals face mandatory administrative rejection.
          </p>

          <div className="pt-2 flex items-center gap-4">
            <Link
              href="/edg-grant"
              className="text-xs font-bold text-[#8F801B] uppercase tracking-widest hover:text-white transition-colors underline"
            >
              Verify SCMC Certified Advisory Credentials &rarr;
            </Link>
          </div>
        </section>

        {/* STEP BY STEP EDG APPLICATION TIMELINE */}
        <section className="space-y-6 text-left">
          <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Execution Roadmap</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Step-by-Step EDG Application Workflow</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2">
              <span className="text-xs font-bold text-[#8F801B] uppercase">Step 1</span>
              <h4 className="text-sm font-bold text-white">Strategic Audit</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">Scope project deliverables &amp; verify commercial outcomes with an SCMC consultant.</p>
            </div>
            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2">
              <span className="text-xs font-bold text-[#8F801B] uppercase">Step 2</span>
              <h4 className="text-sm font-bold text-white">BGP Submission</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">Submit detailed project proposal via Business Grants Portal (BGP) using CorpPass.</p>
            </div>
            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2">
              <span className="text-xs font-bold text-[#8F801B] uppercase">Step 3</span>
              <h4 className="text-sm font-bold text-white">Letter of Offer</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">Receive formal EnterpriseSG approval letter detailing grant support quantum.</p>
            </div>
            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2">
              <span className="text-xs font-bold text-[#8F801B] uppercase">Step 4</span>
              <h4 className="text-sm font-bold text-white">Project Claims</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">Execute project, submit auditor report, and receive grant reimbursement disbursement.</p>
            </div>
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION */}
        <section className="py-16 bg-neutral-950 border border-neutral-900 text-center space-y-6 max-w-4xl mx-auto">
          <Lock className="w-8 h-8 text-[#8F801B] mx-auto" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Ready to Secure EnterpriseSG EDG Co-Funding?</h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed">
            Partner with FT Synergist to audit your project readiness, craft a bulletproof commercial proposal, and accelerate your EDG approval.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/edg-grant"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all shadow-lg shadow-[#8F801B]/20"
            >
              Visit Official EDG Grant Hub
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-10 py-4 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-neutral-800 hover:text-white transition-all"
            >
              Book Confidential Assessment
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}
