import React from 'react';
import Gallery from './Gallery';

export default function Projects() {
  return (
    <section id='projects' className='h-fit p-10 lg:p-20 2xl:px-96 mx-auto dark:bg-black bg-grey dark:text-white text-black flex flex-col justify-center align-middle'>
      <h2 className='text-xl md:text-2xl font-bold dark:text-black text-grey bg-gradient-to-r dark:from-violet dark:to-yellow from-violet to-orange w-fit px-1 rounded mb-6'>Proyectos.</h2>
      <p className='text-sm lg:text-base my-6 mx-auto'>Durante mi trayectoria en diferentes capacitaciones, me enfoqué en el desarrollo del <strong>Front End</strong>, trabajando en diversos proyectos. A lo largo del desarrollo de cada uno de ellos adquirí experiencia tanto en la implementación de soluciones de código puro como en el uso de frameworks y templates para crear interfaces interactivas y atractivas.</p>
      <Gallery></Gallery>
      <div className='flex flex-col text-center md:items-center mt-12'>
        <h2 className='text-xl md:text-2xl font-bold md:w-2/3 px-1 rounded mb-5'>Te invito a ver <span className='dark:text-yellow text-orange p-1 rounded-lg'>mis proyectos</span> en Github.</h2>
        <a href='https://github.com/ailenglassmam?tab=repositories' target='_blank' className='uppercase text-center text-xs font-medium dark:text-black text-white px-4 py-2 rounded-full dark:bg-white bg-black dark:border-2 dark:border-white border-black border-2 hover:border-black hover:bg-grey hover:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white hover:transition-all w-fit mx-auto'>Github</a>
      </div>
    </section>
  )
}
