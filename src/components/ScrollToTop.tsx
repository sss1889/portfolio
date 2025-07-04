'use client'

import React, { useState, useEffect } from 'react'
import { IconButton } from '@/components/md'

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const toggleVisibility = () => {
      if (typeof window !== 'undefined' && window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility)
      return () => window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  if (!isClient || !isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <IconButton
        variant="filled"
        size="large"
        onClick={scrollToTop}
        ariaLabel="Scroll to top"
        className="elevation-3 hover:elevation-4"
      >
        <span className="text-xl">↑</span>
      </IconButton>
    </div>
  )
}