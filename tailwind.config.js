/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        arch: {
          light: '#F4F2EE',
          white: '#FAF9F6',
          dark: '#0B0B0A',
          black: '#050505',
          ink: '#11110F',
          muted: '#77736C',
          ivory: '#F7F4EF',
          accent: '#C5A880',
          bronze: '#A39274',
        },
        studio: {
          bg: '#050505',
          card: '#0B0B0A',
          border: 'rgba(255,255,255,0.16)',
          light: '#F4F2EE',
          lightMuted: '#FAF9F6',
          lightBorder: 'rgba(17,17,15,0.14)',
          textDark: '#11110F',
          textMuted: '#77736C',
          accent: '#C5A880',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Helvetica Neue', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        editorial: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.18em',
      },
      lineHeight: {
        tight: '1.05',
        snug: '1.2',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-up': 'revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
