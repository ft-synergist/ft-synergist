"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  X,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowUpRight,
  Layers,
  Cpu,
  Wifi,
  FileText,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

// --- LEAD CAPTURE MODAL ---
const LeadModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New Lead: PSG After September 2026 — EDGE Advisory Enquiry",
          _captcha: "false",
          ...data,
        }),
      });
    } catch {}
    window.location.href = "/edge-grant";
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-neutral-900 shadow-2xl overflow-hidden border border-neutral-800 border-t-4 border-[#8F801B]">
        <div className="bg-black p-8 text-center border-b border-neutral-800">
          <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors">
            <X size={24} />
          </button>
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#8F801B]/10 border border-[#8F801B]/20">
            <Lock className="w-8 h-8 text-[#8F801B]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Assess Your EDGE Readiness</h3>
          <p className="text-neutral-400 text-sm">
            Speak directly with a TÜV SÜD Accredited SCMC Consultant on how to migrate your PSG-funded tools into the EDGE framework.
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
              placeholder="e.g. My Company Pte Ltd"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white font-bold uppercase tracking-wider hover:bg-[#7a6d17] transition-all shadow-lg rounded-none disabled:opacity-70 disabled:cursor-not-allowed text-xs"
          >
            {isSubmitting ? "Submitting…" : (
              <>Request EDGE Transition Assessment <ArrowRight className="ml-2 h-4 w-4" /></>
            )}
          </button>
          <p className="text-center text-xs text-neutral-500 mt-4">
            Certified SCMC Management Consultancy (SCMC-1810-P0236). No obligation.
          </p>
        </form>
      </div>
    </div>
  );
};

