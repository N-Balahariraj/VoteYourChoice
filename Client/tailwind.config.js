/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily :{
      roboto : ["Roboto Mono", "monospace"],
      nunito : ["Nunito", "sans-serif"],
      ubuntu : ["Ubuntu Sans Mono", "monospace"],
      poppin : ["Poppins", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

