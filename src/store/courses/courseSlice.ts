import API from "@/http";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NextResponse } from "next/server";

import { Status } from "../category/types";
import { AppDispatch } from "../store";
import { ICourse, IInitialData } from "./types";


const data:IInitialData={
    courses:[],
    status:Status.Loading,
}

const courseSlice=createSlice({
    name:"courses",
    initialState:data,
    reducers:{
   setStatus(state:IInitialData,action:PayloadAction<Status>){
       state.status=action.payload;
   },
   setCourses(state:IInitialData,action:PayloadAction<ICourse[]>){
state.courses=action.payload;

   }
    }
})
const {setCourses,setStatus}=courseSlice.actions;
export default courseSlice.reducer;

function fetchCourses(){
    return async function fetchCoursesThunk(dispatch:AppDispatch){
        try{
            const responses=await API.get("/course");
            if(NextResponse.status===200){
                dispatch(setStatus(Status.Loading));
                dispatch(setCourses(response.data.data))
            }
        }
        catch(error)
    }
}