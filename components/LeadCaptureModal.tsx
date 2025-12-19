"use client";

import { useState } from "react";
import { X, Download, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sendEmail } from "@/app/actions";

interface LeadCaptureModalProps {
    isOpen: boolean;
    onClose: () => void;
    reportTitle: string;
    driveLink?: string;
    onSuccess: () => void;
}

export function LeadCaptureModal({ isOpen, onClose, reportTitle, driveLink, onSuccess }: LeadCaptureModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const data = {
            subject: `${driveLink ? 'New Report Download' : 'Report Request'}: ${reportTitle}`,
            text: `
Report: ${reportTitle}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
            `,
            html: `
<h3>${driveLink ? 'New Report Download' : 'Report Request'}</h3>
<p><strong>Report:</strong> ${reportTitle}</p>
<p><strong>Name:</strong> ${formData.name}</p>
<p><strong>Email:</strong> ${formData.email}</p>
<p><strong>Phone:</strong> ${formData.phone}</p>
<p><strong>Company:</strong> ${formData.company}</p>
            `
        };

        const result = await sendEmail(data);
        setIsLoading(false);

        if (result.success) {
            onSuccess();
            onClose();
            // Redirect to Google Drive if available
            if (driveLink) {
                window.open(driveLink, "_blank");
            } else {
                alert("Request received! We will email you the copy.");
            }
        } else {
            alert("Failed to process request. Please try again.");
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
                            <h3 className="text-lg font-semibold">{driveLink ? 'Download Report' : 'Request Report'}</h3>
                            <button onClick={onClose} className="rounded-full p-1 hover:bg-secondary">
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        <p className="mb-6 text-sm text-muted-foreground">
                            Please provide your details to {driveLink ? 'download' : 'request'} <strong>{reportTitle}</strong>.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
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
                                <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                                <input
                                    id="phone"
                                    required
                                    type="tel"
                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    placeholder="+65 9123 4567"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium">Company Name</label>
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

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 disabled:opacity-50"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <Download className="mr-2 h-4 w-4" />
                                        {driveLink ? 'Download Now' : 'Request Copy'}
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
