"use client";

import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GrantEligibilityModal from "./GrantEligibilityModal";

export function GlobalGrantButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Delay appearance for better UX
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-6 left-6 z-40 hidden sm:block"
                    >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group flex items-center gap-3 rounded-full bg-[#8F801B] p-2 pr-6 text-white shadow-xl transition-all hover:bg-[#7a6d17] hover:scale-105 hover:shadow-2xl hover:shadow-[#8F801B]/25"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] font-medium uppercase tracking-wider opacity-80 leading-none mb-0.5">Eligibility Check</p>
                                <p className="text-sm font-bold leading-none">Unlock 50% Funding</p>
                            </div>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <GrantEligibilityModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
