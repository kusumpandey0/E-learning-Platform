import dbConnect from "@/database/connection"
import Course from "@/models/course.schema";
import { NextRequest, NextResponse } from "next/server";

export async function createCourse(req:NextRequest){
    try{
        await dbConnect();
        const {title,description,price,duration,category,}=await req.json();
       const data=await Course.create({
           title,description,price,duration,category
       })
       return NextResponse.json({
           message:"course created!",
           data
       },{status:201})
    }
    catch(error){
   console.log(error);
   return NextResponse.json({
       message:"something went wrong"
   },{status:500})
    }
}