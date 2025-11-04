"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Ajuste para seu import real
import { Calendar } from "lucide-react";
import { usePathname } from "next/navigation";

interface HeaderPageProps {
  name: string | null;
}

export const HeaderPage = ({ name }: HeaderPageProps) => {
      const pathName = usePathname()
      console.log(pathName)

  const periods = ["Este Mês", "Último Mês", "Este Ano", "Último 12 Meses"];

  const [selectedPeriod, setSelectedPeriod] = useState<string>(periods[0]);

  return (
    <header className="flex w-full items-center justify-between">
      <h1 className="text-3xl font-bold text-primary">Olá, {name}!</h1>

      <div className="hidden md:flex items-center gap-2">
         {pathName === "/dashboard" && (
  <div className="flex items-center border space-x-2 border-zinc-500 p-2 rounded-2xl">
    {periods.map((period) => (
      <Button
        key={period}
        variant={selectedPeriod === period ? "default" : "ghost"}
        className={`cursor-pointer ${
          selectedPeriod === period ? "bg-primary text-white" : "text-zinc-200"
        }`}
        onClick={() => {
          setSelectedPeriod(period);
          console.log(period);
        }}
      >
        {period}
      </Button>
    ))}

    <Button variant="outline" className="flex items-center gap-1">
      <Calendar className="size-4" />
      Selecionar Período
    </Button>
  </div>
)}

               
      </div>
    </header>
  );
}
