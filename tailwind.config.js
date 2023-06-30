/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'header': ['League Spartan', 'sans-serif'],
      'para': ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
