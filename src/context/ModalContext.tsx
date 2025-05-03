'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ModalContextType {
    isAnyModalOpen: boolean;
    setIsAnyModalOpen: (isOpen: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: {children: ReactNode}) {
    const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isAnyModalOpen, setIsAnyModalOpen }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}