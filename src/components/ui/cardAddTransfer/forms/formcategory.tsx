"use client";

import * as React from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { createCategory } from "@/actions/createCategory";
import {CategoryFormValues, categorySchema } from "./actions/formValidador"
// schema só para categoria


export const FormCategory = () => {
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      categoryName: "",
      categoryColor: "#000000",
    },
  });

  const onSubmit = async (values: CategoryFormValues) => {
    try {
      await createCategory(values);
      alert("Categoria criada com sucesso!");
      form.reset({ categoryName: "", categoryColor: "#000000" });

    } catch (err) {
      console.error(err);
      alert("Erro ao criar categoria");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
        
        <h2 className="text-xl font-semibold">Criar Categoria</h2>

        <FormField
          control={form.control}
          name="categoryName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da Categoria</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Alimentação" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categoryColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cor da Categoria</FormLabel>
              <FormControl>
                <Input type="color" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Salvar Categoria</Button>
      </form>
    </Form>
  );
};
