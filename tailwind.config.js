/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        darkColor:"#37393F",
        purpleColor:"#6B77E5",
        bgColor: "#F4F4F4",
        greenColor:"#40DDB6",
        lightColor: "#B9B9B9",
        parargraphColor: " #7D7D7D",
        aboutBoxBg: " #E3E3E3",
        darkBg:"#2E2F34",
        opacityBg:"#4C4D52"
      },
      backgroundImage: {
        'hero': './images/Photo.jpg'
      }
    },
  },
  plugins: [],
}

