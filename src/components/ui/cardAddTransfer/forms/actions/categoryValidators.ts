import { z} from "zod";


export const newCategorySchema = z.object({
    categoryName: z.string().min(3, "Informe o nome da categoria"),
    categoryColor: z.string().optional(),
});

export type NewCategorySchema = z.infer<typeof newCategorySchema>;