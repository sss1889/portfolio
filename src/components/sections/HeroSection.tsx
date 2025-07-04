'use client'

import React, { useState, useEffect } from 'react'

export const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Interactive Mouse Trail - Only render on client */}
      {isClient && (
        <div 
          className="fixed w-4 h-4 pointer-events-none z-50 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            background: 'var(--primary-gradient)',
            borderRadius: '50%',
            filter: 'blur(1px)',
            opacity: 0.6,
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Profile Side */}
          <div className="text-center lg:text-left">
            {/* Avatar with Holographic Effect */}
            <div 
              className="relative inline-block mb-8"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative w-48 h-48 mx-auto lg:mx-0">
                {/* Holographic Ring */}
                <div className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${
                  isHovered ? 'animate-spin border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500' : 'border-white/20'
                }`} style={{
                  background: isHovered ? 'conic-gradient(from 0deg, #667eea, #764ba2, #f093fb, #f5576c, #667eea)' : undefined,
                  padding: '3px',
                  borderRadius: '50%',
                }}>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                    NC
                  </div>
                </div>
                
                {/* Floating Particles around Avatar */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                    style={{
                      top: `${20 + Math.sin((i * Math.PI) / 3) * 60}%`,
                      left: `${50 + Math.cos((i * Math.PI) / 3) * 60}%`,
                      animation: `orbit ${3 + i * 0.5}s linear infinite`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Name with Gradient Animation */}
            <h1 className="text-6xl lg:text-8xl font-black mb-4 gradient-text">
              Namiki
            </h1>
            <h1 className="text-6xl lg:text-8xl font-black mb-6 text-glow">
              Chikusa
            </h1>

            {/* Subtitle with Typewriter Effect */}
            <div className="text-2xl lg:text-3xl font-light mb-8 text-gray-300">
              <span className="inline-block">Backend Engineer</span>
              <span className="animate-pulse ml-2">|</span>
            </div>

            {/* Location and Status */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-lg">
              <div className="flex items-center gap-2 glass-card px-4 py-2">
                <span className="text-2xl">📍</span>
                <span>Kyoto, Japan</span>
              </div>
              <div className="flex items-center gap-2 glass-card px-4 py-2">
                <span className="text-2xl">🎓</span>
                <span>Kyoto University</span>
              </div>
              <div className="flex items-center gap-2 glass-card px-4 py-2">
                <span className="text-2xl">💼</span>
                <span>Available</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                onClick={() => {
                  const element = document.getElementById('contact')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button 
                className="group relative px-8 py-4 glass-card border-2 border-white/20 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:border-white/40"
                onClick={() => {
                  const element = document.getElementById('projects')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span className="relative z-10">View Projects</span>
              </button>
            </div>
          </div>

          {/* Interactive Info Side */}
          <div className="space-y-6">
            {/* About Card */}
            <div className="glass-card interactive-card p-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                About Me
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-300">
                <p>
                  初めまして、<span className="text-white font-semibold">chikusa namiki</span>です。
                </p>
                <p>
                  京都大学で数理工学を学びながら、長期インターンでは<span className="gradient-text">バックエンド開発</span>（DB設計、API実装、アルゴリズム開発等）に加え、
                  フロントエンド開発まで幅広く経験しました。
                </p>
                <p>
                  将来的にはより複雑で大規模なサービスの開発にも挑戦し、<span className="text-glow">貢献していきたい</span>と考えています。
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="neo-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">4+</div>
                <div className="text-gray-400">Technologies</div>
              </div>
              <div className="neo-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                <div className="text-gray-400">Projects</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/sss1889"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-4 text-center transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">🔗</div>
                <div className="font-semibold">GitHub</div>
              </a>
              <a
                href="https://www.linkedin.com/in/namiki-chikusa-37b738301"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-4 text-center transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">💼</div>
                <div className="font-semibold">LinkedIn</div>
              </a>
              <a
                href="mailto:natsukirin65@gmail.com"
                className="flex-1 glass-card p-4 text-center transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">📧</div>
                <div className="font-semibold">Email</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
      `}</style>
    </section>
  )
}