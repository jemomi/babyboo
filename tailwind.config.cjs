/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    fontFamily: {
      "primary": ["Oswald", "sans-serif"],
      "secondary": ["Open Sans", "sans-serif"]
    },
    extend: {
      colors: {
        "primary-brown": "#362B24",
        "kangaroo": "#C4C9C1"
      },
      width: {
        1440: "1440px"
      }
    },
  },
  plugins: [],
}
