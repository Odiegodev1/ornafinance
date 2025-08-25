"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Ajuste para seu import real
import { Calendar } from "lucide-react";

interface HeaderPageProps {
  name: string | null;
}

export const HeaderPage = ({ name }: HeaderPageProps) => {


  const periods = ["Este Mês", "Último Mês", "Este Ano", "Último 12 Meses"];

  const [selectedPeriod, setSelectedPeriod] = useState<string>(periods[0]);

  return (
    <header className="flex w-full items-center justify-between">
      <h1 className="text-3xl font-bold text-primary">Olá, {name}!</h1>

      <div className="hidden md:flex items-center gap-2">
        <div className="flex items-center border space-x-1 border-zinc-500 p-1 rounded-2xl">
          {periods.map((period) => (
            <Button
              key={period}
              className={`cursor-pointer ${
                selectedPeriod === period
                  ? "bg-primary text-white" // estilo para botão selecionado
                  : "bg-transparent text-zinc-200 hover:text-primary-foreground"
              }`}
              onClick={() => {
                setSelectedPeriod(period);
                console.log(period);
              }}
            >
              {period}
            </Button>
          ))}
        </div>

        <Button>
          <Calendar className="size-4" /> Selecionar Período
        </Button>
      </div>
    </header>
  );
}
