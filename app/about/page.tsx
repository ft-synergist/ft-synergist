"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Zap, Heart } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl max-w-3xl mx-auto font-light"
                    >
                        Entrepreneurs who consult. Action-oriented practitioners. Legacy builders.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/hero-bg.png" // Using hero-bg as placeholder for team/founder image
                                alt="Frederick Tan and Team"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <h3 className="text-2xl font-bold">Frederick Tan</h3>
                                    <p className="text-white/80">Founder & Managing Consultant</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-primary">Our Story</h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    FT Synergist Pte Ltd was founded by Frederick Tan, a serial entrepreneur and TUV SUD certified management consultant approved by Enterprise Singapore to help Singapore SMEs gain access to government grants to scale up their businesses.
                                </p>
                                <p>
                                    Frederick leads our regional team of 20 management associates across Singapore, Vietnam and Indonesia. The team has 20+ years of experiences starting and scaling up businesses in Singapore, China, Indonesia, Vietnam and Cambodia.
                                </p>
                                <p>
                                    These include starting and scaling up Adam Khoo Learning Centre from a single unit in Singapore to a multi-million dollar brand with franchised centres in Jakarta, Surabaya, and Ho Chi Minh City, before a successful exit in 2018.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Core Principles */}
                    <div className="mb-20">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Core Principles</h2>
                            <p className="text-xl text-muted-foreground">The Engine of Our Impact</p>
                            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                                FT Synergist’s principles reflect a rigorous methodology, disciplined action, and the tested insights derived from direct entrepreneurial experience.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            {[
                                {
                                    title: "Beyond Borders",
                                    subtitle: "We are entrepreneurs who consult.",
                                    description: "Our team’s deep, lived experience in founding and scaling businesses means we understand the critical mistakes and complex challenges of global expansion. We leverage this expertise and our extensive network to de-risk market entry and build truly exceptional global brands.",
                                    icon: Globe,
                                },
                                {
                                    title: "Beyond Classroom",
                                    subtitle: "Action-Oriented Practitioners. Not Theorists.",
                                    description: "We reject generic theory. Our counsel is derived by instantly distilling real-world market data and proprietary acceleration insights into innovative, synergistic strategies that enable immediate, measurable, and sustainable growth.",
                                    icon: Zap,
                                },
                                {
                                    title: "Beyond Kindness",
                                    subtitle: "Legacy by Design.",
                                    description: "We engineer systems where commercial success is directly linked to community return. We create opportunities for businesses to give back generously, fostering sustainable economic opportunities and leaving a verifiable legacy for future generations.",
                                    icon: Heart,
                                },
                            ].map((principle, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="bg-card border border-border/50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                                        <principle.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{principle.title}</h3>
                                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">{principle.subtitle}</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {principle.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
