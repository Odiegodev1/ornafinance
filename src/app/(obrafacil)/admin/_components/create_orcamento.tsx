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

export function CreateOrcamento() {
       const form = useForm<CreateFormOrcamento>({
        resolver: zodResolver(createFormOrcamento),
        defaultValues: {
          orcamento: "",
        }})

        const handleOrcamento = async (data: CreateFormOrcamento) => {
            await getOrcamento(data)
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