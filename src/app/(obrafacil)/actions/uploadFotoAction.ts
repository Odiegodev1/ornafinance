"use server";

import fs from "fs";
import path from "path";
import { prisma } from "@/lib/prisma";

export async function uploadFotoAction(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    const obraId = Number(formData.get("obraId"));

    if (!file || !obraId) {
      throw new Error("Arquivo ou obraId ausente.");
    }

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const fileName = `${obraId}-${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, fileName);

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    const publicPath = `/uploads/${fileName}`;

    const novaFoto = await prisma.fotoObra.create({
      data: {
        nome: file.name,
        caminho: publicPath,
        obraId,
      },
    });

    return { success: true, foto: novaFoto, message: "Foto enviada com sucesso!" };
  } catch (err) {
    console.error("Erro uploadFotoAction:", err);
    return { success: false, message: "Erro ao enviar foto." };
  }
}
