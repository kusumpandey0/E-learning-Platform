import dbConnect from "@/database/connection"
import Lesson from "@/models/lesson.schema";
import { NextRequest, NextResponse } from "next/server";

export async function createLesson(req:NextRequest){
    try{
        await dbConnect();
        const {title,description,videoUrl,course}=await req.json();
       const data=await Lesson.create({
           title,description,videoUrl,course
       })
       return NextResponse.json({
           message:"lesson created!",
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
export async function fetchLessons(){
    try{
        await dbConnect();
        const data = await Lesson.find().populate("course");
        if(data.length===0)
        {
            return NextResponse.json({
                message:"no lesson found"
            },{status:404});
        }
        return NextResponse.json({
            message:"lessons fetched",
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
export async function fetchLesson(id:string){
    try{
        await dbConnect();
        const data = await Lesson.findById(id);
        if(!data)
        {
            return NextResponse.json({
                message:"no lesson with that id found"
            },{status:404});
        }
        return NextResponse.json({
            message:"lesson fetched",
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
export async function deleteLesson(id:string){
    try{
        await dbConnect();
        await Lesson.findByIdAndDelete(id);
        return NextResponse.json({
            message:"lesson deleted"
        },{status:200})
    }
    catch(error){
        console.log(error);
        return NextResponse.json({
            message:"something went wrong"
        },{status:500})
    }
}