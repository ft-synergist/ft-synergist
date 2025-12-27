"use client";

import { motion } from "framer-motion";
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
        <div className="flex min-h-screen flex-col bg-background text-foreground">

            {/* 1. Hero Section */}
            <section className="relative px-4 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0 opacity-20" />

                <div className="container relative z-20 mx-auto max-w-5xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                    >
                        Our <span className="text-primary">Sustainability</span> Impact
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-white/90 font-medium mb-8 max-w-3xl mx-auto"
                    >
                        Synergies Driving Sustainable Growth: Aligning Profit with Purpose.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        We do not view sustainability as a cost centre. By integrating the United Nations Sustainable Development Goals (SDGs) into core business strategies, we help clients drive revenue, efficiency, and resilience.
                    </motion.p>
                </div>
            </section>

            {/* 2. Methodology Section: Double Materiality */}
            <section className="py-20 px-4 border-t border-white/5 bg-black/50">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Methodology: The <span className="text-primary">"Double Materiality"</span> Approach</h2>
                        <p className="text-muted-foreground">Identifying where your profit goals meet global needs.</p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Matrix Visual */}
                        <div className="order-2 lg:order-1">
                            <DoubleMaterialityMatrix />
                            <p className="text-center text-xs text-muted-foreground mt-4 italic">
                                "We help you focus here (Top-Right): The Strategic Sweet Spot."
                            </p>
                        </div>

                        {/* Methodology Copy */}
                        <div className="order-1 lg:order-2 space-y-8">
                            <p className="text-lg text-white/90 leading-relaxed">
                                True sustainability is a two-way street. We look beyond simple compliance to secure your business against two distinct vectors of risk and opportunity.
                            </p>

                            <div className="space-y-6">
                                <div className="p-6 rounded-lg bg-white/5 border-l-2 border-muted-foreground/30">
                                    <h3 className="text-xl font-bold text-white mb-2">1. Financial Materiality (Outside-In)</h3>
                                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-3">Protecting Value</p>
                                    <p className="text-muted-foreground mb-2"><strong className="text-white">The Risk:</strong> How do climate change, resource scarcity, and tightening regulations impact your bottom line?</p>
                                    <p className="text-muted-foreground mb-3"><strong className="text-white">Our Solution:</strong> We future-proof your operations against supply chain disruptions and rising carbon taxes.</p>
                                    <p className="text-sm text-primary/80 italic">Example: For Sundat, we diversified supply chains to mitigate regional climate risks, ensuring business continuity.</p>
                                </div>

                                <div className="p-6 rounded-lg bg-white/5 border-l-2 border-primary">
                                    <h3 className="text-xl font-bold text-primary mb-2">2. Impact Materiality (Inside-Out)</h3>
                                    <p className="text-sm font-bold text-primary/70 uppercase tracking-widest mb-3">Creating Value</p>
                                    <p className="text-muted-foreground mb-2"><strong className="text-white">The Opportunity:</strong> How does your business impact society and the environment?</p>
                                    <p className="text-muted-foreground mb-3"><strong className="text-white">Our Solution:</strong> We turn your operational footprint into a competitive asset that attracts customers and talent.</p>
                                    <p className="text-sm text-primary/80 italic">Example: For Pawa Bakery, we aligned product formulation with public health goals, capturing a premium market segment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The 4 Impact Pillars */}
            <section className="py-24 px-4">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Synergies in Action</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
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
            <section className="py-24 px-4 border-t border-white/10 bg-gradient-to-b from-background to-black">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Turn Compliance into <span className="text-primary">Sustainable Advantage.</span></h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Stop guessing. We use the Double Materiality Matrix to pinpoint exactly which sustainability investments will yield the highest ROI for your specific industry.
                    </p>
                    <button
                        onClick={openModal}
                        className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        Start Your Journey
                    </button>
                </div>
            </section>
        </div>
    );
}
