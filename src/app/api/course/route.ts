import dbConnect from "@/database/connection";
import { NextRequest } from "next/server";
import { createCourse, fetchCourses } from "./course.controller";

export async function POST(req:NextRequest){
    await dbConnect();
return createCourse(req);
}
export async function GET(req:NextRequest){
    await dbConnect();
return fetchCourses();
}