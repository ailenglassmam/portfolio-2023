import React from 'react';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import trabajos from '../information/trabajosData';

export default function ExperienceCard() {

  const trabajosRealizados = trabajos.map(trabajo => {
    return (
      <div className='w-auto dark:bg-yellow bg-orange rounded-xl hover:shadow-2xl drop-shadow-2xl dark:hover:shadow-darkShadow hover:shadow-lightShadow transition-shadow' key={trabajo.id}>
        <div className='p-5'>
          <span className='dark:bg-black dark:text-white bg-white text-black text-xs font-medium px-2.5 py-0.5 mb-4 rounded-full uppercase'>{trabajo.metodo}</span>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-white dark:text-black' >{trabajo.titulo}</h5>
          <p className='mb-3 font-normal dark:text-black text-white'>{trabajo.tipo}</p>
          <a href={trabajo.link} target='_blank' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center dark:text-black text-white ml-auto dark:hover:text-violet hover:text-violet transition-colors'>Ver Más <ArrowForwardRoundedIcon /></a>
        </div>
      </div>
    )
  })

  return (
    <article className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {/* experience */}
      {trabajosRealizados}
      {/* experience */}
    </article>
  )
}
