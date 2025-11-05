"use client";

import { useState, useEffect, useTransition } from "react";
import { Button } from "@/components/ui/button";



import { toast } from "sonner";
import { atualizarStatusObra, pegarStatusObra } from "../../actions/get-status";
import { Progress } from "@/components/ui/progress";
import { SpinnerDemo } from "./SpinnerDemo";
import { SelectorDemo } from "./selector";
import { useRouter } from "next/navigation";

interface StatusAppProps {
  obraId: number;
}

export function StatusApp({ obraId }: StatusAppProps) {
  const [status, setStatus] = useState<string>("aguardando");

  const [isPending, startTransition] = useTransition();
 const router = useRouter();
 
  useEffect(() => {
    startTransition(async () => {
      const statusBanco = await pegarStatusObra(obraId);
      setStatus(statusBanco);
    });
  }, [obraId]);

  
  const handleChangeStatus = (novoStatus: string) => {
    setStatus(novoStatus);
  

    startTransition(async () => {
      try {
        await atualizarStatusObra(obraId, novoStatus);
        router.refresh();
        toast.success(`Status salvo: ${novoStatus}`);
      } catch (err) {
        console.error(err);
        toast.error("Erro ao atualizar status");
      }
    });
  };

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

 
      <div className="mt-2">
        <h1>Selecionar processos</h1>
        <SelectorDemo onChange={handleChangeStatus} selected={status} />
      </div>

      <Button className="mt-2 w-full" disabled>
        Atualizado automaticamente
      </Button>
    </div>
  );
}
