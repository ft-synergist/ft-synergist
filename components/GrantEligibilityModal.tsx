"use client";

import { useState } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { sendEmail } from "@/app/actions";

interface GrantEligibilityModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CHECKLIST_ITEMS = [
    { id: 1, text: "Business entity is registered and operating in Singapore" },
    { id: 2, text: "Company has at least 30% local equity held directly or indirectly by Singaporean(s) and/or Singapore PR(s)" },
    { id: 3, text: "Company is financially ready to start and complete the project" },
    { id: 4, text: "Diagnosis and gap analysis in your company" },
    { id: 5, text: "Assessment of internal and external factors, such as strengths and weaknesses, and competition" },
    { id: 6, text: "Development of a strategic roadmap, business frameworks, policies or processes" },
    { id: 7, text: "Recommendations and plans for implementation" },
    { id: 8, text: "Sustainability strategy projects" },
    { id: 9, text: "Assessment of sustainability risks and opportunities" },
    { id: 10, text: "Strategy development" },
    { id: 11, text: "Governance framework" },
    { id: 12, text: "Setting metrics and targets" },
];

export default function GrantEligibilityModal({ isOpen, onClose }: GrantEligibilityModalProps) {
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [step, setStep] = useState<"assessment" | "result">("assessment");
    const [isEligible, setIsEligible] = useState(false);
    const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", company: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const toggleItem = (id: number) => {
        setSelectedItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const checkEligibility = () => {
        const hasMandatory = [1, 2, 3].every((id) => selectedItems.includes(id));
        const hasOptional = [4, 5, 6, 7, 8, 9, 10, 11, 12].some((id) => selectedItems.includes(id));

        if (hasMandatory && hasOptional) {
            setIsEligible(true);
        } else {
            setIsEligible(false);
        }
        setStep("result");
    };

    const reset = () => {
        setSelectedItems([]);
        setStep("assessment");
        setIsEligible(false);
        setContactForm({ name: "", email: "", phone: "", company: "" });
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative w-full max-w-2xl bg-background border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
                        <h2 className="text-xl font-bold text-white">Grant Eligibility Assessment</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 overflow-y-auto flex-grow">
                        {step === "assessment" ? (
                            <div className="space-y-6">
                                <p className="text-gray-300">
                                    Tick all the following that applies to you to check if you qualify for 50% funding from Enterprise Singapore under the Enterprise Development Grant.
                                </p>
                                <div className="space-y-3">
                                    {CHECKLIST_ITEMS.map((item) => (
                                        <label
                                            key={item.id}
                                            className={cn(
                                                "flex items-start space-x-3 p-3 rounded-lg border cursor-pointer transition-all",
                                                selectedItems.includes(item.id)
                                                    ? "bg-[#8F801B]/10 border-[#8F801B] text-white"
                                                    : "border-white/10 hover:bg-white/5 text-gray-400"
                                            )}
                                        >
                                            <input
                                                type="checkbox"
                                                className="mt-1 w-4 h-4 rounded border-gray-600 text-[#8F801B] focus:ring-[#8F801B]"
                                                checked={selectedItems.includes(item.id)}
                                                onChange={() => toggleItem(item.id)}
                                            />
                                            <span className="text-sm">{item.text}</span>
                                        </label>
                                    ))}
                                </div>
                                <button
                                    onClick={checkEligibility}
                                    className="w-full py-3 bg-[#8F801B] hover:bg-[#7a6d17] text-white font-bold rounded-lg transition-colors"
                                >
                                    Check Eligibility
                                </button>
                            </div>
                        ) : (
                            <div className="text-center space-y-6 py-8">
                                {isEligible ? (
                                    <>
                                        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto">
                                            <CheckCircle className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Congratulations!</h3>
                                        <p className="text-gray-300">
                                            This grant may be applicable to you. Please leave your details below and we will contact you shortly.
                                        </p>
                                        <div className="space-y-4 max-w-md mx-auto text-left">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                                <input
                                                    type="text"
                                                    value={contactForm.name}
                                                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#8F801B]"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">Company Name</label>
                                                <input
                                                    type="text"
                                                    value={contactForm.company}
                                                    onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#8F801B]"
                                                    placeholder="Company Pte Ltd"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">Work Email</label>
                                                <input
                                                    type="email"
                                                    value={contactForm.email}
                                                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#8F801B]"
                                                    placeholder="name@company.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-1">Contact Number</label>
                                                <input
                                                    type="tel"
                                                    value={contactForm.phone}
                                                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#8F801B]"
                                                    placeholder="+65 9123 4567"
                                                />
                                            </div>
                                            <button
                                                className="w-full py-3 bg-[#8F801B] hover:bg-[#7a6d17] text-white font-bold rounded-lg transition-colors disabled:opacity-50"
                                                disabled={isSubmitting}
                                                onClick={async () => {
                                                    setIsSubmitting(true);
                                                    const data = {
                                                        subject: "New Grant Eligibility Check (Eligible)",
                                                        email: contactForm.email,
                                                        text: `
Name: ${contactForm.name}
Company: ${contactForm.company}
Email: ${contactForm.email}
Phone: ${contactForm.phone}
Result: Eligible
                                                        `,
                                                        html: `
<h3>New Grant Eligibility Check</h3>
<p><strong>Result:</strong> <span style="color: green;">Eligible</span></p>
<p><strong>Name:</strong> ${contactForm.name}</p>
<p><strong>Company:</strong> ${contactForm.company}</p>
<p><strong>Email:</strong> ${contactForm.email}</p>
<p><strong>Phone:</strong> ${contactForm.phone}</p>
                                                        `
                                                    };

                                                    const result = await sendEmail(data);
                                                    setIsSubmitting(false);

                                                    if (result.success) {
                                                        alert("Thank you! We will be in touch.");
                                                        onClose();
                                                    } else {
                                                        alert("Failed to submit. Please try again.");
                                                    }
                                                }}
                                            >
                                                {isSubmitting ? "Submitting..." : "Submit Application"}
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-16 h-16 bg-yellow-500/20 text-yellow-500 rounded-full flex items-center justify-center mx-auto">
                                            <AlertCircle className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Don't Miss Out</h3>
                                        <p className="text-gray-300 max-w-md mx-auto">
                                            While you might not meet the strict EDG criteria yet, there are other strategies to fund your growth. Let's discuss your options.
                                        </p>
                                        <div className="flex flex-col gap-3 max-w-xs mx-auto">
                                            <a
                                                href="/contact"
                                                className="w-full py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors"
                                            >
                                                Book Free Strategy Session
                                            </a>
                                            <button
                                                onClick={reset}
                                                className="w-full py-3 border border-white/20 hover:bg-white/10 text-white rounded-lg transition-colors"
                                            >
                                                Retake Assessment
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
