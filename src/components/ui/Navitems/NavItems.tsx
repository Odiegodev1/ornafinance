import { BanknoteArrowUp, ChartLine, LayoutDashboard, Wallet } from "lucide-react";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../sidebar"
import Link from "next/link";


type NavItems = {
    label:  string;
    path: string;
    icon: React.ElementType;
}

export const NavItems = () => {

    const navItems: NavItems[] = [
        {
            label: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard
        },
         {
            label: "Carteira",
            path: "/carteira",
            icon: Wallet
        },
        {
            label: "Transações",
            path: "/transacoes",
            icon: BanknoteArrowUp
        },
         {
            label: "Analise",
            path: "/analise",
            icon: ChartLine
        },


    ]

 const RenderNavItems = (items: NavItems[]) =>{
        return items.map((item) =>(
            <SidebarMenuItem key={item.label}>
                <SidebarMenuButton asChild>
                    <Link href={item.path}>
                    <item.icon  className="text-primary 
                    group-data-[collapsible=icon]:text-white hover:text-primary transition-all"/>
                    <span>{item.label}</span>
                    </Link>

                </SidebarMenuButton>

            </SidebarMenuItem>
        )

        )

    }

    return (
        <SidebarGroup>
            <SidebarMenu>
              {RenderNavItems(navItems)}
            </SidebarMenu>
        </SidebarGroup>
    )
}