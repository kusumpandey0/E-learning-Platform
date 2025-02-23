import dbConnect from "@/database/connection";

export async function GET(){
    dbConnect();
    return new Response(JSON.stringify({ message: "Hello World" }));
      
}