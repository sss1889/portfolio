'use client';

import React from 'react';
import { useScrollFocus } from '@/hooks/useScrollFocus';

interface SectionCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'teal' | 'pink';
}

export default function SectionCard({
  title,
  children,
  className = '',
  glowColor = 'blue'
}: SectionCardProps) {
  const { ref, isInView } = useScrollFocus({ threshold: 0.2 });

  const glowStyles = {
    blue: 'border-neon-blue/30 hover:border-neon-blue/70 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-neon-blue',
    purple: 'border-neon-purple/30 hover:border-neon-purple/70 shadow-[0_0_15px_rgba(189,0,255,0.2)] hover:shadow-neon-purple',
    teal: 'border-neon-teal/30 hover:border-neon-teal/70 shadow-[0_0_15px_rgba(0,255,195,0.2)] hover:shadow-neon-teal',
    pink: 'border-neon-pink/30 hover:border-neon-pink/70 shadow-[0_0_15px_rgba(255,0,255,0.2)] hover:shadow-neon-pink',
  };

  const focusedGlowStyles = {
    blue: 'border-neon-blue/70 shadow-neon-blue',
    purple: 'border-neon-purple/70 shadow-neon-purple',
    teal: 'border-neon-teal/70 shadow-neon-teal',
    pink: 'border-neon-pink/70 shadow-neon-pink',
  };

  const titleColors = {
    blue: 'text-neon-blue',
    purple: 'text-neon-purple',
    teal: 'text-neon-teal',
    pink: 'text-neon-pink',
  };

  return (
    <div
      ref={ref}
      className={`
        bg-bg-dark/80 border-2
        ${isInView ? focusedGlowStyles[glowColor] : glowStyles[glowColor]}
        rounded-lg p-6 md:p-8 backdrop-blur-sm
        transition-all duration-500
        ${isInView ? 'scale-[1.01] opacity-100' : 'opacity-80'}
        ${className}
      `}
    >
      {title && (
        <h3 className={`text-base md:text-lg font-pixel ${titleColors[glowColor]} mb-5 md:mb-6 transition-all duration-500 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-70'}`}>
          {title}
        </h3>
      )}
      <div className={`text-text-dim leading-relaxed transition-all duration-500 delay-100 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-70'}`}>
        {children}
      </div>
    </div>
  );
}
