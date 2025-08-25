
import { z } from "zod";

export  const categorySchema = z.object({
  categoryName: z.string().min(2, "Digite um nome válido"),
  categoryColor: z.string().min(1, "Escolha uma cor"),
});

export type CategoryFormValues = z.infer<typeof categorySchema>;