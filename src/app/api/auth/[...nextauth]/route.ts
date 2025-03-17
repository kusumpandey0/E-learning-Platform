import dbConnect from "@/database/connection";
import User from "@/models/user.schema";
import NextAuth, { AuthOptions, Session } from "next-auth";
import {JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

export const authOptions:AuthOptions={
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
                    await User.create({
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
        },
        async jwt({token}:{token:JWT}){
            console.log("TOKEN",token);
            await dbConnect();
            const user=await User.findOne({email:token.email});
            if(user){
                token.id=user._id
                token.role=user.role
            }
            return token;
        },
        
        async session({session,token}:{session:Session,token:JWT}) {
    
           
         if(token){
           (session.user as any).id=token.id;
            (session.user as any).role=token.role;
         }
          return session; 
        }
    }
}
const handler=NextAuth(authOptions);
export {handler as GET,handler as POST}