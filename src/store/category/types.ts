import { ICategory } from "@/models/category.schema";
export enum Status{
    Loading="loading",
    Success="success",
    Error="error"
}

export interface ICategoryInitialState{
    categories:ICategory[],
    status:Status
}