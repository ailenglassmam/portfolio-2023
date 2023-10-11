import React from 'react';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
  return (
    <section id='experience' className='h-fit p-10 lg:p-20 2xl:px-96 dark:bg-black bg-grey dark:text-white text-black flex flex-col justify-center align-middle'>
      <h2 className='text-xl md:text-2xl font-bold dark:text-black text-grey bg-gradient-to-r dark:from-violet dark:to-yellow from-violet to-orange w-fit px-1 rounded mb-6'>Experiencia.</h2>
      <p className='text-sm lg:text-base my-6 mx-auto'>Tuve la oportunidad de trabajar en varios proyectos, entre ellos: <strong>renderizado 3D, rebranding, ilustraciones y diseño de contenido para redes sociales</strong>. He trabajado tanto en proyectos desde cero como en proyectos ya iniciados, utilizando diferentes herramientas y programas para llevar a cabo cada proyecto con éxito.</p>
      <ExperienceCard></ExperienceCard>
      <div className='flex flex-col text-center md:text-start md:items-center mt-12 md:flex-row md:justify-between'>
        <h2 className='text-xl md:text-2xl font-bold md:w-2/3 px-1 rounded'>Te invito a ver <span className='dark:text-yellow text-orange p-1 rounded-lg'>mi trabajo</span> en Behance.</h2>
        <a href='https://www.behance.net/ailnglassmam' target='_blank' className='uppercase text-center text-xs font-medium dark:text-black text-white px-4 py-2 rounded-full dark:bg-white bg-black dark:border-2 dark:border-white border-black border-2 hover:border-black hover:bg-grey hover:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white hover:transition-all w-fit mx-auto mt-5 md:mt-0 md:mx-0'>Behance</a>
      </div>
    </section>
  )
}
