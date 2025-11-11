"use server";

import { prisma } from "@/lib/prisma";

export async function getFotosObra(obraId: number) {
  const fotos = await prisma.fotoObra.findMany({
    where: { obraId },
    orderBy: { createdAt: "desc" },
  });

  return fotos;
}
