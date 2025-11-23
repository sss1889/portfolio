'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useScrollFocus } from '@/hooks/useScrollFocus';

interface Skill {
  name: string;
  level: number;
  icon?: StaticImageData | string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

interface SkillsShowcaseProps {
  skills: Skill[];
}

type Category = 'all' | 'frontend' | 'backend' | 'tools' | 'other';

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const { ref, isInView } = useScrollFocus({ threshold: 0.2 });

  const categories = [
    { id: 'all' as Category, label: 'All', color: 'neon-blue' },
    { id: 'frontend' as Category, label: 'Frontend', color: 'neon-teal' },
    { id: 'backend' as Category, label: 'Backend', color: 'neon-purple' },
    { id: 'tools' as Category, label: 'Tools', color: 'neon-pink' },
    { id: 'other' as Category, label: 'Other', color: 'neon-blue' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      frontend: 'neon-teal',
      backend: 'neon-purple',
      tools: 'neon-pink',
      other: 'neon-blue',
    };
    return colors[category] || 'neon-blue';
  };

  return (
    <div
      ref={ref}
      className={`
        bg-bg-dark/80 border-2 border-neon-blue/30
        rounded-lg p-6 md:p-8 backdrop-blur-sm
        transition-all duration-500
        ${isInView ? 'border-neon-blue/70 shadow-neon-blue scale-[1.01] opacity-100' : 'opacity-80'}
      `}
    >
      {/* Title */}
      <h3 className={`text-base md:text-lg font-pixel text-neon-blue mb-6 transition-all duration-500 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-70'}`}>
        Skills & Tech Stack
      </h3>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`
              px-4 py-2 rounded border-2 font-mono text-sm
              transition-all duration-300
              ${activeCategory === category.id
                ? `border-${category.color} bg-${category.color}/20 text-${category.color} shadow-[0_0_10px_rgba(0,240,255,0.3)]`
                : `border-${category.color}/30 text-text-dim hover:border-${category.color}/50 hover:text-white`
              }
            `}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, index) => {
          const color = getCategoryColor(skill.category);
          return (
            <div
              key={skill.name}
              className={`
                group relative bg-bg-dark/60 border border-${color}/30 rounded-lg p-4
                hover:border-${color}/70 hover:shadow-[0_0_10px_rgba(0,240,255,0.2)]
                transition-all duration-300 cursor-pointer
                ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Skill Icon & Name */}
              <div className="flex items-center gap-3 mb-3">
                {skill.icon && (
                  <div className={`w-10 h-10 rounded border border-${color}/30 bg-bg-dark/40 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={24}
                      height={24}
                      className="pixelated"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className={`font-mono font-semibold text-sm text-white group-hover:text-${color} transition-colors`}>
                    {skill.name}
                  </div>
                  <div className="text-xs text-text-dim capitalize">
                    {skill.category}
                  </div>
                </div>
              </div>

              {/* Skill Level */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-dim">Proficiency</span>
                  <span className="text-yellow-500">
                    {'★'.repeat(skill.level)}{'☆'.repeat(5 - skill.level)}
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-bg-dark/80 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-${color} to-${color}/50 rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isInView ? `${(skill.level / 5) * 100}%` : '0%',
                      transitionDelay: `${index * 50 + 200}ms`
                    }}
                  />
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${color}/0 via-${color}/5 to-${color}/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
            </div>
          );
        })}
      </div>

      {/* Total Skills Count */}
      <div className="mt-6 pt-4 border-t border-neon-blue/30 text-center">
        <span className="text-sm text-text-dim font-mono">
          Showing <span className="text-neon-blue font-bold">{filteredSkills.length}</span> of <span className="text-neon-blue font-bold">{skills.length}</span> skills
        </span>
      </div>
    </div>
  );
}
