import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Dialog, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { DialogContent, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { MinusCircleIcon, Plus, PlusCircleIcon, Receipt } from "lucide-react";

export function CreateButtonWallet() {
    return (
         <div className="grid md:grid-cols-3 p-2 gap-3 w-full ">


       <Card className="w-full bg-primary/20 border-2 border-primary">
            
             <CardContent>
                <div className="flex items-center gap-4">
                    <div className="bg-primary size-12 border rounded-md border-white flex items-center justify-center">
                        <PlusCircleIcon  className="size-8 text-zinc-200"/>
                    </div>
                    <div className="flex flex-col items-start text-white">
                        <h1 className="text-xl font-bold">Adicionar Saldo</h1>
                        <p className="text-sm">Adicione um valor ao seu saldo disponível</p>
                    </div>
                </div>
             </CardContent>
             
           </Card>
             <Card className="w-full bg-emerald-500/20 border-2 border-emerald-500">
            
             <CardContent>
                <div className="flex items-center gap-4">
                    <div className="bg-emerald-500 size-12 border rounded-md border-white flex items-center justify-center">
                        <Receipt  className="size-8 text-zinc-200"/>
                    </div>
                    <div className="flex flex-col items-start text-white">
                        <h1 className="text-xl font-bold">Adicionar Receita</h1>
                        <p className="text-sm">Adicione um valor ao seu saldo disponível</p>
                    </div>
                </div>
             </CardContent>
           </Card>

             <Card className="w-full bg-red-500/20 border-2 border-red-500">
            
             <CardContent>
                <div className="flex items-center gap-4">
                    <div className="bg-red-500 size-12 border rounded-md border-white flex items-center justify-center">
                        <MinusCircleIcon  className="size-8 text-zinc-200"/>
                    </div>
                    <div className="flex flex-col items-start text-white">
                        <h1 className="text-xl font-bold">Nova Despesa</h1>
                        <p className="text-sm">Registre uma nova saída de dinheiro</p>
                    </div>
                </div>
             </CardContent>
           </Card>
            
           
        </div>
    )
}