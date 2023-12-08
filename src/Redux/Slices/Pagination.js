import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users : [],
    loading : false,
    name : "",
    gender:"",
    available: "",
    domain : "",
    id : "",
    effect : false,

}

const pageSlice = createSlice({
    name : "page",
    initialState,
    reducers : {
        setUsers : (state, value) => { state.users = value.payload; },
        setLoading : (state, value) => { state.loading = value.payload; },
        setName : (state, value) => { state.name = value.payload; },
        setGender : (state, value) => { state.gender = value.payload; },
        setAvailable : (state, value) => { state.available = value.payload; },
        setId : (state, value) => { state.id = value.payload; },
        setDomain : (state, value) => { state.domain = value.payload; },
        setEffect : (state, value) => { state.effect = value.payload;   },
    }
})

export const {setUsers,setLoading,setName, setAvailable,setGender, setId, setDomain, setEffect} = pageSlice.actions;
export default pageSlice.reducer;