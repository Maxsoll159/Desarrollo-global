
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        'blue-desarrollo': "#2133a5"
      },
      backgroundImage: {
        'fondo' : 'url("/img/fondoPage.webp")',
        'rectangulo' : 'url("/img/chica.webp")',
        'estrella': 'url("/img/estrella.webp")',
        'laptop' : 'url("/img/lap.webp")',
        'comentarios': 'url("/img/fondoComentarios.webp")'
      },
      colors:{
        'link' : "#aab1b8",
        'blue-desarrollo' : "#2133a5"
      },
    },
  },
  plugins: [],
}
