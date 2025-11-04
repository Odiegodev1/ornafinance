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

export async function PUT(req: Request, {params}: {params: {id: string}}) {
  try {
    const body = await req.json();
    const updated = await prisma.transaction.update({
      where:{id: params.id},
      data:{
        description: body.description,
        amount: body.amount,
        type: body.type,
        method: body.method,
        categoryId: body.categoryId ?? null,
      }
    })
    return NextResponse.json(updated);

  }catch(err){
    console.error(err);
     return NextResponse.json({ error: "Erro ao editar transação" }, { status: 500 })
  }
}


export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.transaction.delete({
      where: { id: params.id },
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao excluir:", error)
    return NextResponse.json({ error: "Erro ao excluir transação" }, { status: 500 })
  }
}
