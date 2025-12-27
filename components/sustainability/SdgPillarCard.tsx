"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SdgPillarCardProps {
    icon: LucideIcon;
    sdgNumber: string;
    title: string;
    target: string;
    evidence: {
        label: string;
        text: string;
    }[];
    index: number;
}

export function SdgPillarCard({ icon: Icon, sdgNumber, title, target, evidence, index }: SdgPillarCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 p-8 border border-white/10 hover:border-primary/50 transition-all duration-300"
        >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-primary/30 transition-colors">
                            <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xs font-mono font-bold text-white/50 tracking-widest">SDG {sdgNumber}</span>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{title}</h3>

                <div className="mb-8 p-4 bg-black/40 rounded-lg text-sm text-gray-400 border-l-2 border-primary/50 backdrop-blur-sm">
                    <span className="text-primary font-semibold">Target {sdgNumber.split('.')[0]}: </span>
                    {target}
                </div>

                <div className="space-y-6 mt-auto">
                    {evidence.map((item, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            <span className="text-xs font-bold text-primary tracking-wider uppercase">{item.label}</span>
                            <p className="text-sm text-gray-300 leading-relaxed border-l border-white/10 pl-3">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
