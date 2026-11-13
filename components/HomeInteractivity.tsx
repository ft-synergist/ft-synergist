"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link"; // ✅ Added for internal linking

import GrantEligibilityModal from "@/components/GrantEligibilityModal";
import { NewsletterModal } from "@/components/NewsletterModal";
import { usePersonaModal } from "@/components/providers/PersonaModalProvider";

// Core Client-Side Deferrals
export const LazyLogoCarousel = dynamic(
  () => import("@/components/LogoCarousel").then((mod) => mod.LogoCarousel),
  { ssr: false }
);

export const LazyCountUp = dynamic(
  () => import("@/components/CountUp").then((mod) => mod.CountUp),
  { ssr: false }
);

export function HomeModals() {
  const [isGrantModalOpen, setIsGrantModalOpen] = useState(false);
  return (
    <GrantEligibilityModal
      isOpen={isGrantModalOpen}
      onClose={() => setIsGrantModalOpen(false)}
    />
  );
}

export function HeroCTAButton() {
  const { openModal } = usePersonaModal();
  return (
    <button
      onClick={openModal}
      className="btn-start-journey inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white shadow-lg transition-all hover:scale-105"
    >
      Start Your Journey
      <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  );
}

export function SubscribeButton() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsNewsletterOpen(true)}
        className="btn-subscribe-ghost"
      >
        Subscribe to Insights
      </button>
      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />
    </>
  );
}

