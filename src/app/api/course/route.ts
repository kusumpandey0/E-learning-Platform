import { NextRequest } from "next/server";
import { createCourse } from "./course.controller";

export async function POST(req:NextRequest){
return createCourse(req);
}
export async function GET(req:NextRequest){

}