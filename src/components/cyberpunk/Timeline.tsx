import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface Project {
  name: string;
  tech: string;
  details: string;
  link?: string;
}

interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  description: string;
  icon?: StaticImageData | string;
  link?: string;
  projects?: Project[];
}

interface TimelineProps {
  items: TimelineItem[];
  title?: string;
}

export default function Timeline({ items, title }: TimelineProps) {
  return (
    <div className="relative p-4 bg-bg-dark/50 rounded-lg border border-neon-teal/30">
      {title && (
        <h3 className="text-sm font-pixel text-neon-teal mb-6">{title}</h3>
      )}

      <div className="relative pl-8">
        {/* Vertical line with glow */}
        <div className="absolute left-0 top-0 bottom-2 w-0.5 bg-gradient-to-b from-neon-purple via-neon-blue to-neon-teal shadow-neon-purple"></div>

        {items.map((item, index) => (
          <div key={index} className="mb-8 relative group">
            {/* Timeline dot */}
            <div className="absolute left-[-41px] top-1 w-5 h-5 bg-neon-teal rounded-full shadow-neon-teal animate-pulse-neon"></div>

            {/* Period */}
            <div className="mb-2 text-sm font-mono text-neon-blue">
              {item.period}
            </div>

            {/* Title with icon */}
            <div className="flex items-center gap-2 mb-2">
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={item.organization}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              )}
              <div className="font-pixel text-base text-white group-hover:text-neon-teal transition-colors">
                {item.title}
              </div>
            </div>

            {/* Organization */}
            <div className="text-sm text-neon-purple mb-2">
              {item.organization}
            </div>

            {/* Description */}
            <div className="text-sm text-text-dim leading-relaxed">
              {item.description}
            </div>

            {/* Link */}
            {item.link && (
              <div className="mt-2">
                <span className="text-xs text-neon-teal border border-neon-teal/50 px-2 py-1 rounded">
                  📄 {item.link}
                </span>
              </div>
            )}

            {/* Projects */}
            {item.projects && item.projects.length > 0 && (
              <div className="mt-4 space-y-3 pl-4 border-l-2 border-neon-purple/30">
                {item.projects.map((project, pIndex) => (
                  <div key={pIndex} className="space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-neon-blue">{project.name}</h4>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-neon-teal hover:underline flex-shrink-0"
                        >
                          🔗 Link
                        </a>
                      )}
                    </div>
                    <div className="text-xs text-neon-purple">
                      {project.tech}
                    </div>
                    <div className="text-sm text-text-dim">
                      {project.details}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
