"use client"
import { Banknote } from "lucide-react"
import { Card, CardDescription,  CardTitle } from "../card"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



export const CardAddMoney = () => {
    return(
        <Sheet>
            <SheetTrigger>
        <Card className="w-full py-4   border border-white">
          
                <div className="flex items-center gap-4 px-4">
                    <div className="flex items-center justify-center size-15  rounded-xl bg-blue-300">
                    <Banknote className="size-7 text-blue-500" />
                    
                </div>
                <div className="flex flex-col">
                <CardTitle>Transferir dinheiro</CardTitle>
                <CardDescription>Selecione o valor e faça uma transferência</CardDescription>

                </div>
                
                </div>
           

        </Card></SheetTrigger>
          <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
        </Sheet>
    )
}