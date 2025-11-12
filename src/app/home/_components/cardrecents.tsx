"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {

  SquareArrowUpRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getTransacoesRecentes } from "../actions/get-transacoes";

type Transacao = {
  id: string;
  titulo: string;
  valor: number;
  tipo: string;
  data: string;
  categoria: {
    nome: string;
    cor: string;
    tipo: string;
  };
};

export function CardRecents() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  useEffect(() => {
    async function loadData() {
      const data: Transacao[] = await getTransacoesRecentes();
      setTransacoes(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-2 flex flex-col w-full">
      <Card className="md:w-full bg-primary/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <h1 className="md:text-xl text-xs text-zinc-400">
              Transações Recentes
            </h1>

            <div className="gap-4 flex items-center">
              <Button>Filtrar</Button>
              <Button>Nova Transação</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transacoes.map((t) => (
              <Card key={t.id} className="p-0 px-4 py-4 bg-zinc-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-14 flex items-center justify-center rounded-2xl bg-primary">
                      <SquareArrowUpRight className="text-zinc-200 size-8" />
                    </div>
                    <div className="space-y-1">
                      <h1 className="text-zinc-200">{t.titulo}</h1>
                      <p className="text-zinc-600 text-sm">
                        {new Date(t.data).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span
                      className="flex items-center justify-center text-zinc-300 px-2 rounded-2xl"
                      style={{ backgroundColor: t.categoria.cor }}
                    >
                      {t.categoria.nome}
                    </span>
                    <h1 className="text-white">R$ {t.valor.toFixed(2)}</h1>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
