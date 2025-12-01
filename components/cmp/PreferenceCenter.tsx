"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useConsent, ConsentPreferences } from '@/components/providers/ConsentProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp, Shield, BarChart3, Target } from 'lucide-react';

export function PreferenceCenter() {
    const { showPreferences, togglePreferences, preferences, saveConsent } = useConsent();
    const [localPreferences, setLocalPreferences] = useState<ConsentPreferences>(preferences);
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    useEffect(() => {
        if (showPreferences) {
            setLocalPreferences(preferences);
        }
    }, [showPreferences, preferences]);

    if (!showPreferences) return null;

    const handleToggle = (key: keyof ConsentPreferences) => {
        if (key === 'necessary') return; // Cannot toggle necessary
        setLocalPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleSave = () => {
        saveConsent(localPreferences);
    };

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Privacy Preferences</h2>
                            <p className="text-sm text-gray-500 mt-1">Manage how we use your data.</p>
                        </div>
                        <button
                            onClick={() => togglePreferences(false)}
                            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                        <p className="text-sm text-gray-600 mb-6">
                            When you visit our website, we store cookies on your browser to collect information.
                            The information collected might relate to you, your preferences, or your device, and is mostly used to make the site work as you expect it to and to provide a more personalized web experience.
                            However, you can choose not to allow certain types of cookies, which may impact your experience of the site and the services we are able to offer.
                        </p>

                        {/* Strictly Necessary */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div
                                className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer"
                                onClick={() => toggleSection('necessary')}
                            >
                                <div className="flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-green-600" />
                                    <span className="font-semibold text-gray-900">Strictly Necessary</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Always Active</span>
                                    {expandedSection === 'necessary' ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                                </div>
                            </div>
                            {expandedSection === 'necessary' && (
                                <div className="p-4 bg-white border-t border-gray-100 text-sm text-gray-600">
                                    These cookies are necessary for the website to function and cannot be switched off in our systems.
                                    They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
                                </div>
                            )}
                        </div>

                        {/* Analytics */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div
                                className="flex items-center justify-between p-4 bg-white cursor-pointer hover:bg-gray-50 transition-colors"
                                onClick={() => toggleSection('analytics')}
                            >
                                <div className="flex items-center gap-3">
                                    <BarChart3 className="w-5 h-5 text-blue-600" />
                                    <span className="font-semibold text-gray-900">Analytics (Non-Essential)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleToggle('analytics');
                                        }}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${localPreferences.analytics ? 'bg-primary' : 'bg-gray-200'}`}
                                    >
                                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${localPreferences.analytics ? 'translate-x-6' : 'translate-x-1'}`} />
                                    </div>
                                    {expandedSection === 'analytics' ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                                </div>
                            </div>
                            {expandedSection === 'analytics' && (
                                <div className="p-4 bg-white border-t border-gray-100 text-sm text-gray-600">
                                    <p className="mb-2">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</p>
                                    <p className="text-xs text-gray-500">Examples: Google Analytics, Hotjar</p>
                                </div>
                            )}
                        </div>

                        {/* Marketing */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div
                                className="flex items-center justify-between p-4 bg-white cursor-pointer hover:bg-gray-50 transition-colors"
                                onClick={() => toggleSection('marketing')}
                            >
                                <div className="flex items-center gap-3">
                                    <Target className="w-5 h-5 text-purple-600" />
                                    <span className="font-semibold text-gray-900">Marketing & Targeting</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleToggle('marketing');
                                        }}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${localPreferences.marketing ? 'bg-primary' : 'bg-gray-200'}`}
                                    >
                                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${localPreferences.marketing ? 'translate-x-6' : 'translate-x-1'}`} />
                                    </div>
                                    {expandedSection === 'marketing' ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                                </div>
                            </div>
                            {expandedSection === 'marketing' && (
                                <div className="p-4 bg-white border-t border-gray-100 text-sm text-gray-600">
                                    <p className="mb-2">These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.</p>
                                    <p className="text-xs text-gray-500">Examples: LinkedIn Insight Tag, Google Ads, Facebook Pixel</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="text-xs text-gray-500">
                            <p>DPO Contact: <a href="mailto:DPO@ftsynergist.com" className="text-primary hover:underline">DPO@ftsynergist.com</a></p>
                            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                        </div>
                        <div className="flex gap-3 w-full sm:w-auto">
                            <button
                                onClick={() => togglePreferences(false)}
                                className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="flex-1 sm:flex-none px-6 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md shadow-sm transition-all hover:shadow-md"
                            >
                                Save My Preferences
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
