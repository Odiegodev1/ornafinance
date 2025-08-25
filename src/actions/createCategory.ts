"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
type CreateCategoryInput = {
  categoryName: string;
  categoryColor?: string;
};

export async function createCategory(input: CreateCategoryInput) {
  const session = await auth();

  if (!session?.user?.id) throw new Error("Usuário não autenticado");

  const category = await prisma.category.create({
    data: {
      name: input.categoryName,
      color: input.categoryColor || "#000000",
      userId: session.user.id,
    },
  });

  revalidatePath("/dashboard");
  return category;
}
