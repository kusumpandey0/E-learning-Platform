"use client"
import {signIn, useSession,signOut} from "next-auth/react"
import Image from 'next/image';
 function Home(){
     const {data:session}=useSession();
if(session){
    return (
       <>
       <Image src={session.user?.image||"profile.png"} alt="User Image" width={80} height={80}/>
        <h1>Welcome,{session.user?.name}</h1>
        <h1>{session.user?.email}</h1>
        <button onClick={()=>signOut()}>Sign Out</button>
       </>
    )
}
    return (
        <>
        <div>
            <h1>not logged in</h1>
            <button onClick={()=>signIn("google")}>Sign in with google</button>
        </div>
        </>
    )
}
export default Home;
