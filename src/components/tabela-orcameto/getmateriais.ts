import { prisma } from "@/lib/prisma";
import { Orcamento } from "./columns";

// Busca os materiais de uma obra específica
export async function getMateriais(obraId: number): Promise<Orcamento[]> {
  const materiais = await prisma.orcamentoItem.findMany({
    where: { obraId },
    orderBy: { id: "asc" },
  });

  // Transformar no tipo que o DataTable espera
  return materiais.map((m) => ({
    id: m.id.toString(),
    quantidade: m.quantidade,
    descricao: m.descricao,
    medida: m.medida,
  }));
}
