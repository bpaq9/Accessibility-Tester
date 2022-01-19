const tailwindcss = require("tailwindcss")

module.exports = {
  content: ["/index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
