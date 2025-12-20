"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cpu, Globe, ChevronRight, Lightbulb, TrendingUp, Users, Target, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import GrantEligibilityModal from "@/components/GrantEligibilityModal";
import { LogoCarousel } from "@/components/LogoCarousel";

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
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-primary/25"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-white/20"
            >
              View Insights
            </Link>
          </div>
        </motion.div>
      </section>

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

          <div className="grid gap-8 md:grid-cols-2">
            {/* Report 1: State of AI */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col rounded-2xl bg-card overflow-hidden shadow-sm border border-border/50 group hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/state-of-ai-2026.png"
                  alt="State of AI in Southeast Asia 2026 Report Cover - Strategic Analysis for Scaling Enterprises"
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
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/wang-lao-ji-scaling.png"
                  alt="Global Expansion Roadmap: 5 Scaling Lessons from Wang Lao Ji for SMEs Case Study Cover"
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

          {/* Strategic Grid Layout: 3 Top, 2 Bottom */}
          <div className="flex flex-col gap-8">
            {/* Top Row: 3 Core Pillars */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  title: "Business Strategy Development",
                  description: "Crafting actionable roadmaps backed by defensible IP Strategy. We move beyond standard planning to build IP Strategy Consulting directly into your business model. We help you audit your intangible assets, structure your portfolio for valuation, and design \"competitive moats\" that protect your long-term growth. Our roadmaps don't just navigate market complexities; they secure your legal right to dominate them.",
                  icon: Target,
                  action: (
                    <button
                      onClick={() => setIsGrantModalOpen(true)}
                      className="mt-6 text-sm font-bold text-[#8F801B] hover:text-[#8F801B]/80 hover:underline flex items-center transition-colors"
                    >
                      Check Grant Eligibility <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  )
                },
                {
                  title: "Strategic Brand & Marketing",
                  description: "Building resilient, legally protected brands that command market share. A brand is only an asset if you own it. Our Branding Strategy merges creative positioning with rigorous Trademark Strategy and protection protocols. We ensure your brand architecture is distinct, registrable, and safe from dilution, turning your marketing spend into permanent, tradeable brand equity.",
                  icon: Lightbulb,
                },
                {
                  title: "Innovation & Productivity",
                  description: "Driving efficiency and harvesting value through Innovation Consultancy. We don't just implement technology; we capture the value it creates. Through specialized Innovation Consultancy, we guide your R&D teams to identify, document, and protect novel processes and inventions. We turn operational improvements into proprietary assets (Trade Secrets & Patents) that increase your company’s valuation.",
                  icon: Cpu,
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-10 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-[#8F801B]/50 hover:-translate-y-2"
                >
                  <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-3xl font-bold tracking-tight text-foreground">{service.title}</h3>
                  <div className="w-12 h-1.5 bg-[#8F801B] mb-6 rounded-full group-hover:w-24 transition-all duration-500 ease-out"></div>
                  <p className="text-muted-foreground leading-relaxed flex-grow text-lg">{service.description}</p>

                  <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-between">
                    <span className="text-base font-bold text-primary group-hover:underline flex items-center">
                      Explore Service <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    {service.action}
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
              {[
                {
                  title: "Market Readiness Assistance",
                  description: "De-risking global expansion with local expertise and IP Intelligence. Successful market entry requires knowing the landscape before you land. We provide IP Intelligence and Search services—including Freedom-to-Operate (FTO) analysis and competitor patent landscaping—to ensure your move into markets like Indonesia and Vietnam is legally safe and commercially viable.",
                  icon: Globe,
                },
                {
                  title: "Franchise & Licensing",
                  description: "Scaling exponentially through IP Brokerage and Licensing. We transform your business into a globally replicable asset class. Specializing in IP Brokerage and Licensing, we structure robust franchise agreements and royalty models that monetize your intellectual property. We handle the commercial transaction of your assets, ensuring maximum deal value and cross-border enforceability.",
                  icon: Briefcase,
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-10 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-[#8F801B]/50 hover:-translate-y-2"
                >
                  <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 text-3xl font-bold tracking-tight text-foreground">{service.title}</h3>
                  <div className="w-12 h-1.5 bg-[#8F801B] mb-6 rounded-full group-hover:w-24 transition-all duration-500 ease-out"></div>
                  <p className="text-muted-foreground leading-relaxed flex-grow text-lg">{service.description}</p>

                  <div className="mt-8 pt-6 border-t border-border/40">
                    <span className="text-base font-bold text-primary group-hover:underline flex items-center">
                      Explore Service <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </motion.div>
              ))}
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

