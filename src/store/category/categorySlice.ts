
import { createSlice } from "@reduxjs/toolkit";
import { ICategoryInitialState, Status } from "./types";



const datas:ICategoryInitialState={
categories:[],
status:Status.Loading
}
createSlice({
    name:"category",
    initialState:datas,
    reducers:{
        setStatus(state,action){
            state.status=action.payload
        }
    }
});
