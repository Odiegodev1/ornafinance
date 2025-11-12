"use server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function getTransacoesRecentes() {
  const session = await auth()
  if (!session?.user) return []

  const transacoes = await prisma.transacao.findMany({
    where: { userId: session.user.id },
    include: { categoria: true },
    orderBy: { data: "desc" },
    take: 5,
  })

  return transacoes
}
