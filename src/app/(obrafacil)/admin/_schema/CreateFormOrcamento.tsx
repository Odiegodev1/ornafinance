import {z} from "zod"

export const createFormOrcamento = z.object({
    orcamento:z.string().min(1,{
        message:"O orcamento é obrigatorio"
    }),
    ObraId:z.number(),
})


export type CreateFormOrcamento = z.infer<typeof createFormOrcamento>