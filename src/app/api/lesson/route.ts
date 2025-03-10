import dbConnect from "@/database/connection";
import { NextRequest } from "next/server";
import { createLesson,fetchLessons } from "./lesson.controller";


export async function POST(req:NextRequest){
    await dbConnect();
return createLesson(req);
}
export async function GET(req:NextRequest){
    await dbConnect();
return fetchLessons();
}