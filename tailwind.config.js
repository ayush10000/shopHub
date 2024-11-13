/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#1a1f36',
        },
        gold: {
          600: '#b8860b',
        },
      },
    },
  },
  plugins: [],
};