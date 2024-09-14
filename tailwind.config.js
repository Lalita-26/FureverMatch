/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Lightblue:"#A7C7E7",
        Lightpink:"#F8BBD0",
        Lightorange:"#FF9A03",
        backgroundImage: {
          'custom-pattern': "url('/public/image/background.jpg')",
        },
      }
    },
  },
  plugins: [],
}

