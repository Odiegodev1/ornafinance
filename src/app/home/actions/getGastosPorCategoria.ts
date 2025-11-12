"use server"

import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function getGastosPorCategoria() {
  const session = await auth()
  if (!session?.user) return []

  const categorias = await prisma.transacao.groupBy({
    by: ["categoriaId"],
    where: {
      userId: session.user.id,
      tipo: "DESPESA",
    },
    _sum: {
      valor: true,
    },
  })

  const categoriasInfo = await prisma.categoria.findMany({
    where: {
      id: { in: categorias.map((c) => c.categoriaId) },
    },
  })

  return categorias.map((c) => {
    const categoriaInfo = categoriasInfo.find((cat) => cat.id === c.categoriaId)
    return {
      nome: categoriaInfo?.nome ?? "Sem categoria",
      cor: categoriaInfo?.cor ?? "var(--color-gray-400)",
      total: c._sum.valor ?? 0,
    }
  })
}
