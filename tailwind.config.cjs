/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    extend: {
      colors: {
        "primary-brown": "#362B24"
      },
      width: {
        1440: "1440px"
      }
    },
  },
  plugins: [],
}
