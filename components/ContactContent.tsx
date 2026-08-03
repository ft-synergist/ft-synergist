"use client";

import { MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "@/app/actions";
import { usePersonaModal } from "@/components/providers/PersonaModalProvider";

export function ContactContent() {
    const { openModal } = usePersonaModal();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [subject, setSubject] = useState("");

    const handleBookDiscovery = () => {
        openModal();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target as HTMLFormElement);
        
        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const formSubject = formData.get("subject") as string;
        const message = formData.get("message") as string;

        const data = {
            subject: `New Contact Form Submission: ${formSubject}`,
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${formSubject}\nMessage: ${message}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${formSubject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
            email: email
        };

        const result = await sendEmail(data);

        setIsSubmitting(false);

        if (result.success) {
            alert("Message sent successfully!");
            (e.target as HTMLFormElement).reset();
            setSubject("");
        } else {
            alert(result.message);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased w-full overflow-x-hidden">

            {/* 1. HERO SECTION — Expansive McKinsey Title */}
            <section className="pt-16 pb-8 px-6 md:px-12 max-w-7xl mx-auto w-full">
                <div className="border-b border-gray-900 pb-8">
                    <span className="text-[#8F801B] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
                        Contact & Partnerships
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 tracking-tight leading-tight mb-4">
                        Partner with Us
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed font-normal">
                        Ready to scale your business? Connect with our certified management consultants for a discovery session or strategic advisory engagement.
                    </p>
                </div>
            </section>

            {/* 2. CONTACT CONTENT SECTION — Expansive Grid */}
            <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto w-full flex-grow">
                <div className="grid gap-12 lg:grid-cols-12 items-start">
                    {/* Contact Info (5 cols) */}
                    <div className="lg:col-span-5 space-y-10 text-left">
                        <div>
                            <span className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-6 block">
                                Office Location
                            </span>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="h-5 w-5 text-[#8F801B] mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-serif font-bold text-xl text-gray-900 mb-1">Visit Us</h3>
                                        <p className="text-gray-600 leading-relaxed text-base">
                                            7 Temasek Boulevard, #12-07 Suntec Tower One<br />
                                            Singapore 038987
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Clock className="h-5 w-5 text-[#8F801B] mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-serif font-bold text-xl text-gray-900 mb-1">Business Hours</h3>
                                        <p className="text-gray-600 leading-relaxed text-base">
                                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                                            Saturday - Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-8">
                            <span className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-4 block">
                                Direct Advisory Sprint
                            </span>
                            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Book a Complimentary 60 Minutes Sprint</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-base">
                                Schedule a complimentary 60-minute Business Sprint session with our Principal Consultant to rapidly identify growth opportunities.
                            </p>
                            <button
                                onClick={handleBookDiscovery}
                                className="inline-flex items-center justify-center bg-[#8F801B] hover:bg-gray-900 text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 transition-colors"
                            >
                                Book Sprint Now
                            </button>
                        </div>
                    </div>

                    {/* Contact Form (7 cols) */}
                    <div className="lg:col-span-7 bg-gray-50/70 p-8 md:p-10 border border-gray-200 text-left">
                        <span className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-6 block">
                            Direct Inquiry
                        </span>
                        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider text-gray-700">First Name</label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        required
                                        className="w-full border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-400"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wider text-gray-700">Last Name</label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        required
                                        className="w-full border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-400"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-700">Email Address</label>
                                <input
                                    id="email"
                                    name="email"
                                    required
                                    type="email"
                                    className="w-full border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-400"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-gray-700">Topic of Interest</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                    className="w-full border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors text-gray-900"
                                >
                                    <option value="" disabled>Please select a topic...</option>
                                    <option value="Franchise & Licensing">Franchise & Licensing</option>
                                    <option value="Innovation Consultancy">Innovation Consultancy</option>
                                    <option value="IP Strategy">IP Strategy</option>
                                    <option value="M&A">M&A</option>
                                    <option value="Market Entry">Market Entry</option>
                                    <option value="Media Enquiry">Media Enquiry</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Strategic Advisory & Roadmap">Strategic Advisory & Roadmap</option>
                                    <option value="Other Corporate Enquiries">Other Corporate Enquiries</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-400"
                                    placeholder="How can we assist your business?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full inline-flex items-center justify-center bg-gray-900 hover:bg-[#8F801B] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 transition-colors disabled:opacity-50"
                            >
                                {isSubmitting ? "Sending..." : (
                                    <>
                                        Send Inquiry
                                        <Send className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}