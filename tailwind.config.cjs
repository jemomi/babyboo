/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    fontFamily: {
      "oswald": ["Oswald", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"]
    },
    extend: {
      colors: {
        "pastel-gray": "#CFCCC5",
        "primary-brown": "#362B24",
        "oil-brown": "#261F18",
        "rose-ebony": "#6A474C",
        "kangaroo": "#C4C9C1",
        "soft-peach": "#F1ECE6"
      },
      maxWidth: {
        1440: "1440px"
      }
    },
  },
  plugins: [],
}
