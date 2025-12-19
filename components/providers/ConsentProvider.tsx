"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface ConsentPreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
}

interface ConsentContextType {
    preferences: ConsentPreferences;
    isConsentGiven: boolean;
    showBanner: boolean;
    showPreferences: boolean;
    updatePreferences: (newPreferences: ConsentPreferences) => void;
    saveConsent: (newPreferences: ConsentPreferences) => Promise<void>;
    togglePreferences: (show: boolean) => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export const defaultPreferences: ConsentPreferences = {
    necessary: true,
    analytics: false,
    marketing: false,
};

export function ConsentProvider({ children }: { children: React.ReactNode }) {
    const [preferences, setPreferences] = useState<ConsentPreferences>(defaultPreferences);
    const [isConsentGiven, setIsConsentGiven] = useState(false);
    const [showBanner, setShowBanner] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);

    useEffect(() => {
        // Check localStorage on mount
        const storedConsent = localStorage.getItem('ft_synergist_consent');
        if (storedConsent) {
            try {
                const parsed = JSON.parse(storedConsent);
                // eslint-disable-next-line
                setPreferences(parsed);
                setIsConsentGiven(true);
                setShowBanner(false);
            } catch (e) {
                console.error("Failed to parse consent", e);
                setShowBanner(true);
            }
        } else {
            setShowBanner(true);
        }
    }, []);

    useEffect(() => {
        // Apply blocking logic here
        if (isConsentGiven) {
            if (preferences.analytics) {
                console.log("CMP: Analytics Cookies Enabled");
                // Initialize GA or other analytics here
            } else {
                console.log("CMP: Analytics Cookies Blocked");
            }

            if (preferences.marketing) {
                console.log("CMP: Marketing Cookies Enabled");
                // Initialize Pixel or other marketing scripts here
            } else {
                console.log("CMP: Marketing Cookies Blocked");
            }
        }
    }, [isConsentGiven, preferences]);

    const updatePreferences = (newPreferences: ConsentPreferences) => {
        setPreferences(newPreferences);
    };

    const saveConsent = async (newPreferences: ConsentPreferences) => {
        setPreferences(newPreferences);
        setIsConsentGiven(true);
        setShowBanner(false);
        setShowPreferences(false);
        localStorage.setItem('ft_synergist_consent', JSON.stringify(newPreferences));

        // Log to API
        try {
            // Get IP via a simple fetch to an IP service or rely on server to extract it
            // For this implementation, we'll let the server extract IP from the request
            await fetch('/api/consent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    preferences: newPreferences,
                    policyVersion: '1.0', // This should be dynamic or config-based
                    userAgent: navigator.userAgent,
                }),
            });
        } catch (error) {
            console.error("Failed to log consent to API", error);
        }
    };

    const togglePreferences = (show: boolean) => {
        setShowPreferences(show);
    };

    return (
        <ConsentContext.Provider
            value={{
                preferences,
                isConsentGiven,
                showBanner,
                showPreferences,
                updatePreferences,
                saveConsent,
                togglePreferences,
            }}
        >
            {children}
        </ConsentContext.Provider>
    );
}

export function useConsent() {
    const context = useContext(ConsentContext);
    if (context === undefined) {
        throw new Error('useConsent must be used within a ConsentProvider');
    }
    return context;
}
