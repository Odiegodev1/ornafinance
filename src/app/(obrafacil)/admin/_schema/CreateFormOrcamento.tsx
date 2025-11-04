import {z} from "zod"

export const createFormOrcamento = z.object({
    orcamento:z.string().min(1,{
        message:"O orcamento é obrigatorio"
    })
})


export type CreateFormOrcamento = z.infer<typeof createFormOrcamento>