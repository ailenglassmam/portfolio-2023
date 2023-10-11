import React from 'react'
import tools from '../information/iconData'

export default function IconTools() {

  const tecnologias = tools.map(tool => {
    return (
      <div key={tool.text}>
        <div className='flex items-center justify-center w-12 h-12 rounded-full mx-auto bg-orange dark:bg-violet animate__animated animate__zoomIn'>
          <img src={tool.icon} alt={tool.text} className='h-1/2' />
        </div>
        <p className='mt-4'>{tool.text}</p>
      </div>
    )
  })

  return (
    <div className='grid grid-cols-2 gap-8 text-center sm:grid-cols-5 lg:grid-cols-7 mt-10'>
      {tecnologias}
    </div>
  )
}
