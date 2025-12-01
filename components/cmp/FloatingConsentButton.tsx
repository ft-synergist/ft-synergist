"use client";

import React from 'react';
import { useConsent } from '@/components/providers/ConsentProvider';
import { Cookie } from 'lucide-react';
import { motion } from 'framer-motion';

export function FloatingConsentButton() {
    const { showBanner, togglePreferences } = useConsent();

    // Don't show if banner is visible
    if (showBanner) return null;

    return (
        <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => togglePreferences(true)}
            className="fixed bottom-4 left-4 z-40 p-3 bg-white text-primary rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-shadow group"
            title="Cookie Preferences"
        >
            <Cookie className="w-6 h-6" />
            <span className="sr-only">Cookie Preferences</span>
        </motion.button>
    );
}
