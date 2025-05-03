"use client";

import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

interface ProjectButtonProps {
  children: React.ReactNode;
  image?: string;
  description?: string;
  technologies?: string[];
}

export default function ProjectButton({ children, image, description, technologies }: ProjectButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <button onClick={openModal} className="w-full">
      <div className="bg-[#FDFBCB] text-[#227BB7] p-3 rounded-lg hover:transform hover:scale-102 transition-transform duration-300 text-left">
        {children}
      </div>
    </button>

    {isModalOpen && (
        <ProjectModal
            title={children}
            image={image}
            description={description}
            technologies={technologies}
            onClose={closeModel}
        />
    )}
    </>
  );
}