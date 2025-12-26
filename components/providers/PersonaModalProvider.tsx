"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import PersonaQuizModal from "@/components/PersonaQuizModal";

interface PersonaModalContextType {
    openModal: () => void;
    closeModal: () => void;
}

const PersonaModalContext = createContext<PersonaModalContextType | undefined>(undefined);

export function PersonaModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <PersonaModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <PersonaQuizModal isOpen={isOpen} onClose={closeModal} />
        </PersonaModalContext.Provider>
    );
}

export function usePersonaModal() {
    const context = useContext(PersonaModalContext);
    if (context === undefined) {
        throw new Error("usePersonaModal must be used within a PersonaModalProvider");
    }
    return context;
}
