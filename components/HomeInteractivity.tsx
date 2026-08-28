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

  // The 5 Core Services with embedded IPOS recognized keywords & statutory EDG frameworks
  const services = [
    {
      title: "Business Strategy Development",
      href: "/ip-consultant",
      description: "Crafting actionable roadmaps backed by defensible IP strategy, intangible asset audits, and portfolio management to secure your legal right to dominate markets.",
      expandedIntro: "We convert unvalued operational workflows and corporate capabilities into tradeable, defensible equity moats:",
      image: "/ft-synergist-tnt-surveillance-business-strategy.png",
      alt: "Business Strategy Development and IP Strategy Consultant Singapore",
      details: [
        { title: "Intangible Asset (IA) & IP Audit", content: "Auditing registered and unregistered IP, trade secrets, and proprietary SOPs to establish true enterprise valuation." },
        { title: "IP Strategy & Portfolio Management", content: "Structuring long-term IP roadmaps aligned with corporate growth, capital raising, and M&A defensibility." },
        { title: "Commercialisation & Due Diligence", content: "Transforming internal operational know-how into legally protected licensing models with territorial exclusivity." }
      ]
    },
    {
      title: "Strategic Brand & Marketing",
      href: "/strategic-brand-marketing-development",
      description: "Building distinctive, legally protected brand strategies under Enterprise Singapore's EDG framework that command market share and turn marketing spend into tradeable equity.",
      expandedIntro: "A brand is only an asset if it is distinct and defensible. For scaling consumer and B2B leaders (e.g., Big Fish Small Fish, Pétale Tea), we differentiate your offering through:",
      image: "/Big-Fish-Small-Fish-flat-lay.jpg",
      alt: "Strategic Brand and Marketing Development Singapore",
      details: [
        { title: "Market Research & Distinctive Positioning", content: "Conducting primary quantitative and qualitative market research to validate customer willingness-to-pay and distinctiveness." },
        { title: "Trade Mark & Brand Landscaping", content: "Structuring defensible brand architectures integrated with trademark protection and commercial equity valuation." },
        { title: "Brand Commercialisation & GTM", content: "Developing high-ROI marketing playbooks and cross-border brand asset guidelines to scale beyond Singapore." }
      ]
    },
    {
      title: "Innovation & Productivity",
      href: "/ai-digitalisation",
      description: "Providing AI-powered Process Redesign and workflow optimization under Enterprise Singapore frameworks to turn operational improvements into proprietary trade secrets.",
      expandedIntro: "We turn operational bottlenecks into long-term efficiency moats. Our productivity transformation programs (e.g., Bestway continuous improvement frameworks) deliver:",
      image: "/ft-synergist-bestway-innovation-productivity.jpg",
      alt: "Innovation and Productivity AI Digitalisation Singapore",
      details: [
        { title: "Process Redesign & Workflow Automation", content: "Reviewing and streamlining operational workflows to eliminate redundancies and optimize labor allocation." },
        { title: "Predictive Analytics & KPI Dashboards", content: "Developing real-time operational telemetry and custom AI automation bridges for sustained productivity gains." },
        { title: "Trade Secret & Innovation Harvesting", content: "Helping enterprises formalize frontline process improvements and algorithmic models into protectable trade secrets." }
      ]
    },
    {
      title: "Market Readiness Assistance",
      href: "/mra-grant",
      description: "De-risking global expansion with local expertise, regulatory navigation, and Freedom-To-Operate (FTO) intelligence to secure viable international growth under Enterprise Singapore's MRA grant.",
      expandedIntro: "We guide mid-market enterprises (e.g., Sundat) through complex cross-border expansions, de-risking overseas entry across three core statutory pillars:",
      image: "/ft-synergist-sundat-mra-global-expansion.jpg",
      alt: "Market Readiness Assistance MRA Grant Consultant Singapore",
      details: [
        { title: "Overseas Feasibility & FTO Clearance", content: "In-depth research on overseas regulatory pathways, trade barriers, and Freedom-To-Operate (FTO) IP clearance." },
        { title: "Cross-Border Partner Matching", content: "Matching your enterprise with vetted overseas master distributors, joint-venture partners, and B2B licensees." },
        { title: "International Marketing & Promotion", content: "Targeted localized campaigns and go-to-market roadmaps to establish immediate market share in overseas territories." }
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