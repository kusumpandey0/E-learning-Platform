import Dashboard from "@/components/dashboard/Dashboard";
import React from "react";


function AdminLayout({children}:Readonly<{children:React.ReactNode}>){
    return(
        <Dashboard>
           {children}
            </Dashboard>
    )
}
export default AdminLayout;