"use server"

import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
export async function getTransacoesPorCategoria() {
  const session = await auth();
  if (!session?.user) return [];

  const categorias = await prisma.transacao.groupBy({
    by: ["categoriaId", "tipo"],
    where: {
      userId: session.user.id,
    },
    _sum: {
      valor: true,
    },
  });

  const categoriasInfo = await prisma.categoria.findMany({
    where: {
      id: { in: categorias.map((c) => c.categoriaId) },
    },
  });

  return categorias.map((c) => {
    const categoriaInfo = categoriasInfo.find((cat) => cat.id === c.categoriaId);
    return {
      nome: categoriaInfo?.nome ?? "Sem categoria",
      cor: categoriaInfo?.cor ?? "var(--color-gray-400)",
      tipo: c.tipo, // Agora você tem o tipo para usar no gráfico
      total: c._sum.valor ?? 0,
    };
  });
}
