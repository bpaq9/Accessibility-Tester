const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities, addComponents, e, prefix, config }) {
      // Add your custom styles here
    },
    require("@tailwindcss/forms"),
  ],
};
