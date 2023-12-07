import React from 'react'

const Navbar = () => {
  return (
    <div className="w-11/12 text-white mx-auto py-4 px-4 h-16">
         <div className='flex items-center justify-between px-10'>
            <div className='text-[26px] font-bold font-serif '>User Database </div>
            <div className='flex items-center justify-center gap-5'>
              <button className='rounded bg-gray-600 px-4 py-2 text-green-500 font-serif font-bold'>Create user</button>
              <button className='rounded bg-gray-600 px-4 py-2 text-green-500 font-serif font-bold'>Create Team</button>
              <button className='rounded bg-gray-600 px-4 py-2 text-green-500 font-serif font-bold'>View Team</button>
            </div>
         </div>
    </div>
  )
}

export default Navbar
