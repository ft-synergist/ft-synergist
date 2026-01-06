"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  end: number;          // <--- Renamed from 'value' to 'end' to match page.tsx
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function CountUp({ end, duration = 2.5, className = "", prefix = "", suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: duration * 1000,
  });

  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end); // <--- Using 'end' here
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Added fallback (|| 0) to ensure it never prints NaN
        const safeValue = isNaN(latest) ? 0 : Math.floor(latest);
        ref.current.textContent = `${prefix}${safeValue.toLocaleString()}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}
