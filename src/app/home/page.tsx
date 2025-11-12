import { Button } from "@/components/ui/button";
import { BadgeDollarSign, Bell, User } from "lucide-react";
import { CardWallet } from "./_components/CardWallet";
import { CreateButtonWallet } from "./_components/createbuttonwallet";
import { Cardcategory } from "./_components/cardcategory";
import { CardRecents } from "./_components/cardrecents";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { CreateDialog } from "./_components/dialogcreate";
export default async function Home() {
   const session = await auth();
   if(!session?.user){
      return(
         redirect("/")
      )
   }
    return (
       <section className="flex flex-col min-h-screen w-full bg-zinc-900">
         <header className="flex md:px-40 justify-between  h-18 p-4 border-b w-full items-center">
      
        <div className="flex items-center gap-2">
          <div className="size-12 rounded-md bg-violet-500 flex items-center justify-center border-2 border-purple-400">
             <BadgeDollarSign className="size-8 text-purple-800" />
          </div>
          <h1 className="text-2xl font-bold text-purple-800">MoneyFacíl</h1>
        </div>

        

        <div className="flex items-center gap-2 text-primary">
            <Bell />
            <User />
        </div>
      </header>
      <main className="flex-1 w-full items-center justify-center max-w-400 mt-20  mx-auto ">
        <CardWallet />
        <CreateDialog />
      
        <div className="md:flex    md:gap-4  mt-4">
            <Cardcategory />
            <CardRecents />
        </div>
      </main>
       </section>
    );
}