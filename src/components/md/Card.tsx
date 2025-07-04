'use client'

import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'filled' | 'outlined'
  elevation?: 0 | 1 | 2 | 3 | 4 | 5
  children: ReactNode
  interactive?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({
    variant = 'elevated',
    elevation = 1,
    children,
    interactive = false,
    className,
    onClick,
    ...props
  }, ref) => {
    const baseClasses = cn(
      // Base styles
      'relative rounded-md-md transition-all duration-md-medium2 ease-md-standard',
      
      // Interactive styles
      {
        'cursor-pointer state-layer': interactive,
        'hover:elevation-2': interactive && variant === 'elevated',
        'active:elevation-1': interactive && variant === 'elevated',
      },

      // Variant styles
      {
        // Elevated Card
        [`bg-md-surface-level-${Math.min(elevation, 5)} elevation-${elevation}`]:
          variant === 'elevated',
        
        // Filled Card
        'bg-md-surface-variant text-md-on-surface-variant':
          variant === 'filled',
        
        // Outlined Card
        'bg-md-surface border border-md-outline text-md-on-surface':
          variant === 'outlined',
      },

      className
    )

    return (
      <div
        ref={ref}
        className={baseClasses}
        onClick={onClick}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  action?: ReactNode
  avatar?: ReactNode
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, subtitle, action, avatar, children, className, ...props }, ref) => {
    const hasContent = title || subtitle || children

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-start gap-4 p-4',
          className
        )}
        {...props}
      >
        {avatar && (
          <div className="flex-shrink-0">
            {avatar}
          </div>
        )}
        
        {hasContent && (
          <div className="flex-1 min-w-0">
            {title && (
              <h3 className="md-title-large text-md-on-surface truncate">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="md-body-medium text-md-on-surface-variant mt-1">
                {subtitle}
              </p>
            )}
            {children}
          </div>
        )}
        
        {action && (
          <div className="flex-shrink-0">
            {action}
          </div>
        )}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-4 pb-4', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardContent.displayName = 'CardContent'

export interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  align?: 'start' | 'end' | 'center'
}

const CardActions = forwardRef<HTMLDivElement, CardActionsProps>(
  ({ children, align = 'end', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-2 px-4 pb-4',
          {
            'justify-start': align === 'start',
            'justify-end': align === 'end',
            'justify-center': align === 'center',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardActions.displayName = 'CardActions'

export { Card, CardHeader, CardContent, CardActions }