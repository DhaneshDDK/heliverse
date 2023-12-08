import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import Card from './Card';
import { SpinnerRoundOutlined } from 'spinners-react';
import { useSelector } from 'react-redux';

const Users = ({users}) => {
    const {loading} = useSelector((state)=>state.page);
    const [pageNumber, setPageNumber] = useState(1);
    const [slicedUsers, setSlicedUsers] = useState([]);

    useEffect(()=>{
        setSlicedUsers(users?.slice((pageNumber-1)*20,(pageNumber)*20));
    },[pageNumber,users])

    const nextPage = async ()=>{
        if(pageNumber === Math.max(1,Math.ceil(users.length/20))) (setPageNumber(1));
        else (setPageNumber(pageNumber+1));
     }
     const prevPage = async ()=>{
        if(pageNumber === 1) (setPageNumber(Math.max(Math.ceil(users.length/20),1)));
        else (setPageNumber(pageNumber-1));
     }


  return (
    <div>
          {
        (loading)? <div className='flex items-center justify-center'><SpinnerRoundOutlined size={100}/></div>
        : (slicedUsers?.length === 0)?   <div className='flex items-center justify-center h-[40vh] font-bold text-[2em] text-red-500 font-serif'> No User found </div> :
          <div>
          <div className='flex flex-col items-center justify-center gap-2'>
           {
            slicedUsers?.map((user,id)=>{
                 return <Card key={id} user={user} />
              })
           }

        </div>
           
        <div className="font-mono mb-10 mt-5 text-right flex items-center justify-center gap-5">
          <button className="text-[18px] bg-green-500 rounded-lg px-4 py-2" onClick={prevPage}>Prev </button>
           <div className='text-white text-[20px]'> {pageNumber}/{Math.ceil(users.length/20)} </div>
          <button className="text-[18px] bg-green-500 rounded-lg px-4 py-2" onClick={nextPage}>Next </button>
         </div>
        
          </div>
      } 

    </div>
  )
}

export default Users
