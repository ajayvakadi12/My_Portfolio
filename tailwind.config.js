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
        dark: {
          bg: '#0B1020',
          secondary: '#111A2E',
          card: '#151F35',
          cardHover: '#1B2744',
          border: 'rgba(148, 163, 184, 0.15)',
          text: '#F8FAFC',
          muted: '#94A3B8',
        },
        light: {
          bg: '#F8FAFC',
          secondary: '#F1F5F9',
          card: '#FFFFFF',
          cardHover: '#F8FAFC',
          border: 'rgba(148, 163, 184, 0.25)',
          text: '#0F172A',
          muted: '#64748B',
        },
        primary: {
          purple: '#8B5CF6',
          purpleDark: '#7C3AED',
          lavender: '#A78BFA',
          lightPurple: '#DDD6FE',
        },
        accent: {
          teal: '#2DD4BF',
          tealDark: '#14B8A6',
          cyan: '#38BDF8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
        'glow-teal': '0 0 25px -5px rgba(45, 212, 191, 0.3)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

