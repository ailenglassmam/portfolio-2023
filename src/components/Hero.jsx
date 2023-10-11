import React, { useState, useEffect } from 'react';
import presentationLight from '../assets/imagenes/light-presentation.png';
import presentationDark from '../assets/imagenes/dark-presentation.png';

export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  return (
    <section id='home' className='min-h-screen max-h-fit md:h-screen xl:h-fit px-10 lg:px-20 2xl:px-96 dark:bg-black bg-grey dark:text-white text-black flex flex-col justify-center align-middle'>
      {isDarkMode ? (
        <img src={presentationDark} alt='Imagen en modo oscuro' className='w-1/2 md:w-2/12 mx-auto mb-10' />
      ) : (
        <img src={presentationLight} alt='Imagen en modo claro' className='w-1/2 md:w-2/12 mx-auto mb-10' />
      )}
      <h1 className='text-2xl md:text-3xl font-bold text-center md:w-4/5 mx-auto'>Hola, <span className='dark:text-black text-grey bg-gradient-to-r dark:from-violet dark:to-yellow from-violet to-orange text-dark-gradient-title w-fit px-1 rounded'>soy Ailén</span>, Front End Developer viviendo en Buenos Aires.</h1>
      <p className='text-sm lg:text-base text-center md:w-4/5 my-12 mx-auto'><strong>Diseñador Industrial</strong>, con certificación en <strong>Experiencia de Usuario e Interfaces</strong> y, actualmente, estoy enfocado en desarrollar habilidades como <strong>Front End Developer</strong>. También tengo conocimientos y prácticas en <strong>Diseño Gráfico</strong>.</p>
      <div className='flex flex-col md:flex-row gap-5 mx-auto justify-center'>
        <a href='#contact' className='uppercase text-center text-xs font-medium dark:text-black text-white px-4 py-2 rounded-full dark:bg-white bg-black dark:border-2 dark:border-white border-black border-2 hover:border-black hover:bg-grey hover:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white hover:transition-all'>Contactame</a>
        <a href='#projects' className='uppercase text-center text-xs font-medium dark:text-white text-black px-4 py-2 rounded-full bg-transparent dark:border-2 dark:border-white border-2 border-black hover:border-grey dark:hover:border-black hover:transition-all'>Ver proyectos</a>
      </div>
    </section>
  )
}