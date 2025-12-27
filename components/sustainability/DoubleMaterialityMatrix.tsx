"use client";

import { motion } from "framer-motion";

export function DoubleMaterialityMatrix() {
    return (
        <div className="relative w-full max-w-2xl mx-auto aspect-square bg-gray-950 border border-white/10 rounded-lg p-8 shadow-2xl overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                    <div className="border-r border-b border-white" />
                    <div className="border-b border-white" />
                    <div className="border-r border-white" />
                    <div className="border-white" />
                </div>
            </div>

            {/* Axes Labels */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-90 text-xs text-muted-foreground font-mono tracking-widest uppercase whitespace-nowrap">
                Financial Materiality (Value Protection)
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-mono tracking-widest uppercase whitespace-nowrap">
                Impact Materiality (Value Creation)
            </div>

            {/* Matrix Content */}
            <div className="relative h-full w-full border-l border-b border-white/20">

                {/* Quadrants */}
                <div className="grid grid-cols-2 grid-rows-2 h-full w-full">

                    {/* Top Left - Low Impact / High Financial */}
                    <div className="p-4 flex items-center justify-center border-r border-b border-white/5 border-dashed">
                        <span className="text-xs text-muted-foreground/50">Financial Focus</span>
                    </div>

                    {/* Top Right - Strategic Focus (Highlighted) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative p-4 flex flex-col items-center justify-center border-b border-white/5 border-dashed bg-gradient-to-br from-primary/5 to-primary/20 backdrop-blur-sm"
                    >
                        <div className="absolute inset-0 border-2 border-primary/30 rounded-sm" />
                        <span className="text-sm font-bold text-primary mb-1">STRATEGIC FOCUS</span>
                        <span className="text-xs text-center text-primary/80">Profit meets Purpose</span>

                        {/* Animated Pulse */}
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                    </motion.div>

                    {/* Bottom Left - Low/Low */}
                    <div className="p-4 flex items-center justify-center border-r border-white/5 border-dashed">
                        <span className="text-xs text-muted-foreground/50">Compliance</span>
                    </div>

                    {/* Bottom Right - High Impact / Low Financial */}
                    <div className="p-4 flex items-center justify-center border-white/5 border-dashed">
                        <span className="text-xs text-muted-foreground/50">CSR / Philanthropy</span>
                    </div>
                </div>

                {/* Y-Axis Arrow */}
                <div className="absolute -top-4 -left-[1px] h-4 w-[1px] bg-white/20">
                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/20 rotate-45" />
                </div>

                {/* X-Axis Arrow */}
                <div className="absolute -bottom-[1px] -right-4 h-[1px] w-4 bg-white/20">
                    <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white/20 rotate-45" />
                </div>

            </div>
        </div>
    );
}
