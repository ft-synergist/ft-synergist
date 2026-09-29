"use client";

import { useState } from "react";
import { MapPin, Clock, MonitorPlay, Mail, Share2, Check, Copy } from "lucide-react";
import { EventRegistrationModal } from "@/components/EventRegistrationModal";
import { Event } from "@/lib/data";

interface EventsListProps {
    initialEvents: Event[];
}

export function EventsList({ initialEvents }: EventsListProps) {
    const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copiedEventId, setCopiedEventId] = useState<number | null>(null);

    const handleRegisterClick = (title: string) => {
        setSelectedEvent(title);
        setIsModalOpen(true);
    };

    const handleRegistrationSuccess = () => {
        alert(`Registration confirmed for "${selectedEvent}". Check your email for details.`);
    };

    const handleCopyLink = (eventId: number) => {
        const url = `${window.location.origin}/events#event-${eventId}`;
        navigator.clipboard.writeText(url);
        setCopiedEventId(eventId);
        setTimeout(() => setCopiedEventId(null), 2000);
    };

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
                        const now = new Date();
                        const isPastEvent = !isNaN(eventDate.getTime()) && eventDate.getTime() < new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

                        let resolvedLocationText = event.location?.trim() || "FT Synergist Singapore Office";
                        let resolvedTypeText = event.type?.trim() || "In-Person";

                        if (event.type === "Online" || event.type === "Virtual") {
                            resolvedTypeText = "Digital-First Briefing";
                        } else if (isPastEvent) {
                            resolvedTypeText = "Executive Session (Concluded)";
                        } else {
                            resolvedTypeText = "Executive Briefing";
                        }

                        const eventUrl = `https://www.ftsynergist.com/events#event-${event.id}`;
                        const waText = `*${event.title.trim()}*\n📅 Date: ${event.date}\n⏰ Time: ${event.time}\n📍 Location: ${resolvedLocationText}\n\nRegister & details: ${eventUrl}`;
                        const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`;
                        const tgText = `${event.title.trim()} | ${event.date} (${event.time}) - FT Synergist`;
                        const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(eventUrl)}&text=${encodeURIComponent(tgText)}`;
                        const emailSub = `Invitation: ${event.title.trim()} — FT Synergist`;
                        const emailBody = `Hi,\n\nI thought you might be interested in attending this executive session with FT Synergist:\n\n${event.title.trim()}\nDate: ${event.date}\nTime: ${event.time}\nLocation: ${resolvedLocationText}\n\n${event.description ? event.description + '\n\n' : ''}View full event details & register here: ${eventUrl}\n\nBest regards.`;
                        const emailUrl = `mailto:?subject=${encodeURIComponent(emailSub)}&body=${encodeURIComponent(emailBody)}`;

                        return (
                            <div id={`event-${event.id}`} key={event.id} className="py-8 border-b border-gray-200 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between group">
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

                                    <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4 text-[#8F801B]" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-[#8F801B]" />
                                            <span>{resolvedLocationText}</span>
                                        </div>
                                    </div>

                                    {/* Share Action Tray */}
                                    <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mr-1 flex items-center gap-1">
                                            <Share2 className="w-3 h-3 text-gray-400" /> Share:
                                        </span>

                                        {/* WhatsApp */}
                                        <a
                                            href={waUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Share on WhatsApp"
                                            className="inline-flex items-center justify-center gap-1 px-2.5 py-1 rounded bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366] hover:text-white transition-all text-xs font-semibold"
                                        >
                                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                            </svg>
                                            <span>WhatsApp</span>
                                        </a>

                                        {/* Telegram */}
                                        <a
                                            href={tgUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Share on Telegram"
                                            className="inline-flex items-center justify-center gap-1 px-2.5 py-1 rounded bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc] hover:text-white transition-all text-xs font-semibold"
                                        >
                                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.941z"/>
                                            </svg>
                                            <span>Telegram</span>
                                        </a>

                                        {/* Email */}
                                        <a
                                            href={emailUrl}
                                            title="Share via Email"
                                            className="inline-flex items-center justify-center gap-1 px-2.5 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white transition-all text-xs font-semibold"
                                        >
                                            <Mail className="w-3.5 h-3.5" />
                                            <span>Email</span>
                                        </a>

                                        {/* Copy Link */}
                                        <button
                                            onClick={() => handleCopyLink(event.id)}
                                            title="Copy Event Link"
                                            className="inline-flex items-center justify-center gap-1 px-2 py-1 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all text-xs font-medium ml-auto"
                                        >
                                            {copiedEventId === event.id ? (
                                                <>
                                                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                                                    <span className="text-emerald-600 font-bold">Copied</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-3.5 h-3.5" />
                                                    <span>Copy Link</span>
                                                </>
                                            )}
                                        </button>
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