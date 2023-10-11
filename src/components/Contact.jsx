import React from 'react';
import behance from '../assets/iconos/brand-behance.svg';
import linkedin from '../assets/iconos/brand-linkedin.svg';
import github from '../assets/iconos/brand-github.svg';

export default function Contact() {
  return (
    <section id='contact' className='h-fit p-10 lg:p-20 2xl:px-96 mx-auto dark:bg-black bg-grey dark:text-white text-black flex flex-col justify-center align-middle'>
      <h2 className='text-xl md:text-2xl font-bold dark:text-black text-grey bg-gradient-to-r dark:from-violet dark:to-yellow from-violet to-orange w-fit px-1 rounded mb-6'>Contacto.</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='bg-orange dark:bg-yellow text-white dark:text-black p-8 rounded-lg'>
          <h3 className='text-lg md:text-xl font-bold'>Seguime.</h3>
          <p className='my-5'>Estoy buscando oportunidades. Estoy entusiasmada por unirme a un equipo comprometido.</p>
          <div className='w-full h-1 bg-white dark:bg-black rounded-full mb-5'></div>
          <div className='grid grid-cols-3 justify-center'>
            <a href='https://www.behance.net/ailnglassmam' target='_blank' className='bg-orange dark:bg-yellow w-fit rounded-full p-3 mx-auto dark:hover:bg-deepYellow hover:bg-deepOrange'><img className='dark:text-black text-white' src={behance}></img></a>
            <a href='https://www.linkedin.com/in/ailenglassmam/' target='_blank' className='bg-orange dark:bg-yellow w-fit rounded-full p-3 mx-auto dark:hover:bg-deepYellow hover:bg-deepOrange transition-colors'><img src={linkedin}></img></a>
            <a href='https://github.com/ailenglassmam?tab=repositories' target='_blank' className='bg-orange dark:bg-yellow w-fit rounded-full p-3 mx-auto dark:hover:bg-deepYellow hover:bg-deepOrange transition-colors'><img src={github}></img></a>
          </div>
        </div>
      </div>
    </section>
  )
}