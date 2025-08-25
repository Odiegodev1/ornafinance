import { z } from "zod";

export const transactionSchema = z.object({
  description: z.string().min(1, "Descrição é obrigatória"),
  amount: z.number().min(0.01, "Valor mínimo 0.01"),
  type: z.enum(["RECEITA", "DESPESA"]),
  method: z.enum(["PIX", "CARTAO_CREDITO", "DINHEIRO"]),
  categoryName: z.string().optional(),
  categoryColor: z.string().optional(),
  categoryId: z.string().optional(),
});