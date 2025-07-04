'use client'

import { useEffect, useRef } from 'react'

export const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold }
    )

    const current = ref.current
    if (current) {
      // Add initial scroll-reveal class
      current.classList.add('scroll-reveal')
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [threshold])

  return ref
}