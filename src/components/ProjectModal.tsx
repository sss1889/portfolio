"use client";

import React, { useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useModal } from '../context/ModalContext';

interface ProjectModalProps {
    title: React.ReactNode;
    image?: string | StaticImageData;
    description?: string;
    technologies?: string[];
    frameworks?: string[];
    methodologies?: string[];
    onClose: () => void;
}

export default function ProjectModal({ title, image, description, technologies,frameworks, methodologies, onClose }: ProjectModalProps) {
    const { setIsAnyModalOpen } = useModal();
    
    useEffect(() => {
        setIsAnyModalOpen(true);

        const handleKeyDown = (event: KeyboardEvent)=> {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        document.body.style.overflow = 'hidden'; // スクロールを無効化

        return () => {
            setIsAnyModalOpen(false);
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto'; // スクロールを有効化
        };
    }, [onClose, setIsAnyModalOpen]);

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className='fixed h-full inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm'
            onClick={handleBackdropClick}
        >
            <div className='max-h-[80vh] w-[80%] rounded-lg bg-[#EFF3F6] p-10 overflow-y-auto'>
                <h2 className='justify-content mb-4 text-2xl font-bold border-l-4 border-[#227BB7] pl-2 text-[#227BB7]'>
                    {title}
                </h2>
                {image && (
                    <div className='mb-4 flex justify-center'>
                        {title === '配置最適化アルゴリズム開発' ? (
                            <Image
                                src={image}
                                alt={title as string}
                                width={450}
                                height={250}
                                className='rounded-lg border-2 p-2'
                            />
                        ) : title === '需要予測&在庫管理システム開発' ? (
                            <Image
                                src={image}
                                alt={title as string}
                                width={800}
                                height={500}
                                className='rounded-lg shadow-md'
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
                {description && (
                    <div className='mb-4'>
                        <h3 className='text-lg font-bold text-[#227BB7]'>概要</h3>
                        <p className='text-gray-700'>{description}</p>
                    </div>
                )}
                {methodologies && (
                    <div className='mb-4 border-t-2 border-[#227BB7] pt-4'>
                        <h3 className='text-lg font-bold text-[#227BB7]'>使用手法</h3>
                        <ul className='list-disc pl-5'>
                            {methodologies.map((methodology, index) => (
                                <li key={index} className='text-black'>
                                    {methodology}
                                </li>
                            ))}
                        </ul>   
                    </div>
                )}
                {technologies && (
                    <div className='mb-4 border-t-2 border-[#227BB7] pt-4'>
                        <h3 className='text-lg font-bold text-[#227BB7]'>使用技術</h3>
                        <ul className='list-disc pl-5'>
                            {technologies.map((tech, index) => (
                                <li key={index} className='text-black'>
                                    {tech}
                                </li>
                            ))}
                        </ul>   
                    </div>
                )}
                {frameworks && (
                    <div className='mb-4 border-t-2 border-[#227BB7] pt-4'>
                        <h3 className='text-lg font-bold text-[#227BB7]'>使用フレームワーク・ライブラリ</h3>
                        <ul className='list-disc pl-5'>
                            {frameworks.map((framework, index) => (
                                <li key={index} className='text-black'>
                                    {framework}
                                </li>
                            ))}
                        </ul>   
                    </div>
                )}
            </div>
        </div>
    );
};
