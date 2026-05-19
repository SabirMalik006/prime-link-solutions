/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          500: '#1a3a5c',
          600: '#14304f',
          700: '#0e2540',
          800: '#0a1c30',
          900: '#061220',
        },
        teal: {
          400: '#1d7a8a',
          500: '#155f6e',
        },
        gold: '#c9a84c',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
