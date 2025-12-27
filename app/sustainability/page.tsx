"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DoubleMaterialityMatrix } from "@/components/sustainability/DoubleMaterialityMatrix";
import { SdgPillarCard } from "@/components/sustainability/SdgPillarCard";
import { Briefcase, Factory, Leaf, Globe } from "lucide-react";
import { usePersonaModal } from "@/components/providers/PersonaModalProvider";

export default function SustainabilityPage() {
    const { openModal } = usePersonaModal();

    const sdgPillars = [
        {
            icon: Briefcase,
            sdgNumber: "8",
            title: "Decent Work & Economic Growth",
            target: "8.2: Economic Productivity through Diversification",
            evidence: [
                {
                    label: "$55M Impact",
                    text: "We architected a $55 Million new sales channel for TNT Surveillance by designing business continuity plans and quality systems (SQC)."
                },
                {
                    label: "Exit Strategy",
                    text: "We guided Petale Tea to a $3 Million revenue scale-up and a clear exit strategy through premium brand positioning."
                }
            ]
        },
        {
            icon: Factory,
            sdgNumber: "9",
            title: "Industry, Innovation & Infrastructure",
            target: "9.5: Enhance Technological Capabilities",
            evidence: [
                {
                    label: "$5M Efficiency",
                    text: "For PPE Distribution, we led a technology leap that removed redundant processes, creating a $5M new sales channel while simultaneously slashing operational waste."
                },
                {
                    label: "AI & Upskilling",
                    text: "We integrated an AI-powered Dashboard & LMS for Bestway Cleaning, enabling dynamic resource deployment that minimized idling while upskilling the cleaning workforce."
                },
                {
                    label: "Digital Transformation",
                    text: "We transformed Mei Le Pte Ltd into a data-driven organization, utilizing digital roadmaps to navigate complex market certifications."
                }
            ]
        },
        {
            icon: Leaf,
            sdgNumber: "12",
            title: "Responsible Consumption & Production",
            target: "12.5: Reduce Waste Generation & Promote Sustainable Lifestyles",
            evidence: [
                {
                    label: "Public Health Alignment",
                    text: "We aligned Pawa Bakery with the government's Healthier Dining Programme, promoting the motto 'Eat light, live right' to scale their low-sugar, low-oil product line."
                },
                {
                    label: "ESG Product Line",
                    text: "We influenced Jie Bakery to launch ESG-centric products, aligning a legacy brand with societal trends to capture a high-disposable-income customer base."
                },
                {
                    label: "OPEX Savings",
                    text: "Through workflow streamlining, we helped PPE Distribution achieve $170,000 in OPEX savings—proving that sustainable efficiency pays for itself."
                }
            ]
        },
        {
            icon: Globe,
            sdgNumber: "17",
            title: "Partnerships for the Goals",
            target: "17.16: Global Partnership for Sustainable Development",
            evidence: [
                {
                    label: "Multinational Scale",
                    text: "We enabled Adam Khoo Learning Centre to scale from a single unit to a multinational franchise with footprints across Singapore, Jakarta, Surabaya, and Ho Chi Minh."
                },
                {
                    label: "Cross-Border Trade",
                    text: "We developed multi-market entry strategies for Sundat (Australia, Vietnam, Taiwan), transforming an opportunistic trading model into a structured global roadmap aligned with SDG standards."
                }
            ]
        }
    ];

    return (
        <div className="flex min-h-screen flex-col bg-black text-white selection:bg-primary/30">

            {/* 1. Hero Section (Matched to Homepage) */}
            <section className="relative flex flex-col items-center justify-center px-4 py-32 text-center md:py-48 lg:py-56 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/hero-bg.png"
                        alt="Singapore Skyline"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>

                {/* Dynamic Background Element - Subtle Pulse */}
                <motion.div
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-transparent mix-blend-overlay pointer-events-none"
                />

                <div className="container relative z-20 mx-auto max-w-5xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-xl"
                    >
                        Our <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-200">Sustainability</span> Impact
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-200 font-medium mb-8 max-w-3xl mx-auto drop-shadow-md"
                    >
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-200">Synergies Driving Sustainable Growth</span>: Aligning Profit with Purpose.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        We do not view sustainability as a cost centre. By integrating the United Nations Sustainable Development Goals (SDGs) into core business strategies, we help clients drive revenue, efficiency, and resilience.
                    </motion.p>
                </div>
            </section>

            {/* 2. Methodology Section: Double Materiality */}
            <section className="py-24 px-4 border-t border-white/5 bg-black">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Methodology: The <span className="text-primary">"Double Materiality"</span> Approach</h2>
                        <p className="text-gray-400">Identifying where your profit goals meet global needs.</p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Matrix Visual */}
                        <div className="order-2 lg:order-1">
                            <DoubleMaterialityMatrix />
                            <p className="text-center text-xs text-gray-500 mt-6 italic">
                                "We help you focus here (Top-Right): The Strategic Sweet Spot."
                            </p>
                        </div>

                        {/* Methodology Copy */}
                        <div className="order-1 lg:order-2 space-y-10">
                            <p className="text-lg text-gray-200 leading-relaxed font-light">
                                True sustainability is a two-way street. We look beyond simple compliance to secure your business against two distinct vectors of risk and opportunity.
                            </p>

                            <div className="space-y-8">
                                <div className="p-8 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
                                    <h3 className="text-2xl font-bold text-white mb-2">1. Financial Materiality (Outside-In)</h3>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Protecting Value</p>
                                    <p className="text-gray-400 mb-3"><strong className="text-white">The Risk:</strong> How do climate change, resource scarcity, and tightening regulations impact your bottom line?</p>
                                    <p className="text-gray-400 mb-4"><strong className="text-white">Our Solution:</strong> We future-proof your operations against supply chain disruptions and rising carbon taxes.</p>
                                    <p className="text-sm text-primary/80 italic border-l-2 border-primary/30 pl-3">Example: For Sundat, we diversified supply chains to mitigate regional climate risks, ensuring business continuity.</p>
                                </div>

                                <div className="p-8 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-primary/20 transition-colors">
                                    <h3 className="text-2xl font-bold text-primary mb-2">2. Impact Materiality (Inside-Out)</h3>
                                    <p className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-4">Creating Value</p>
                                    <p className="text-gray-400 mb-3"><strong className="text-white">The Opportunity:</strong> How does your business impact society and the environment?</p>
                                    <p className="text-gray-400 mb-4"><strong className="text-white">Our Solution:</strong> We turn your operational footprint into a competitive asset that attracts customers and talent.</p>
                                    <p className="text-sm text-primary/80 italic border-l-2 border-primary/30 pl-3">Example: For Pawa Bakery, we aligned product formulation with public health goals, capturing a premium market segment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The 4 Impact Pillars */}
            <section className="py-24 px-4 bg-black">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Synergies in Action</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {sdgPillars.map((pillar, index) => (
                            <SdgPillarCard
                                key={index}
                                index={index}
                                {...pillar}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Bottom CTA */}
            <section className="py-24 px-4 border-t border-white/10 bg-gradient-to-b from-black to-zinc-950">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Turn Compliance into <span className="text-primary">Sustainable Advantage.</span></h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Stop guessing. We use the Double Materiality Matrix to pinpoint exactly which sustainability investments will yield the highest ROI for your specific industry.
                    </p>
                    <button
                        onClick={openModal}
                        className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-10 text-lg font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105"
                    >
                        Start Your Journey
                    </button>
                </div>
            </section>
        </div>
    );
}
