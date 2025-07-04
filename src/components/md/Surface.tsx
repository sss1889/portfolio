'use client'

import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: 0 | 1 | 2 | 3 | 4 | 5
  tint?: boolean
  children: ReactNode
  variant?: 'surface' | 'surface-variant' | 'inverse-surface'
}

const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  ({
    elevation = 0,
    tint = true,
    children,
    variant = 'surface',
    className,
    ...props
  }, ref) => {
    const baseClasses = cn(
      // Base styles
      'relative transition-all duration-md-medium2 ease-md-standard',
      
      // Elevation
      `elevation-${elevation}`,
      
      // Surface tint (color mixing with primary)
      {
        [`bg-md-surface-level-${Math.min(elevation, 5)}`]: tint && variant === 'surface',
        'bg-md-surface': !tint && variant === 'surface',
        'bg-md-surface-variant': variant === 'surface-variant',
        'bg-md-inverse-surface': variant === 'inverse-surface',
      },
      
      // Text color based on variant
      {
        'text-md-on-surface': variant === 'surface',
        'text-md-on-surface-variant': variant === 'surface-variant',
        'text-md-inverse-on-surface': variant === 'inverse-surface',
      },

      className
    )

    return (
      <div
        ref={ref}
        className={baseClasses}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Surface.displayName = 'Surface'

export default Surface