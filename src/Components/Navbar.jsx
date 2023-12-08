import React from 'react'
import Nav from './Nav'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { useEffect } from 'react'
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setOpen(screenWidth > 1020);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="w-11/12 text-white mx-auto pt-2 px-4 h-16 relative">
         <div className='flex items-center justify-between px-10'>
            <div className='text-[26px] font-bold font-serif '>User Database </div>
           { isOpen && <div className='absolute lg:relative lg:top-0 lg:right-0 top-20 border-2 px-2 py-4 rounded-lg bg-gray-500 right-5
            lg:border-0 lg:bg-transparent'><Nav/></div> }
            <div className='lg:hidden'><Hamburger toggled={isOpen} toggle={setOpen} color='white' /></div>
         </div>

    </div>
  )
}

export default Navbar
