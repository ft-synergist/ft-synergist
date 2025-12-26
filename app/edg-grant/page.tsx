"use client";

import { usePersonaModal } from "@/components/providers/PersonaModalProvider";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Globe, ChevronDown, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export default function EDGGrantPage() {
    const { openModal } = usePersonaModal();
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const pillars = [
        {
            title: "Operational Excellence & Foundation",
            description: "Strengthen your internal engine for scale. We upgrade your Core Capabilities—from Business Strategy Development to Strategic Brand and Market Development—to build the systems that support high-growth trajectories.",
            icon: ShieldCheck,
        },
        {
            title: "IP Creation & Tech Moats",
            description: "Turn efficiency into equity. We drive Innovation & Productivity through Process Redesign, Automation and Product Development to secure proprietary advantages.",
            icon: TrendingUp,
        },
        {
            title: "Global Expansion & M&A",
            description: "Conquer new territories. Our Bring to Market roadmaps guide you through gaining beachheads, forging overseas alliances and executing localised brand activation to establish your international footprint.",
            icon: Globe,
        },
    ];

    const successStories = [
        {
            impact: "IMPACT: $5M NEW REVENUE | $170K OPEX SAVED",
            title: "The Efficiency Win",
            quote: "We streamlined our workflow to remove redundant processes and embraced a technology leap. This efficiency drive created a $5 million new sales channel while simultaneously saving $170,000 in OPEX.",
            client: "PPE Distribution (S) Pte Ltd"
        },
        {
            impact: "IMPACT: $55 MILLION NEW SALES CHANNEL",
            title: "The Excellence Win",
            quote: "FT Synergist was decisive in helping us design business continuity plans and attain the Singapore Quality Class certification. Their guidance helped us architect a $55 million new sales channel through our T-Guard system.",
            client: "TNT Surveillance"
        },
        {
            impact: "IMPACT: $3 MILLION REVENUE SCALE & EXIT STRATEGY",
            title: "The Valuation & Exit Win",
            quote: "We developed a bold strategic plan to scale to $3 million in revenue with a clear exit strategy. The new brand concept emphasizes premiumization, helping us stand out as a leader in the tea industry.",
            client: "Petale Tea"
        },
        {
            impact: "IMPACT: GLOBAL M&A & SUSTAINABILITY ROADMAP",
            title: "The Global Expansion Win",
            quote: "We moved from an opportunistic approach to a clear global roadmap aligned with the UN Sustainable Development Goals (SDGs). We are now identifying M&A targets in Australia and leveraging strategic hubs in Vietnam and Taiwan.",
            client: "Sundat (S) Pte. Ltd."
        },
        {
            impact: "IMPACT: MULTI-MARKET EXPANSION & HALAL CERTIFICATION",
            title: "The Market Entry Win",
            quote: "This engagement transformed us into a data-driven organization. We developed a roadmap for multi-market expansion into Vietnam, Malaysia, and Australia, successfully navigating complex Halal certification requirements.",
            client: "Mei Le Pte. Ltd."
        },
        {
            impact: "IMPACT: MULTINATIONAL FRANCHISE EXPANSION",
            title: "The Scaling Win",
            quote: "FT Synergist's roadmap enabled us to scale from a single unit into a multimillion-dollar brand with franchised units across Singapore, Jakarta, Surabaya, and Ho Chi Minh.",
            client: "Adam Khoo Education"
        }
    ];

    const faqs = [
        {
            question: "What is the maximum funding support for the EDG in 2026?",
            answer: "The EDG typically supports up to 50% of qualifying project costs for local SMEs, covering consultancy, software, and equipment."
        },
        {
            question: "Can I use the EDG for overseas expansion?",
            answer: "Yes. The \"Market Readiness Assistance\" pillar specifically covers Overseas market promotion, Overseas business development and Overseas market set-up."
        },
        {
            question: "Why do I need a Certified Management Consultant (CMC)?",
            answer: "Enterprise Singapore requires strategic projects be led by certified consultants. FT Synergist is fully certified to navigate the application and claims process."
        },
        {
            question: "How long does the EDG application approval take?",
            answer: "Enterprise Singapore typically processes applications within 12 to 16 weeks. However, strategic proposals with clear value-creation roadmaps often experience smoother review processes due to clarity of intent."
        },
        {
            question: "Is the grant provided upfront?",
            answer: "No, the EDG operates on a reimbursement basis. You must claim the funds after the project deliverables are met. We guide you through the claims process to ensure your reimbursement is secured without administrative friction."
        },
        {
            question: "Why are most EDG applications rejected?",
            answer: "Rejections usually happen because the project lacks \"Strategic Novelty\"—meaning it looks like \"business as usual\" rather than a transformation. Our role is to frame your project as a capability upgrade that aligns with Singapore’s national economic goals."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
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
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/60 to-background"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 max-w-5xl mx-auto"
                >
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl mb-8">
                        Scale. Innovate. Dominate. <br className="hidden sm:inline" />
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-200">
                            Leveraging the EDG for Market Leadership.
                        </span>
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200 sm:text-xl drop-shadow-md mb-10 leading-relaxed">
                        Strategic consultancy that turns government support into defensible IP, operational excellence, and global expansion. Navigate the application with a 100% success-rate partner.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <button
                            onClick={openModal}
                            className="bg-[#8F801B] animate-breathing-gold inline-flex items-center justify-center rounded-md px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105"
                        >
                            Check Eligibility
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Strategic Pillars */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8 lg:grid-cols-3">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group relative flex flex-col rounded-2xl border border-border/40 bg-card p-10 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                            >
                                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <pillar.icon className="h-8 w-8" />
                                </div>
                                <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground">{pillar.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories - Dark Mode */}
            <section id="success-stories" className="py-24 bg-[#0F0F0F] text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Success Stories</h2>
                        <p className="mt-4 text-lg text-gray-400">Proven Impact across Every Pillar.</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {successStories.map((story, index) => (
                            <motion.div
                                key={index}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
                            >
                                <div className="mb-4 text-sm font-bold uppercase tracking-wider text-[#C5A017]">
                                    {story.impact}
                                </div>
                                <h3 className="mb-4 text-xl font-bold text-white">{story.title}</h3>
                                <blockquote className="flex-grow mb-6 text-gray-300 italic border-l-2 border-[#C5A017] pl-4 leading-relaxed">
                                    &quot;{story.quote}&quot;
                                </blockquote>
                                <div className="mt-auto pt-4 border-t border-white/10 text-sm font-medium text-gray-400">
                                    — {story.client}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-24 bg-background">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="rounded-xl border border-border/40 bg-card overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="flex w-full items-center justify-between p-6 text-left font-bold text-lg hover:bg-secondary/50 transition-colors focus:outline-none"
                                >
                                    {faq.question}
                                    {openFaqIndex === index ? (
                                        <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                                    ) : (
                                        <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openFaqIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-border/10">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-[#C5A017] py-24 text-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 text-black">
                        Stop Guessing. Start Scaling.
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl font-medium text-black/80 mb-10">
                        95% of rejected grant applications fail due to poor strategic positioning.
                    </p>
                    <button
                        onClick={openModal}
                        className="inline-flex items-center justify-center rounded-md bg-white px-10 py-4 text-lg font-bold text-black shadow-xl transition-transform hover:scale-105"
                    >
                        Check Eligibility
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </section>
        </div>
    );
}
