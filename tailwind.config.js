/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customcolor: "rgb(84, 50, 205)",
      },      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

