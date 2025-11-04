"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,

  DialogContent,
  DialogDescription,

  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { HardHatIcon } from "lucide-react"
import { FormContentObra } from "./FormContentObra"


export function CreateObra() {
    return(
    <>
            <Dialog >
            <DialogTrigger asChild >
                <Button className=""><HardHatIcon />Criar obra</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Novo Orçamento</DialogTitle>
                    <DialogDescription>Orçamento rapido e facil</DialogDescription>
                </DialogHeader>
                <div className="space-y-2">
                    <FormContentObra />
                </div>

            </DialogContent>
        </Dialog>
     
    
    
    </>
    )
}