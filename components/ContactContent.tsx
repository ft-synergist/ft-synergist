"use client";

import { Mail, MapPin, Send, Clock } from "lucide-react";
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
        const data = {
            subject: `New Contact Form Submission: ${formData.get("subject")}`,
            text: `
Name: ${formData.get("firstName")} ${formData.get("lastName")}
Email: ${formData.get("email")}
Subject: ${formData.get("subject")}
Message: ${formData.get("message")}
            `,
            html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${formData.get("firstName")} ${formData.get("lastName")}</p>
<p><strong>Email:</strong> ${formData.get("email")}</p>
<p><strong>Subject:</strong> ${formData.get("subject")}</p>
<p><strong>Message:</strong></p>
<p>${formData.get("message")}</p>
            `,
            email: formData.get("email") as string
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
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Get in Touch</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Ready to scale your business? Contact us for a discovery session or to learn more about our services.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="rounded-xl border bg-card p-8 shadow-sm">
                            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="space-y-8">
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="h-6 w-6 text-primary mt-1" />
                                        <div>
                                            <h3 className="font-semibold">Visit Us</h3>
                                            <p className="text-muted-foreground">
                                                6 Eu Tong Sen St, #10-20 The Central<br />
                                                Singapore 059817
                                            </p>
                                        </div>
                                    </div>



                                    <div className="flex items-start space-x-4">
                                        <Clock className="h-6 w-6 text-primary mt-1" />
                                        <div>
                                            <h3 className="font-semibold">Business Hours</h3>
                                            <p className="text-muted-foreground">
                                                Monday - Friday: 9:00 AM - 6:00 PM<br />
                                                Saturday - Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl bg-gradient-to-br from-primary to-accent p-8 text-primary-foreground shadow-lg">
                            <h3 className="text-xl font-bold mb-4">Book a Complimentary 60 Minutes Sprint</h3>
                            <p className="mb-6 opacity-90">
                                Schedule a complimentary 60-minute Business Sprint session to rapidly identify opportunities and create an actionable roadmap.
                            </p>
                            <button
                                onClick={handleBookDiscovery}
                                className="rounded-md bg-background px-6 py-2 text-sm font-medium text-primary shadow hover:bg-secondary transition-colors"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-xl border bg-card p-8 shadow-sm">
                        <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
                        <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        required
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        required
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    required
                                    type="email"
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
