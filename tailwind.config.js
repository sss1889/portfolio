/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'md-primary': 'var(--md-sys-color-primary)',
        'md-on-primary': 'var(--md-sys-color-on-primary)',
        'md-primary-container': 'var(--md-sys-color-primary-container)',
        'md-on-primary-container': 'var(--md-sys-color-on-primary-container)',
        
        // Secondary colors
        'md-secondary': 'var(--md-sys-color-secondary)',
        'md-on-secondary': 'var(--md-sys-color-on-secondary)',
        'md-secondary-container': 'var(--md-sys-color-secondary-container)',
        'md-on-secondary-container': 'var(--md-sys-color-on-secondary-container)',
        
        // Tertiary colors
        'md-tertiary': 'var(--md-sys-color-tertiary)',
        'md-on-tertiary': 'var(--md-sys-color-on-tertiary)',
        'md-tertiary-container': 'var(--md-sys-color-tertiary-container)',
        'md-on-tertiary-container': 'var(--md-sys-color-on-tertiary-container)',
        
        // Error colors
        'md-error': 'var(--md-sys-color-error)',
        'md-on-error': 'var(--md-sys-color-on-error)',
        'md-error-container': 'var(--md-sys-color-error-container)',
        'md-on-error-container': 'var(--md-sys-color-on-error-container)',
        
        // Surface colors
        'md-surface': 'var(--md-sys-color-surface)',
        'md-on-surface': 'var(--md-sys-color-on-surface)',
        'md-surface-variant': 'var(--md-sys-color-surface-variant)',
        'md-on-surface-variant': 'var(--md-sys-color-on-surface-variant)',
        
        // Background colors
        'md-background': 'var(--md-sys-color-background)',
        'md-on-background': 'var(--md-sys-color-on-background)',
        
        // Outline colors
        'md-outline': 'var(--md-sys-color-outline)',
        'md-outline-variant': 'var(--md-sys-color-outline-variant)',
        
        // Inverse colors
        'md-inverse-surface': 'var(--md-sys-color-inverse-surface)',
        'md-inverse-on-surface': 'var(--md-sys-color-inverse-on-surface)',
        'md-inverse-primary': 'var(--md-sys-color-inverse-primary)',
        
        // Surface levels
        'md-surface-level-0': 'var(--md-sys-color-surface-level-0)',
        'md-surface-level-1': 'var(--md-sys-color-surface-level-1)',
        'md-surface-level-2': 'var(--md-sys-color-surface-level-2)',
        'md-surface-level-3': 'var(--md-sys-color-surface-level-3)',
        'md-surface-level-4': 'var(--md-sys-color-surface-level-4)',
        'md-surface-level-5': 'var(--md-sys-color-surface-level-5)',
      },
      borderRadius: {
        'md-none': 'var(--md-sys-shape-corner-none)',
        'md-xs': 'var(--md-sys-shape-corner-extra-small)',
        'md-sm': 'var(--md-sys-shape-corner-small)',
        'md-md': 'var(--md-sys-shape-corner-medium)',
        'md-lg': 'var(--md-sys-shape-corner-large)',
        'md-xl': 'var(--md-sys-shape-corner-extra-large)',
        'md-full': 'var(--md-sys-shape-corner-full)',
      },
      fontSize: {
        // Display
        'md-display-lg': ['var(--md-sys-typescale-display-large-size)', {
          lineHeight: 'var(--md-sys-typescale-display-large-line-height)',
          fontWeight: 'var(--md-sys-typescale-display-weight)',
        }],
        'md-display-md': ['var(--md-sys-typescale-display-medium-size)', {
          lineHeight: 'var(--md-sys-typescale-display-medium-line-height)',
          fontWeight: 'var(--md-sys-typescale-display-weight)',
        }],
        'md-display-sm': ['var(--md-sys-typescale-display-small-size)', {
          lineHeight: 'var(--md-sys-typescale-display-small-line-height)',
          fontWeight: 'var(--md-sys-typescale-display-weight)',
        }],
        
        // Headline
        'md-headline-lg': ['var(--md-sys-typescale-headline-large-size)', {
          lineHeight: 'var(--md-sys-typescale-headline-large-line-height)',
          fontWeight: 'var(--md-sys-typescale-headline-weight)',
        }],
        'md-headline-md': ['var(--md-sys-typescale-headline-medium-size)', {
          lineHeight: 'var(--md-sys-typescale-headline-medium-line-height)',
          fontWeight: 'var(--md-sys-typescale-headline-weight)',
        }],
        'md-headline-sm': ['var(--md-sys-typescale-headline-small-size)', {
          lineHeight: 'var(--md-sys-typescale-headline-small-line-height)',
          fontWeight: 'var(--md-sys-typescale-headline-weight)',
        }],
        
        // Title
        'md-title-lg': ['var(--md-sys-typescale-title-large-size)', {
          lineHeight: 'var(--md-sys-typescale-title-large-line-height)',
          fontWeight: 'var(--md-sys-typescale-title-weight)',
        }],
        'md-title-md': ['var(--md-sys-typescale-title-medium-size)', {
          lineHeight: 'var(--md-sys-typescale-title-medium-line-height)',
          fontWeight: 'var(--md-sys-typescale-title-weight)',
        }],
        'md-title-sm': ['var(--md-sys-typescale-title-small-size)', {
          lineHeight: 'var(--md-sys-typescale-title-small-line-height)',
          fontWeight: 'var(--md-sys-typescale-title-weight)',
        }],
        
        // Body
        'md-body-lg': ['var(--md-sys-typescale-body-large-size)', {
          lineHeight: 'var(--md-sys-typescale-body-large-line-height)',
          fontWeight: 'var(--md-sys-typescale-body-weight)',
        }],
        'md-body-md': ['var(--md-sys-typescale-body-medium-size)', {
          lineHeight: 'var(--md-sys-typescale-body-medium-line-height)',
          fontWeight: 'var(--md-sys-typescale-body-weight)',
        }],
        'md-body-sm': ['var(--md-sys-typescale-body-small-size)', {
          lineHeight: 'var(--md-sys-typescale-body-small-line-height)',
          fontWeight: 'var(--md-sys-typescale-body-weight)',
        }],
        
        // Label
        'md-label-lg': ['var(--md-sys-typescale-label-large-size)', {
          lineHeight: 'var(--md-sys-typescale-label-large-line-height)',
          fontWeight: 'var(--md-sys-typescale-label-weight)',
        }],
        'md-label-md': ['var(--md-sys-typescale-label-medium-size)', {
          lineHeight: 'var(--md-sys-typescale-label-medium-line-height)',
          fontWeight: 'var(--md-sys-typescale-label-weight)',
        }],
        'md-label-sm': ['var(--md-sys-typescale-label-small-size)', {
          lineHeight: 'var(--md-sys-typescale-label-small-line-height)',
          fontWeight: 'var(--md-sys-typescale-label-weight)',
        }],
      },
      transitionTimingFunction: {
        'md-emphasized': 'var(--md-sys-motion-easing-emphasized)',
        'md-emphasized-decelerate': 'var(--md-sys-motion-easing-emphasized-decelerate)',
        'md-emphasized-accelerate': 'var(--md-sys-motion-easing-emphasized-accelerate)',
        'md-standard': 'var(--md-sys-motion-easing-standard)',
        'md-standard-decelerate': 'var(--md-sys-motion-easing-standard-decelerate)',
        'md-standard-accelerate': 'var(--md-sys-motion-easing-standard-accelerate)',
      },
      transitionDuration: {
        'md-short-1': 'var(--md-sys-motion-duration-short1)',
        'md-short-2': 'var(--md-sys-motion-duration-short2)',
        'md-short-3': 'var(--md-sys-motion-duration-short3)',
        'md-short-4': 'var(--md-sys-motion-duration-short4)',
        'md-medium-1': 'var(--md-sys-motion-duration-medium1)',
        'md-medium-2': 'var(--md-sys-motion-duration-medium2)',
        'md-medium-3': 'var(--md-sys-motion-duration-medium3)',
        'md-medium-4': 'var(--md-sys-motion-duration-medium4)',
        'md-long-1': 'var(--md-sys-motion-duration-long1)',
        'md-long-2': 'var(--md-sys-motion-duration-long2)',
        'md-long-3': 'var(--md-sys-motion-duration-long3)',
        'md-long-4': 'var(--md-sys-motion-duration-long4)',
      },
      screens: {
        // Material Design 3 Adaptive Layout Breakpoints
        'compact': '0px',     // 0-599dp
        'medium': '600px',    // 600-839dp  
        'expanded': '840px',  // 840dp+
        'large': '1200px',    // Large screens
        'xlarge': '1600px',   // Extra large screens
      },
    },
  },
  plugins: [],
}