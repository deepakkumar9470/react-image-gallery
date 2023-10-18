/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode : "class",
  theme: {
    extend: {
      boxShadow: {
        custom: '#D0BFFF'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'pattaya': ['Pattaya', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors :{
        navBg: '#393E46',
        navBgNew: '#0F0F0F',
        mainBg: '#151515',
        mainText: '#F1F0E8',
        childText: '#DDDDDD',
        hoverClr: '#03001C',
        blackBg: '#000000',
        authBg: '#181818'
      }
    
    },

  },
  plugins: [],
}

