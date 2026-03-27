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
          DEFAULT: '#D4A5B5',
          light: '#E8C4D0',
        },
        accent: {
          DEFAULT: '#D4A5B5',
          light: '#E8C4D0',
          dark: '#B8849A',
        },
        magenta: '#D4006E',
        purple:  '#6B2D8B',
        leaf:    '#2E7D3A',
        orange:  '#E8760A',
        stone:   '#8C8279',
        white:   '#FDFCFA',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
        accent:  ['var(--font-display)', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl':    ['clamp(4rem, 10vw, 9rem)',       { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-xl-sm': ['clamp(3.2rem, 8vw, 7.2rem)',    { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg':    ['clamp(3rem, 7vw, 6rem)',        { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-md':    ['clamp(2.4rem, 5vw, 4rem)',      { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'display-sm':    ['clamp(1.8rem, 3.5vw, 2.8rem)',  { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
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
