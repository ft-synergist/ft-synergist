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
            className="flex flex-col h-full bg-card border border-white/5 p-6 rounded-lg hover:border-primary/30 transition-colors group"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground">SDG {sdgNumber}</span>
                </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>

            <div className="mb-6 p-3 bg-white/5 rounded text-sm text-muted-foreground border-l-2 border-primary/50">
                <span className="text-primary font-semibold">Target {sdgNumber.split('.')[0]}: </span>
                {target}
            </div>

            <div className="space-y-4 mt-auto">
                {evidence.map((item, i) => (
                    <div key={i} className="flex flex-col gap-1">
                        <span className="text-xs font-bold text-primary tracking-wider uppercase">{item.label}</span>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
