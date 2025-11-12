"use server";

import { auth } from "@/lib/auth";
import { FormSchema } from "../schema/formschema";
import { prisma } from "@/lib/prisma";

export async function handleclick(data: FormSchema) {
  console.log(data);
  const session = await auth();

  if (!session?.user) {
    return {
      data: null,
      error: "Usuário não autenticado",
    };
  }

  try {
    const createTransacao = await prisma.transacao.create({
      data: {
        titulo: data.titulo,
        valor: Number(data.valor),
        tipo: data.tipo, 
        data: new Date(data.date),

        
        categoria: {
          connect: {
            id: data.categoria, 
          },
        },

        user: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });

    return {
      data: createTransacao,
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error: "Erro ao criar transação",
    };
  }
}
