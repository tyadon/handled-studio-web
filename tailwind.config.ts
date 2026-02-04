import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from brand kit
        burgundy: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#f8a0a0',
          400: '#f06868',
          500: '#e53e3e',
          600: '#c42020',
          700: '#9b1c1c',
          800: '#82001a',  // Dark crimson from brand
          900: '#700c0c',  // Dark red from brand (primary)
          950: '#450505',
        },
        cream: {
          50: '#FDFCFA',
          100: '#e7e3dd',  // Light orange from brand (primary background)
          200: '#ddd8d0',
          300: '#cfc8bc',
          400: '#bdb4a5',
          500: '#a89d8b',
        },
        blush: {
          100: '#F5EDEB',
          200: '#E8D5D0',
          300: '#DBBFB7',
          400: '#CDA69C',
        },
        ink: {
          900: '#1A1A1A',
          800: '#2D2D2D',
          700: '#404040',
          600: '#525252',
          500: '#6B6461',
          400: '#8A8583',
        },
      },
      fontFamily: {
        // Perandory Condensed - titles/main headlines
        display: ['var(--font-perandory)', 'Georgia', 'serif'],
        // Blinker - body/paragraph text
        body: ['var(--font-blinker)', 'system-ui', 'sans-serif'],
        // Amoresa - subtitles/accents
        accent: ['var(--font-amoresa)', 'Georgia', 'serif'],
      },
      fontSize: {
        // Adjusted for condensed display font
        'display-xl': ['clamp(4rem, 12vw, 10rem)', { lineHeight: '0.95', letterSpacing: '0.02em' }],
        'display-lg': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '1', letterSpacing: '0.02em' }],
        'display-md': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '0.01em' }],
        'display-sm': ['clamp(1.75rem, 3.5vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '0.01em' }],
        'body-lg': ['1.25rem', { lineHeight: '1.7' }],
        'body-md': ['1.0625rem', { lineHeight: '1.7' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.6' }],
        'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
      },
      spacing: {
        'section': 'clamp(6rem, 15vh, 12rem)',
        'section-sm': 'clamp(4rem, 10vh, 8rem)',
      },
      transitionDuration: {
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'draw-line': 'drawLine 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        drawLine: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
