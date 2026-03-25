import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5F0E8',
          dark: '#EDE6D8',
        },
        charcoal: {
          DEFAULT: '#1C1C1A',
          light: '#2E2E2C',
        },
        gold: {
          DEFAULT: '#B8963E',
          light: '#D4B062',
        },
        // Petal accent colours — use sparingly
        magenta: '#D4006E',
        purple:  '#6B2D8B',
        leaf:    '#2E7D3A',
        orange:  '#E8760A',
        stone:   '#8C8279',
        white:   '#FDFCFA',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
        accent:  ['Cormorant SC', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 9vw, 8rem)',   { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.8rem, 6vw, 5.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2.2rem, 4vw, 3.8rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.6rem, 3vw, 2.4rem)', { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
      },
      spacing: {
        'section':    '8rem',
        'section-sm': '5rem',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '450': '450ms',
        '700': '700ms',
      },
      animation: {
        'shimmer':  'shimmer 2s infinite',
        'fade-up':  'fadeUp 0.6s ease forwards',
        'fade-in':  'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'shimmer-gradient': 'linear-gradient(90deg, #F5F0E8 25%, #EDE6D8 50%, #F5F0E8 75%)',
      },
    },
  },
  plugins: [],
}

export default config
