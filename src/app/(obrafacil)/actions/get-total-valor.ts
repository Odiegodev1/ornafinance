import { prisma } from "@/lib/prisma"

export async function getResumoFinanceiro() {
  const obras = await prisma.obra.findMany({
    select: { valorTotal: true, status: true },
  })

  let totalReceitas = 0
  let totalPendentes = 0

  for (const obra of obras) {
    if (obra.status === "concluido") {
      totalReceitas += obra.valorTotal
    } else {
      totalPendentes += obra.valorTotal
    }
  }

  return { totalReceitas, totalPendentes }
}
