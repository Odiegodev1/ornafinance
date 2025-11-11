"use server";


import { auth } from "@/lib/auth";
import { CreateFormObra } from "../_schema/CreateFormObra";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { sendWhatsAppMessage } from "../../actions/zap";


export default async function RegisterOrcamento(data: CreateFormObra) {
    console.log(data)

    const session = await auth();
    const UserId = session?.user?.id;
    if(!UserId){
        return{
            data:null,
            error: "Usuário não cadastrado..."
        }
    }

    try{
        const create_obra = await prisma.obra.create({
           data:{
            nomeCliente: data.nomeCliente,
            telefone: data.telefone,
            endereco: data.endereco,
            tipoServico: data.tipoServico,
            descricao: data.descricao,
            prazoDias: data.prazoDias,
            valorTotal: data.valorTotal,

            user:{
                connect: {
                    id: UserId,
                }
            }
        }
        })
        const likpublico = `${process.env.NEXT_PUBLIC_HOST_URL}`
        console.log(likpublico)

        await sendWhatsAppMessage({
        to: data.telefone,
        nome: data.nomeCliente,
        obraNome: data.tipoServico,
        publicid: create_obra.publicId
        });

        revalidatePath("/admin")
        return{
            data:{
                likpublico,
                create_obra
            },
            error: null
        }


    }catch(err){
        console.log(err)

        return{
            data:null,
            error: "Erro ao cadastrar orçamento..."
        }
    }
   

}