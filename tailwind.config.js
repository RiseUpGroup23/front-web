/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        green: "rgb(0, 128, 0)",
        black: '#151515'
      }
    },
  },
  plugins: [],
}

