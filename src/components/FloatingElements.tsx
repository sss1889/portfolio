'use client'

import React, { useEffect, useState, useCallback } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

interface FloatingOrb {
  id: number
  size: number
  x: number
  y: number
  duration: number
  delay: number
  type: 'primary' | 'secondary' | 'tertiary'
}

// Predefined arrays to ensure consistent SSR/client rendering
const PARTICLES_DATA: Particle[] = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: (i * 17 + 23) % 100, // Deterministic positioning
  y: (i * 31 + 47) % 100,
  size: (i % 3) + 1,
  duration: 15 + (i % 10),
  delay: (i % 5),
}))

const ORBS_DATA: FloatingOrb[] = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: 50 + (i * 25),
  x: (i * 13 + 11) % 100,
  y: (i * 19 + 29) % 100,
  duration: 6 + (i % 5),
  delay: i % 3,
  type: (['primary', 'secondary', 'tertiary'] as const)[i % 3],
}))

export const FloatingElements: React.FC = () => {
  const [isClient, setIsClient] = useState(false)
  const [particles, setParticles] = useState<Particle[]>(PARTICLES_DATA)
  const [orbs] = useState<FloatingOrb[]>(ORBS_DATA)

  const generateParticles = useCallback(() => {
    if (!isClient) return
    
    const newParticles: Particle[] = []
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
      })
    }
    setParticles(newParticles)
  }, [isClient])

  useEffect(() => {
    setIsClient(true)
    
    // Only regenerate particles on the client after hydration
    const interval = setInterval(() => {
      generateParticles()
    }, 30000)

    return () => clearInterval(interval)
  }, [generateParticles])

  return (
    <>
      {/* Particle System */}
      <div className="particle-system">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* 3D Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className="floating-orb"
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              animationDuration: `${orb.duration}s`,
              animationDelay: `${orb.delay}s`,
              background: orb.type === 'primary' 
                ? 'var(--primary-gradient)' 
                : orb.type === 'secondary'
                ? 'var(--secondary-gradient)'
                : 'var(--tertiary-gradient)',
            }}
          />
        ))}
      </div>

      {/* Cosmic Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(102, 126, 234, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(102, 126, 234, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridPulse 4s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* Interactive Light Trails */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: '2px',
              height: '100vh',
              background: `linear-gradient(
                to bottom, 
                transparent 0%, 
                rgba(102, 126, 234, 0.3) 50%, 
                transparent 100%
              )`,
              left: `${20 + i * 30}%`,
              animation: `lightTrail ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes gridPulse {
          0%, 100% { 
            opacity: 0.1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.3; 
            transform: scale(1.02); 
          }
        }

        @keyframes lightTrail {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0) scaleY(1);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-20px) scaleY(1.1);
          }
        }
      `}</style>
    </>
  )
}