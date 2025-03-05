import mongoose from "mongoose";

const MONGODB_CS=process.env.MONGODB_CS;
console.log(MONGODB_CS);

if(!MONGODB_CS){
    throw new Error("mongodb connection string is compulsary");
}
const dbConnect=async()=>{
     if(mongoose.connection.readyState===1){
         console.log("db already connected");
         return;    
     }
    try{
        await mongoose.connect(MONGODB_CS)
        console.log("db connected successfully");
        
    }
    catch(err){
        console.log(err);
    }
}
export default dbConnect;