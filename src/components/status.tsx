"use client";

import { useState, useEffect, useTransition } from "react";





import { Progress } from "@/components/ui/progress";
import { pegarStatusObra } from "@/app/(obrafacil)/actions/get-status";
import { SpinnerDemo } from "@/app/(obrafacil)/admin/_components/SpinnerDemo";


interface StatusAppProps {
  obraId: number;
}

export function StatusApp({ obraId }: StatusAppProps) {
  const [status, setStatus] = useState<string>("aguardando");

  const [isPending , startTransition] = useTransition();

  // Busca o status do banco quando o componente monta
  useEffect(() => {
    startTransition(async () => {
      const statusBanco = await pegarStatusObra(obraId);
      setStatus(statusBanco);
     
    });
  }, [obraId]);


    const progressoMap: Record<string, number> = {
    aguardando: 0,
    einicial: 25,
    andamento: 60,
    concluido: 100,
  };

  const progresso = progressoMap[status];

  return (
    <div className="flex flex-col gap-3 mt-2">
    

    {isPending && <p>Loading...</p>}
      <h1 className="text-zinc-600">status da Obra</h1>
      <Progress value={progresso} />
      <SpinnerDemo status={status} />

 
   
    </div>
  );
}
