/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      primary: "#09C269",
      lightGreen: "#CEF3E1",
      heading: "#000000",
      text: "#000000",
      background: "#FAFBFC",
      border: "#E3E3E3",
      white: "#fff",
    },
  },
  plugins: [],
};
