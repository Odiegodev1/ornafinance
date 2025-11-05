import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { HardHat, Phone } from "lucide-react";
import Image from "next/image";
import Obra from "../../../../../public/obra.webp"
import { DialogUser } from "@/components/DialogUser";
import { StatusApp } from "@/components/status";


interface UserPageProps {
 params: { id: string };
}


export default async function UserPage({ params }: UserPageProps) {
 


 
    const { id } =  params
 
  if (!id) return <div>Link inválido</div>;

  const obra = await prisma.obra.findUnique({
    where:  { publicId: id },
    include: { materiais: true, maoDeObra: true },
  });

  if (!obra) return <div>Orçamento não encontrado</div>;
 
    return (
          <section className="flex flex-col w-full min-h-screen">
      <header className="border-b p-5 md:px-30 py-7 justify-between border-orange-200 h-12 w-full flex items-center">
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center p-2 size-12 bg-orange-400 rounded-md">
            <HardHat className="text-white" />
          </div>
          <h1 className="text-2xl font-extrabold">Obra Facil</h1>
        </div>
        <Button>
          <Phone /> WhatsApp
        </Button>
      </header>

      <main className="flex md:px-30 w-full flex-col items-center py-8">
        <div className="w-full p-2 flex flex-col gap-10 justify-center items-center">
          <Card className="md:w-3xl w-full">
            <CardHeader>
              <CardTitle>Veja o Processo da Obra</CardTitle>
              <CardDescription>Sua obra em processo</CardDescription>
            </CardHeader>
            <CardContent className="w-full">
             <StatusApp obraId={obra.id} />
            </CardContent>
          </Card>

          <Card className="p-0 hover:scale-105 transition-all duration-700 hover:shadow-2xl hover:shadow-orange-400 md:w-3xl">
            <Image
              src={Obra}
              alt="obra"
              className="w-full h-[245px] object-cover rounded-md"
            />
            <CardContent className="p-0 px-2 pb-2">
              <CardTitle className="text-xl flex items-center justify-between">
                {obra.tipoServico}
                <div className="size-4 bg-emerald-500 rounded-full" />
              </CardTitle>
              <div className="text-sm space-y-1 mb-2">
                <p>Nome: {obra.nomeCliente}</p>
                <p>Valor da obra: R$ {obra.valorTotal.toFixed(2)}</p>
              </div>
              <DialogUser obra={obra} />
            </CardContent>
          </Card>
        </div>
      </main>
    </section>
    );
}