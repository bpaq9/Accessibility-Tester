const tailwindcss = require('tailwindcss')

module.exports = {
  content: ['./docs/index.html', './docs/js/main.js'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
