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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <button onClick={openModal} className="w-full group">
      <div className="bg-[#FDFBCB] text-[#227BB7] p-3 rounded-lg border-2 border-[#227BB7]/10 shadow-md 
      hover:shadow-lg hover:bg-[#f5f3b8] hover:border-[#227BB7]/30 hover:-translate-y-1 
      active:translate-y-0 active:shadow-sm 
      transition-all duration-300 text-left relative overflow-hidden">
        <div className="font-semibold">{children}</div>
        <div className="absolute bottom-0 right-0 w-6 h-full flex items-center justify-center opacity-70 bg-[#227BB7]/10 rounded-tl-lg rounded-bl-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#227BB7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
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