"use client";

import { useState } from "react";
import { MapPin, Clock, MonitorPlay } from "lucide-react";
import { EventRegistrationModal } from "@/components/EventRegistrationModal";
import { Event } from "@/lib/data";

interface EventsListProps {
    initialEvents: Event[];
}

export function EventsList({ initialEvents }: EventsListProps) {
    const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRegisterClick = (title: string) => {
        setSelectedEvent(title);
        setIsModalOpen(true);
    };

    const handleRegistrationSuccess = () => {
        alert(`Registration confirmed for "${selectedEvent}". Check your email for details.`);
    };

    const currentYear = 2026;

    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased w-full overflow-x-hidden">

            {/* 1. HERO SECTION — Expansive McKinsey Title */}
            <section className="pt-16 pb-8 px-6 md:px-12 max-w-7xl mx-auto w-full">
                <div className="border-b border-gray-900 pb-8">
                    <span className="text-[#8F801B] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
                        FT Synergist Events
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 tracking-tight leading-tight mb-4">
                        Upcoming Events
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed font-normal">
                        Join us for insightful sessions, executive workshops, and strategic networking opportunities across Southeast Asia.
                    </p>
                </div>
            </section>

            {/* 2. EVENTS LISTING SECTION — Expansive Divider Layout */}
            <section className="py-8 px-6 md:px-12 max-w-7xl mx-auto w-full flex-grow">
                <div className="mb-6">
                    <span className="text-xs font-bold tracking-widest text-gray-900 uppercase">
                        Scheduled Sessions
                    </span>
                </div>

                <div className="space-y-0">
                    {initialEvents.map((event) => {
                        const eventDate = new Date(event.date);
                        const isPastEvent = eventDate.getFullYear() < currentYear || (eventDate.getFullYear() === currentYear && eventDate.getMonth() < 5);

                        let resolvedLocationText = event.location;
                        let resolvedTypeText = event.type;

                        if (event.type === "Online" || event.type === "Virtual") {
                            resolvedLocationText = "Live Interactive Digital Hub (APAC Regional Access)";
                            resolvedTypeText = "Digital-First Briefing";
                        } else if (isPastEvent) {
                            resolvedLocationText = "Closed-Door Executive Session (Singapore Corporate Hub)";
                            resolvedTypeText = "Executive Session";
                        } else {
                            resolvedLocationText = "Downtown Core, Singapore (Suntec City Zone)";
                            resolvedTypeText = "Executive Briefing";
                        }

                        return (
                            <div key={event.id} className="py-8 border-b border-gray-200 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between group">
                                {/* Date Column */}
                                <div className="flex-shrink-0 w-32 text-left">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] block">
                                        {eventDate.toLocaleString('default', { month: 'short' })} {eventDate.getFullYear()}
                                    </span>
                                    <span className="text-4xl font-serif font-bold text-gray-900">
                                        {eventDate.getDate()}
                                    </span>
                                </div>

                                {/* Details Column */}
                                <div className="flex-grow text-left">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            {resolvedTypeText}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-[#8F801B] transition-colors leading-snug mb-2">
                                        {event.title}
                                    </h3>

                                    {event.description && (
                                        <p className="text-gray-600 mb-4 text-base leading-relaxed max-w-3xl">{event.description}</p>
                                    )}

                                    <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-[#8F801B]" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-[#8F801B]" />
                                            <span>{resolvedLocationText}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Column */}
                                <div className="flex-shrink-0 w-full md:w-auto pt-2 md:pt-0">
                                    {!isPastEvent ? (
                                        <button
                                            onClick={() => handleRegisterClick(event.title)}
                                            className="w-full md:w-auto inline-flex items-center justify-center bg-gray-900 hover:bg-[#8F801B] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 transition-colors"
                                        >
                                            Register Now
                                        </button>
                                    ) : (
                                        <span className="inline-block text-xs font-bold text-gray-400 uppercase tracking-wider select-none py-2">
                                            Session Concluded
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <EventRegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                eventTitle={selectedEvent || ""}
                onSuccess={handleRegistrationSuccess}
            />
        </div>
    );
}