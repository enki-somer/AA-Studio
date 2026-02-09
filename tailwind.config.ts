import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          light: '#FFFFFF',
          dark: '#0E0F16',
        },
        text: {
          light: '#0A0A0A',
          dark: '#FAFAFA',
        },
        accent: {
          DEFAULT: '#22D3EE',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'Monaco',
          'monospace',
        ],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.6' }],
      },
      spacing: {
        'section': '6rem',
        'section-mobile': '3rem',
        'elevation-1': '1px',
        'elevation-2': '2px',
        'elevation-4': '4px',
        'elevation-8': '8px',
      },
      maxWidth: {
        'content': '65ch',
        'wide': '90ch',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'subtle-dark': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        'elevated': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'elevated-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4)',
        'lifted': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'lifted-dark': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.4)',
        'accent-glow': '0 0 20px rgba(34, 211, 238, 0.4), 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'accent-glow-dark': '0 0 25px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.2), 0 4px 6px -1px rgba(0, 0, 0, 0.4)',
      },
      borderRadius: {
        'surface': '0.5rem',
        'surface-lg': '0.75rem',
        'surface-xl': '1rem',
      },
      backdropBlur: {
        'glass': '8px',
        'glass-sm': '4px',
        'glass-lg': '16px',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
      },
      transitionTimingFunction: {
        'ease-natural': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
