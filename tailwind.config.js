const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./global.css", "./templates/**/*.twig"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        gray: colors.coolGray,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: theme("colors.primary.500"),
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
