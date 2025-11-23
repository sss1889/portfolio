"use client";

import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import { StaticImageData } from 'next/image';

interface ProjectButtonProps {
  children: React.ReactNode;
  image?: string | StaticImageData;
  images?: (string | StaticImageData)[];
  description?: string;
  technologies?: string[];
  frameworks?: string[];
  methodologies?: string[];
}

export default function ProjectButton({ children, image, images, description, technologies, frameworks, methodologies}: ProjectButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <button
      onClick={openModal}
      className="w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-bg-dark/60 text-white p-4 rounded-lg border-2 border-neon-blue/30
      hover:border-neon-blue/70 hover:shadow-neon-blue
      active:scale-[0.98]
      transition-all duration-300 text-left relative overflow-hidden backdrop-blur-sm">
        <div className="font-mono font-semibold text-sm md:text-base relative z-10">
          {children}
        </div>

        {/* Animated corner decoration */}
        <div className={`absolute top-0 right-0 w-16 h-16 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-50'}`}>
          <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-neon-blue to-transparent"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-neon-blue to-transparent"></div>
        </div>

        {/* Arrow icon */}
        <div className={`absolute bottom-2 right-2 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Scanline effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </button>

    {isModalOpen && (
        <ProjectModal
            title={children}
            image={image}
            images={images}
            description={description}
            technologies={technologies}
            frameworks={frameworks}
            methodologies={methodologies}
            onClose={closeModel}
        />
    )}
    </>
  );
}