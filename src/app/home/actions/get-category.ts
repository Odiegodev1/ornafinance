"use server"
import { prisma } from "@/lib/prisma"

export async function getCategorias() {
  const categorias = await prisma.categoria.findMany({
    select: {
      id: true,
      nome: true,
      cor: true,
      tipo: true, // RECEITA ou DESPESA
    },
    orderBy: {
      nome: "asc",
    },
  })

  return categorias
}
