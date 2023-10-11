import React from 'react';
import Brightness6RoundedIcon from '@mui/icons-material/Brightness6Rounded';

export default function Mode() {
  const changeDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  }
  return (
    <div className='absolute'>
      <button className='rounded-full z-50 hover:bg-deep-violet bg-violet transition-colors dark:text-black text-grey p-3 fixed bottom-8 right-8' onClick={changeDarkMode}><Brightness6RoundedIcon /></button>
    </div>

  )
}
