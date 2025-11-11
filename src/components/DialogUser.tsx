
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Locate, PhoneCall, Smartphone, User,  } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import Tabela_Orcamento from "@/components/tabela-orcameto/page";
import { StatusApp } from "./status";
import { FotosObra } from "@/app/(obrafacil)/admin/_components/FotosObra";


interface ObraDialogProps {
  obra: {
    id: number;
    publicId: string;
    nomeCliente: string;
    telefone: string;
    endereco: string;
    tipoServico: string;
    descricao: string;
    prazoDias: number;
    valorTotal: number;
    status: string;
  };
}

export function DialogUser({obra}: ObraDialogProps) {
  return(
        <>
        <Dialog>
        <div className="flex items-center justify-end mb-2">
          

        </div>
        <DialogTrigger asChild>
          <Button className="w-full bg-violet-500 hover:bg-violet-600 cursor-pointer">Ver mais</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="md:text-md text-sm ">{obra.tipoServico}</DialogTitle>
          </DialogHeader>

          <Tabs
          
          defaultValue="orcamento">
            <TabsList className="grid grid-cols-2 bg-orange-500 gap-2  w-full ">
              <TabsTrigger className="cursor-pointer " value="orcamento">
                Orçamento
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="criarorcamento">
                Materias
              </TabsTrigger>

            </TabsList>
            <TabsList className="grid grid-cols-2 bg-orange-500 gap-2 w-full  ">
                            <TabsTrigger className="cursor-pointer" value="fotosobra">
                Fotos da Obra
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="processobra">
                Processo{" "}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="orcamento">
              <div className=" flex flex-col gap-3 text-sm text-black">
                <div className="mt-2 mb-2">
                  <h1 className="text-center text-2xl font-semibold text-purple-600">Troca Telas e Muito + </h1>
                  <p className="text-center text-zinc-600">Aconpanhe seu orçamento em tempo real</p>
                </div>
                <p className="flex items-center gap-1">
                  <User />
                  Nome:  {obra.nomeCliente}
                </p>
                <p className="flex items-center gap-1">
                  <PhoneCall />
                  Telefone: {obra.telefone}
                </p>
                <p className="flex items-center gap-1">
                  <Locate />
                  Endereço:  {obra.endereco}
                </p>
              </div>
              <div className="mt-4">
                <h1 className="flex items-center gap-2 text-purple-600 font-semibold mb-2">Detalhes do Orçamento <Smartphone /></h1>
                <div className=" mt-2 text-black  text-sm space-y-2 mb-12 ">
                  <p>Tipo de Serviço: {obra.tipoServico}</p>
                  <p>Descrição do serviço: {obra.descricao}</p>
                  <p>
                    Prazo Estimado de entrega: {obra.prazoDias} Dias de Trabalho
                  </p>
                </div>
              </div>
              
          
              <div>
                <h1 className="text-purple-600 font-semibold">Valor:</h1>
                <div className="px-4">
                  <p> Valor Total: R$ {obra.valorTotal.toFixed(2)} </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="criarorcamento">
              <h1>Materiais</h1>
              <Tabela_Orcamento obraId={obra.id} />
            </TabsContent>
            <TabsContent value="processobra">
              <h1 className="mt-2">Editar Processo da Obra</h1>
              <StatusApp obraId={obra.id} />
            </TabsContent>
            <TabsContent value="fotosobra">
             <FotosObra obraId={obra.id} />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
        </>
       
    )
}