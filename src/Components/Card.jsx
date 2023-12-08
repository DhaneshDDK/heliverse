import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Card = (user) => {
    const {id,first_name, last_name, email, gender,avatar, domain, available } = user.user; 
    // console.log(id,first_name,last_name,email,gender,avatar,domain,available)
  return (
    <div className=" py-2 w-[100%] bg-[#03396c] gap-1 text-gray-300 rounded-lg flex flex-col sm:flex-row items-center justify-around">
           <div className=' border-2 rounded-full p-1 flex items-center justify-center bg-black'> <img src={avatar} width={50} /></div>  
           
           <div className='flex items-center gap-2 justify-center sm:flex-col w-[10%]'>
              <div className='font-bold'>Username</div>
              <div className=''> {first_name + last_name} </div>
           </div> 
           <div className='flex items-center gap-2 justify-center sm:flex-col w-[10%]'>
              <div className='font-bold'>Id</div>
              <div> {id} </div>
           </div> 
           <div className='flex items-center gap-2 justify-center sm:flex-col w-[18%]'>
              <div className='font-bold'>Email</div>
              <div> {email} </div>
           </div> 
           <div className='flex items-center gap-2 justify-center sm:flex-col w-[10%]'>
              <div className='font-bold'>Gender</div>
              <div> {gender} </div>
           </div> 
           <div className='flex items-center gap-2 justify-center sm:flex-col w-[10%]'>
              <div className='font-bold'>Domain</div>
              <div> {domain} </div>
           </div> 
           <div className='flex items-center gap-2 justify-center sm:flex-col w-[10%]'>
              <div className='font-bold'>Available</div>
              {
                (available===true) ? <div> Yes </div> : <div> No </div>
              }
           </div> 
           <NavLink to="/edituser"><FaRegEdit size={20} color='#fff101' className=' cursor-pointer'/></NavLink>
    </div>
  )
}

export default Card
