"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function getResumoFinanceiro() {
  const session = await auth();
  if (!session?.user) {
    return {
      receita: 0,
      despesa: 0,
      saldo: 0,
    };
  }


  const transacoes = await prisma.transacao.findMany({
    where: { userId: session.user.id },
  });

  const receita = transacoes
    .filter((t) => t.tipo === "RECEITA")
    .reduce((acc, t) => acc + t.valor, 0);

  const despesa = transacoes
    .filter((t) => t.tipo === "DESPESA")
    .reduce((acc, t) => acc + t.valor, 0);

  const saldo = receita - despesa;

  return { receita, despesa, saldo };
}
