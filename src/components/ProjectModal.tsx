"use client";

import React, { useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useModal } from '../context/ModalContext';

interface ProjectModalProps {
    title: React.ReactNode;
    image?: string | StaticImageData;
    images?: (string | StaticImageData)[];
    description?: string;
    technologies?: string[];
    frameworks?: string[];
    methodologies?: string[];
    onClose: () => void;
}

export default function ProjectModal({ title, image, images, description, technologies, frameworks, methodologies, onClose }: ProjectModalProps) {
    const { setIsAnyModalOpen } = useModal();

    useEffect(() => {
        setIsAnyModalOpen(true);

        const handleKeyDown = (event: KeyboardEvent)=> {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            setIsAnyModalOpen(false);
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [onClose, setIsAnyModalOpen]);

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className='fixed h-full inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md'
            onClick={handleBackdropClick}
        >
            <div className='max-h-[85vh] w-[90%] max-w-4xl rounded-lg bg-bg-dark/95 border-2 border-neon-purple/50 shadow-neon-purple p-8 md:p-10 overflow-y-auto backdrop-blur-sm relative'>
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded border-2 border-neon-pink/70 bg-bg-dark/80 text-neon-pink hover:bg-neon-pink/20 hover:border-neon-pink hover:shadow-neon-pink transition-all z-10 group"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* ESC hint */}
                <div className="absolute top-4 left-4 text-xs text-text-dim font-mono opacity-50">
                    Press <span className="text-neon-teal">ESC</span> to close
                </div>

                {/* Title */}
                <h2 className='mb-6 text-xl md:text-2xl font-pixel text-neon-blue border-l-4 border-neon-blue pl-3'>
                    {title}
                </h2>

                {/* Images */}
                {(image || images) && (
                    <div className='mb-6 flex justify-center gap-4 flex-wrap'>
                        {images ? (
                            images.map((img, index) => (
                                <div key={index} className="border-2 border-neon-teal/30 rounded-lg p-2 hover:border-neon-teal/70 transition-all">
                                    {title === '配置最適化アルゴリズム開発' ? (
                                        <Image
                                            src={img}
                                            alt={`${title} ${index + 1}`}
                                            width={450}
                                            height={250}
                                            className='rounded-lg'
                                        />
                                    ) : title === '需要予測&在庫管理システム開発' ? (
                                        <Image
                                            src={img}
                                            alt={`${title} ${index + 1}`}
                                            width={400}
                                            height={250}
                                            className='rounded-lg'
                                        />
                                    ) : (
                                        <Image
                                            src={img}
                                            alt={`${title} ${index + 1}`}
                                            width={250}
                                            height={450}
                                            className='rounded-lg'
                                        />
                                    )}
                                </div>
                            ))
                        ) : image && (
                            <div className="border-2 border-neon-teal/30 rounded-lg p-2 hover:border-neon-teal/70 transition-all">
                                {title === '配置最適化アルゴリズム開発' ? (
                                    <Image
                                        src={image}
                                        alt={title as string}
                                        width={450}
                                        height={250}
                                        className='rounded-lg'
                                    />
                                ) : title === '需要予測&在庫管理システム開発' ? (
                                    <Image
                                        src={image}
                                        alt={title as string}
                                        width={800}
                                        height={500}
                                        className='rounded-lg'
                                    />
                                ) : (
                                    <Image
                                        src={image}
                                        alt={title as string}
                                        width={250}
                                        height={450}
                                        className='rounded-lg'
                                    />
                                )}
                            </div>
                        )}
                    </div>
                )}

                {/* Description */}
                {description && (
                    <div className='mb-6 bg-bg-dark/40 border border-neon-blue/30 rounded-lg p-4'>
                        <h3 className='text-base md:text-lg font-mono font-bold text-neon-teal mb-3'>概要</h3>
                        <p className='text-text-dim leading-relaxed text-sm md:text-base'>{description}</p>
                    </div>
                )}

                {/* Methodologies */}
                {methodologies && (
                    <div className='mb-6 bg-bg-dark/40 border border-neon-purple/30 rounded-lg p-4'>
                        <h3 className='text-base md:text-lg font-mono font-bold text-neon-purple mb-3'>使用手法</h3>
                        <ul className='space-y-2'>
                            {methodologies.map((methodology, index) => (
                                <li key={index} className='flex items-start gap-2 text-text-dim text-sm md:text-base'>
                                    <span className='text-neon-purple mt-1'>▹</span>
                                    <span>{methodology}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Technologies */}
                {technologies && (
                    <div className='mb-6 bg-bg-dark/40 border border-neon-teal/30 rounded-lg p-4'>
                        <h3 className='text-base md:text-lg font-mono font-bold text-neon-teal mb-3'>使用技術</h3>
                        <ul className='space-y-2'>
                            {technologies.map((tech, index) => (
                                <li key={index} className='flex items-start gap-2 text-text-dim text-sm md:text-base'>
                                    <span className='text-neon-teal mt-1'>▹</span>
                                    <span>{tech}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Frameworks */}
                {frameworks && (
                    <div className='mb-6 bg-bg-dark/40 border border-neon-pink/30 rounded-lg p-4'>
                        <h3 className='text-base md:text-lg font-mono font-bold text-neon-pink mb-3'>使用フレームワーク・ライブラリ</h3>
                        <ul className='space-y-2'>
                            {frameworks.map((framework, index) => (
                                <li key={index} className='flex items-start gap-2 text-text-dim text-sm md:text-base'>
                                    <span className='text-neon-pink mt-1'>▹</span>
                                    <span>{framework}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Decorative corner lines */}
                <div className="absolute bottom-4 left-4 w-8 h-8">
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-neon-blue to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-neon-blue to-transparent"></div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8">
                    <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-neon-purple to-transparent"></div>
                    <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-neon-purple to-transparent"></div>
                </div>
            </div>
        </div>
    );
};
