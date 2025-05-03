"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';

interface ProjectModalProps {
    title: React.ReactNode;
    image?: string;
    description?: string;
    technologies?: string[];
    onClose: () => void;
}

export default function ProjectModal({ title, image, description, technologies, onClose }: ProjectModalProps) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent)=> {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        document.body.style.overflow = 'hidden'; // スクロールを無効化

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto'; // スクロールを有効化
        };
    }, [onClose]);

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 bg-opacity-50'
            onClick={handleBackdropClick}
        >
            <div className='min-h-[80vh] w-[80%] rounded-lg bg-[#EFF3F6] p-10'>
                <h2 className='justify-content mb-4 text-2xl font-bold border-l-4 border-[#EFF3F6] pl-2 text-[#227BB7]'>
                    {title}
                </h2>
            </div>
        </div>
    );
};
