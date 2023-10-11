import React from 'react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='w-full dark:bg-black bg-grey dark:text-white text-black fixed z-50 h-fit'>
      <nav className='py-5'>
        <ul className='hidden list-none md:flex md:flex-row md:gap-7 md:justify-center'>
          <li className='font-medium md:dark:hover:text-yellow md:hover:text-orange md:hover:cursor-pointer md:transition-colors'><a href='#home' data-section='navbar' data-value='link1'>Inicio.</a></li>
          <li className='font-medium md:dark:hover:text-yellow md:hover:text-orange md:hover:cursor-pointer md:transition-colors'><a href='#aboutMe' data-section='navbar' data-value='link2'>Sobre mi.</a></li>
          <li className='font-medium md:dark:hover:text-yellow md:hover:text-orange md:hover:cursor-pointer md:transition-colors'><a href='#experience' data-section='navbar' data-value='link3'>Experiencia.</a></li>
          <li className='font-medium md:dark:hover:text-yellow md:hover:text-orange md:hover:cursor-pointer md:transition-colors'><a href='#projects' data-section='navbar' data-value='link4'>Proyectos.</a></li>
          <li className='font-medium md:dark:hover:text-yellow md:hover:text-orange md:hover:cursor-pointer md:transition-colors'><a href='#education' data-section='navbar' data-value='link5'>Educación.</a></li>
          <li className='font-medium md:dark:hover:text-yellow md:hover:text-orange md:hover:cursor-pointer md:transition-colors'><a href='#contact' data-section='navbar' data-value='link6'>Contacto.</a></li>
        </ul>
        {/* responsive dropdown menu */}
        <div className='md:hidden w-full fixed dark:bg-black bg-grey dark:text-white text-black z-50 pb-3'>
          <button aria-label='Open Menu' title='Open Menu' className='px-5 py-auto transition duration-200 rounded focus:outline-none focus:shadow-outline' onClick={() => setIsMenuOpen(true)}>
            <svg className='w-5  dark:text-white text-black' viewBox='0 0 24 24'>
              <path fill='currentColor' d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z' />
              <path fill='currentColor' d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z' />
              <path fill='currentColor' d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z' />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute top-20 px-5 w-screen'>
              <div className='p-5 dark:bg-black bg-grey rounded-lg shadow-lg'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <button aria-label='Close Menu' title='Close Menu' className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                    <li><a href='#home' aria-label='Home' title='Home' className='font-medium tracking-wide transition-colors' data-section='navbar' data-value='link1'>Inicio.</a>
                    </li>
                    <li><a href='#aboutMe' aria-label='Home' title='Home' className='font-medium tracking-wide transition-colors' data-section='navbar' data-value='link2'>Sobre Mi.</a>
                    </li>
                    <li ><a href='#experience' aria-label='Home' title='Home' className='font-medium tracking-wide transition-colors' data-section='navbar' data-value='link3'>Experiencia.</a>
                    </li>
                    <li ><a href='#projects' aria-label='Home' title='Home' className='font-medium tracking-wide transition-colors' data-section='navbar' data-value='link4'>Proyectos.</a>
                    </li>
                    <li ><a href='#education' aria-label='Home' title='Home' className='font-medium tracking-wide transition-colors' data-section='navbar' data-value='link5'>Educación.</a>
                    </li>
                    <li ><a href='#contact' aria-label='Home' title='Home' className='font-medium tracking-wide transition-colors' data-section='navbar' data-value='link6'>Contacto.</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
        {/* responsive dropdown menu */}
      </nav>
    </header>
  );
}