export function FooterCTAButton() {
  const { openModal } = usePersonaModal();
  return (
    <button
      onClick={openModal}
      className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-bold text-black shadow-lg transition-transform hover:scale-105"
    >
      Start Your Journey
      <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export function ServicesAccordion() {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  // The 6 Core Services aligned with Enterprise Singapore EDGE Grant & IPOS GoBusiness IP Grow S.O.T.
  const services = [
    {
      title: "Business Strategic Planning",
      href: "/business-strategic-planning",
      description: "Formulating corporate growth strategies, business models, and operational optimisation roadmaps under Enterprise Singapore's EDGE Business Strategic Planning framework.",
      expandedIntro: "Led by TÜV SÜD SCMC (SS 680:2021) certified management consultants, our Business Strategic Planning practice structures actionable 1-to-5-year growth roadmaps:",
      image: "/ft-synergist-tnt-surveillance-business-strategy.png",
      alt: "Business Strategic Planning and Business Strategy Development Consultant Singapore",
      details: [
        { title: "Internal Diagnostic & Business Excellence (SQC)", content: "Evaluating existing business drivers, operating models, and 7-pillar Business Excellence gaps (e.g., guiding TNT Surveillance to Singapore Quality Class)." },
        { title: "AI-Augmented Market Sizing & Competitor Analysis", content: "Quantifying multi-market TAM/SAM/SOM and regulatory barriers (e.g., Sundat's ~USD 5.65B Australian M&A and 5-market portfolio roadmap)." },
        { title: "Growth Models, IP Alignment & 5Cs Execution", content: "Translating strategic plans, IP asset management, and the 5Cs Playbook into measurable 1-year revenue growth and >S$5,000/mo job creation." }
      ]
    },
    {
      title: "IP Strategy & Advisory",
      href: "/ip-consultant",
      description: "Identifying, protecting, and commercialising intangible assets through IP Strategy Consulting, IP Brokerage & Licensing, and Innovation Consultancy.",
      expandedIntro: "We help SMEs and growth enterprises structure, protect, and monetise their intellectual property and intangible assets across core advisory pillars:",
      image: "/insights/ipos-ip-week-2026/frederick-tan-rosemary-kwa-ip-week-panel.jpg",
      alt: "IP Strategy and Advisory Consultant Singapore",
      details: [
        { title: "IP Strategy Consulting", content: "Identifying key IP assets (tech, data, content, know-how), evaluating risks and opportunities, and aligning IP with business goals." },
        { title: "IP Brokerage and Licensing", content: "Monetising brands, recipes, and technologies through F&B/enterprise franchising, brand licensing, and licensee negotiations." },
        { title: "Innovation Consultancy", content: "Using data analysis and market research to uncover untapped value, optimise R&D processes, and build new revenue streams." }
      ]
    },
    {
      title: "Strategic Brand & Marketing",
      href: "/strategic-brand-marketing-development",
      description: "Structuring coherent brand architectures, international branding strategies, and cross-border go-to-market roadmaps to grow brand equity and market share.",
      expandedIntro: "Backed by over two decades of scaling Singapore brands into regional markets, we structure defensible brand strategies across three core pillars:",
      image: "/Big-Fish-Small-Fish-flat-lay.jpg",
      alt: "Strategic Brand and Marketing Development International Branding Singapore",
      details: [
        { title: "Brand Research, Audit & Competitor Gap Analysis", content: "Executing primary market research, brand diagnostics, and target customer persona analysis for overseas market entry." },
        { title: "Brand Architecture & Market Positioning", content: "Developing brand positioning, value propositions, narrative messaging, and 3-to-5-year implementation plans." },
        { title: "Brand Identity Refresh & Cross-Border Guidelines", content: "Refreshing brand identity elements and codifying brand guidelines to govern local and overseas market activation." }
      ]
    },
    {
      title: "AI Digitalisation & Automation",
      href: "/ai-digitalisation",
      description: "Redesigning workflows and deploying AI dashboards and automation for SMEs, structured for Enterprise Singapore's EDGE Large-scale Digital Transformation and Large-scale Automation activities.",
      expandedIntro: "We start from the business case and the workflow, not the software. In an operational transformation for Bestway Cleaning at Changi Airport Terminal 2, FT Synergist acted as independent process architect and project counsel:",
      image: "/ft-synergist-bestway-innovation-productivity.jpg",
      alt: "AI Digitalisation and Automation Consultant Singapore - Bestway Changi Airport Terminal 2",
      details: [
        { title: "Process Redesign & Operational Architecture", content: "Auditing frontline workflows and designing demand-driven operations to replace rigid patrol cycles with sensor- and data-informed task coordination." },
        { title: "Predictive Analytics & Command Dashboard", content: "Architecting a 9-module solution, including 4 AI BI dashboard modules with passenger surge anticipation and human-in-the-loop supervisory oversight." },
        { title: "Multilingual Digital Learning Architecture", content: "5 AI LMS modules supporting structured bite-sized learning and competency tracking across English, Mandarin, Bengali, and Malay." }
      ]
    },
    {
      title: "Internationalisation (EDGE Grant)",
      href: "/internationalisation",
      description: "De-risking cross-border expansion using our proprietary PCBC Model, structured for Enterprise Singapore's EDGE Grant Internationalisation activities (up to 70% SME / 50% non-SME support).",
      expandedIntro: "We guide Singapore enterprises (e.g., Sundat and regional engineering & commercial groups) through overseas expansion across core EDGE Internationalisation pillars:",
      image: "/ft-synergist-sundat-mra-global-expansion.jpg",
      alt: "Internationalisation Consultant Singapore - EDGE Grant Market Entry Advisory",
      details: [
        { title: "Market Entry Setup & IP Protection", content: "Entity incorporation, market-specific agreements, import/export licences, and pre-emptive overseas trademark registration." },
        { title: "Overseas Partnerships & BD Deployment", content: "Vetted 1-to-1 in-premises meetings with distributors, franchisees, licensees, and JV partners, plus in-market BD staff deployment." },
        { title: "Overseas Marketing, PR & Trade Fairs", content: "Locally adapted outreach campaigns and B2B overseas trade fair participation aligned with EDGE deliverables." }
      ]
    },
    {
      title: "Franchise & Licensing",
      href: "/franchise-consultant",
      description: "Transforming proven operating models into asset-light, multi-market franchise architectures with standardized SOPs, commercial licensing contracts, and cross-border royalty valuation.",
      expandedIntro: "We guide high-growth local enterprises (e.g., Pawa Bakery) through asset-light international scaling to multiply revenue without heavy overseas factory capex:",
      image: "/ft-synergist-pawa-bakery-franchise-licensing.jpg",
      alt: "Franchise and Licensing Consultant Singapore Master Franchising",
      details: [
        { title: "Royalty Architecture & Valuation", content: "Auditing intangible assets and engineering high-yield commercial royalty structures with IA/IP valuation considerations." },
        { title: "Master Franchise & Contract Structuring", content: "Crafting robust master licensing agreements, territory covenants, and protectable operational manuals (SOPs)." },
        { title: "Cross-Border Partner Due Diligence", content: "Vetting international franchisees and deploying defensible governance frameworks across ASEAN and global markets." }
      ]
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* 6 Services Grid (2x3) */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#8F801B]/50 ${expandedCardIndex === index ? 'row-span-2' : ''}`}
          >
            <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
              <Image
                src={service.image}
                alt={service.alt ?? service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 384px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              {/* Title is a clickable link to the dedicated service page */}
              <Link href={service.href} className="block group/link">
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </Link>
              <div className="w-12 h-1 bg-[#8F801B] mb-4 rounded-full group-hover:w-20 transition-all duration-500 ease-out"></div>

              <div className="flex-grow">
                {!expandedCardIndex || expandedCardIndex !== index ? (
                  <p className="text-gray-700 font-medium leading-relaxed text-base mb-6">{service.description}</p>
                ) : null}

                <AnimatePresence>
                  {expandedCardIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-700 font-medium leading-relaxed text-base mb-6">{service.expandedIntro}</p>
                      <ul className="space-y-4 mb-6">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#8F801B] flex-shrink-0" />
                              <span className="font-bold text-foreground text-sm">{detail.title}</span>
                            </div>
                            <p className="text-sm text-gray-600 font-medium pl-6">{detail.content}</p>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-primary font-bold hover:underline text-sm"
                      >
                        Visit full service page →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-4 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                <button
                  onClick={() => toggleCard(index)}
                  className="text-sm font-bold text-primary group-hover:underline flex items-center cursor-pointer bg-transparent border-none p-0 focus:outline-none"
                >
                  {expandedCardIndex === index ? 'Show Less' : 'Read More'}
                  <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${expandedCardIndex === index ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}