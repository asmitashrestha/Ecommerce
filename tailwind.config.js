/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'img-1':"url('./src/assets/img1.jpg')",
        'img-2':"url('./src/assets/img2.jpg')",
        'img-3':"url('./src/assets/img3.jpg')",
      }

    },
  },
  plugins: [],
}

