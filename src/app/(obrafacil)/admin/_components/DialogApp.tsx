
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

import { StatusApp } from "./status";
import { FotosObra } from "./FotosObra";




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

export function DialogApp({obra}: ObraDialogProps) {
  const linkPublico = `${process.env.NEXT_PUBLIC_HOST_URL}/user/${obra.publicId}`
    const ValorFormatado = obra.valorTotal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  
  return(
        <>
        <Dialog>
        <div className="flex items-center justify-end mb-2">
          <div className=" flex gap-3">
          <a
            href={linkPublico}
            target="_blank"
            className="bg-violet-400 text-white px-2 py-2 rounded-lg hover:bg-violet-500"
          >
            <View />
          </a>

          <Button><CopyIcon /></Button>
        </div>

        </div>
        <DialogTrigger asChild>
          <Button className="w-full bg-violet-500 hover:bg-violet-600  cursor-pointer">Ver mais</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="md:text-md text-sm ">{obra.tipoServico}</DialogTitle>
          </DialogHeader>

          <Tabs
          
          defaultValue="orcamento">
            <TabsList className="grid grid-cols-1 bg-violet-500 gap-2  w-full ">
              <TabsTrigger className="cursor-pointer " value="orcamento">
                Orçamento
              </TabsTrigger>
            

            </TabsList>
            <TabsList className="grid grid-cols-2 bg-violet-500 gap-2 w-full  ">
                            <TabsTrigger className="cursor-pointer" value="fotosobra">
                Fotos da Obra
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="processobra">
                Processo
              </TabsTrigger>
            </TabsList>
            <TabsContent value="orcamento" className="space-y-4">
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
              <div>
                <h1>Detalhes do Orçamento</h1>
                <div className=" mt-2 text-zinc-900 text-sm space-y-1">
                  <p>Tipo de Serviço: {obra.tipoServico}</p>
                  <p>Descrição do serviço: {obra.descricao}</p>
                  <p>
                    Prazo Estimado de entrega: {obra.prazoDias} Dias de Trabalho
                  </p>
                </div>
              </div>
           
              <div>
                <h1>Orçamento</h1>
                <div className="px-4">
                  <p> Valor do Orçamento: {ValorFormatado}</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="processobra">
              <h1 className="mt-2">Editar Processo da Obra</h1>
              <StatusApp obraId={obra.id }  />
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