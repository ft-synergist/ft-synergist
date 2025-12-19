"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NewsletterModal } from "./NewsletterModal";

export function NewsletterBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Show banner after a short delay, but respect user choice if they dismissed it previously
        const isDismissed = sessionStorage.getItem("newsletter_banner_dismissed");
        if (!isDismissed) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const dismiss = () => {
        setIsVisible(false);
        sessionStorage.setItem("newsletter_banner_dismissed", "true");
    };

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-gray-900 text-white relative z-[60] overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm sm:text-base text-center sm:text-left">
                            <p className="font-medium">
                                <span className="text-[#8F801B] font-bold mr-2">New:</span>
                                Stay ahead of the curve. Get priority alerts to latest reports & insights.
                            </p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center text-xs sm:text-sm font-bold bg-white text-gray-900 px-4 py-1.5 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
                            >
                                Subscribe Now
                                <ArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                            <button
                                onClick={dismiss}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors sm:relative sm:top-auto sm:right-auto sm:translate-y-0"
                                aria-label="Dismiss"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <NewsletterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
