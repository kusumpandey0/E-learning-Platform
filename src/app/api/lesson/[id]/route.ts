import dbConnect from "@/database/connection";
import { NextRequest } from "next/server";
import { deleteLesson, fetchLesson } from "../lesson.controller";

export async function GET(req:NextRequest,{params}:{params:{id:string}}){
    await dbConnect();
const {id}=await params;
return fetchLesson(id);
}
export async function DELETE(req:NextRequest,{params}:{params:{id:string}}){
    await dbConnect();
    const {id}=await params;
    return deleteLesson(id);
    }