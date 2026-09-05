"use client";

import { useEffect, useRef } from "react";

interface ScrollDwellTriggerProps {
    onTrigger: () => void;
    dwellSeconds?: number;
    scrollPercent?: number;
    storageKey?: string;
}

export function ScrollDwellTrigger({
    onTrigger,
    dwellSeconds = 50,
    scrollPercent = 60,
    storageKey = "ft_lead_prompt_shown"
}: ScrollDwellTriggerProps) {
    const hasTriggeredRef = useRef(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        // Check if already dismissed in this session
        const alreadyShown = sessionStorage.getItem(storageKey);
        if (alreadyShown) return;

        const triggerAction = (reason: string) => {
            if (hasTriggeredRef.current) return;
            hasTriggeredRef.current = true;
            sessionStorage.setItem(storageKey, "true");

            // Dispatch GA4 Event
            if ((window as any).gtag) {
                (window as any).gtag("event", "high_intent_engagement", {
                    event_category: "lead_funnel",
                    event_label: reason,
                    page_path: window.location.pathname
                });
            }

            onTrigger();
        };

        // 1. Dwell Timer Trigger
        const timer = setTimeout(() => {
            triggerAction(`dwell_${dwellSeconds}s`);
        }, dwellSeconds * 1000);

        // 2. Scroll Depth Trigger
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (scrollHeight <= 0) return;

            const currentScrollPercent = (scrollTop / scrollHeight) * 100;

            if (currentScrollPercent >= scrollPercent) {
                triggerAction(`scroll_${scrollPercent}percent`);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [onTrigger, dwellSeconds, scrollPercent, storageKey]);

    return null;
}
