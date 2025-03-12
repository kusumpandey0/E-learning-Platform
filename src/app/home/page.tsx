"use client";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";

function Home() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <h1>Loading...</h1>; // Prevents UI flickering
    }

    if (session) {
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Image 
                    src={session.user?.image || "/profile.png"} 
                    alt="User Image" 
                    width={80} 
                    height={80} 
                    style={{ borderRadius: "50%" }} 
                />
                <h1>Welcome, {session.user?.name}</h1>
                <p>{session.user?.email}</p>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        );
    }

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Not Logged In</h1>
            <button onClick={() => signIn("google")}>Sign in with Google</button>
        </div>
    );
}

export default Home;
