const plugin = require('tailwindcss/plugin')
      // 'background-light': '#ffffff',
      // 'background-dark': '#141b2e',
      // primary: '#01e3ff',
      // 'primary-hover': '#01e3e0',
      // 'primary-active': '#01e3e0',
      // 'primary-disabled': '#0b7f97',
      // 'color-light': '#000000',
      // 'color-dark': '#ffffff',
      // error: 'rgb(220 38 38)'
        // f74663

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // f6f7f9
        'background-light': '#F6FAFE',
        'background-dark': '#161819',
        'primary': '#242529',
        'primary-hover': '#2b2d31',
        'primary-active': '#201d43',
        'primary-disabled': '#838297',
        'secondary': '#07042E',
        'secondary-hover': '#060429',
        'secondary-active': '#201d43',
        'secondary-disabled': '##838297',
        'accent': '#f52548',
        'accent-hover': '#f63b5a',
        'accent-active': '#f7516d',
        'accent-disabled': '#93162b',
        'color-light': '#000000',
        'color-dark': '#ffffff',
        error: '#f74663',
        'neutral': '#242529'
      },

      opacity: {
        7: '.07',
        15: '.15'
      },
      scale: {
        85: '.85',
        103: '1.03'
      },
      boxShadow: {
        'input-shadow': '0 0 0 1px'
      },
      keyframes: {
        blinking: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        blink: 'blinking 1s infinite'
      }
    }
  },
  plugins: [require('tailwindcss-radix')()]
}
