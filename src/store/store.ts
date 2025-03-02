import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category/categorySlice";

export const makeStore=()=>{configureStore({
    reducer:{
        categories:categorySlice,
    }
})}

