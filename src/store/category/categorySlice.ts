
import { createSlice } from "@reduxjs/toolkit";
import { ICategoryInitialState, Status } from "./types";



const datas:ICategoryInitialState={
categories:[],
status:Status.Loading
}
const categorySlice=createSlice({//returns object {action:"jsjjs"}
    name:"category",
    initialState:datas,
    reducers:{
        setStatus(state,action){
            state.status=action.payload
        },
        setCategories(state,action){
            state.categories=action.payload;
        }
    }
});
const {setCategories,setStatus}=categorySlice.actions;
export default categorySlice.reducer
