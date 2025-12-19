"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Message = {
    id: string;
    text: string;
    sender: "user" | "bot";
    options?: string[];
};

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Hello! Welcome to FT Synergist. I'm your AI assistant. How can we help you scale your business today?",
            sender: "bot",
            options: ["Scaling Strategies", "Government Grants", "AI Integration", "Contact Consultant"],
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        const newMessage: Message = {
            id: crypto.randomUUID(),
            text,
            sender: "user",
        };

        setMessages((prev) => [...prev, newMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            let botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: "I can help with that. Could you tell me a bit more about your needs?",
                sender: "bot",
            };

            const lowerText = text.toLowerCase();

            if (lowerText.includes("scaling") || lowerText.includes("strategies")) {
                botResponse = {
                    id: (Date.now() + 1).toString(),
                    text: "Scaling is our expertise. We help businesses expand locally and regionally. To better assist you, what is your current annual revenue range?",
                    sender: "bot",
                    options: ["< $1M", "$1M - $10M", "> $10M"],
                };
            } else if (lowerText.includes("grant") || lowerText.includes("government")) {
                botResponse = {
                    id: (Date.now() + 1).toString(),
                    text: "We are Enterprise Singapore approved consultants. To check your eligibility, are you a registered Singapore SME with at least 30% local shareholding?",
                    sender: "bot",
                    options: ["Yes", "No", "Not sure"],
                };
            } else if (lowerText.includes("ai") || lowerText.includes("integration")) {
                botResponse = {
                    id: (Date.now() + 1).toString(),
                    text: "AI can significantly boost productivity. We have a 'State of AI' report you might find interesting. Would you like to download it or speak to an expert?",
                    sender: "bot",
                    options: ["Download Report", "Speak to Expert"],
                };
            } else if (lowerText.includes("contact") || lowerText.includes("consultant") || lowerText.includes("speak")) {
                botResponse = {
                    id: (Date.now() + 1).toString(),
                    text: "To connect you with the right expert, could you please share your industry and current business challenge?",
                    sender: "bot",
                    options: ["Retail/F&B - Scaling", "Tech/Services - Funding", "Manufacturing - Efficiency", "Other"],
                };
            } else if (lowerText.includes("back to menu")) {
                botResponse = {
                    id: (Date.now() + 1).toString(),
                    text: "How else can we assist you today?",
                    sender: "bot",
                    options: ["Scaling Strategies", "Government Grants", "AI Integration", "Contact Consultant"],
                };
            } else if (
                // Qualification Responses - Ensure we don't match "< $1m"
                (lowerText.includes("$1m") && !lowerText.includes("<")) ||
                lowerText.includes("> $10m") ||
                lowerText.includes("yes") ||
                lowerText.includes("retail") ||
                lowerText.includes("tech") ||
                lowerText.includes("manufacturing")
            ) {
                botResponse = {
                    id: (Date.now() + 1).toString(),
                    text: "Thank you. Based on your profile, you qualify for a priority consultation with our Principal Consultant, Frederick Tan. You can reach him directly at +65 9862 8906 (WhatsApp preferred) or book a discovery session below.",
                    sender: "bot",
                    options: ["Book Discovery Session", "Back to Menu"],
                };
            } else if (lowerText.includes("no") || lowerText.includes("<")) {
                botResponse = {
                    id: (Date.now() + 1).toString(),
                    text: "Thank you for sharing. We have some excellent resources for early-stage growth. I recommend checking out our Insights page.",
                    sender: "bot",
                    options: ["View Insights", "Back to Menu"],
                };
            } else {
                botResponse = {
                    id: (Date.now() + 1).toString(),
                    text: "I understand. To serve you better, could you specify which area you need assistance with?",
                    sender: "bot",
                    options: ["Scaling Strategies", "Government Grants", "AI Integration", "Contact Consultant"],
                };
            }

            setIsTyping(false);
            setMessages((prev) => [...prev, botResponse]);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[350px] overflow-hidden rounded-2xl border bg-background shadow-2xl sm:w-[400px]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
                            <div className="flex items-center space-x-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                    <Bot className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">FT Synergist AI</h3>
                                    <p className="text-xs text-primary-foreground/80">Online</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-primary-foreground/80 hover:text-white">
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-secondary/5">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "flex w-full",
                                        msg.sender === "user" ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                                            msg.sender === "user"
                                                ? "bg-primary text-primary-foreground rounded-br-none"
                                                : "bg-card border shadow-sm rounded-bl-none"
                                        )}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-card border shadow-sm rounded-2xl rounded-bl-none px-4 py-3">
                                        <div className="flex space-x-1">
                                            <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]"></div>
                                            <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]"></div>
                                            <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Options */}
                        {messages[messages.length - 1].sender === "bot" && messages[messages.length - 1].options && (
                            <div className="px-4 pb-2">
                                <div className="flex flex-wrap gap-2">
                                    {messages[messages.length - 1].options?.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleSendMessage(option)}
                                            className="rounded-full border bg-background px-3 py-1 text-xs font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <div className="border-t p-3 bg-background">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSendMessage(inputValue);
                                }}
                                className="flex items-center space-x-2"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 rounded-full border bg-secondary/10 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90"
            >
                {isOpen ? <ChevronDown className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
            </motion.button>
        </div>
    );
}
