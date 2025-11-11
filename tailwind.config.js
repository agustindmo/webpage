/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#D1FAE5',
        'brand-pink': '#FCE7F3',
        'brand-pink-dark': '#EC4899',
        'brand-green-dark': '#065F46',
      },
      keyframes: {
        floatFade: {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateY(20px) scale(0.95)',
          },
          '15%, 85%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
      },
      animation: {
        'float-fade-base': ['15s ease-in-out infinite', 'floatFade'],
      },
      // New/Modified: Custom delay utilities are now defined here
      transitionDelay: {
        '4000': '4000ms', // Used for 4s delay
        '8000': '8000ms', // Used for 8s delay
        '12000': '12000ms', // Used for 12s delay
      },
    },
  },
}