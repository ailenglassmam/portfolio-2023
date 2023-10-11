import React from 'react';
import workPlace from '../assets/imagenes/escritorio.svg';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export default function About() {
  return (
    <section id='aboutMe' className='h-fit px-10 lg:p-20 2xl:px-96 lg:mx-auto dark:bg-black bg-grey dark:text-white text-black flex flex-col justify-center align-middle'>
      <div>
        <h2 className='text-xl md:text-2xl font-bold dark:text-black text-grey bg-gradient-to-r dark:from-violet dark:to-yellow from-violet to-orange text-dark-gradient-title w-fit px-1 rounded mb-12'>Sobre Mi.</h2>
        <div className='flex flex-col md:flex-row gap-5 mb-12'>
          <img src={workPlace} alt='My work place' className='rounded-xl sm:h-fit' />
          <div className='flex flex-col w-full justify-between'>
            <div className='flex flex-row gap-2'>
              <div className='dark:bg-yellow bg-orange h-2 w-1/12 rounded-full'></div>
              <div className='bg-violet h-2 w-2 rounded-full'></div>
            </div>
            <p className='text-sm lg:text-base mt-5 mx-auto'>Mi transición del diseño industrial al desarrollo web marcó un cambio emocionante y único en mi carrera. Mi experiencia en diseño industrial me proporcionó habilidades únicas en conceptualización, pensamiento creativo y resolución de problemas. Estas habilidades, combinadas con mi pasión por aprender y determinación, me impulsaron al mundo del desarrollo web.</p>
            <p className='text-sm lg:text-base mt-3 mx-auto'>Ahora, como aspirante a desarrollador front-end, mi enfoque orientado al diseño, la atención meticulosa a los detalles y la capacidad de comprender las necesidades de los usuarios se convierten en una ventaja competitiva en el sector de TI.</p>
            <p className='text-sm lg:text-base mt-3 mx-auto'>Estoy ansioso por aplicar mi combinación de habilidades y experiencia a proyectos web que no solo sean funcionales sino también visualmente atractivos y centrados en el usuario.</p>
            <p className='uppercase text-xs lg:text-sm tracking-widest mt-3' ><ArrowForwardRoundedIcon /> Mi lugar en el mundo</p>
          </div>
        </div>
      </div>
    </section>
  )
}
