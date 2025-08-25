import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    const transactions = await prisma.transaction.findMany({
      where: userId ? { userId } : undefined,
      orderBy: { date: "desc" },
      include: {
        category: true, // <- Isso é fundamental
      },
    });

    return NextResponse.json(transactions);
  } catch (err) {
    console.error("Erro ao buscar transacoes", err);
    return NextResponse.json({ error: "Erro ao buscar transacoes", status: 500 });
  }
}
