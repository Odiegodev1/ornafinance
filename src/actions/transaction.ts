"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
type CreateTransactionInput = {
  description: string;
  amount: number;
  type: "RECEITA" | "DESPESA";
  method: "PIX" | "CARTAO_CREDITO" | "DINHEIRO";

  categoryId?: string;
  categoryName?: string;
  categoryColor?: string;
};

export async function createTransaction(input: CreateTransactionInput) {
  const session = await auth();

  if (!session?.user?.id) throw new Error("Usuário não autenticado");

  let categoryId = input.categoryId || null;

  if (!categoryId && input.categoryName) {
    const category = await prisma.category.create({
      data: {
        name: input.categoryName ?? "",
        color: input.categoryColor || "#000000",
        userId: session.user.id,
      },
    });
    categoryId = category.id;
  }

  const transaction = await prisma.transaction.create({
    data: {
      userId: session.user.id,
      description: input.description,
      amount: input.amount,
      type: input.type,
      method: input.method,
      categoryId,
      personName: "", // Provide a default value or get from input if available
    },
  });

  revalidatePath("/dashboard");
 
  return transaction;
}

