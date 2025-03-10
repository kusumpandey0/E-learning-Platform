import dbConnect from "@/database/connection";
import { NextRequest } from "next/server";
import {enrollCourse,fetchEnrollments } from "./enrollment.controller";


export async function POST(req:NextRequest){
    await dbConnect();
return enrollCourse(req);
}
export async function GET(req:NextRequest){
    await dbConnect();
return fetchEnrollments();
}