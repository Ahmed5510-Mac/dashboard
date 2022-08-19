import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name:"auth",
    initialState:{isLogedin:false, name:'Ahmed Darwish'},
    reducers:{
        logInOut:(state,action)=>{
        state.isLogedin=!state.isLogedin
        },
    }
})

export const {logInOut}=authSlice.actions
export default authSlice.reducer