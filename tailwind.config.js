const tailwindcss = require('tailwindcss')

module.exports = {
  content: ['./public/index.html', './public/js/main.js'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
