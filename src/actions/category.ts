// app/actions/category.ts
"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function getUserCategories() {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Usuário não autenticado");
  }

  const categories = await prisma.category.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  revalidatePath("/dashboard");

  return categories;
}
