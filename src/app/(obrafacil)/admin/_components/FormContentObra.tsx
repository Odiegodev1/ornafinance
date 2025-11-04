"use client"
import { Button } from "@/components/ui/button";

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

import { Input } from "@/components/ui/input";

import { createformobra, CreateFormObra } from "../_schema/CreateFormObra";
import RegisterOrcamento from "../_actions/get-obra";



export function FormContentObra() {



 
     const form = useForm<CreateFormObra>({
        resolver: zodResolver(createformobra) as any ,
        defaultValues: {
        nomeCliente: "",
          telefone: "",
          endereco: "",
          tipoServico: "",
          descricao: "",
          prazoDias: 10,
          valorTotal: 10,
            
          
        }})
    const handleorcamento = async (data: CreateFormObra) => {
        await RegisterOrcamento(data)
    }
     

  return (
    <>
    <Form {...form}>
        <form  onSubmit={form.handleSubmit(handleorcamento)} className="space-y-3">
        



     <FormField 
     control={form.control}
     name="nomeCliente"
     render={({field}) => (
        <FormItem>
            <FormLabel>Nome</FormLabel>
            <FormControl>
                   <Input
                   {...field}
                   placeholder="Ex: Adriana" />
            </FormControl>
            <FormMessage />
        </FormItem>
     )}
     />

      <FormField 
     control={form.control}
     name="telefone"
     render={({field}) => (
        <FormItem>
            <FormLabel>Telefone</FormLabel>
            <FormControl>
                   <Input
                   {...field}
                   placeholder="(22)9999999" />
            </FormControl>
            <FormMessage />
        </FormItem>
     )}
     />

        <FormField 
     control={form.control}
     name="endereco"
     render={({field}) => (
        <FormItem>
            <FormLabel>Endereço</FormLabel>
            <FormControl>
                   <Input
                   {...field}
                   placeholder="Ex: Rua av 1 jacone,saquarema-rj" />
            </FormControl>
            <FormMessage />
        </FormItem>
     )}
     />

           <FormField 
     control={form.control}
     name="tipoServico"
     render={({field}) => (
        <FormItem>
            <FormLabel>Tipo de servico</FormLabel>
            <FormControl>
                   <Input
                   {...field}
                   placeholder="Ex: Pintura" />
            </FormControl>
            <FormMessage />
        </FormItem>
     )}
     />

            <FormField 
     control={form.control}
     name="descricao"
     render={({field}) => (
        <FormItem>
            <FormLabel>Descrição</FormLabel>
            <FormControl>
                   <Input
                   {...field}
                   placeholder="Ex: Pintura de telhado" />
            </FormControl>
            <FormMessage />
        </FormItem>
     )}
     />

       <FormField
          control={form.control}
          name="prazoDias"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prazo (dias)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="valorTotal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor Total (R$)</FormLabel>
              <FormControl>
                <Input  step="0.01" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
     
     
      <Button type="submit" className="cursor-pointer">Cadastrar Obra</Button>
   
        </form>
    </Form>
    </>
  );
}
