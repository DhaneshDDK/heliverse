import {userEndpoints} from '../apis';
import {apiConnector} from '../apiConnector';

const { CREATE_USER , FETCHUSER_BY_FILTERS, UPDATE_USER} = userEndpoints;


export async function createUsers(data){
   const {firstName, lastName,email, gender, domain, availability, id} = data;
  
   try {
     const data = await apiConnector('POST', CREATE_USER, {first_name : firstName, last_name : lastName, email : email, gender:gender, 
    available : availability, id : id, domain : domain});
     console.log(data);
     return data;
   } catch (error) {
     console.log(error.message);
   }
}


export async function fetchByFilters({gender,domain,available,name,id,setLoading, dispatch}){
   try {
    // console.log(gender,domain,available,name,id);
    dispatch(setLoading(true));
    const data = await apiConnector('POST', FETCHUSER_BY_FILTERS, {gender,domain,available,name,id});
    //  console.log(data);
    dispatch(setLoading(false));
     return data;
   } catch (error) {
     console.log(error.message);
   }
}


export async function updateUser(data){
    try {
      const {firstName, lastName, gender, domain, availability, id} = data;
      const res = await apiConnector('PUT', UPDATE_USER, {first_name : firstName, last_name : lastName, email : "", gender:gender, 
        available : availability, id : id, domain : domain});
      return res;
    } catch (error) {
      console.log(error.message);
    }
}