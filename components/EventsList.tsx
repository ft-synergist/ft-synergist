"use client";

import { useState } from "react";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
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

    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Upcoming Events</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join us for insightful sessions, workshops, and networking opportunities across Southeast Asia.
                    </p>
                </div>

                <div className="space-y-6 max-w-4xl mx-auto">
                    {initialEvents.map((event) => (
                        <div key={event.id} className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 flex flex-col md:flex-row gap-6">
                            <div
                                className="flex-shrink-0 flex flex-col items-center justify-center rounded-lg p-4 w-full md:w-32 text-center"
                                style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
                            >
                                <span className="text-sm font-medium uppercase opacity-90">
                                    {new Date(event.date).toLocaleString('default', { month: 'short' })}
                                </span>
                                <span className="text-3xl font-bold">
                                    {new Date(event.date).getDate()}
                                </span>
                                <span className="text-xs opacity-90">
                                    {new Date(event.date).getFullYear()}
                                </span>
                            </div>

                            <div className="flex-grow">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${event.type === 'Online' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'}`}>
                                        {event.type}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                                <p className="text-muted-foreground mb-4 text-sm">{event.description}</p>

                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        {event.location}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center md:justify-end">
                                <button
                                    onClick={() => handleRegisterClick(event.title)}
                                    className="w-full md:w-auto inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
                                >
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <EventRegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                eventTitle={selectedEvent || ""}
                onSuccess={handleRegistrationSuccess}
            />
        </div>
    );
}
