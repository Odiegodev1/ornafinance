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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs"
import { TransactionForm } from "./forms/formtransferir"
import { FormCategory } from "./forms/formcategory"
import Router from "next/router"


export const CardAddMoney = () => {
  const router = Router
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
          <SheetContent className="p-3">
     <SheetHeader>
      <SheetTitle>Adicionar</SheetTitle>
      <SheetDescription>
        Adicione uma renda manualmente
      </SheetDescription>
    </SheetHeader>
          <Tabs defaultValue="Adicionar renda">
        <TabsList>
          <TabsTrigger value="Adicionar renda">Adicionar Uma Renda</TabsTrigger>
          <TabsTrigger value="Criar uma categoria">Criar Uma Categoria</TabsTrigger>
        </TabsList>
        <TabsContent value="Adicionar renda">
        <TransactionForm />  
        </TabsContent>
        <TabsContent value="Criar uma categoria">
        <FormCategory />
        </TabsContent>
      </Tabs>

  </SheetContent>
         </Sheet>
    )
}