const tailwindcss = require('tailwindcss')

module.exports = {
  content: ['./public/index.html', './public/main.js'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
