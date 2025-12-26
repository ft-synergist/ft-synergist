"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
    value: number;
    duration?: number;
    className?: string;
    prefix?: string;
    suffix?: string;
}

export function CountUp({ value, duration = 2.5, className = "", prefix = "", suffix = "" }: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
        duration: duration * 1000, // framer-motion uses ms but we passed seconds conceptually or can just rely on setting value triggers
    });

    // We'll actually manually animate the motionValue to give precise duration control similar to standard countups
    // But purely declarative spring is easier. Let's use standard animate function logic or just simple effect.

    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`;
            }
        });
    }, [springValue, prefix, suffix]);

    return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}
