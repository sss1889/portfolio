'use client'

import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface LayoutProps {
  children: ReactNode
  className?: string
}

// Main Layout Container
export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={cn(
      'min-h-screen bg-md-background text-md-on-background',
      className
    )}>
      {children}
    </div>
  )
}

// Responsive Container
export interface ContainerProps {
  children: ReactNode
  className?: string
  maxWidth?: 'compact' | 'medium' | 'expanded' | 'large' | 'xlarge' | 'none'
  centered?: boolean
  padding?: boolean
}

export const Container = ({ 
  children, 
  className, 
  maxWidth = 'large',
  centered = true,
  padding = true
}: ContainerProps) => {
  return (
    <div className={cn(
      'w-full',
      {
        'max-w-[599px]': maxWidth === 'compact',
        'max-w-[839px]': maxWidth === 'medium', 
        'max-w-[1199px]': maxWidth === 'expanded',
        'max-w-[1599px]': maxWidth === 'large',
        'max-w-none': maxWidth === 'xlarge' || maxWidth === 'none',
        'mx-auto': centered,
        'px-4 medium:px-6 expanded:px-8': padding,
      },
      className
    )}>
      {children}
    </div>
  )
}

// Grid System
export interface GridProps {
  children: ReactNode
  className?: string
  columns?: 1 | 2 | 3 | 4 | 6 | 12
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  responsive?: {
    compact?: 1 | 2 | 3 | 4 | 6 | 12
    medium?: 1 | 2 | 3 | 4 | 6 | 12
    expanded?: 1 | 2 | 3 | 4 | 6 | 12
  }
}

export const Grid = ({ 
  children, 
  className, 
  columns = 12,
  gap = 'md',
  responsive
}: GridProps) => {
  return (
    <div className={cn(
      'grid',
      {
        'grid-cols-1': columns === 1,
        'grid-cols-2': columns === 2,
        'grid-cols-3': columns === 3,
        'grid-cols-4': columns === 4,
        'grid-cols-6': columns === 6,
        'grid-cols-12': columns === 12,
        'gap-2': gap === 'sm',
        'gap-4': gap === 'md',
        'gap-6': gap === 'lg',
        'gap-8': gap === 'xl',
      },
      responsive && {
        [`compact:grid-cols-${responsive.compact}`]: responsive.compact,
        [`medium:grid-cols-${responsive.medium}`]: responsive.medium,
        [`expanded:grid-cols-${responsive.expanded}`]: responsive.expanded,
      },
      className
    )}>
      {children}
    </div>
  )
}

// Adaptive Navigation Layout
export interface NavigationLayoutProps {
  children: ReactNode
  navigation?: ReactNode
  className?: string
}

export const NavigationLayout = ({ 
  children, 
  navigation,
  className 
}: NavigationLayoutProps) => {
  return (
    <div className={cn(
      'flex h-screen',
      className
    )}>
      {/* Compact: Bottom Navigation */}
      <div className="block medium:hidden fixed bottom-0 left-0 right-0 z-50">
        {navigation}
      </div>
      
      {/* Medium: Navigation Rail */}
      <div className="hidden medium:block expanded:hidden">
        <div className="fixed left-0 top-0 h-full w-20 bg-md-surface-level-2 elevation-1">
          {navigation}
        </div>
        <div className="ml-20 h-full overflow-auto">
          {children}
        </div>
      </div>
      
      {/* Expanded: Navigation Drawer */}
      <div className="hidden expanded:block">
        <div className="fixed left-0 top-0 h-full w-64 bg-md-surface-level-1 elevation-1">
          {navigation}
        </div>
        <div className="ml-64 h-full overflow-auto">
          {children}
        </div>
      </div>
      
      {/* Compact: Main Content with bottom padding */}
      <div className="block medium:hidden w-full pb-16 overflow-auto">
        {children}
      </div>
    </div>
  )
}

// Section Component
export interface SectionProps {
  children: ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'surface' | 'surface-variant' | 'primary-container' | 'secondary-container'
}

export const Section = ({ 
  children, 
  className,
  padding = 'lg',
  background = 'surface'
}: SectionProps) => {
  return (
    <section className={cn(
      'w-full',
      {
        'py-8': padding === 'sm',
        'py-12': padding === 'md',
        'py-16': padding === 'lg',
        'py-24': padding === 'xl',
        'bg-md-surface': background === 'surface',
        'bg-md-surface-variant': background === 'surface-variant',
        'bg-md-primary-container': background === 'primary-container',
        'bg-md-secondary-container': background === 'secondary-container',
      },
      className
    )}>
      {children}
    </section>
  )
}

const LayoutComponents = { Layout, Container, Section, Grid, NavigationLayout }
export default LayoutComponents