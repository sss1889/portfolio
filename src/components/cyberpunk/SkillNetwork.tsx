'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Skill {
  name: string;
  level: number;
  icon?: StaticImageData | string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

interface SkillNetworkProps {
  skills: Skill[];
}

export default function SkillNetwork({ skills }: SkillNetworkProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categoryColors = {
    frontend: 'neon-blue',
    backend: 'neon-purple',
    tools: 'neon-teal',
    other: 'neon-pink',
  };

  const positions = [
    { x: 50, y: 20 },
    { x: 20, y: 40 },
    { x: 80, y: 40 },
    { x: 35, y: 60 },
    { x: 65, y: 60 },
    { x: 50, y: 80 },
    { x: 15, y: 75 },
    { x: 85, y: 75 },
  ];

  return (
    <div className="relative h-[400px] bg-bg-dark/50 rounded-lg border border-neon-purple/30 p-4 overflow-hidden">
      <h3 className="text-sm font-pixel text-neon-purple mb-4">Skill Network</h3>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {skills.map((skill, i) => {
          if (i === skills.length - 1) return null;
          const start = positions[i] || { x: 50, y: 50 };
          const end = positions[i + 1] || { x: 50, y: 50 };
          return (
            <line
              key={`line-${i}`}
              x1={`${start.x}%`}
              y1={`${start.y}%`}
              x2={`${end.x}%`}
              y2={`${end.y}%`}
              stroke="rgba(0, 240, 255, 0.2)"
              strokeWidth="1"
              className="transition-all duration-300"
            />
          );
        })}
      </svg>

      {/* Skill nodes */}
      {skills.slice(0, 8).map((skill, index) => {
        const pos = positions[index] || { x: 50, y: 50 };
        const color = categoryColors[skill.category];
        const isHovered = hoveredSkill === skill.name;

        return (
          <div
            key={skill.name}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div
              className={`
                w-12 h-12 rounded-full border-2 border-${color}
                bg-bg-dark/80 backdrop-blur-sm
                flex items-center justify-center
                transition-all duration-300
                ${isHovered ? `scale-125 shadow-${color}` : 'shadow-[0_0_10px_rgba(0,240,255,0.3)]'}
                hover:scale-125
              `}
            >
              {skill.icon && (
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={24}
                  height={24}
                  className="pixelated"
                />
              )}
            </div>

            {/* Tooltip */}
            <div
              className={`
                absolute top-full mt-2 left-1/2 transform -translate-x-1/2
                bg-bg-dark/95 border border-${color}/50 rounded px-2 py-1
                text-xs text-white whitespace-nowrap
                transition-all duration-200
                ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
              `}
            >
              {skill.name}
              <div className="text-yellow-500">{'★'.repeat(skill.level)}{'☆'.repeat(5 - skill.level)}</div>
            </div>
          </div>
        );
      })}

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-neon-blue rounded-full animate-float"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
