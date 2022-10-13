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
        primary: '#01e3ff',
        'primary-hover': '#01e3e0',
        color: '#ffffff'
      },
      opacity: {
        7: '.07',
        15: '.15'
      }
    }
  },
  plugins: [require('tailwindcss-radix')()]
}
