import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";

//check if user is logged in and his role is admin or not 
export const authMiddleware=async (req:Request)=>{
const session=await getServerSession(authOptions);
if(!session){
    return NextResponse.json({message:"User must be logged in to perform this action"},
    {status:401});
}
}