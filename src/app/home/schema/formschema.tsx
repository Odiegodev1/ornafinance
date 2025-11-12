import z from "zod";

export const formSchema = z.object({
   titulo: z.string().min(1, {message: "O nome é obrigatorio"}).max(50, {message: "O nome deve ter no maximo 50 caracteres"}),
   valor: z.preprocess((val) => Number(val), z.number().min(1, {message: "O valor é obrigatorio"})),
  tipo: z.enum(["RECEITA", "DESPESA"], {message: "O tipo é obrigatorio"}),
   categoria: z.string().optional(),
   date: z.string().min(1, {message: "A data é obrigatorio"}),
});

export type FormSchema = z.infer<typeof formSchema>