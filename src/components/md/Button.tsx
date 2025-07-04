'use client'

import React, { forwardRef, HTMLAttributes, ReactNode, useRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  children: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'filled',
    size = 'medium',
    disabled = false,
    children,
    leftIcon,
    rightIcon,
    fullWidth = false,
    className,
    onClick,
    type = 'button',
    ...props
  }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const combinedRef = ref || buttonRef

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget
      const circle = document.createElement('span')
      const diameter = Math.max(button.clientWidth, button.clientHeight)
      const radius = diameter / 2

      const rect = button.getBoundingClientRect()
      circle.style.width = circle.style.height = `${diameter}px`
      circle.style.left = `${event.clientX - rect.left - radius}px`
      circle.style.top = `${event.clientY - rect.top - radius}px`
      circle.classList.add('ripple-effect')

      const ripple = button.querySelector('.ripple-effect')
      if (ripple) {
        ripple.remove()
      }

      button.appendChild(circle)

      // Clean up after animation
      setTimeout(() => {
        circle.remove()
      }, 600)

      // Call original onClick
      if (onClick) {
        onClick(event)
      }
    }

    const baseClasses = cn(
      // Base styles
      'relative inline-flex items-center justify-center',
      'font-medium transition-all duration-md-medium2 ease-md-standard',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-md-primary',
      'disabled:opacity-[0.38] disabled:cursor-not-allowed',
      'ripple state-layer overflow-hidden',
      
      // Size variants
      {
        'px-6 py-2.5 text-md-label-lg min-h-[40px] gap-2': size === 'small',
        'px-8 py-3 text-md-label-lg min-h-[48px] gap-2': size === 'medium',
        'px-10 py-4 text-md-label-lg min-h-[56px] gap-3': size === 'large',
      },

      // Width
      {
        'w-full': fullWidth,
        'w-auto': !fullWidth,
      },

      // Variant styles
      {
        // Filled Button
        'bg-md-primary text-md-on-primary hover:bg-md-primary/90 elevation-0 hover:elevation-1 active:elevation-0 rounded-md-full':
          variant === 'filled',
        
        // Outlined Button
        'bg-transparent border border-md-outline text-md-primary hover:bg-md-primary/8 rounded-md-full':
          variant === 'outlined',
        
        // Text Button
        'bg-transparent text-md-primary hover:bg-md-primary/8 rounded-md-full':
          variant === 'text',
        
        // Elevated Button
        'bg-md-surface-level-1 text-md-primary hover:bg-md-surface-level-2 elevation-1 hover:elevation-2 active:elevation-1 rounded-md-full':
          variant === 'elevated',
        
        // Tonal Button
        'bg-md-secondary-container text-md-on-secondary-container hover:bg-md-secondary-container/90 elevation-0 hover:elevation-1 active:elevation-0 rounded-md-full':
          variant === 'tonal',
      },

      className
    )

    return (
      <button
        ref={combinedRef}
        type={type}
        disabled={disabled}
        className={baseClasses}
        onClick={createRipple}
        {...props}
      >
        {leftIcon && (
          <span className="flex-shrink-0 w-5 h-5">
            {leftIcon}
          </span>
        )}
        <span className="truncate">{children}</span>
        {rightIcon && (
          <span className="flex-shrink-0 w-5 h-5">
            {rightIcon}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button