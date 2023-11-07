/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'bg-img': "url('../assets/bac.jpg')",
      }

    },
  },
  plugins: [require("daisyui")],
}

