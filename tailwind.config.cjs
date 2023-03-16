/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#EDF1D6',
          400: '#9DC08B',
          500: '#609966',
          600: '#40513B',
        },
      },
    },
  },
  plugins: [],
}
