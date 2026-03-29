/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          50: '#f8f7f4',
          100: '#f0efe8',
          200: '#e2e0d5',
          800: '#1a1a1f',
          900: '#111114',
          950: '#0a0a0d',
        },
        accent: {
          DEFAULT: '#c8a46e',
          light: '#dfc9a0',
          dark: '#a07d42',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(200,164,110,0.15)' },
          '100%': { boxShadow: '0 0 40px rgba(200,164,110,0.3)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
