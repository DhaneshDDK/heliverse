import React from 'react'
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { setLoading } from '../Redux/Slices/Pagination';
import { createUsers } from '../Services/Operations/userApi';

const CreateUser = () => {
    const {users} = useSelector((state)=>state.page);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
      } = useForm();

      useEffect(() => {
        if (isSubmitSuccessful) {
          reset({
            email: "",
            firstName: "",
            lastName: "",
            domain: "",
            gender : "",
            availability : "",
          });
        }
      }, [reset, isSubmitSuccessful])

      const [loading, setLoading] = useState(false);

      const formHandler = async (data)=>{
        // console.log(data);
        const toastId = toast.loading("Loading")
        setLoading(true);
            try {
             const res = await createUsers(data);
             toast.success("User created successfully")
  
            } catch (error) {
               console.log(error.message);
               throw new Error(error.message);
            }
            toast.dismiss(toastId);
        setLoading(false);
      }




  return (
    <div>

<form onSubmit={handleSubmit(formHandler)} className='mt-6 mb-2 text-gray-100 max-w-[600px] mx-auto border border-[#00ffff] rounded-md flex flex-col items-center justify-center py-6 px-4'>
               
              
               <div className='flex flex-col gap-2'>
                   <div className='flex flex-col gap-5 md:flex-row'>
                  
                   <div className='flex flex-col gap-1'>
                    <label htmlFor="firstName" className=' font-semibold'>First Name</label>
                    <input required
                    id='firstName'
                    name='firstName'
                    placeholder = "Enter your first name"
                    {...register('firstName')}
                     type="text" 
                    className='px-4 py-2 rounded-md border border-[#00ffff] outline-none bg-gray-900 '/>
                    {errors.firstName && <p className='text-[15px] text-gray-400'>First name is required.</p>}
                    </div>
                   <div className='flex flex-col gap-1'>
                    <label htmlFor="lastName">Last Name</label>
                    <input required
                     type="text"
                     id='lastName'
                    name='lastName'
                    {...register('lastName')}
                    placeholder = "Enter your last name"
                      className='px-4 py-2 rounded-md border border-[#00ffff] outline-none bg-gray-900 '/>
                       {errors.lastName && <p className='text-[15px] text-gray-400'>Last name is required.</p>}
                    </div>
                   </div>

                   <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className=' font-semibold'>Email</label>
                    <input required 
                    type="email" 
                    id='email'
                    name='email'
                    {...register('email')}
                    placeholder = "Enter your email address"
                    className='px-4 py-2 rounded-md border border-[#00ffff] outline-none bg-gray-900 '/>
                     {errors.email && <p className='text-[15px] text-gray-400'>Email is required.</p>}
                    </div>

                   <div className='flex flex-col gap-1'>
                    <label htmlFor="id" className=' font-semibold'>Id</label>
                    <input required 
                    type="id" 
                    id='id'
                    name='id'
                    {...register('id')}
                    value= { users?.length + 1}
                    className='px-4 py-2 rounded-md border border-[#00ffff] outline-none bg-gray-900 font-bold text-gray-400 '/>
                    </div>



                    <div className='flex flex-col gap-1'>
                    <label htmlFor="gender" className=' font-semibold'>Select Gender</label>
                    <select  className='px-4 py-2 rounded-md border border-[#00ffff] outline-none bg-gray-900 text-gray-300 '
                     type="gender" 
                    id='gender'
                    name='gender'
                    {...register('gender')}
//    onChange={(e)=>{genderChangeHandler(e)}}
   >
      <option value={""}></option>
      <option value={"Female"}>Female</option>
      <option value={"Male"}>Male</option>
      <option value={"Agender"}>Agender</option>
      <option value={"Bigender"}>Bigender</option>
      <option value={"Polygender"}>Polygender</option>
      <option value={"Non-binary"}>Non-binary</option>
      <option value={"Genderfluid"}>Genderfluid</option>
      <option value={"Genderqueer"}>Genderqueer</option>
  </select>

                    </div>

                    
                    <div className='flex flex-col gap-1'>
                    <label htmlFor="domain" className=' font-semibold'>Select Domain</label>
                    <select  className='px-4 py-2 rounded-md border border-[#00ffff] outline-none bg-gray-900 text-gray-300 '
                     type="domain" 
                    id='domain'
                    name='domain'
                    {...register('domain')}
//    onChange={(e)=>{genderChangeHandler(e)}}
   >
       <option value={""}></option>
      <option value={"Sales"}>Sales</option>
      <option value={"Finance"}>Finance</option>
      <option value={"Marketing"}>Marketing</option>
      <option value={"IT"}>IT</option>
      <option value={"Management"}>Management</option>
      <option value={"UI Designing"}>UI Designing</option>
      <option value={"Business Development"}>Business Dev</option>
  </select>

                    </div>

                    
                    <div className='flex flex-col gap-1'>
                    <label htmlFor="availability" className=' font-semibold'>Select Availability</label>
                    <select  className='px-4 py-2 rounded-md border border-[#00ffff] outline-none bg-gray-900 text-gray-300 '
                     type="availability" 
                    id='availability'
                    name='availability'
                    {...register('availability')}
//    onChange={(e)=>{genderChangeHandler(e)}}
   >
       <option value={""}></option>
      <option value={"yes"}>Yes</option>
      <option value={"no"}>No</option>
      
  </select>

                    </div>

                    


                    <button type='submit' 
                    disabled = {loading}
                    className={`
                     cursor-pointer w-fit p-4 my-5 rounded-lg ${ loading? " bg-gray-400" :"bg-gradient-to-r from-[#00ffff] via-[#000] to-[#00ffff]" }
                     shadow-[-5px_5px_80px_rgba(0,_255,_255,_1)] text-gray-200
                    `}> Create User </button>

               </div>
          </form>
      
    </div>
  )
}

export default CreateUser
