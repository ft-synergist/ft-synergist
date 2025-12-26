"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, TrendingUp, Users, Globe, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GrantEligibilityModal from "@/components/GrantEligibilityModal";
import PersonaQuizModal from "@/components/PersonaQuizModal";
import { LogoCarousel } from "@/components/LogoCarousel";
import { NewsletterBanner } from "@/components/NewsletterBanner";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isGrantModalOpen, setIsGrantModalOpen] = useState(false);
  const [isPersonaModalOpen, setIsPersonaModalOpen] = useState(false);
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  const services = [
    {
      title: "Business Strategy Development",
      description: "Crafting actionable roadmaps backed by defensible IP Strategy to secure your legal right to dominate markets.",
      expandedIntro: "We move beyond standard planning to provide IP strategy consulting and build competitive moats.",
      image: "/service-strategy.png",
      details: [
        { title: "Diagnosis & Market Intelligence (SWOT)", content: "We assess internal strengths and external competition using SWOT Analysis to identify growth bottlenecks." },
        { title: "Strategic Roadmap", content: "Delivering a clear go-to-market implementation plan for business frameworks, Sustainability Governance, and policy development." },
        { title: "R&D & IP Optimization", content: "Structuring your intellectual property assets and R&D operations for maximum valuation and efficiency." }
      ],
    },
    {
      title: "Strategic Brand & Marketing",
      description: "Building resilient, legally protected brand strategies that command market share and turn marketing spend into tradeable equity.",
      expandedIntro: "A brand is only an asset if it is distinct and differentiable. We differentiate your offering through:",
      image: "/service-brand.png",
      details: [
        { title: "Market Research", content: "Conducting primary and secondary research to validate customer segments." },
        { title: "Brand & Trademark Strategy", content: "Structuring your brand architecture to ensure distinctiveness and legal protectability (Trademark Strategy)." },
        { title: "Strategic Implementation", content: "Developing a plan to optimize marketing resources and extend your reach beyond the domestic market." }
      ]
    },
    {
      title: "Innovation & Productivity",
      description: "Providing AI-powered Innovation Consultancy to drive efficiency and harvest value by turning operational improvements into proprietary Trade Secrets & Patents.",
      expandedIntro: "We turn operational improvements into proprietary assets through AI-powered Process Redesign, ensuring you capture the value of your technology.",
      image: "/service-innovation.png",
      details: [
        { title: "Process Redesign", content: "Reviewing and streamlining your R&D and operational workflows to remove redundancies." },
        { title: "Performance Measurement", content: "Developing tracking systems and roadmaps to ensure resource optimization." },
        { title: "Innovation Harvesting", content: "Helping you adopt best practices to systematize your innovation cycle and capture Trade Secrets." }
      ]
    },
    {
      title: "Market Readiness Assistance",
      description: "De-risking global expansion with local expertise and IP Intelligence and Search to ensure safe and commercially viable market entry.",
      expandedIntro: "We help you navigate new markets like Indonesia and Vietnam. Our services cover the three core pillars of the MRA Grant:",
      image: "/service-market.png",
      details: [
        { title: "Market Entry (Advisory)", content: "In-depth advisory on market feasibility, Freedom-to-Operate (FTO), and import/export licensing." },
        { title: "Overseas Business Development", content: "Matching you with licensees, franchisors, and B2B partners in-market." },
        { title: "Overseas Promotion", content: "Strategies to launch your presence and capture initial market share." }
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
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <GrantEligibilityModal isOpen={isGrantModalOpen} onClose={() => setIsGrantModalOpen(false)} />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-32 text-center md:py-48 lg:py-56 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero-bg.png"
            alt="Singapore Skyline"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>

        {/* Dynamic Background Element - Subtle Pulse */}
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-transparent mix-blend-overlay"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
            Synergies Driving <br className="hidden sm:inline" />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-200">Sustainable Growth</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200 sm:text-xl drop-shadow-md">
            Empowering Singapore SMEs to scale globally with strategic innovation, AI integration, and government-supported growth frameworks.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={() => setIsPersonaModalOpen(true)}
              className="btn-start-journey inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white shadow-lg transition-all"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </section>

      <PersonaQuizModal isOpen={isPersonaModalOpen} onClose={() => setIsPersonaModalOpen(false)} />

      {/* Strategic Intelligence Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Strategic Intelligence
            </motion.h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Market-defining research and case studies to guide your expansion.
            </p>
          </div>

          <div className="mb-12">
            <NewsletterBanner />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Report 1: State of AI */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col rounded-2xl bg-card overflow-hidden shadow-sm border border-border/50 group hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/report-ai-cover.png"
                  alt="State of AI in Southeast Asia 2026 Report Cover"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-xs font-bold text-white mb-2">
                    New Release
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold tracking-tight mb-3">State of AI in Southeast Asia 2026</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  A comprehensive analysis of AI adoption trends across Singapore, Indonesia, and Vietnam. Discover how leading firms are leveraging generative AI to redefine productivity from pilot to utility.
                </p>
                <Link href="/insights" className="inline-flex items-center text-primary font-bold hover:underline group-hover:text-primary/80 transition-colors">
                  Read the Report <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Report 2: Wang Lao Ji */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col rounded-2xl bg-card overflow-hidden shadow-sm border border-border/50 group hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/report-wlj-cover.png"
                  alt="Global Expansion Roadmap: Wang Lao Ji to Global Brand"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-bold text-white mb-2 border border-white/30">
                    Case Study
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold tracking-tight mb-3">Global Expansion Roadmap: Wang Lao Ji</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  5 Scaling Lessons from Wang Lao Ji for SMEs. Learn how a 197-year legacy brand transformed into a global lifestyle icon, offering a blueprint for brand resilience and market adaptation.
                </p>
                <Link href="/insights" className="inline-flex items-center text-primary font-bold hover:underline group-hover:text-primary/80 transition-colors">
                  Read the Case Study <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Enterprise Singapore Aligned */}
      <section className="py-20 bg-background" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Our Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              Aligned with Enterprise Singapore&apos;s growth frameworks to support your expansion.
            </motion.p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Unified Grid Layout for Accordion Logic */}
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
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                    <div className="w-12 h-1 bg-[#8F801B] mb-4 rounded-full group-hover:w-20 transition-all duration-500 ease-out"></div>

                    {/* Collapsible Content */}
                    <div className="flex-grow">
                      {!expandedCardIndex || expandedCardIndex !== index ? (
                        <p className="text-muted-foreground leading-relaxed text-base mb-6">{service.description}</p>
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
                            <p className="text-muted-foreground leading-relaxed text-base mb-6">{service.expandedIntro}</p>
                            <ul className="space-y-4 mb-6">
                              {service.details.map((detail, idx) => (
                                <li key={idx} className="flex flex-col gap-1">
                                  <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-[#8F801B] flex-shrink-0" />
                                    <span className="font-bold text-foreground text-sm">{detail.title}</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground pl-6">{detail.content}</p>
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

            {/* Bottom Row: 2 Expansion Pillars (Centered) */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:w-4/5 lg:mx-auto"
            >
              {services.slice(3, 5).map((service, index) => {
                const actualIndex = index + 3; // Offset index for bottom row
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
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                      <div className="w-12 h-1 bg-[#8F801B] mb-4 rounded-full group-hover:w-20 transition-all duration-500 ease-out"></div>

                      {/* Collapsible Content */}
                      <div className="flex-grow">
                        {!expandedCardIndex || expandedCardIndex !== actualIndex ? (
                          <p className="text-muted-foreground leading-relaxed text-base mb-6">{service.description}</p>
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
                              <p className="text-muted-foreground leading-relaxed text-base mb-6">{service.expandedIntro}</p>
                              <ul className="space-y-4 mb-6">
                                {service.details.map((detail, idx) => (
                                  <li key={idx} className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                      <CheckCircle2 className="w-4 h-4 text-[#8F801B] flex-shrink-0" />
                                      <span className="font-bold text-foreground text-sm">{detail.title}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground pl-6">{detail.content}</p>
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
        </div>
      </section>

      {/* Impact Stats Section - BHAG */}
      <section className="relative flex flex-col items-center justify-center py-20 text-center overflow-hidden">
        {/* Background Image with Overlay - Matching Hero */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero-bg.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/80"></div>

        {/* Dynamic Background Element - Subtle Pulse */}
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 to-transparent mix-blend-overlay"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8 drop-shadow-xl"
            >
              Our 2026 BHAG
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl font-bold max-w-6xl mx-auto drop-shadow-2xl leading-tight"
            >
              &quot;To inspire 100 entrepreneurs to improve the quality of lives of 100M people in Asia by&nbsp;2026.&quot;
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 text-center">
            {[
              { label: "Entrepreneurs Supported", value: "218", icon: Users, highlight: true },
              { label: "Quality of Lives Improved", value: "138 M", icon: Globe, highlight: true },
              { label: "Consulting Hours", value: "107,910", icon: TrendingUp, highlight: false },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                className="p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/50 transition-colors"
              >
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full mb-4 ${stat.highlight ? 'bg-yellow-400/20 text-yellow-400' : 'bg-white/20 text-white'}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.highlight ? 'text-yellow-400 drop-shadow-lg' : 'text-white'}`}>{stat.value}</div>
                <div className={`font-bold uppercase tracking-wider text-sm ${stat.highlight ? 'text-yellow-400' : 'text-gray-300'}`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-background border-t border-border/40 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-12">
            Partnership Driving 138M Impact
          </p>

          <div className="relative w-full overflow-hidden">
            <div className="flex items-center justify-center">
              <LogoCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="mb-10 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Leverage our expertise and Enterprise Singapore support to take your business to the next level.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-primary shadow-lg hover:bg-gray-100 hover:scale-105 transition-all"
          >
            Book Discovery Session
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
