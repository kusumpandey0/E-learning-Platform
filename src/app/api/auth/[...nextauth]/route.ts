import dbConnect from "@/database/connection";
import User from "@/models/user.schema";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
        async signIn({user}):Promise<boolean>{
            try{ 
                await dbConnect();
                const existingUser=await User.findOne({email:user.email});
                if(!existingUser){
                    User.create({
                        username:user.name,
                        email:user.email,
                        profileImage:user.image||"http://www.hello.com/image.png"
                    })
                  
                }
                return true;
            }
            catch(error){
            console.log(error);
            return false;
            
            }
        }
    }
})
export {handler as GET,handler as POST}