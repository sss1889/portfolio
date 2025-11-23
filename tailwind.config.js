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
        // Cyberpunk Color Palette
        'bg-dark': '#0a0b1e',
        'neon-blue': '#00f0ff',
        'neon-purple': '#bd00ff',
        'neon-teal': '#00ffc3',
        'neon-pink': '#ff00ff',
        'text-dim': '#8892b0',

        // Material Design 3 colors (preserved for existing components)
        'md-primary': 'var(--md-sys-color-primary)',
        'md-on-primary': 'var(--md-sys-color-on-primary)',
        'md-primary-container': 'var(--md-sys-color-primary-container)',
        'md-on-primary-container': 'var(--md-sys-color-on-primary-container)',
        'md-secondary': 'var(--md-sys-color-secondary)',
        'md-on-secondary': 'var(--md-sys-color-on-secondary)',
        'md-secondary-container': 'var(--md-sys-color-secondary-container)',
        'md-on-secondary-container': 'var(--md-sys-color-on-secondary-container)',
        'md-tertiary': 'var(--md-sys-color-tertiary)',
        'md-on-tertiary': 'var(--md-sys-color-on-tertiary)',
        'md-tertiary-container': 'var(--md-sys-color-tertiary-container)',
        'md-on-tertiary-container': 'var(--md-sys-color-on-tertiary-container)',
        'md-error': 'var(--md-sys-color-error)',
        'md-on-error': 'var(--md-sys-color-on-error)',
        'md-error-container': 'var(--md-sys-color-error-container)',
        'md-on-error-container': 'var(--md-sys-color-on-error-container)',
        'md-surface': 'var(--md-sys-color-surface)',
        'md-on-surface': 'var(--md-sys-color-on-surface)',
        'md-surface-variant': 'var(--md-sys-color-surface-variant)',
        'md-on-surface-variant': 'var(--md-sys-color-on-surface-variant)',
        'md-background': 'var(--md-sys-color-background)',
        'md-on-background': 'var(--md-sys-color-on-background)',
        'md-outline': 'var(--md-sys-color-outline)',
        'md-outline-variant': 'var(--md-sys-color-outline-variant)',
        'md-inverse-surface': 'var(--md-sys-color-inverse-surface)',
        'md-inverse-on-surface': 'var(--md-sys-color-inverse-on-surface)',
        'md-inverse-primary': 'var(--md-sys-color-inverse-primary)',
        'md-surface-level-0': 'var(--md-sys-color-surface-level-0)',
        'md-surface-level-1': 'var(--md-sys-color-surface-level-1)',
        'md-surface-level-2': 'var(--md-sys-color-surface-level-2)',
        'md-surface-level-3': 'var(--md-sys-color-surface-level-3)',
        'md-surface-level-4': 'var(--md-sys-color-surface-level-4)',
        'md-surface-level-5': 'var(--md-sys-color-surface-level-5)',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'cursive'],
        'mono': ['"Roboto Mono"', 'monospace'],
      },
      boxShadow: {
        'neon-blue': '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)',
        'neon-purple': '0 0 10px rgba(189, 0, 255, 0.5), 0 0 20px rgba(189, 0, 255, 0.3)',
        'neon-teal': '0 0 10px rgba(0, 255, 195, 0.5), 0 0 20px rgba(0, 255, 195, 0.3)',
        'neon-pink': '0 0 10px rgba(255, 0, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.3)',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fadeIn': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slideInLeft': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slideInRight': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.6s ease-out forwards',
        'slideInRight': 'slideInRight 0.6s ease-out forwards',
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
        'compact': '0px',
        'medium': '600px',
        'expanded': '840px',
        'large': '1200px',
        'xlarge': '1600px',
      },
      maxWidth: {
        'container': '1500px',
      },
    },
  },
  plugins: [],
}