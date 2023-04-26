/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'custom': {
        gold: '#EAAC52'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'film-awards-promo': 'url("/Group%2020.svg")',
        'film-awards-hero': 'url("/tw-public/340167578_240407728508287_3119180091219708388_n.jpg")',
        'hero-voting': 'url("/tw-public/hero-voting.jpg")'
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}
