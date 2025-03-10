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
export async function fetchCourses(){
    try{
        await dbConnect();
        const data = await Course.find().populate("category");
        if(data.length===0)
        {
            return NextResponse.json({
                message:"no course found"
            },{status:404});
        }
        return NextResponse.json({
            message:"courses fetched",
            data
        },{status:200})
    }
    catch(error){
        console.log(error);
        return NextResponse.json({
            message:"something went wrong"
        },{status:500})
    }
}
export async function fetchCourse(id:string){
    try{
        await dbConnect();
        const data = await Course.findById(id);
        if(!data)
        {
            return NextResponse.json({
                message:"no course with that id found"
            },{status:404});
        }
        return NextResponse.json({
            message:"course fetched",
            data
        },{status:200})
    }
    catch(error){
        console.log(error);
        return NextResponse.json({
            message:"something went wrong"
        },{status:500})
    }
}
export async function deleteCourse(id:string){
    try{
        await dbConnect();
        const data = await Course.findByIdAndDelete(id);
        if(data)
        {
            return NextResponse.json({
                message:"no course with that id found"
            },{status:404});
        }
        return NextResponse.json({
            message:"course deleted",
            data
        },{status:200})
    }
    catch(error){
        console.log(error);
        return NextResponse.json({
            message:"something went wrong"
        },{status:500})
    }
}