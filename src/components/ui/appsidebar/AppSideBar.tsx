"use client";

import { ComponentProps } from "react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "../sidebar";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assest/Logo.png"
import icon from "@/app/assest/icon.png"
import { NavItems } from "../Navitems/NavItems";
import { NavUser } from "./NavUser";

type AppSideBarProps = ComponentProps<typeof Sidebar>

export const AppsideBar = ({...Props} : AppSideBarProps) => {
    return (
        <Sidebar collapsible="icon"{...Props} >
            <SidebarHeader className="py-4">
                <Link href="/">
                 <Image
                 src={Logo}
                 alt="Logo"
                 
                
                 className="w-full max-w-[130px] mx-auto pt-3 sm:hidden
                 group-data-[state=expanded]:block"
                 />

                 <Image
                 src={icon}
                 alt="Logo"
                className="w-full max-w-[60] mx-auto pt-3 hidden
          group-data-[state=collapsed]:block"
                 />

                
            
                </Link>

            </SidebarHeader>
            <SidebarContent>
               <NavItems />
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
    
        </Sidebar>
    )
}