// --- PAGE ---
export default function PSGAfterSeptember2026Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "What Happens to PSG After 29 September 2026? Singapore SME Transition Guide",
        description:
          "The Productivity Solutions Grant (PSG) ceases on 29 September 2026. Understand what replaces PSG, how EDGE absorbs it, the S$30,000 sub-cap, and continuity rules for existing PSG projects.",
        image: "https://www.ftsynergist.com/hero-bg.jpg",
        author: { "@type": "Organization", name: "FT Synergist" },
        publisher: {
          "@type": "Organization",
          name: "FT Synergist",
          logo: { "@type": "ImageObject", url: "https://www.ftsynergist.com/logo.png" },
        },
        datePublished: "2026-09-10",
        dateModified: "2026-09-10",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.ftsynergist.com/insights/what-happens-to-psg-after-september-2026",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What happens to PSG after 29 September 2026?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Productivity Solutions Grant (PSG) ceases on 29 September 2026. No new PSG applications will be accepted after that date. From 30 September 2026, the EDGE Grant becomes the sole application pathway for Singapore businesses seeking government co-funding for productivity and digitalisation activities.",
            },
          },
          {
            "@type": "Question",
            name: "What replaces PSG in Singapore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "PSG is absorbed into the new EDGE Grant, which also consolidates the Enterprise Development Grant (EDG) and Market Readiness Assistance (MRA). PSG's supportable activities—pre-scoped IT solutions, off-the-shelf software, and equipment—are integrated into EDGE's Automation and Digitalisation business areas.",
            },
          },
          {
            "@type": "Question",
            name: "How much grant support is available for digital tools under EDGE to replace PSG?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Under EDGE, companies can deploy up to S$30,000 of their annual S$100,000 grant cap on single-function digital solutions, integrated enterprise systems, and selected automation activities—the activities that were previously supported under PSG.",
            },
          },
          {
            "@type": "Question",
            name: "Will my existing PSG project be affected by the closure?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. PSG applications submitted before 30 September 2026 will continue to be assessed under PSG criteria. Approved PSG projects proceed unaffected and will be supported through project completion and claim disbursement, even after 29 September 2026.",
            },
          },
          {
            "@type": "Question",
            name: "Can a business that previously received PSG funding apply for EDGE?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Businesses that have previously received PSG funding are fully eligible to apply for EDGE from 30 September 2026 onwards.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-[#8F801B]/20 w-full overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ── HERO ── */}
      <header className="relative pt-40 pb-16 px-6 text-center max-w-5xl mx-auto space-y-6">
        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/60 border border-red-800/60 text-red-400 text-xs font-bold uppercase tracking-widest">
          <AlertTriangle className="w-3.5 h-3.5" />
          PSG ceases 29 September 2026 — 19 days remaining
        </div>

        <span className="block text-xs uppercase tracking-[0.25em] text-[#8F801B] font-extrabold">
          Enterprise Singapore Grant Policy Update · September 2026
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
          What Happens to PSG{" "}
          <span className="text-[#8F801B]">After&nbsp;September&nbsp;2026?</span>
        </h1>

        <p className="text-base md:text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          The Productivity Solutions Grant ends on 29 September 2026. This guide explains what replaces PSG,
          how your tools and software subscriptions transition to EDGE, the S$30,000 sub-cap,
          and what happens to your existing PSG claims — based exclusively on verified Enterprise Singapore sources.
        </p>

        <p className="text-xs text-neutral-600 max-w-xl mx-auto">
          Source:{" "}
          <a
            href="https://www.enterprisesg.gov.sg/resources/all-faqs/edge-grant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8F801B] underline hover:text-white transition-colors"
          >
            Enterprise Singapore — EDGE Grant FAQ (enterprisesg.gov.sg)
          </a>
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/edge-grant"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all shadow-lg shadow-[#8F801B]/10 w-full sm:w-auto"
          >
            Full EDGE Grant Guide
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 hover:text-white transition-all w-full sm:w-auto"
          >
            Assess My EDGE Readiness
            <ShieldCheck className="ml-2 h-4 w-4 text-[#8F801B]" />
          </button>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="max-w-5xl mx-auto px-6 pb-32 space-y-24">

        {/* 1. THE CORE ANSWER */}
        <section className="border border-neutral-800 p-8 md:p-12 bg-neutral-950/60 space-y-8">
          <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
            <AlertTriangle className="w-5 h-5 text-[#8F801B] shrink-0" />
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white">
              The Short Answer: PSG Ends. EDGE Begins.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "PSG Closes 29 Sept 2026",
                body: "No new PSG applications will be accepted after 29 September 2026. This is a hard cutover — not a phase-out.",
              },
              {
                n: "02",
                title: "EDGE Opens 30 Sept 2026",
                body: "The new EDGE Grant launches 30 September 2026 as the single consolidated pathway replacing EDG, MRA, and PSG.",
              },
              {
                n: "03",
                title: "Existing PSG Projects Protected",
                body: "Applications submitted before 30 September 2026 continue under PSG rules. Approved projects proceed to completion and claim disbursement.",
              },
            ].map((c) => (
              <div key={c.n} className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
                <span className="text-2xl font-extrabold text-[#8F801B]">{c.n}</span>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">{c.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed m-0">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. WHAT PSG WAS */}
        <section className="space-y-6 text-left border-l-2 border-[#8F801B] pl-6 md:pl-8">
          <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Context</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            What Was PSG — and Why It Mattered to SMEs
          </h2>
          <div className="space-y-5 text-sm text-neutral-300 leading-relaxed max-w-3xl">
            <p>
              The <strong className="text-white">Productivity Solutions Grant (PSG)</strong> was Enterprise Singapore&apos;s
              programme to co-fund Singapore SMEs adopting pre-scoped IT solutions, off-the-shelf software packages,
              and equipment to boost operational productivity. Unlike the EDG — which funded strategic management consulting
              projects — PSG funded the actual software licences and hardware.
            </p>
            <p>
              PSG covered categories such as CRM systems, accounting software, HR and payroll platforms, point-of-sale
              systems, inventory management tools, and selected equipment. Vendors were pre-approved by IMDA and Enterprise
              Singapore, and SMEs selected from a catalogue of pre-scoped packages at fixed price points, with grant
              reimbursement applied against the subscription or purchase cost.
            </p>
            <p>
              For many Singapore SMEs, PSG was their first and most transactional interaction with Enterprise Singapore
              grants — more accessible than the EDG because it required no strategic consulting engagement, just a
              qualifying vendor selection and BGP application.
            </p>
          </div>
        </section>

        {/* 3. HOW PSG IS ABSORBED INTO EDGE */}
        <section className="space-y-8">
          <div className="border-l-2 border-[#8F801B] pl-6 md:pl-8 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">EDGE Transition</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              How PSG Activities Are Absorbed into EDGE
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl">
              PSG does not simply disappear. Its supportable activities are integrated directly into two EDGE business areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Automation */}
            <div className="p-8 bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-3 text-[#8F801B]">
                <Cpu className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">EDGE Business Area</span>
              </div>
              <h3 className="text-white font-bold text-lg">Automation</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Selected automation activities previously supported under PSG — including equipment-based workflow automation,
                robotics, and process mechanisation tools — are now funded within EDGE&apos;s Automation business area.
              </p>
              <div className="flex items-center gap-2 text-[#8F801B] text-xs font-bold">
                <ChevronRight className="w-3.5 h-3.5" />
                Replaces PSG equipment and automation hardware categories
              </div>
            </div>

            {/* Digitalisation */}
            <div className="p-8 bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-3 text-[#8F801B]">
                <Wifi className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">EDGE Business Area</span>
              </div>
              <h3 className="text-white font-bold text-lg">Digitalisation</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Pre-scoped IT solutions and off-the-shelf software (CRM, accounting, HR, POS systems) previously
                co-funded by PSG are absorbed under EDGE&apos;s Digitalisation business area. Single-function digital
                solutions, integrated enterprise systems, and related software adoption qualify here.
              </p>
              <div className="flex items-center gap-2 text-[#8F801B] text-xs font-bold">
                <ChevronRight className="w-3.5 h-3.5" />
                Replaces PSG IT solutions, SaaS, and software categories
              </div>
            </div>
          </div>

          {/* The S$30k sub-cap */}
          <div className="p-8 md:p-10 bg-[#8F801B]/8 border border-[#8F801B]/30 space-y-4">
            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-[#8F801B] shrink-0" />
              <h3 className="text-white font-bold text-base uppercase tracking-wider">
                The S$30,000 Sub-Cap: What It Means for You
              </h3>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Under EDGE, each eligible company receives an annual grant cap of{" "}
              <strong className="text-white">S$100,000</strong> across all business areas. Of this,{" "}
              <strong className="text-white">up to S$30,000 per year</strong> may be used specifically for:
            </p>
            <ul className="space-y-2 text-sm text-neutral-300">
              {[
                "Single-function digital solutions (e.g. standalone CRM, accounting, HR software)",
                "Integrated enterprise systems (e.g. ERP and multi-module platforms)",
                "Selected automation activities (equipment and process mechanisation tools)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#8F801B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-neutral-500 mt-2">
              The remaining S$70,000 of the annual cap is available for higher-order business areas — Strategy,
              Innovation, Brand Development, Internationalisation, and Sustainability — where FT Synergist&apos;s
              advisory practice operates.
            </p>
          </div>
        </section>

        {/* 4. TIMELINE */}
        <section className="space-y-6 text-left">
          <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Critical Dates</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            PSG-to-EDGE Transition Timeline
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                period: "Now — 28 Sept 2026",
                icon: Clock,
                title: "PSG Still Open",
                body: "New PSG applications may still be submitted via the Business Grants Portal (BGP). If your project qualifies, this window remains open.",
                accent: "text-emerald-400",
                border: "border-emerald-800/40",
              },
              {
                period: "29 September 2026",
                icon: AlertTriangle,
                title: "PSG Ceases",
                body: "Last day of PSG. No new applications accepted from 30 September 2026 onwards under any of the three legacy schemes (EDG, MRA, PSG).",
                accent: "text-red-400",
                border: "border-red-800/40",
              },
              {
                period: "30 September 2026",
                icon: ArrowUpRight,
                title: "EDGE Launches",
                body: "EDGE Grant becomes the sole pathway. Applications for Automation and Digitalisation (PSG-equivalent activities) transition to the unified EDGE framework.",
                accent: "text-[#8F801B]",
                border: "border-[#8F801B]/30",
              },
              {
                period: "Post-Launch",
                icon: FileText,
                title: "Existing PSG Claims",
                body: "Ongoing PSG projects proceed unaffected — assessments, claims, and disbursements continue under PSG rules until each project is completed.",
                accent: "text-blue-400",
                border: "border-blue-800/40",
              },
            ].map((step) => (
              <div key={step.period} className={`p-6 bg-neutral-950 border ${step.border} space-y-3`}>
                <step.icon className={`w-5 h-5 ${step.accent}`} />
                <span className={`text-xs font-bold uppercase tracking-wider ${step.accent}`}>{step.period}</span>
                <h3 className="text-white font-bold text-sm">{step.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed m-0">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="space-y-8">
          <div className="border-l-2 border-[#8F801B] pl-6 md:pl-8 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Common Questions</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              PSG-to-EDGE: Verified Answers
            </h2>
            <p className="text-xs text-neutral-500">
              All answers sourced directly from the{" "}
              <a
                href="https://www.enterprisesg.gov.sg/resources/all-faqs/edge-grant"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8F801B] underline hover:text-white"
              >
                Enterprise Singapore EDGE Grant FAQ
              </a>
              .
            </p>
          </div>

          <div className="space-y-px">
            {[
              {
                q: "Will PSG be available alongside EDGE after 30 September 2026?",
                a: "No. PSG ceases on 29 September 2026. From 30 September 2026, EDGE is the sole application pathway. There is no parallel operation period between the two frameworks.",
              },
              {
                q: "I submitted my PSG application before 29 September 2026. Will it still be processed?",
                a: "Yes. PSG applications submitted before 30 September 2026 will continue to be assessed under PSG criteria. Your existing application is not affected by the transition to EDGE.",
              },
              {
                q: "My PSG project is approved but not yet claimed. What happens?",
                a: "Approved PSG projects proceed unaffected. You will continue to be supported until project completion and claim disbursement, even after EDGE launches. No action is required from your end — continue your project and submit claims per your PSG Letter of Offer.",
              },
              {
                q: "Can a business that previously used PSG apply for EDGE from 30 September 2026?",
                a: "Yes. Businesses that have previously applied for or received PSG funding are fully eligible to apply for the EDGE Grant from 30 September 2026.",
              },
              {
                q: "Under EDGE, do I still choose from a pre-approved vendor list for digital tools?",
                a: "For activities with pre-approved vendors (analogous to PSG's vendor catalogue mechanism), businesses will choose from assessed vendor lists under EDGE. The EDGE vendor framework details are expected to be published by EnterpriseSG at or near the 30 September 2026 launch.",
              },
              {
                q: "What is the maximum I can claim under EDGE for digital tools that replaced PSG?",
                a: "Under EDGE, the annual grant cap is S$100,000 per eligible company. Of this, up to S$30,000 per year may be used on single-function digital solutions, integrated enterprise systems, and selected automation activities — the activities that previously fell under PSG.",
              },
            ].map((faq, i) => (
              <div key={i} className="border border-neutral-800 p-6 md:p-8 bg-neutral-950/40 space-y-3">
                <h3 className="text-white font-bold text-sm">{faq.q}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed m-0">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. STRATEGIC FRAMING */}
        <section className="p-8 md:p-12 bg-neutral-950 border border-neutral-800 space-y-6">
          <div className="flex items-center gap-3 border-b border-neutral-900 pb-4">
            <ShieldCheck className="w-5 h-5 text-[#8F801B]" />
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              The Strategic Implication: PSG Was Transactional. EDGE Is Transformational.
            </h2>
          </div>
          <div className="space-y-4 text-sm text-neutral-300 leading-relaxed max-w-3xl">
            <p>
              PSG&apos;s architecture was intentionally transactional: choose a vendor, submit an application,
              receive reimbursement. No strategic advisory was required. This made it fast and accessible —
              but also narrow. PSG funded individual tool adoption, not the organisational change required
              to extract value from those tools.
            </p>
            <p>
              EDGE changes this fundamentally. The S$30,000 Automation/Digitalisation sub-cap preserves
              tool-level accessibility, but it sits inside a broader S$100,000 annual grant framework
              designed for strategic transformation. Businesses that simply replicate their PSG approach
              inside EDGE will under-utilise the remaining S$70,000 of their annual cap.
            </p>
            <p>
              The highest-value EDGE outcomes will go to businesses that combine PSG-equivalent tool adoption
              (Digitalisation/Automation) with higher-order strategic work: building the brand architecture,
              internationalisation roadmap, or innovation capability required to justify those tools at scale.
              That is where advisory guidance — rather than a vendor catalogue — becomes essential.
            </p>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Link
              href="/edge-grant"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all"
            >
              Explore the Full EDGE Grant Framework
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 hover:text-white transition-all"
            >
              Speak with an SCMC Consultant
            </button>
          </div>
        </section>

        {/* 7. BOTTOM CTA */}
        <section className="py-16 bg-neutral-950 border border-neutral-900 text-center space-y-6 max-w-4xl mx-auto">
          <Lock className="w-8 h-8 text-[#8F801B] mx-auto" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Ready to Navigate the PSG-to-EDGE Transition?
          </h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed">
            FT Synergist&apos;s SCMC-certified consultants help Singapore businesses map their existing PSG-funded tools
            into a complete EDGE strategy — unlocking the full S$100,000 annual cap, not just the S$30,000
            Digitalisation sub-cap.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-10 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all shadow-lg shadow-[#8F801B]/20"
            >
              Request Confidential EDGE Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <Link
              href="/edge-grant"
              className="inline-flex items-center justify-center px-10 py-4 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-neutral-800 hover:text-white transition-all"
            >
              Read the EDGE Grant Guide
            </Link>
          </div>
          <p className="text-xs text-neutral-600">
            All grant facts on this page are sourced exclusively from the{" "}
            <a
              href="https://www.enterprisesg.gov.sg/resources/all-faqs/edge-grant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8F801B] underline"
            >
              Enterprise Singapore EDGE Grant FAQ
            </a>
            .
          </p>
        </section>

      </main>
    </div>
  );
}
