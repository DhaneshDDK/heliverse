import React from 'react'
import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import { useSelector } from 'react-redux'
import { setUsers } from './Redux/Slices/Pagination'
import { useEffect } from 'react'
import { fetchByFilters } from './Services/Operations/userApi'
import { useDispatch } from 'react-redux'
import { setLoading } from './Redux/Slices/Pagination'
import Users from './Components/Users'
import { Routes, Route } from 'react-router-dom'
import CreateUser from './Pages/CreateUser'
import ViewTeam from './Pages/ViewTeam'
import CreateTeam from './Pages/CreateTeam'

const App = () => {
  const {name, domain, available, id, gender, users, loading} = useSelector((state)=> state.page);
  const dispatch = useDispatch();

  useEffect(()=>{

    const fetch = async ()=>{
      // console.log(gender,domain,available,id,name);
      const response = await fetchByFilters({gender,domain,available,name,id, setLoading, dispatch});
      // console.log(response);
      dispatch(setUsers(response?.data?.data));
    }

    fetch();
 
},[gender,available,domain,name,id]);


  return (
    <div  className=" bg-black min-h-[101vh] ">

    <div className='max-w-[1400px] mx-auto overflow-auto px-2 '>
     
     <div className='fixed right-0 left-0 top-0 z-10 backdrop-blur-lg mb-1 max-w-[1400px] mx-auto'> <Navbar/> </div>
     <div className="h-16"></div>

     <Routes>

     <Route path="/" element={ <div  className="flex  flex-wrap desktop:flex-nowrap items-center desktop:items-start desktop:flex-row flex-col justify-between w-[98%] md:w-11/12 px-4 gap-10 mt-4 mx-auto">
    
    <div className="shadow-lg w-[98%] max-w-[330px] sm:w-[330px] shadow-green-200 py-10 px-4 border-white rounded-md bg-[#54b2a9] desktop:fixed">
                 <Filter/>
 
    </div>
    <div className=" hidden laptop:flex sm:w-[340px] ">
    {/* <Filter/> */}
    </div>
    <div className=' w-[100%] laptop:w-[900px] desktop:w-[900px] relative'> <Users users={users}/></div>

    </div>} />

    <Route path='/createuser' element={<CreateUser/>}/>
    <Route path='/edituser/:idedit/:first_nameedit/:last_nameedit/:genderedit/:domainedit/:availableedit' element={<CreateUser/>}/>
    <Route path='/createteam' element={<CreateTeam/>}/>
    <Route path='/viewteam' element={<ViewTeam/>}/>

   </Routes>
</div>
      
    </div>
  )
}

export default App
