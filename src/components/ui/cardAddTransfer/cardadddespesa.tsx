"use client"
import { CircleMinus } from "lucide-react"
import { Card, CardDescription,  CardTitle } from "../card"




export const CardAddDespesa = () => {
    return(
        <Card className="w-full py-4   border border-white">
            
                <div className=" px-4 flex items-center gap-4">
                    <div className="flex items-center justify-center size-15  rounded-xl bg-red-300">
                    <CircleMinus className="size-7 text-red-500" />
                    
                </div>
                <div className="flex flex-col">
                <CardTitle>Adicionar despesa</CardTitle>
                <CardDescription>Crie uma despesa manualmente</CardDescription>

                </div>
                
                </div>
            

        </Card>
    )
}