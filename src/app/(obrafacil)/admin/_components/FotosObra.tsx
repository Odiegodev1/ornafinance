"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getFotosObra } from "../../actions/getFotosObra";
import { uploadFotoAction } from "../../actions/uploadFotoAction";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


interface Foto {
  id: number;
  caminho: string;
  nome: string;
}

export function FotosObra({ obraId }: { obraId: number }) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [fotos, setFotos] = useState<Foto[]>([]);
  const [uploading, setUploading] = useState(false);

  // 🔹 Busca fotos existentes ao carregar
  useEffect(() => {
    (async () => {
      const data = await getFotosObra(obraId);
      setFotos(data);
    })();
  }, [obraId]);

  // 🔹 Mostra preview local antes do upload
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFile(file ?? null);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }

  // 🔹 Faz upload da foto
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("obraId", String(obraId));

    const result = await uploadFotoAction(formData);
    if (result.success && result.foto) {
      setFotos((prev) => [result.foto, ...prev]);
      setFile(null);
      setPreview(null);
    }

    setUploading(false);
  }

  return (
    <div className="space-y-4">
      {/* Formulário de envio */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="file" accept="image/*" onChange={handleFileChange} />

        {preview && (
          <div className="w-full">
            <img
              src={preview}
              alt="Preview"
              className="rounded-lg border border-violet-300 w-40 h-40 object-cover"
            />
          </div>
        )}

        <Button
          type="submit"
          disabled={uploading}
          className="bg-violet-500 hover:bg-violet-600 text-white"
        >
          {uploading ? "Enviando..." : "Enviar Foto"}
        </Button>
      </form>

      {/* Lista de fotos enviadas */}
      {fotos.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {fotos.map((foto) => (
            <Dialog key={foto.id}>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer">
                  <Image
                    src={foto.caminho}
                    alt={foto.nome}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover w-43 h-43 border border-zinc-200 hover:opacity-80 transition"
                  />
                </div>
              </DialogTrigger>
              <DialogHeader>
                <DialogTitle className="text-md"></DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <DialogContent className="p-0 max-w-3xl">
                <Image
                  src={foto.caminho}
                  alt={foto.nome}
                  width={1000}
                  height={800}
                  className="rounded-lg w-full h-auto"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      ) : (
        <p className="text-sm text-zinc-500">Nenhuma foto enviada ainda.</p>
      )}
    </div>
  );
}
