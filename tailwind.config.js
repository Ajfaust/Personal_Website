/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#5492f7',
          secondary: '#6754F7',
          accent: '#f8c677',
          'base-content': '#eeedeb',
        },
      },
    ],
  },
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
