import { NextRequest } from "next/server";
import { deleteCourse, fetchCourse } from "../course.controller";

export async function GET(req:NextRequest,{params}:{params:{id:string}}){
const {id}=await params;
return fetchCourse(id);
}
export async function DELETE(req:NextRequest,{params}:{params:{id:string}}){
    const {id}=await params;
    return deleteCourse(id);
    }