const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    // '.app/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'background-light': '#ffffff',
        'background-dark': '#141b2e',
        primary: '#01e3ff',
        'primary-hover': '#01e3e0',
        'primary-active': '#01e3e0',
        'primary-disable': '#15889f',
        'color-light': '#000000',
        'color-dark': '#ffffff',
        error: 'rgb(220 38 38)'
      },
      opacity: {
        7: '.07',
        15: '.15'
      },
      scale: {
        85: '.85'
      },
      boxShadow: {
        'input-shadow': '0 0 0 1px'
      }
    }
  },
  plugins: [require('tailwindcss-radix')()]
}
