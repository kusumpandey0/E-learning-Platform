"use client"
import {signIn} from "next-auth/react"
export default function Home(){
    return (
        <>
        <div>
            <button onClick={()=>signIn("google")}>Sign in with google</button>
        </div>
        </>
    )
}
