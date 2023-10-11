import React from 'react';
import cv from '/resume_Ailen_Glassmam.pdf';

export default function Resume() {
  return (
    <section className='h-fit p-10 lg:p-20 2xl:px-96 mx-auto dark:bg-black bg-grey dark:text-white text-black flex flex-col justify-center align-middle text-center md:items-center'>
      <h2 className='text-xl md:text-2xl font-bold md:w-2/3 px-1 rounded mb-5'>Descargá mi curriculum.</h2>
      <div className='flex flex-row gap-5'>
        <a href={cv} download className='uppercase text-center text-xs font-medium dark:text-black text-white px-4 py-2 rounded-full dark:bg-white bg-black dark:border-2 dark:border-white border-black border-2 hover:border-black hover:bg-grey hover:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white hover:transition-all w-fit mx-auto'>Descargar</a>
      </div>
    </section>
  )
}
