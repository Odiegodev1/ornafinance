"use client"
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Car, SquareArrowDownRight, SquareArrowUpRight, Wallet2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { getResumoFinanceiro } from "../actions/getresumo";

interface Resumo {
  receita: number;
  despesa: number;
  saldo: number;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function CardWallet(){
      const [resumo, setResumo] = useState<Resumo>({
    receita: 0,
    despesa: 0,
    saldo: 0,
  });

  useEffect(() => {
    async function loadResumo() {
      const data = await getResumoFinanceiro();
      setResumo(data);
    }
    loadResumo();
  }, []);
  
    return(
        <div className="grid md:grid-cols-3 p-2 gap-3 w-full ">
           <Card className="w-full bg-primary/20 border-2 border-primary">
             <CardTitle className="px-3 text-primary">Saldo Total</CardTitle>
             <CardContent>
                <div className="flex flex-col gap-4">
                    <h1 className="flex text-4xl font-bold text-purple-500 items-center justify-between">{formatCurrency(resumo.saldo)} <Wallet2Icon className="text-purple-500" /></h1>
                    <p className="text-xs text-zinc-400"><span className="text-emerald-500">+1.2%</span> em relação ao dia anterior</p>
                </div>
             </CardContent>
           </Card>
            
            <Card className="w-full bg-emerald-500/40 border-2 border-emerald-500">
             <CardTitle className="px-3 text-emerald-500">Receita</CardTitle>
             <CardContent>
                <div className="flex flex-col gap-4">
                    <h1 className="flex text-4xl font-bold text-emerald-500 items-center justify-between">{formatCurrency(resumo.receita)} <SquareArrowUpRight className="text-emerald-500" /></h1>
                    <p className="text-xs text-zinc-400"><span className="text-emerald-500">+1.2%</span> em relação ao dia anterior</p>
                </div>
             </CardContent>
           
           </Card>

            <Card className="w-full bg-red-500/40 border-2 border-red-500">
             <CardTitle className="px-3 text-red-500">Despesas</CardTitle>
             <CardContent>
                <div className="flex flex-col gap-4">
                    <h1 className="flex text-4xl font-bold text-red-500 items-center justify-between">{formatCurrency(resumo.despesa)} <SquareArrowDownRight className="text-red-500" /></h1>
                    <p className="text-xs text-zinc-400"><span className="text-red-500">-5.2%</span> em relação ao dia anterior</p>
                </div>
             </CardContent>
           </Card>
        </div>
    )
}