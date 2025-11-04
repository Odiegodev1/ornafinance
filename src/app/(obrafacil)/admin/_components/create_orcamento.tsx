"use client"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { createFormOrcamento, CreateFormOrcamento } from "../_schema/CreateFormOrcamento";
import { getOrcamento } from "../_actions/get-orcamento";
 
interface CreateOrcamentoProps {
    obraId: number;
}


export function CreateOrcamento({obraId}: CreateOrcamentoProps){ 
       const form = useForm<CreateFormOrcamento>({
        resolver: zodResolver(createFormOrcamento),
        defaultValues: {
          orcamento: "",
          ObraId: obraId
        }})

        const handleOrcamento = async (data: CreateFormOrcamento) => {
            const response = await getOrcamento(data)
            if(!response){
                alert("Ocorreu um erro ao cadastrar")
            }
            alert("Orcamento cadastrado com sucesso")
            return;
        }

    return(
        <>
    
   <Form {...form}>
        <form  onSubmit={form.handleSubmit(handleOrcamento)} className="space-y-3">
        



     <FormField 
     control={form.control}
     name="orcamento"
     render={({field}) => (
        <FormItem>
            <FormLabel className="text-zinc-600">Orçamento do material</FormLabel>
            <FormControl>
                   <Textarea
                   {...field}
                   placeholder="Ex: `10 ripa massaranduba 4 metros, 110 parafuso com 8cm`" />
            </FormControl>
            <FormMessage />
        </FormItem>
     )}
     />
     
      <Button  type="submit" className="cursor-pointer w-full">Gerar Orçamento com Ia</Button>
   
        </form>
    </Form>
        </>
    )
}