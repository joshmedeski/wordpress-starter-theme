const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["./**/*.css", "./**/*.js", "./**/*.php", "./**/*.twig"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.sky, 
        gray: colors.coolGray,
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
