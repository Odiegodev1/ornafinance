"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Select } from "@radix-ui/react-select";
import { useForm } from "react-hook-form";
import { formSchema, FormSchema } from "../schema/formschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleclick } from "../actions/createtransacoes";
interface Categoria {
  id: string;
  nome: string;
  tipo: string;
}

interface FormProps {
  categorias: Categoria[];
}

export function Formcreatewallet({ categorias }: FormProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      titulo: "",
      valor: 0,
      tipo: "RECEITA",
      categoria: "",
      date: "",
    },
  });
  async function handlesum(data: FormSchema) {
    const response = handleclick(data);
    if (!response) {
      alert("Transação nao criada");
    }
    alert("Transação criada com sucesso");
    return;
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handlesum)} className="space-y-4">
        <FormField
          control={form.control}
          name="titulo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Mercdaddo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="valor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor</FormLabel>
              <FormControl>
                <Input type="number" placeholder="R$ 450.00" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tipo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o tipo de transação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="RECEITA">Receita</SelectItem>
                    <SelectItem value="DESPESA">Despesa</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categoria"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categorias.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.nome}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full">Salvar</Button>
      </form>
    </Form>
  );
}
