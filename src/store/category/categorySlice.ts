
import API from "@/http";
import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
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
        },
        addCategories(state,action){
            state.categories.push(action.payload)
        },
        resetStatus(state){
 state.status=Status.Loading;
        }
    }
});
export const {setCategories,setStatus,addCategories, resetStatus}=categorySlice.actions;
export default categorySlice.reducer

export function fetchCategories(){
    return async function fetchCategoriesThunk(dispatch:AppDispatch){
        try{
            const response=await API.get("/category")
            if(response.status===200){ 
                dispatch(setCategories(response.data.data))
            }
            else{
                dispatch(setStatus(Status.Error));
            }
        }
        catch(error){
            console.log(error);
            dispatch(setStatus(Status.Error));
        }
    }
}
export function createCategory(data:{name:string,description:string}){
    return async function createCategoryThunk(dispatch:AppDispatch){
        try{
            const response=await API.post("/category",data);
            if(response.status===201){
                dispatch(setStatus(Status.Success));
                dispatch(addCategories(response.data.data));
            }
            else{  
                dispatch(setStatus(Status.Error))
            }
        }
        catch(error){
            console.log(error);
            dispatch(setStatus(Status.Error))
        }
    }
}
export function deleteCategory(id:string){
    return async function deleteCategoryThunk(dispatch:AppDispatch){
        try {
            const response = await API.delete("/category/" + id)
            if(response.status === 200){
                dispatch(setStatus(Status.Success))
            }else{
                dispatch(setStatus(Status.Error))
            }
        } catch (error) {
            console.log(error);
            
            dispatch(setStatus(Status.Error))
        }
    }
}
