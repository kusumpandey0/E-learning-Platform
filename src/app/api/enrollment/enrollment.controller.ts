import dbConnect from "@/database/connection"
import Enrollment from "@/models/enrollment.schema";
import { NextRequest, NextResponse } from "next/server";

export async function enrollCourse(req:NextRequest){
    try{
        await dbConnect();
        const {course,whatsapp}=await req.json();
       const data=await Enrollment.create({
          course,whatsapp,
          student:"11"//session.user.id
       })
       return NextResponse.json({
           message:"You enrolled the course.",
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
export async function fetchEnrollments(){
    try{
        await dbConnect();
        const data = await Enrollment.find().populate("course").populate("student");
        if(data.length===0)
        {
            return NextResponse.json({
                message:"no Enrollment found"
            },{status:404});
        }
        return NextResponse.json({
            message:"Enrollments fetched",
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
export async function fetchEnrollment(id:string){
    try{
        await dbConnect();
        const data = await Enrollment.findById(id).populate("course").populate("student");
        if(!data)
        {
            return NextResponse.json({
                message:"no Enrollment with that id found"
            },{status:404});
        }
        return NextResponse.json({
            message:"Enrollment fetched",
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
export async function deleteEnrollment(id:string){
    try{
        await dbConnect();
        await Enrollment.findByIdAndDelete(id);
        return NextResponse.json({
            message:"Enrollment deleted"
        },{status:200})
    }
    catch(error){
        console.log(error);
        return NextResponse.json({
            message:"something went wrong"
        },{status:500})
    }
}
export async function changeEnrollmentStatus(req:NextRequest,id:string){
    try{
        await dbConnect();
        const {status,id}=await req.json();
        const data=await Enrollment.findByIdAndUpdate(id,{
            enrollmentStatus:status
        })
        return NextResponse.json({
            message:"Enrollment status changes",
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