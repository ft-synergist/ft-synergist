"use client";

import React from 'react';
import Link from 'next/link';
import { useConsent } from '@/components/providers/ConsentProvider';
import { motion, AnimatePresence } from 'framer-motion';

export function ConsentBanner() {
    const { showBanner, saveConsent, togglePreferences } = useConsent();

    if (!showBanner) return null;

    const handleAcceptAll = () => {
        saveConsent({
            necessary: true,
            analytics: true,
            marketing: true,
        });
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl p-4 md:p-6"
            >
                <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Your Data Privacy Preferences</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            FT Synergist uses cookies for necessary site functionality, performance measurement, and personalized marketing.
                            Under the PDPA, we require your explicit consent to use digital identifiers for purposes beyond strictly necessary site operations.
                            You have the right to accept, decline, or manage your preferences.
                            <Link href="/privacy-policy" className="text-primary hover:underline ml-1 font-medium">
                                Read our Privacy Policy
                            </Link>.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                        <button
                            onClick={() => togglePreferences(true)}
                            className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                        >
                            Manage Preferences
                        </button>
                        <button
                            onClick={handleAcceptAll}
                            className="px-6 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md shadow-sm transition-all hover:shadow-md"
                        >
                            Accept All
                        </button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
