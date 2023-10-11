/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        education: "url('/assets/imagenes/background-gradient.svg')",
        pbg1: "url('./assets/proyectos/1.jpg')",
        pbg2: "url('./assets/proyectos/2.jpg')",
        pbg3: "url('./assets/proyectos/3.jpg')",
        pbg4: "url('./assets/proyectos/4.jpg')"
      },
    },
    boxShadow: {
      'darkShadow': '0 0px 35px 0px #F2DA5E',
      'lightShadow': '0 0px 35px 0px #F25C05',
    },
    colors: {
      'black': '#0D0D0D',
      'white': '#FFFFFF',
      'grey': '#D8D9D7',
      'violet': '#635EF2',
      'deep-violet': '#3C43E0',
      'yellow': '#F2DA5E',
      'deepYellow': '#D0B011',
      'orange': '#F25C05',
      'deepOrange': '#DC5304',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
  },
  plugins: [],
}

