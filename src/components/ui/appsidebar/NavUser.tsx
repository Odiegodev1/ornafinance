"use client"

import {  ChevronsUpDown, LogIn, LogOut } from "lucide-react"
import { Button } from "../button"
import { signIn, signOut, useSession } from "next-auth/react"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "../sidebar"

import { Avatar } from "./avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../dropdown-menu"
import { Skeleton } from "../skeleton"


export const NavUser = () => {
     const {data: session, status} = useSession()
     const {isMobile} = useSidebar()




    async function handleRegister() {
        await signIn('github', {redirectTo: "/dashboard"})
        
    }

    async function handleSingout() {
        await signOut({callbackUrl: "/"})
        
    }

 

    return(
        <SidebarMenu>
            <SidebarMenuItem>
             {session ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                        size="lg"
                        className="data-[state=open]:bg-sidebar-accent 
                        data-[state=open]:text-sidebar-accent-foreground
                        group-data-[collapsible=icon]:"
                        >
                        <Avatar src={session.user?.image}  fallback={session.user?.name} />
                        <div className="grid flex-1 text-left text-sm leading-tight">
                             <span className="font-bold truncate">{session.user?.name}</span>

                            <span className="truncate text-xs text-zinc-400">{session.user?.email}</span>

                        </div>

                        <ChevronsUpDown className="ml-auto size-4 " />
                            
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                    className="w-[var(--radix-dropdown-menu-trigger-width)] min--w-56 rounded-lg"
                    side={isMobile ? "bottom" : "right"}
                    align="end"
                    sideOffset={4}
                    >
                      <DropdownMenuLabel className="p-0 font-normal">
                        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                            <Avatar src={session.user?.image} fallback={session.user?.name} />
                              <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="font-bold truncate">{session.user?.name}</span>

                            <span className="truncate text-xs text-zinc-400">{session.user?.email}</span>

                        </div>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>

                      

                      </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                      <DropdownMenuGroup>

                        <DropdownMenuItem  onClick={handleSingout} className=" cursor-pointer" >
                            <LogOut />
                            Sair
                        </DropdownMenuItem>

                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
             ) : (
                <>
                 {!status ? (
                    <Skeleton />
                 ): (
                       <div className="p2">
                 
                    <Button  size="sm" onClick={handleRegister} variant="outline" className="w-full"> 
                        <LogIn /><p className="group-data-[collapsible=icon]:hidden">Fazer login</p>
                    </Button>

                   
                </div>
                 )}
                </>
             )}
            </SidebarMenuItem>
           </SidebarMenu>
        
    )
}