"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Calendar, X } from "lucide-react";
import { LOCKED_CALENDAR_URLS, SPRINT_OPTIONS, SprintKey } from "./sprintConfig";

interface SprintBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: SprintKey;
  onSelectService: (service: SprintKey) => void;
  stickyLabel?: string;
  onOpenFromSticky?: () => void;
}

export function SprintBookingModal({
  isOpen,
  onClose,
  selectedService,
  onSelectService,
  stickyLabel = "Strategy Sprint",
  onOpenFromSticky,
}: SprintBookingModalProps) {
  const [mounted, setMounted] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLaunchCalendar = (e: React.FormEvent) => {
    e.preventDefault();
    const targetUrl = LOCKED_CALENDAR_URLS[selectedService];
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.open(targetUrl, "_blank", "noopener,noreferrer");
      }, 150);
    }
    onClose();
  };

  return (
    <>
      {mounted && showStickyBar && onOpenFromSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-[#8F801B]/40 px-4 py-3 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-[#8F801B]" />
            <span className="text-xs font-bold text-white uppercase tracking-wide">
              {stickyLabel}
            </span>
          </div>
          <button
            onClick={onOpenFromSticky}
            className="bg-[#8F801B] text-white font-bold py-2 px-4 rounded text-xs transition-transform hover:scale-105 cursor-pointer flex items-center gap-1"
          >
            <span>Book Now</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-[#8F801B]/30">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-slate-900 p-2 rounded-full cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            <form onSubmit={handleLaunchCalendar} className="space-y-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  Select Your Strategic Sprint
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Pick your focus area to launch the Google Calendar booking tool.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-2">
                  Select Sprint Focus *
                </label>
                <select
                  required
                  value={selectedService}
                  className="w-full border border-slate-300 rounded-lg p-3.5 text-sm focus:ring-2 focus:ring-[#8F801B] outline-none bg-white text-slate-900 font-medium"
                  onChange={(e) => onSelectService(e.target.value as SprintKey)}
                >
                  {SPRINT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-4 rounded-lg text-base transition-colors shadow-lg cursor-pointer flex items-center justify-center"
              >
                Launch Strategy Calendar
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

