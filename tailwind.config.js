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
        paper: '#FFFFFF',
        ink: '#101010',
        dark: '#111111',
        lightOnDark: '#F6F6F2',
        muted: '#757575',
        divider: '#B8B8B4',
        ruleWhite: 'rgba(16,16,16,0.12)',
        ruleDark: 'rgba(255,255,255,0.12)',
        arch: {
          light: '#FFFFFF',
          white: '#FFFFFF',
          dark: '#111111',
          black: '#101010',
          ink: '#101010',
          muted: '#757575',
          ivory: '#F6F6F2',
          accent: '#101010',
          bronze: '#757575',
        },
        studio: {
          bg: '#FFFFFF',
          card: '#FFFFFF',
          border: 'rgba(16,16,16,0.12)',
          light: '#FFFFFF',
          lightMuted: '#F6F6F2',
          lightBorder: 'rgba(16,16,16,0.12)',
          textDark: '#101010',
          textMuted: '#757575',
          accent: '#101010',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'ui-monospace', 'monospace'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        editorial: ['Inter', 'system-ui', 'sans-serif'],
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
