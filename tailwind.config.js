/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1556px',
        // => @media (min-width: 1556px) { ... }
      },
    },
  },
  plugins: [require('daisyui')],
}
