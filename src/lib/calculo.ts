import { prisma } from "@/lib/prisma";

export async function getUserResumo(userId: string) {
  const transactions = await prisma.transaction.findMany({
    where: { userId },
    select: { amount: true, type: true },
  });

  const totalReceitas = transactions
    .filter(t => t.type === "RECEITA")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalDespesas = transactions
    .filter(t => t.type === "DESPESA")
    .reduce((acc, t) => acc + t.amount, 0);

  const saldo = totalReceitas - totalDespesas;

  const percentualReceita = totalReceitas + totalDespesas > 0
    ? (totalReceitas / (totalReceitas + totalDespesas)) * 100
    : 0;

  const percentualDespesa = totalReceitas + totalDespesas > 0
    ? (totalDespesas / (totalReceitas + totalDespesas)) * 100
    : 0;

return {
  saldo,
  totalReceitas,
  totalDespesas,
  percentualEntrada: percentualReceita.toFixed(1), // renomeado
  percentualReceita: percentualReceita.toFixed(1),
  percentualDespesa: percentualDespesa.toFixed(1),
};
}
