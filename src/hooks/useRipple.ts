'use client'

import { useCallback } from 'react'

export interface RippleOptions {
  color?: string
  duration?: number
  opacity?: number
}

export const useRipple = (options: RippleOptions = {}) => {
  const {
    color = 'currentColor',
    duration = 600,
    opacity = 0.3
  } = options

  const createRipple = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.currentTarget
      const rect = element.getBoundingClientRect()
      
      // Calculate ripple size and position
      const size = Math.max(rect.width, rect.height)
      const x = event.clientX - rect.left - size / 2
      const y = event.clientY - rect.top - size / 2
      
      // Create ripple element
      const ripple = document.createElement('span')
      ripple.className = 'absolute pointer-events-none rounded-full animate-ripple'
      ripple.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background-color: ${color};
        opacity: ${opacity};
        transform: scale(0);
        animation: ripple-animation ${duration}ms ease-out;
      `
      
      // Remove existing ripples
      const existingRipples = element.querySelectorAll('.animate-ripple')
      existingRipples.forEach(r => r.remove())
      
      // Add new ripple
      element.appendChild(ripple)
      
      // Clean up after animation
      setTimeout(() => {
        ripple.remove()
      }, duration)
    },
    [color, duration, opacity]
  )

  return createRipple
}

export default useRipple