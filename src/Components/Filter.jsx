import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { setName, setGender , setId, setAvailable, setDomain } from '../Redux/Slices/Pagination';
import { useDispatch } from 'react-redux';

const Filter = () => {
   
    const {name, domain, available, id, gender} = useSelector((state)=> state.page);
    const dispatch = useDispatch();

    const inputHandler = async (e)=>{
         dispatch(setName(e.target.value));
    }

    const inputHandlerid = async (e)=>{
         dispatch(setId(e.target.value));
    }

    const genderChangeHandler = (e)=>{
        dispatch(setGender(e.target.value));
    }
    const domainChangeHandler = (e)=>{
        dispatch(setDomain(e.target.value));
    }
    const availableChangeHandler = (e)=>{
        dispatch(setAvailable(e.target.value));
    }

    const handleSearchClick = () => {
        document.getElementById('searchInput').focus();
    };
    const handleSearchClickid = () => {
        document.getElementById('searchInputid').focus();
    };
    

  return (
    <div className='text-[18px] w-[100%] flex flex-col items-center justify-center gap-2'>

       <div className='relative'>  
       <input type = "search" id="searchInput" placeholder='Search username....'
        value = {name}
        onChange={(e)=>{inputHandler(e)}}
        className='w-[100%] flex items-center justify-around border-2 py-2 pr-12 rounded-lg px-2 outline-none' />
       <div className='absolute right-4 top-2 cursor-pointer' onClick={handleSearchClick}> <CiSearch size={30} /></div>
       </div>
       <div className='relative'>  
       <input type = "number" id="searchInputid" placeholder='Search userid....'
        value = {id}
        onChange={(e)=>{inputHandlerid(e)}}
        className='w-[100%] flex items-center justify-around border-2 py-2 pr-12 rounded-lg px-2 outline-none' />
       <div className='absolute right-4 top-2 cursor-pointer' onClick={handleSearchClickid}> <CiSearch size={30} /></div>
       </div>
        

        {/* filters */}
       <div>

       
       <div className='text-[25px] font-bold px-2 mt-4 mb-2 text-left'>Filters</div>


       <div className='flex flex-col items-start justify-center px-2 gap-5'>

<div className='flex items-center justify-between w-[100%]'>
  <div className='text-[16px] font-serif text-gray-600'>Select Gender:</div>
  <div>
  <select className='border font-serif rounded-lg outline-none bg-slate-500 p-1'
   onChange={(e)=>{genderChangeHandler(e)}}
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
</div>

<div className='flex items-center justify-between w-[100%]'>
  <div className='text-[16px] font-serif text-gray-600'>Select Domain:</div>
  <div>
  <select className='border font-serif rounded-lg outline-none bg-slate-500 p-1'
  onChange={(e)=>{domainChangeHandler(e)}}
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
</div>

<div className='flex items-center justify-between w-[100%]'>
  <div className='text-[16px] font-serif text-gray-600'>Available:</div>
  <div>
  <select className='border font-serif rounded-lg outline-none bg-slate-500 w-[7.5em] p-1'
   onChange={(e)=>{availableChangeHandler(e)}}
   >
  <option value={""} ></option>
      <option value={"yes"}>Yes</option>
      <option value={"no"}>No</option>
     
  </select>
  </div>
</div>


</div>

 

       </div>

       
      
    </div>
  )
}

export default Filter
