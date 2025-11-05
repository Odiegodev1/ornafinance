

import { Cardcontent } from "@/app/(obrafacil)/admin/_components/Cardcontent";
import { auth } from "@/lib/auth";
import { DollarSign, HardHat, TimerIcon, TimerOff, TimerOffIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { CreateObra } from "./_components/create_obra";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getResumoFinanceiro } from "../actions/get-total-valor";

export default async function AdminPage(){
 const session = await auth();
 if(!session?.user){
    return(
        redirect("/")
    )
 }
const UserObras = await prisma.obra.findMany({
    include: { materiais: true },
    orderBy: { createdAt: "desc" },
})
if(!UserObras){
    alert("Ocorreu um erro ao carregar as obras")
    return;
}

  const { totalReceitas, totalPendentes } = await getResumoFinanceiro()

  const formatar = (valor: number) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })


    return(
        <section className="flex flex-col  w-full min-h-screen">
                     <header className="border-b p-5 py-7 justify-between border-orange-200 h-12 w-full flex items-center ">
                         <div className=" flex items-center gap-2">
                <div className="flex justify-center items-center p-2 size-12 bg-orange-400 rounded-md">
                    <HardHat className="text-white" />
                </div>
                <h1 className="text-2xl font-extrabold">Obra Facil</h1>
            </div>
            <CreateObra />

            </header>
            <main className="mt-4 flex flex-col items-center justify-center w-full ">

               <div className="grid md:grid-cols-2 md:max-w-7xl grid-cols-1 gap-4 w-full md:p-2 p-4 items-center justify-center">
                  <Card className=" w-full">
                  <CardHeader>
                        <CardTitle className="flex items-center gap-2">Pendente <TimerIcon  className="size-5"/></CardTitle>
                      </CardHeader>
                     <CardContent>
                         <CardTitle
                           className="text-3xl font-extrabold"
                         > {formatar(totalPendentes)}</CardTitle>
                     </CardContent>
                  </Card>

                   <Card className=" w-full">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">Recita <DollarSign className="size-5"/></CardTitle>
                      </CardHeader>
                     <CardContent>
                         <CardTitle
                         className="text-3xl font-extrabold"
                         > {formatar(totalReceitas)}</CardTitle>
                     </CardContent>
                  </Card>
               </div>

            </main>
            <main className="flex flex-col items-start px-5 py-8 ">
             <Cardcontent obras={UserObras} />
            
             
         </main>
        </section>
    )
}