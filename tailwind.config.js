/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b2ff',
          300: '#4d93ff',
          400: '#267aff',
          500: '#0057ff',
          600: '#0047cc',
          700: '#003799',
          800: '#002766',
          900: '#001a40',
        },
      },
    },
  },
  plugins: [],
}
