import {userEndpoints} from '../apis';
import {apiConnector} from '../apiConnector';

const {GET_USERS, FETCHUSER_BY_NAME, FETCHUSER_BY_FILTERS} = userEndpoints;


// export async function fetchUsers(setLoading){
   
//    try {
//     setLoading(true);
//      const data = await apiConnector('GET', GET_USERS);
//     //  console.log(data);
//     setLoading(false);
//      return data;
//    } catch (error) {
//      console.log(error.message);
//    }
// }


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