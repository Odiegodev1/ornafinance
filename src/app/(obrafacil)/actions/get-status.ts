"use server";
import { prisma } from "@/lib/prisma";

// Atualiza o status da obra
export async function atualizarStatusObra(obraId: number, status: string) {


  return await prisma.obra.update({
    where: { id: obraId },
    data: { status },
  });
}

// Pega o status atual da obra
export async function pegarStatusObra(obraId: number) {

  const obra = await prisma.obra.findUnique({
    where: { id: obraId },
    select: { status: true },
  });

  return obra?.status || "aguardando";
}
