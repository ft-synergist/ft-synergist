"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, TrendingUp, Users, Globe, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GrantEligibilityModal from "@/components/GrantEligibilityModal";
import { LogoCarousel } from "@/components/LogoCarousel";
import { NewsletterBanner } from "@/components/NewsletterBanner";
import { NewsletterModal } from "@/components/NewsletterModal";
import { usePersonaModal } from "@/components/providers/PersonaModalProvider";
import { CountUp } from "@/components/CountUp";
import ClientImpact from "@/components/ClientImpact"; // <--- NEW IMPORT

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
  const { openModal } = usePersonaModal();
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
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
            src="/hero-bg.jpg"
            alt="Singapore Skyline"
            fill
            className="object-cover opacity-60"
            priority
            quality={50} // <--- OPTIMIZATION: Lowered to 50 for max mobile speed
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
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
            Empowering Singapore and International Enterprises to dominate Asian markets through proprietary innovation strategies, AI integration, sustainability, and defensible IP creation.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={openModal}
              className="btn-start-journey inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white shadow-lg transition-all"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </section>

      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />

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
            <p className="mt-4 text-lg text-muted-foreground mb-6">
              Market-defining research and case studies to guide your expansion. Stay ahead of the curve with priority alerts.
            </p>
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsNewsletterOpen(true)}
              className="btn-subscribe-ghost"
            >
              Subscribe to Insights
            </motion.button>
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
              <div className="card-image-container relative">
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
              <div className="card-image-container relative">
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
                <h3 className="text-2xl font-bold tracking
