
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CopyIcon, Locate, PhoneCall, User, View } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import Tabela_Orcamento from "@/components/tabela-orcameto/page";
import { StatusApp } from "./status";


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
  const linkPublico = `${process.env.NEXT_PUBLIC_HOST_URL}/user/${obra.publicId}`
    return(
        <>
        <Dialog>
        <div className="flex items-center justify-end mb-2">
          <div className=" flex gap-3">
          <a
            href={linkPublico}
            target="_blank"
            className="bg-orange-400 text-white px-2 py-2 rounded-lg hover:bg-orange-500"
          >
            <View />
          </a>

          <Button><CopyIcon /></Button>
        </div>

        </div>
        <DialogTrigger asChild>
          <Button className="w-full  cursor-pointer">Ver mais</Button>
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
              <div className=" flex flex-col gap-3 text-sm text-zinc-900">
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
                <h1>Detalhes do Orçamento</h1>
                <div className=" mt-2 text-zinc-900  text-sm space-y-2 mb-12 ">
                  <p>Tipo de Serviço: {obra.tipoServico}</p>
                  <p>Descrição do serviço: {obra.descricao}</p>
                  <p>
                    Prazo Estimado de entrega: {obra.prazoDias} Dias de Trabalho
                  </p>
                </div>
              </div>
              <div className="mb-9">
                <h1>Material</h1>
                <div className="">
                  <Tabela_Orcamento obraId={obra.id} />
                </div>
              </div>
              <div>
                <h1>Mão de Obra</h1>
                <div className="px-4">
                  <p> Mão de obra: R$ {obra.valorTotal.toFixed(2)} </p>
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
             Fotos
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
        </>
       
    )
}