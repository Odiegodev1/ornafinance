"use client"
import { CirclePlus } from "lucide-react"
import { Card, CardDescription,  CardTitle } from "../card"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { TransactionForm } from "./forms/formtransferir"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FormCategory } from "./forms/formcategory"



export const CardAddTransfer = () => {
    return(
      <Sheet>
            <SheetTrigger>

       
        <Card className="w-full py-4   border border-white">
           
                <div className="flex items-center gap-4 px-4">
                    <div className="flex items-center justify-center size-15  rounded-xl bg-emerald-300">
                    <CirclePlus className="size-7 text-emerald-500" />
                    
                </div>
                <div className="flex flex-col">
                <CardTitle>Adicionar renda</CardTitle>
                <CardDescription>Crie uma renda manualmente</CardDescription>

                </div>
                
                </div>
            

        </Card>
        </SheetTrigger>
          <SheetContent className="flex flex-col p-2">
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

