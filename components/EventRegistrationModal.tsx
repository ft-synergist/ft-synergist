"use client";

import { useState } from "react";
import { X, CalendarCheck, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sendEmail } from "@/app/actions";

interface EventRegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
    eventTitle: string;
    onSuccess: () => void;
}

export function EventRegistrationModal({ isOpen, onClose, eventTitle, onSuccess }: EventRegistrationModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const data = {
            subject: `New Event Registration: ${eventTitle}`,
            text: `
Event: ${eventTitle}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Job Title: ${formData.jobTitle}
            `,
            html: `
<h3>New Event Registration</h3>
<p><strong>Event:</strong> ${eventTitle}</p>
<p><strong>Name:</strong> ${formData.name}</p>
<p><strong>Email:</strong> ${formData.email}</p>
<p><strong>Phone:</strong> ${formData.phone}</p>
<p><strong>Company:</strong> ${formData.company}</p>
<p><strong>Job Title:</strong> ${formData.jobTitle}</p>
            `
        };

        const result = await sendEmail(data);
        setIsLoading(false);

        if (result.success) {
            onSuccess();
            onClose();
        } else {
            alert("Failed to register. Please try again.");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background p-6 shadow-lg"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Register for Event</h3>
                            <button onClick={onClose} className="rounded-full p-1 hover:bg-secondary">
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        <p className="mb-6 text-sm text-muted-foreground">
                            You are registering for: <strong>{eventTitle}</strong>
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                                    <input
                                        id="name"
                                        required
                                        type="text"
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                    <input
                                        id="phone"
                                        required
                                        type="tel"
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        placeholder="+65..."
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Work Email</label>
                                <input
                                    id="email"
                                    required
                                    type="email"
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    placeholder="john@company.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium">Company</label>
                                <input
                                    id="company"
                                    required
                                    type="text"
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    placeholder="Acme Corp"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="jobTitle" className="text-sm font-medium">Job Title</label>
                                <input
                                    id="jobTitle"
                                    required
                                    type="text"
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    placeholder="Director of Operations"
                                    value={formData.jobTitle}
                                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 disabled:opacity-50"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Registering...
                                    </>
                                ) : (
                                    <>
                                        <CalendarCheck className="mr-2 h-4 w-4" />
                                        Confirm Registration
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
