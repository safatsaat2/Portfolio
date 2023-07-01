/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'bg': '#E8D5C4',
      'word': '#564E47',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      'header': ['Montserrat', 'sans-serif'],
      'para': ['Raleway', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
