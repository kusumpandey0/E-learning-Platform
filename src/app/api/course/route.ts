import { NextRequest } from "next/server";
import { createCourse, fetchCourses } from "./course.controller";

export async function POST(req:NextRequest){
return createCourse(req);
}
export async function GET(req:NextRequest){
return fetchCourses();
}