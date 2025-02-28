import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { Role } from "@/models/user.schema";
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";

//check if user is logged in and his role is admin or not 
export const authMiddleware=async (req:Request)=>{
const session=await getServerSession(authOptions);
if(!session || session.user.role!==Role.Admin){
    return NextResponse.json({message:"You don't have permission to perfom this action"},
    {status:401});
}
return NextResponse.next();
}