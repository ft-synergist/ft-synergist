"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GrantEligibilityModal from "@/components/GrantEligibilityModal";

export default function EDGGrantPage() {
    const [isGrantModalOpen, setIsGrantModalOpen] = useState(false);

    const pillars = [
        {
            title: "Core Capabilities",
            description: "Strengthen your business foundations to prepare for growth.",
            items: ["Strategic Brand & Marketing Development", "Business Strategy Development", "Human Capital Development", "Service Excellence", "Financial Management"],
            icon: ShieldCheck,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            title: "Innovation & Productivity",
            description: "Explore new areas of growth and improve efficiency.",
            items: ["Process Redesign", "Product Development", "Automation", "Pilot & Regulation Sandbox"],
            icon: TrendingUp,
            color: "text-amber-500",
            bg: "bg-amber-500/10",
        },
        {
            title: "Market Access",
            description: "Expand your footprint into overseas markets.",
            items: ["Overseas Marketing Presence (OMP)", "Market Entry (MRA)", "Mergers & Acquisitions (M&A)", "Standards Adoption"],
            icon: Globe,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <GrantEligibilityModal isOpen={isGrantModalOpen} onClose={() => setIsGrantModalOpen(false)} />

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-[#0A0F1C] text-white">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-bg.png"
                        alt="Background"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/80 via-[#0A0F1C]/90 to-background"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                    >
                        Maximize Your Growth with the <br />
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-200">
                            Enterprise Development Grant (EDG)
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
                    >
                        Scale your business with up to 50% support for qualifying project costs.
                        We help you navigate the application to secure funding for Strategy, Innovation, and Expansion.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <button
                            onClick={() => setIsGrantModalOpen(true)}
                            className="inline-flex items-center justify-center rounded-full bg-[#8F801B] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#8F801B]/90 hover:scale-105 hover:shadow-[#8F801B]/25"
                        >
                            Check Your Eligibility Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <p className="mt-4 text-sm text-gray-400">
                            Takes less than 2 minutes • No obligation check
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6">What is the EDG?</h2>
                        <p className="text-lg text-muted-foreground">
                            The Enterprise Development Grant (EDG) supports Singapore companies to **upgrade**, **innovate**, and **venture overseas**.
                            As a certified management consultancy, FT Synergist guides you through the strategic planning required to qualify and succeed.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className={`w-14 h-14 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center mb-6`}>
                                    <pillar.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                                <p className="text-muted-foreground mb-6">{pillar.description}</p>
                                <ul className="space-y-3">
                                    {pillar.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Bottom */}
            <section className="py-20 bg-secondary/5 border-t">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Don&apos;t let funding be the barrier to your growth. Speak with our consultants to structure your EDG application today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setIsGrantModalOpen(true)}
                            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-primary/90 transition-all"
                        >
                            Check Eligibility
                        </button>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-base font-medium hover:bg-accent hover:text-accent-foreground transition-all"
                        >
                            Contact Consultant
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
