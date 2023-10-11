import React from 'react';
import educacion from '../information/educationData';

export default function EducationCard() {

  const educacionRealizada = educacion.map(curso => {
    return (
      <div className='h-fit w-full bg-grey dark:bg-black text-black dark:text-white rounded-xl p-4 grid md:grid-cols-6 gap-4' key={curso.id}>
        <h3 className='text-lg md:text-xl font-bold md:pr-4 md:border-r-2 md:col-span-1 md:my-auto'>{curso.year}</h3>
        <div className='md:pl-2 md:col-span-5 md:gap-4'>
          <h4 className='uppercase font-bold text-md' data-section='course-1' data-value='place'>{curso.institution}</h4>
          <p className='text-sm' data-section='course-1' data-value='title'>{curso.title}</p>
        </div>
      </div>
    )
  })

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
      {/* course */}
      {educacionRealizada}
      {/* course */}
    </div>
  )
}
