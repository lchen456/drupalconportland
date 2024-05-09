/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{templates,components}/**/*.{twig,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'briem-hand': ' "Briem Hand", cursive;'
      }
    },
  },
  plugins: [],
}

