"use client";
import Dashboard from "@/components/dashboard/Dashboard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return;

        if (!session?.user || session.user.role !== "admin") {
            router.replace("/");
        }
    }, [session?.user?.role, status, router]);

    if (status === "loading" || status==="unauthenticated") {
        return <p>Loading...</p>; // Or replace with a spinner component
    }

    return <Dashboard>{children}</Dashboard>;
}

export default AdminLayout;
