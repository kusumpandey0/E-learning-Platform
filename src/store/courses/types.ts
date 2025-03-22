import { Status } from "../category/types"

export interface ICourse{
    title:string,description:string,price:number,category:string,duration:string,
    createdAt:Date
}

export interface IInitialData{
   courses:ICourse[],
   status:Status 
}