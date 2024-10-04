/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./index.html"], // Přidejte všechny HTML soubory zde
  theme: {
    extend: {
      colors: {
        customWhite: '#FFFDF8',
        customRed: '#E1251B'
      },
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'], // Přidání vlastního fontu
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'], // Přidání fontu Plus Jakarta Sans
      },
    },
  },
  plugins: [],
}