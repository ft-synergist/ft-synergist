"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft } from "lucide-react";
import { sendEmail } from "@/app/actions";

interface PersonaQuizModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type QuestionId = 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'Q5' | 'Q6' | 'Q7' | 'RESULT';
type PersonaType =
    | 'The Legacy Builder'
    | 'The Empire Builder'
    | 'The Funded Disruptor'
    | 'The Orchestrator'
    | 'The Technical Visionary'
    | 'The Market Maker'
    | 'The International Entrant';

interface Answers {
    q1?: string;
    q2?: string;
    q3?: string;
    q4?: string; // Revenue
    q5?: string; // Location
    q6?: string; // Timeline
    name?: string;
    company?: string;
    email?: string;
    phase1Persona?: string;
}

export default function PersonaQuizModal({ isOpen, onClose }: PersonaQuizModalProps) {
    const [step, setStep] = useState<QuestionId>('Q1');
    const [answers, setAnswers] = useState<Answers>({});
    const [history, setHistory] = useState<QuestionId[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [calculatedPersona, setCalculatedPersona] = useState<PersonaType>('The Market Maker');

    // Reset state when closing
    const handleClose = () => {
        setStep('Q1');
        setAnswers({});
        setHistory([]);
        setIsLoading(false);
        onClose();
    };

    const navigateTo = (nextStep: QuestionId) => {
        setHistory(prev => [...prev, step]);
        setStep(nextStep);
    };

    const goBack = () => {
        if (history.length === 0) return;
        const prevStep = history[history.length - 1];
        setHistory(prev => prev.slice(0, -1));
        setStep(prevStep);
    };

    const handleAnswer = (questionId: QuestionId, answer: string, nextStep?: QuestionId, persona?: PersonaType) => {
        setAnswers(prev => ({ ...prev, [questionId.toLowerCase()]: answer }));

        // If a persona is directly assigned (Phase 1 logic), store it temporarily
        // We will store it in a way that we can retrieve it later, but the override logic comes at the end.
        if (persona) {
            // We use a temporary answer field or just rely on the path taken.
            // For simplicity, let's store the "Phase 1 Persona" in the answers for now.
            setAnswers(prev => ({ ...prev, phase1Persona: persona }));
        }

        if (nextStep) {
            navigateTo(nextStep);
        }
    };

    const calculateResult = () => {
        let finalPersona = answers['phase1Persona'] as PersonaType;

        // Fallback or complex logic for standard paths if not set directly
        // Q3 paths set personas too
        if (!finalPersona && answers.q3) {
            if (answers.q3 === 'The Chaos') finalPersona = 'The Orchestrator';
            if (answers.q3 === 'The Role') finalPersona = 'The Technical Visionary';
            if (answers.q3 === 'The Strategy') finalPersona = 'The Market Maker';
        }

        // --- OVERRIDE LOGIC ---
        // IF Q5 (HQ Location) = "International" -> Force Assign: "The International Entrant"
        if (answers.q5 === 'International (Outside Singapore)') {
            finalPersona = 'The International Entrant';
        }

        return finalPersona;
    };

    const handleFinalSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const persona = calculateResult();
        setCalculatedPersona(persona);

        // Prepare Tags
        const tags = [];
        if (answers.q4 === '>$100M') tags.push("VIP");
        if (answers.q5 === 'Singapore' && (answers.q4 === 'S$1M - S$5M' || answers.q4 === 'S$5M - S$25M' || answers.q4 === 'S$25M - S$100M')) tags.push("EDG Potential");
        if (answers.q6 === 'Immediately (Priority)') tags.push("Hot Lead");

        // Send to CRM (simulated via email for now)
        const formData = {
            subject: `New Persona Quiz Lead: ${persona}`,
            text: `
Name: ${answers.name}
Company: ${answers.company}
Email: ${answers.email}
Persona: ${persona}
Revenue: ${answers.q4}
Location: ${answers.q5}
Timeline: ${answers.q6}
Tags: ${tags.join(', ')}
            `,
            html: `
<h3>New Persona Quiz Lead</h3>
<p><strong>Persona:</strong> ${persona}</p>
<p><strong>Tags:</strong> ${tags.join(', ')}</p>
<hr/>
<p><strong>Name:</strong> ${answers.name}</p>
<p><strong>Company:</strong> ${answers.company}</p>
<p><strong>Email:</strong> ${answers.email}</p>
<p><strong>Revenue:</strong> ${answers.q4}</p>
<p><strong>Location:</strong> ${answers.q5}</p>
<p><strong>Timeline:</strong> ${answers.q6}</p>
            `,
            email: answers.email || 'lead@ftsynergist.com'
        };

        await sendEmail(formData);

        setIsLoading(false);
        setStep('RESULT');
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-[#0A0F1C] border border-white/10 text-white shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex h-16 items-center justify-between border-b border-white/10 px-6">
                            <div className="flex items-center gap-2">
                                {step !== 'Q1' && step !== 'RESULT' && (
                                    <button onClick={goBack} className="rounded-full p-2 text-gray-400 hover:bg-white/10 hover:text-white">
                                        <ArrowLeft className="h-5 w-5" />
                                    </button>
                                )}
                                <span className="text-sm font-medium text-gray-400">
                                    {step === 'RESULT' ? 'Your Roadmap' : 'Growth Strategy Assessment'}
                                </span>
                            </div>
                            <button onClick={handleClose} className="rounded-full p-2 text-gray-400 hover:bg-white/10 hover:text-white">
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="p-8">
                            {/* Q1 */}
                            {step === 'Q1' && (
                                <StepQuestion
                                    question="What is your primary strategic focus for the next 12-24 months?"
                                    options={[
                                        { label: "Exit or Transition (Sell or step back)", action: () => handleAnswer('Q1', 'Exit or Transition', 'Q4', 'The Legacy Builder') },
                                        { label: "Inorganic Growth (Acquire other companies)", action: () => handleAnswer('Q1', 'Inorganic Growth', 'Q4', 'The Empire Builder') },
                                        { label: "Stabilization (Fix operations first)", action: () => handleAnswer('Q1', 'Stabilization', 'Q3') },
                                        { label: "Aggressive Scale (Capture market share)", action: () => handleAnswer('Q1', 'Aggressive Scale', 'Q2') },
                                    ]}
                                />
                            )}

                            {/* Q2 */}
                            {step === 'Q2' && (
                                <StepQuestion
                                    question="Which statement describes your position?"
                                    options={[
                                        { label: "Early Stage (Need to prove model/secure funding)", action: () => handleAnswer('Q2', 'Early Stage', 'Q4', 'The Funded Disruptor') },
                                        { label: "Established (Proven revenue, need to go bigger)", action: () => handleAnswer('Q2', 'Established', 'Q3') },
                                    ]}
                                />
                            )}

                            {/* Q3 */}
                            {step === 'Q3' && (
                                <StepQuestion
                                    question="What is holding you back right now?"
                                    options={[
                                        { label: "The Chaos (Systems are breaking, business feels fragile)", action: () => handleAnswer('Q3', 'The Chaos', 'Q4', 'The Orchestrator') },
                                        { label: "The Role (Stuck in management weeds, missing genius zone)", action: () => handleAnswer('Q3', 'The Role', 'Q4', 'The Technical Visionary') },
                                        { label: "The Strategy (Operations fine, need smarter strategy)", action: () => handleAnswer('Q3', 'The Strategy', 'Q4', 'The Market Maker') },
                                    ]}
                                />
                            )}

                            {/* Q4 */}
                            {step === 'Q4' && (
                                <StepQuestion
                                    question="To customize your roadmap, what is your current revenue band?"
                                    options={[
                                        { label: "< S$1M", action: () => handleAnswer('Q4', '< S$1M', 'Q5') },
                                        { label: "S$1M - S$5M", action: () => handleAnswer('Q4', 'S$1M - S$5M', 'Q5') },
                                        { label: "S$5M - S$25M", action: () => handleAnswer('Q4', 'S$5M - S$25M', 'Q5') },
                                        { label: "S$25M - S$100M", action: () => handleAnswer('Q4', 'S$25M - S$100M', 'Q5') },
                                        { label: "S$100M", action: () => handleAnswer('Q4', 'S$100M', 'Q5') },
                                    ]}
                                />
                            )}

                            {/* Q5 */}
                            {step === 'Q5' && (
                                <StepQuestion
                                    question="Where is your HQ primarily based?"
                                    options={[
                                        { label: "Singapore", action: () => handleAnswer('Q5', 'Singapore', 'Q6') },
                                        { label: "International (Outside Singapore)", action: () => handleAnswer('Q5', 'International (Outside Singapore)', 'Q6') },
                                    ]}
                                />
                            )}

                            {/* Q6 */}
                            {step === 'Q6' && (
                                <StepQuestion
                                    question="When are you looking to execute this strategy?"
                                    options={[
                                        { label: "Immediately (Priority)", action: () => handleAnswer('Q6', 'Immediately (Priority)', 'Q7') },
                                        { label: "Next 3 Months", action: () => handleAnswer('Q6', 'Next 3 Months', 'Q7') },
                                        { label: "Just Researching", action: () => handleAnswer('Q6', 'Just Researching', 'Q7') },
                                    ]}
                                />
                            )}

                            {/* Q7: Identity */}
                            {step === 'Q7' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold">Unlock My Persona</h2>
                                    <p className="text-gray-400">Final Step: Where should we send your customized roadmap?</p>
                                    <form onSubmit={handleFinalSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <input
                                                required
                                                placeholder="Name"
                                                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                                value={answers.name || ''}
                                                onChange={(e) => setAnswers(prev => ({ ...prev, name: e.target.value }))}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <input
                                                required
                                                placeholder="Company Name"
                                                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                                value={answers.company || ''}
                                                onChange={(e) => setAnswers(prev => ({ ...prev, company: e.target.value }))}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <input
                                                required
                                                type="email"
                                                placeholder="Work Email"
                                                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                                value={answers.email || ''}
                                                onChange={(e) => setAnswers(prev => ({ ...prev, email: e.target.value }))}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full rounded-lg bg-[#8F801B] py-3 font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-[#7a6d17] disabled:opacity-50"
                                        >
                                            {isLoading ? 'Analyzing...' : 'Unlock My Persona'}
                                        </button>
                                    </form>
                                </div>
                            )}

                            {/* RESULT */}
                            {step === 'RESULT' && (
                                <ResultCard
                                    persona={calculatedPersona}
                                    revenueBand={answers.q4 || ''}
                                    name={answers.name || ''}
                                    onBook={() => window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ10AGX_rEknl0J6WvWhScBFx2JXg6UZ0IKZIgHP7-sHFa0gy2WM_1KUR5eVStUACnbWx356zhbB", "_blank")}
                                />
                            )}
                        </div>

                        {/* Progress Bar (approximate) */}
                        {step !== 'RESULT' && (
                            <div className="h-1 w-full bg-white/5">
                                <motion.div
                                    className="h-full bg-[#8F801B]"
                                    initial={{ width: 0 }}
                                    animate={{
                                        width: step === 'Q1' ? '14%' :
                                            step === 'Q2' ? '28%' :
                                                step === 'Q3' ? '42%' :
                                                    step === 'Q4' ? '57%' :
                                                        step === 'Q5' ? '71%' :
                                                            step === 'Q6' ? '85%' :
                                                                '100%'
                                    }}
                                />
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

function StepQuestion({ question, options }: { question: string, options: { label: string, action: () => void }[] }) {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">{question}</h2>
            <div className="grid gap-3">
                {options.map((opt, idx) => (
                    <button
                        key={idx}
                        onClick={opt.action}
                        className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 text-left transition-all hover:border-[#8F801B] hover:bg-white/10"
                    >
                        <span className="text-lg">{opt.label}</span>
                        <ArrowRight className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100 text-[#8F801B]" />
                    </button>
                ))}
            </div>
        </div>
    );
}

function ResultCard({ persona, revenueBand, name, onBook }: { persona: PersonaType, revenueBand: string, name: string, onBook: () => void }) {
    const content = {
        'The Market Maker': {
            headline: "The Market Maker",
            copy: "You are poised for exponential growth. Your focus is evolving from founder-led magic to scalable market domination."
        },
        'The Funded Disruptor': {
            headline: "The Funded Disruptor",
            copy: "You have traction and capital. Your focus is turning lightning in a bottle into a predictable revenue engine."
        },
        'The Orchestrator': {
            headline: "The Orchestrator",
            copy: "You are drowning in opportunity. Your focus is building the operational backbone to stop the business from breaking under its own weight."
        },
        'The Technical Visionary': {
            headline: "The Technical Visionary",
            copy: "You built this on product genius, not management. Your focus is installing the leadership layer so you can return to your zone of genius."
        },
        'The Legacy Builder': {
            headline: "The Legacy Builder",
            copy: "You are maximizing lifetime value. Your focus is detaching your identity from the business to secure a premium exit."
        },
        'The Empire Builder': {
            headline: "The Empire Builder",
            copy: "You scale by acquisition. Your focus is strategic consolidation and the seamless integration of new assets."
        },
        'The International Entrant': {
            headline: "The International Entrant",
            copy: "Entering the Asian market requires precision. We specialize in navigating the regulatory and cultural landscape to ensure a successful landing."
        }
    }[persona];

    return (
        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <span className="inline-block rounded-full bg-[#8F801B]/20 px-3 py-1 text-sm text-[#8F801B] mb-4">
                    Your Persona Profile
                </span>
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
                    {content.headline}
                </h2>
                <p className="text-lg text-gray-300 max-w-lg mx-auto leading-relaxed">
                    {content.copy}
                </p>
            </div>

            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                <p className="text-lg mb-6">
                    Hello <span className="font-semibold text-white">{name}</span>, generic advice won&apos;t work for a {content.headline}.
                    We have reserved a 60-Minute Growth Sprint to review your <span className="text-[#8F801B]">{revenueBand}</span> roadmap.
                </p>
                <button
                    onClick={onBook}
                    className="w-full rounded-full bg-[#8F801B] py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#7a6d17]"
                >
                    Book Your Sprint Now
                </button>
            </div>
        </div>
    );
}
