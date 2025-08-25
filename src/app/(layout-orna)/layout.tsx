"use client";

import { SeacrhInput } from "@/components/SearchInput";
import { AppsideBar } from "@/components/ui/appsidebar/AppSideBar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode
}

export default function Layout({children} : LayoutProps){
    return(
        <SidebarProvider>
            <AppsideBar />
        <SidebarInset>
            <header className="flex h-[70px] shrink-0 border-b items-center px-6 justify-between gap-2">
                <div className="flex-1 flex items-center gap-4">
                    <SidebarTrigger className="flex md:hidden -ml-1" />
                    <SeacrhInput />
                </div>
            </header>


        <div className="flex flex-1 flex-col gap-6 p-6 overflow-auto">
            {children}
        </div>
        
          
        </SidebarInset>
        </SidebarProvider>
    )
       
}