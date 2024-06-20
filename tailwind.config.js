/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      primary: colors.indigo,
      secondary: colors.slate,
      success: colors.emerald,
      warning: colors.yellow,
      info: colors.sky,
      danger: colors.rose,
    },
    extend: {},
  },
  plugins: [],
};
