"use client";

import { useState } from "react";
import { X, Mail, CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { subscribeToNewsletter } from "@/app/actions";

interface NewsletterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const result = await subscribeToNewsletter(email);
            if (result.success) {
                setStatus("success");
                setMessage("You're in! Watch your inbox for priority alerts.");
                setTimeout(() => {
                    onClose();
                    setStatus("idle");
                    setEmail("");
                }, 3000);
            } else {
                setStatus("error");
                setMessage(result.message || "Something went wrong. Please try again.");
            }
        } catch {
            setStatus("error");
            setMessage("Failed to subscribe. Please try again.");
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="p-8 text-center">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-8 h-8" />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Priority Access</h2>
                        <p className="text-gray-600 mb-8">
                            Join 2,000+ leaders receiving our latest market intelligence and growth frameworks.
                        </p>

                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center p-4 bg-green-50 text-green-700 rounded-lg animate-in fade-in zoom-in">
                                <CheckCircle className="w-8 h-8 mb-2" />
                                <p className="font-medium text-center">{message}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your work email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    />
                                </div>
                                {status === "error" && (
                                    <p className="text-sm text-red-600 text-left">{message}</p>
                                )}
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all flex items-center justify-center"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Subscribing...
                                        </>
                                    ) : (
                                        "Subscribe Now"
                                    )}
                                </button>
                                <p className="text-xs text-gray-400 text-center">
                                    We respect your inbox. Unsubscribe at any time.
                                </p>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
