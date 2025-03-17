import { NextRequest } from "next/server";
import { deleteCategory } from "../category.controller";
export async function DELETE(request:NextRequest,{params}:{params:{id:string}}){
    const {id}=await params;
  return deleteCategory(request,id);
}