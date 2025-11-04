
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
import { CreateOrcamento } from "./create_orcamento";

export function DialogApp(){
    return(
        <>
        <Dialog>
        <div className="flex items-center justify-end mb-2">
          <div className=" flex gap-3">
          <a
            
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
            <DialogTitle className="md:text-md text-sm ">Telhado</DialogTitle>
          </DialogHeader>

          <Tabs
          
          defaultValue="orcamento">
            <TabsList className="grid grid-cols-2 bg-orange-500 gap-2  w-full ">
              <TabsTrigger className="cursor-pointer " value="orcamento">
                Orçamento
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="criarorcamento">
                Criar Orçamento
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
              <div className=" flex flex-col gap-3 text-sm text-zinc-600">
                <p className="flex items-center gap-1">
                  <User />
                  Nome:  Adriana
                </p>
                <p className="flex items-center gap-1">
                  <PhoneCall />
                  Telefone: (22) 99999-9999
                </p>
                <p className="flex items-center gap-1">
                  <Locate />
                  Endereço:  Rua 1 com 21 saquarema-rj
                </p>
              </div>
              <div>
                <h1>Detalhes do Orçamento</h1>
                <div className=" mt-2 text-zinc-600 text-sm space-y-1">
                  <p>Tipo de Serviço: Telhado</p>
                  <p>Descrição do serviço: Telhado caiu</p>
                  <p>
                    Prazo Estimado de entrega: 7 Dias de Trabalho
                  </p>
                </div>
              </div>
              <div>
                <h1>Material</h1>
                <div className="">
                  ---------------
                </div>
              </div>
              <div>
                <h1>Mão de Obra</h1>
                <div className="px-4">
                  <p> Mão de obra: R$ 749.00 </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="criarorcamento">
              <CreateOrcamento  />
            </TabsContent>
            <TabsContent value="processobra">
              <h1 className="mt-2">Editar Processo da Obra</h1>
              statuss
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