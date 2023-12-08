import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-3  px-2'>
              <NavLink to="/" className='rounded bg-gray-600 px-4 py-2 text-green-500 font-serif font-bold'>Home</NavLink>
              <NavLink to="/createuser" className='rounded bg-gray-600 px-4 py-2 text-green-500 font-serif font-bold'>Create user</NavLink>
              <NavLink to="/createteam" className='rounded bg-gray-600 px-4 py-2 text-green-500 font-serif font-bold'>Create Team</NavLink>
              <NavLink to="/viewteam" className='rounded bg-gray-600 px-4 py-2 text-green-500 font-serif font-bold'>View Team</NavLink>
            </div>
    </div>
  )
}

export default Nav
