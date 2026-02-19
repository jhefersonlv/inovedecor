/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "index.html",
    "css/**/*.{html,js}"
],
  theme: {
    extend: {
        colors: {
            primary: "#ddc23d",
            secondary: "#c3c6c6",
        }
    },
  },
  plugins: [],
}
