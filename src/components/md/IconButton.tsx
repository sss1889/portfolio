'use client'

import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useRipple } from '@/hooks/useRipple'

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'standard' | 'filled' | 'tonal' | 'outlined'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  selected?: boolean
  ariaLabel?: string
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({
    variant = 'standard',
    size = 'medium',
    disabled = false,
    children,
    className,
    onClick,
    type = 'button',
    selected = false,
    ariaLabel,
    ...props
  }, ref) => {
    const createRipple = useRipple({
      color: variant === 'filled' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
      duration: 400
    })

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        createRipple(event)
        onClick?.(event)
      }
    }

    const baseClasses = cn(
      // Base styles
      'relative inline-flex items-center justify-center rounded-md-full',
      'font-medium transition-all duration-md-medium2 ease-md-standard',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-md-primary',
      'disabled:opacity-[0.38] disabled:cursor-not-allowed',
      'state-layer overflow-hidden',
      
      // Size variants
      {
        'w-8 h-8 text-sm': size === 'small',
        'w-12 h-12 text-base': size === 'medium',
        'w-14 h-14 text-lg': size === 'large',
      },

      // Variant styles
      {
        // Standard Icon Button
        'text-md-on-surface-variant hover:bg-md-on-surface-variant/8 active:bg-md-on-surface-variant/12':
          variant === 'standard' && !selected,
        'text-md-primary bg-md-primary/12 hover:bg-md-primary/16 active:bg-md-primary/20':
          variant === 'standard' && selected,
        
        // Filled Icon Button
        'bg-md-primary text-md-on-primary hover:bg-md-primary/90 elevation-0 hover:elevation-1 active:elevation-0':
          variant === 'filled' && !selected,
        'bg-md-on-surface text-md-surface hover:bg-md-on-surface/90':
          variant === 'filled' && selected,
        
        // Tonal Icon Button
        'bg-md-secondary-container text-md-on-secondary-container hover:bg-md-secondary-container/90 elevation-0 hover:elevation-1 active:elevation-0':
          variant === 'tonal' && !selected,
        'bg-md-secondary-container text-md-on-secondary-container hover:bg-md-secondary-container/90':
          variant === 'tonal' && selected,
        
        // Outlined Icon Button
        'border border-md-outline text-md-on-surface-variant hover:bg-md-on-surface-variant/8 active:bg-md-on-surface-variant/12':
          variant === 'outlined' && !selected,
        'border border-md-outline bg-md-inverse-surface text-md-inverse-on-surface hover:bg-md-inverse-surface/90':
          variant === 'outlined' && selected,
      },

      className
    )

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={baseClasses}
        onClick={handleClick}
        aria-label={ariaLabel}
        aria-pressed={selected}
        {...props}
      >
        {children}
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'

export default IconButton