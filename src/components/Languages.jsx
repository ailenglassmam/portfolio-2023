import React from 'react';
import IconTools from './IconTools';

export default function Languages() {
  return (
    <section className='h-fit p-10 lg:p-20 2xl:px-96 mx-auto dark:bg-black bg-grey dark:text-white text-black flex flex-col justify-center align-middle'>
      <h2 className='text-xl md:text-2xl font-bold dark:text-black text-grey bg-gradient-to-r dark:from-violet dark:to-yellow from-violet to-orange w-fit px-1 rounded mb-6'>Lenguajes y herramientas que domino.</h2>
      <IconTools></IconTools>
    </section>
  )
}
