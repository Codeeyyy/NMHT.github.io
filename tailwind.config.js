/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}", // if some files are still in src
    "./public/**/*.{html,js}", // example if files are in the public directory
    "./*.{html,js}" // for files in the root directory
  ],
  theme: {
    extend: {
      boxShadow: {
        neumorphism: '10px 10px 20px #1a1a1a, -10px -10px 20px #2e2e2e',
        'neumorphism-hover': '5px 5px 10px #1a1a1a, -5px -5px 10px #2e2e2e',
      },
      colors: {
        'scrollbar-bg': '#1a1a1a', // Background color for scrollbar
        'scrollbar-thumb': '#2e2e2e', // Thumb color for scrollbar
        'scrollbar-thumb-hover': '#3e3e3e', // Hover color for scrollbar thumb
      },
    },
  },
  variants: {
    scrollbar: ['rounded']
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
