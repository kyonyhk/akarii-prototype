/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors with opacity support
        white: '#dbdbdb',
        black: '#0a0a0a',

        // Primary brand colors extracted from Figma
        primary: {
          base: '#22272F',
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#22272F',
          900: '#1a1e23',
        },
        // Background colors
        background: {
          dark: '#1a1e23',
          overlay: 'rgba(34, 39, 47, 0.9)',
        },
        // Text colors
        text: {
          primary: '#ffffff',
          secondary: '#e9ecef',
          muted: '#adb5bd',
        },
        // Accent colors
        accent: {
          primary: '#ffffff',
          secondary: '#f8f9fa',
        },
      },
      fontFamily: {
        // PP Pangaia Light for headings
        pangaia: [
          'PP Pangaia Light',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        // PP Museum Light for paragraphs
        museum: [
          'PP Museum Light',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        // PP Mondwest Regular for eyebrows
        mondwest: [
          'PP Mondwest Regular',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        // Legacy fallbacks
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      fontSize: {
        // PP Pangaia Light - Headings
        'heading-mega1': ['12rem', { lineHeight: '0.7', fontWeight: '300' }], // 128px
        'heading-mega2': ['8rem', { lineHeight: '1.0', fontWeight: '300' }], // 96px
        heading1: ['3.75rem', { lineHeight: '1.0', fontWeight: '300' }], // 60px
        heading2: ['3rem', { lineHeight: '1.0', fontWeight: '300' }], // 48px
        heading3: ['2.25rem', { lineHeight: '1.0', fontWeight: '300' }], // 36px
        heading4: ['1.875rem', { lineHeight: '1.0', fontWeight: '300' }], // 30px
        heading5: ['1.5rem', { lineHeight: '1.0', fontWeight: '300' }], // 24px

        // PP Museum Light - Paragraphs
        paragraph1: ['1.25rem', { lineHeight: '1.0', fontWeight: '300' }], // 20px
        paragraph2: ['1rem', { lineHeight: '1.0', fontWeight: '300' }], // 16px

        // PP Mondwest Regular - Eyebrows
        eyebrow1: ['2.25rem', { lineHeight: '1.0', fontWeight: '400' }], // 36px
        eyebrow2: ['1.875rem', { lineHeight: '1.0', fontWeight: '400' }], // 30px
        eyebrow3: ['1.5rem', { lineHeight: '1.0', fontWeight: '400' }], // 24px
        eyebrow4: ['1.25rem', { lineHeight: '1.0', fontWeight: '400' }], // 20px
        eyebrow5: ['1rem', { lineHeight: '1.0', fontWeight: '400' }], // 16px

        // Legacy fallbacks (keep for existing components)
        hero: ['4rem', { lineHeight: '1.0', fontWeight: '300' }],
        'hero-sm': ['2.5rem', { lineHeight: '1.0', fontWeight: '300' }],
        h1: ['3rem', { lineHeight: '1.0', fontWeight: '300' }],
        h2: ['2rem', { lineHeight: '1.0', fontWeight: '300' }],
        h3: ['1.5rem', { lineHeight: '1.0', fontWeight: '300' }],
        'body-lg': ['1.125rem', { lineHeight: '1.0', fontWeight: '300' }],
        body: ['1rem', { lineHeight: '1.0', fontWeight: '300' }],
        'body-sm': ['0.875rem', { lineHeight: '1.0', fontWeight: '300' }],
        caption: ['0.75rem', { lineHeight: '1.0', fontWeight: '400' }],
      },
      spacing: {
        // Custom spacing scale
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        42: '10.5rem',
        46: '11.5rem',
        50: '12.5rem',
        128: '32rem',
        144: '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      backgroundImage: {
        'gradient-dark':
          'linear-gradient(135deg, rgba(26, 30, 35, 0.9) 0%, rgba(34, 39, 47, 0.8) 100%)',
        'hero-gradient':
          'linear-gradient(180deg, rgba(26, 30, 35, 0.2) 0%, rgba(34, 39, 47, 0.9) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
