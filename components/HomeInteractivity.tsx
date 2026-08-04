"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

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

  const services = [
    {
      title: "Business Strategy Development",
      description: "Crafting actionable roadmaps backed by defensible IP Strategy to secure your legal right to dominate markets.",
      expandedIntro: "We move beyond standard planning to provide IP strategy consulting and build competitive moats.",
      image: "/ft-synergist-tnt-surveillance-business-strategy.png",
      alt: "TNT Surveillance iSafe Telematics System deployed for fleet strategy and IP optimization",
      details: [
        { title: "Diagnosis & Market Intelligence (SWOT)", content: "We assess internal strengths and external competition using SWOT Analysis to identify growth bottlenecks." },
        { title: "Strategic Roadmap", content: "Delivering a clear go-to-market implementation plan for business frameworks, Sustainability Governance, and policy development." },
        { title: "R&D & IP Optimization", content: "Structuring your intellectual property assets and R&D operations for maximum valuation and efficiency." }
      ],
    },
    {
      title: "Strategic Brand & Marketing",
      description: "Building resilient, legally protected brand strategies under Enterprise Singapore's EDG framework that command market share and turn marketing spend into tradeable equity.",
      expandedIntro: "A brand is only an asset if it is distinct and legally protected. For scaling consumer brands like Big Fish Small Fish, we differentiate your offering through:",
      image: "/Big-Fish-Small-Fish-flat-lay.jpg",
      details: [
        { title: "Market Research & Insights", content: "Conducting quantitative primary research to validate target customer segments and willingness-to-pay." },
        { title: "Brand & Trademark Strategy", content: "Structuring defensible brand architectures aligned with IPOS trademark protection and commercial valuation." },
        { title: "Strategic Implementation", content: "Developing high-ROI marketing frameworks to optimize resources and extend market reach beyond Singapore." }
      ]
    },
    {
      title: "Innovation & Productivity",
      description: "Providing AI-powered Process Redesign and workflow optimization under Enterprise Singapore frameworks to turn operational improvements into proprietary trade secrets.",
      expandedIntro: "We turn operational bottlenecks into long-term efficiency moats. Our productivity transformation programs (e.g., Bestway continuous improvement frameworks) deliver:",
      image: "/ft-synergist-bestway-innovation-productivity.jpg",
      details: [
        { title: "Process Redesign & Workflow Automation", content: "Reviewing and streamlining operational workflows to eliminate redundancies and optimize labor allocation." },
        { title: "Performance Measurement & KPIs", content: "Developing real-time tracking dashboards and data roadmaps to ensure sustained operational gains." },
        { title: "Innovation Harvesting", content: "Helping enterprises capture and formalize frontline process improvements into protectable Trade Secrets & Patents." }
      ]
    },
    {
      title: "Market Readiness Assistance",
      description: "De-risking global expansion with local expertise, regulatory navigation, and IP intelligence to secure viable international growth under Enterprise Singapore's MRA grant.",
      expandedIntro: "We guide mid-market enterprises like Sundat through complex cross-border expansions, de-risking overseas entry across three core pillars:",
      image: "/ft-synergist-sundat-mra-global-expansion.jpg",
      details: [
        { title: "Market Entry & Feasibility Advisory", content: "In-depth research on regulatory pathways, Freedom-to-Operate (FTO), and acquisition-led entry routes." },
        { title: "Overseas Business Development", content: "Matching your enterprise with vetted overseas partners, business brokers, and B2B licensees." },
        { title: "International Marketing & Promotion", content: "Targeted campaigns and go-to-market strategies to establish a defensible presence in overseas territories." }
      ]
    },
    {
      title: "Franchise & Licensing",
      description: "Scaling exponentially through robust IP Brokerage and Licensing models that transform your business into a globally replicable asset.",
      expandedIntro: "We transform your business into a globally replicable asset class.",
      image: "/service-franchise.png",
      details: [
        { title: "IP Brokerage", content: "Handling the commercial transaction of your assets to ensure maximum deal value." },
        { title: "Licensing Deal Structure", content: "Crafting robust franchise agreements and royalty models that monetize your intellectual property." },
        { title: "Cross-Border Enforcement", content: "Ensuring your licensing models are legally enforceable across different jurisdictions." }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Top Row: 3 Pillars */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.slice(0, 3).map((service, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#8F801B]/50 ${expandedCardIndex === index ? 'row-span-2' : ''}`}
          >
            <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
              <Image
                src={service.image}
                alt={(service as any).alt ?? service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 384px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
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

      {/* Bottom Row: 2 Pillars (Centered) */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 lg:w-4/5 lg:mx-auto"
      >
        {services.slice(3, 5).map((service, index) => {
          const actualIndex = index + 3;
          return (
            <motion.div
              key={actualIndex}
              variants={fadeInUp}
              className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#8F801B]/50"
            >
              <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <div className="w-12 h-1 bg-[#8F801B] mb-4 rounded-full group-hover:w-20 transition-all duration-500 ease-out"></div>

                <div className="flex-grow">
                  {!expandedCardIndex || expandedCardIndex !== actualIndex ? (
                    <p className="text-gray-700 font-medium leading-relaxed text-base mb-6">{service.description}</p>
                  ) : null}

                  <AnimatePresence>
                    {expandedCardIndex === actualIndex && (
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="pt-4 border-t border-border/40 mt-auto">
                  <button
                    onClick={() => toggleCard(actualIndex)}
                    className="text-sm font-bold text-primary group-hover:underline flex items-center cursor-pointer bg-transparent border-none p-0 focus:outline-none"
                  >
                    {expandedCardIndex === actualIndex ? 'Show Less' : 'Read More'}
                    <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${expandedCardIndex === actualIndex ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
