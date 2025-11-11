// src/actions/get-status.ts
"use server";

import { prisma } from "@/lib/prisma";
import { sendWhatsAppMessage } from "./zap";


export async function pegarStatusObra(obraId: number) {
  const obra = await prisma.obra.findUnique({
    where: { id: obraId },
    select: { status: true },
  });
  return obra?.status ?? "aguardando";
}

export async function atualizarStatusObra(obraId: number, novoStatus: string) {
  // Atualiza o status da obra no banco
  const obra = await prisma.obra.update({
    where: { id: obraId },
    data: { status: novoStatus },
  });

  // Envia mensagem via WhatsApp (usando Whapi)
  try {
    if (obra.telefone) {
      const resp = await sendWhatsAppMessage({
        to: obra.telefone,
        nome: obra.nomeCliente,
        status: novoStatus,
        obraNome: obra.tipoServico,
        publicid: obra.publicId // pode mostrar "Troca de Tela", "Reparo", etc
      });

      if (!resp.success) {
        console.error("Falha ao enviar mensagem:", resp.error);
      }
    } else {
      console.warn(`Obra ${obra.id} não tem telefone definido.`);
    }
  } catch (err) {
    console.error("Erro ao enviar mensagem de status:", err);
  }

  return obra;
}
