"use client";

import React, { useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useProject } from '@/context/ProjectContext';

interface ProjectCardProps {
  children: React.ReactNode;
  image?: string | StaticImageData;
  images?: (string | StaticImageData)[];
  description?: string;
  technologies?: string[];
  frameworks?: string[];
  methodologies?: string[];
}

export default function ProjectCard({
  children,
  image,
  images,
  description,
  technologies,
  frameworks,
  methodologies
}: ProjectCardProps) {
  const { expandedProject, setExpandedProject } = useProject();

  const projectId = typeof children === 'string' ? children : String(children);
  const isExpanded = expandedProject === projectId;

  const toggleExpand = () => {
    setExpandedProject(isExpanded ? null : projectId);
  };

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        setExpandedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExpanded, setExpandedProject]);

  return (
    <div className="relative z-10">
      {/* Card Button */}
      <button
        onClick={toggleExpand}
        className={`w-full group text-left bg-bg-dark/60 border-2 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 ${
          isExpanded
            ? 'border-neon-purple/70 shadow-neon-purple'
            : 'border-neon-blue/30 hover:border-neon-blue/70 hover:shadow-neon-blue'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="font-mono font-semibold text-sm md:text-base text-white group-hover:text-neon-blue transition-colors flex-1">
            {children}
          </div>
          <div className="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-neon-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-16 h-16 opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-neon-blue to-transparent"></div>
          <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-neon-blue to-transparent"></div>
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-4 bg-bg-dark/95 border-2 border-neon-purple/50 shadow-neon-purple rounded-lg p-6 md:p-8 relative animate-in slide-in-from-top-4 duration-500">
          {/* Close button */}
          <button
            onClick={toggleExpand}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded border-2 border-neon-pink/70 bg-bg-dark/80 text-neon-pink hover:bg-neon-pink/20 hover:border-neon-pink hover:shadow-neon-pink transition-all z-10 group"
            aria-label="Close"
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
          <h2 className="mb-6 mt-8 text-xl md:text-2xl font-pixel text-neon-blue border-l-4 border-neon-blue pl-3">
            {children}
          </h2>

          {/* Images */}
          {(image || images) && (
            <div className="mb-6 flex justify-center gap-4 flex-wrap">
              {images ? (
                images.map((img, index) => (
                  <div key={index} className="border-2 border-neon-teal/30 rounded-lg p-2 hover:border-neon-teal/70 transition-all">
                    <Image
                      src={img}
                      alt={`${children} ${index + 1}`}
                      width={400}
                      height={250}
                      className="rounded-lg"
                    />
                  </div>
                ))
              ) : image && (
                <div className="border-2 border-neon-teal/30 rounded-lg p-2 hover:border-neon-teal/70 transition-all">
                  <Image
                    src={image}
                    alt={children as string}
                    width={450}
                    height={250}
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>
          )}

          {/* Description */}
          {description && (
            <div className="mb-6 bg-bg-dark/40 border border-neon-blue/30 rounded-lg p-4">
              <h4 className="text-base md:text-lg font-mono font-bold text-neon-teal mb-3">概要</h4>
              <p className="text-text-dim leading-relaxed text-sm md:text-base">{description}</p>
            </div>
          )}

          {/* Methodologies */}
          {methodologies && (
            <div className="mb-6 bg-bg-dark/40 border border-neon-purple/30 rounded-lg p-4">
              <h4 className="text-base md:text-lg font-mono font-bold text-neon-purple mb-3">使用手法</h4>
              <ul className="space-y-2">
                {methodologies.map((methodology, index) => (
                  <li key={index} className="flex items-start gap-2 text-text-dim text-sm md:text-base">
                    <span className="text-neon-purple mt-1">▹</span>
                    <span>{methodology}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {technologies && (
            <div className="mb-6 bg-bg-dark/40 border border-neon-teal/30 rounded-lg p-4">
              <h4 className="text-base md:text-lg font-mono font-bold text-neon-teal mb-3">使用技術</h4>
              <ul className="space-y-2">
                {technologies.map((tech, index) => (
                  <li key={index} className="flex items-start gap-2 text-text-dim text-sm md:text-base">
                    <span className="text-neon-teal mt-1">▹</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Frameworks */}
          {frameworks && (
            <div className="mb-6 bg-bg-dark/40 border border-neon-pink/30 rounded-lg p-4">
              <h4 className="text-base md:text-lg font-mono font-bold text-neon-pink mb-3">
                使用フレームワーク・ライブラリ
              </h4>
              <ul className="space-y-2">
                {frameworks.map((framework, index) => (
                  <li key={index} className="flex items-start gap-2 text-text-dim text-sm md:text-base">
                    <span className="text-neon-pink mt-1">▹</span>
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
          <div className="absolute top-4 right-16 w-8 h-8">
            <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-neon-purple to-transparent"></div>
            <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-neon-purple to-transparent"></div>
          </div>
        </div>
      )}
    </div>
  );
}
