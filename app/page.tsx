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

      {/* Featured Insight Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12 rounded-2xl bg-card p-8 shadow-sm border border-border/50"
          >
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Featured Insight
              </div>
              <h2 className="text-3xl font-bold tracking-tight">State of AI in Southeast Asia 2025</h2>
              <p className="text-muted-foreground text-lg">
                A comprehensive analysis of AI adoption trends across Singapore, Indonesia, and Vietnam. Discover how leading firms are leveraging generative AI to redefine productivity.
              </p>
              <Link href="/insights" className="inline-flex items-center text-primary font-semibold hover:underline group">
                Read the Report <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="md:w-1/2 relative h-64 w-full rounded-xl overflow-hidden group shadow-lg">
              <Image
                src="/state-of-ai-2025.png"
                alt="State of AI in Southeast Asia 2025 Report Cover"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
            </div>
          </motion.div>
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

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          >
            {[
              {
                title: "Business Strategy Development",
                description: "Crafting actionable roadmaps to navigate market complexities and achieve sustainable long-term growth.",
                icon: Target,
                action: (
                  <button
                    onClick={() => setIsGrantModalOpen(true)}
                    className="mt-4 text-sm font-semibold text-[#8F801B] hover:underline flex items-center"
                  >
                    Check Grant Eligibility <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                )
              },
              {
                title: "Strategic Brand & Marketing",
                description: "Building resilient brands and data-driven marketing strategies to capture and retain market share.",
                icon: Lightbulb,
              },
              {
                title: "Innovation & Productivity",
                description: "Implementing technology and process improvements to enhance operational efficiency and drive innovation.",
                icon: Cpu,
              },
              {
                title: "Market Readiness Assistance",
                description: "Guiding your expansion into new markets like Indonesia and Vietnam with local expertise and networks.",
                icon: Globe,
              },
              {
                title: "Franchise & Licensing",
                description: "Scale exponentially via robust franchising and licensing models, turning your local success into a globally replicable asset.",
                icon: Briefcase,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 flex flex-col"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground flex-grow">{service.description}</p>
                {service.action}
              </motion.div>
            ))}
          </motion.div>
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

