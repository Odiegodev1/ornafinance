import z from "zod";

export const createformobra = z.object({
       nomeCliente:z.string().min(1, {
        message: "nome deve ser obrigatorio",
       }),
       telefone:z.string().min(1, {
        message: "telefone deve ser obrigatorio",
       }),
       endereco:z.string().min(1, {
        message: "endereco deve ser obrigatorio",
       }),
       tipoServico:z.string().min(1, {
        message: "tipoServico deve ser obrigatorio",
       }),
       descricao:z.string().min(1, {
        message: "descricao deve ser obrigatorio",
       }),
       prazoDias: z.preprocess((val) => Number(val), z.number().min(1)),
       valorTotal: z.preprocess((val) => Number(val), z.number().min(0, {
        message: "valor deve ser obrigatorio",
       })),
    })

export type CreateFormObra = z.infer<typeof createformobra>;