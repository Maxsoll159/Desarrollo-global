/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo' : 'url("/img/fondoPage.webp")',
        'rectangulo' : 'url("/img/rectangulo.webp")'
      },
      colors:{
        'link' : "#aab1b8"
      }
    },
  },
  plugins: [],
}
