'use client'

import React, { useState, useEffect } from 'react'

interface SkillItem {
  name: string
  level: number
  icon: string
  color: string
}

const skills: SkillItem[] = [
  { name: 'Python', level: 4, icon: '🐍', color: '#3776ab' },
  { name: 'FastAPI', level: 4, icon: '⚡', color: '#009688' },
  { name: 'React', level: 3, icon: '⚛️', color: '#61dafb' },
  { name: 'Next.js', level: 3, icon: '▲', color: '#000000' },
  { name: 'TypeScript', level: 3, icon: '🔷', color: '#3178c6' },
  { name: 'MySQL', level: 4, icon: '🗄️', color: '#4479a1' },
  { name: 'Docker', level: 4, icon: '🐳', color: '#2496ed' },
  { name: 'Git', level: 4, icon: '📚', color: '#f05032' },
  { name: 'Azure', level: 3, icon: '☁️', color: '#0078d4' },
  { name: 'Golang', level: 2, icon: '🔵', color: '#00add8' },
  { name: 'C/C++', level: 2, icon: '⚙️', color: '#00599c' },
  { name: 'React Native', level: 3, icon: '📱', color: '#61dafb' },
]

const SkillOrb: React.FC<{ skill: SkillItem; index: number }> = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Skill Orb */}
      <div 
        className={`
          w-24 h-24 md:w-32 md:h-32 rounded-full glass-card flex flex-col items-center justify-center
          transition-all duration-500 hover:scale-110 hover:rotate-12
          ${isHovered ? 'shadow-2xl' : ''}
        `}
        style={{
          boxShadow: isHovered ? `0 0 30px ${skill.color}40` : undefined,
        }}
      >
        <div className="text-2xl md:text-3xl mb-1">{skill.icon}</div>
        <div className="text-xs md:text-sm font-semibold text-center px-1">
          {skill.name}
        </div>
      </div>

      {/* Skill Level Indicator */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i < skill.level 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg' 
                  : 'bg-gray-600'
              }`}
              style={{
                animationDelay: `${i * 0.1}s`,
                transform: isHovered && i < skill.level ? 'scale(1.2)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Hover Effect */}
      <div 
        className={`
          absolute inset-0 rounded-full transition-opacity duration-300 pointer-events-none
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`,
        }}
      />
    </div>
  )
}

const ExperienceItem: React.FC<{ 
  title: string
  company: string
  period: string
  description: string
  index: number
}> = ({ title, company, period, description, index }) => {
  return (
    <div 
      className="glass-card interactive-card p-6 mb-6"
      style={{
        animationDelay: `${index * 0.2}s`,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
          {index + 1}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold gradient-text mb-1">{title}</h3>
          <div className="text-lg text-white mb-2">{company}</div>
          <div className="text-sm text-gray-400 mb-3">{period}</div>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export const SkillsSection: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Start with immediate first skill visible, then animate others
    setVisibleSkills([0])
    
    const timer = setInterval(() => {
      setVisibleSkills(prev => {
        if (prev.length < skills.length) {
          return [...prev, prev.length]
        }
        return prev
      })
    }, 150)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to create amazing digital experiences
          </p>
        </div>

        {/* Skills Constellation */}
        <div className="relative mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-glow mb-4">Tech Stack</h3>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`transition-all duration-500 ${
                  visibleSkills.includes(index) 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-50 translate-y-10'
                }`}
              >
                <SkillOrb skill={skill} index={index} />
              </div>
            ))}
          </div>

          {/* Floating Skill Particles - Only render on client */}
          {isClient && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-30"
                  style={{
                    left: `${(i * 17 + 23) % 100}%`, // Deterministic positioning for SSR
                    top: `${(i * 31 + 47) % 100}%`,
                    animation: `float3D ${5 + (i % 5)}s ease-in-out infinite`,
                    animationDelay: `${(i % 3) * 0.5}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-glow mb-4">Experience Journey</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <ExperienceItem
              title="Backend Engineer"
              company="StarUp Inc."
              period="2024.04 - Present"
              description="Python（FastAPI）バックエンド開発、API/DB（MySQL）設計、実装を経験。OpenAPI仕様ベースのRESTful API設計・実装を行い、Docker環境構築も担当。TypeScriptとNext.jsを用いたフロントエンド開発にも従事し、チーム開発における品質担保と設計統一を推進。"
              index={0}
            />
            
            <ExperienceItem
              title="Exchange Student"
              company="University of California, Santa Cruz"
              period="2024.04 - 2025.03"
              description="Computer Science専攻として交換留学。基礎的な数学から人工知能、webアプリ開発まで幅広くCS分野を学習。英語環境での学習を通じて、グローバルな視点でのソフトウェア開発スキルを習得。"
              index={1}
            />
            
            <ExperienceItem
              title="Student"
              company="京都大学工学部情報学科"
              period="2021.04 - 2027.03"
              description="数理工学を専攻し、数学・物理学を基盤とした統計学、最適化理論、制御理論、コンピュータ科学などの応用数理分野を幅広く学習。理論と実践の両面からプログラミングとアルゴリズム設計の基礎を習得。"
              index={2}
            />
          </div>
        </div>

        {/* Proficiency Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="neo-card p-6">
              <div className="text-4xl font-bold gradient-text mb-2">12+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div className="neo-card p-6">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-gray-400">Projects</div>
            </div>
            <div className="neo-card p-6">
              <div className="text-4xl font-bold gradient-text mb-2">2+</div>
              <div className="text-gray-400">Years Coding</div>
            </div>
            <div className="neo-card p-6">
              <div className="text-4xl font-bold gradient-text mb-2">940</div>
              <div className="text-gray-400">TOEIC Score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}