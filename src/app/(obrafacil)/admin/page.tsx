
""
import { Cardcontent } from "@/app/(obrafacil)/admin/_components/Cardcontent";
import { auth } from "@/lib/auth";
import { HardHat } from "lucide-react";
import { redirect } from "next/navigation";
import { CreateObra } from "./_components/create_obra";
import { prisma } from "@/lib/prisma";


export default async function AdminPage(){

const UserObras = await prisma.obra.findMany({
    include: { materiais: true },
    orderBy: { createdAt: "desc" },
})
if(!UserObras){
    alert("Ocorreu um erro ao carregar as obras")
    return;
}
   

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
            <main className="flex flex-col items-start px-5 py-8 ">
             <Cardcontent obras={UserObras} />
            
             
         </main>
        </section>
    )
}