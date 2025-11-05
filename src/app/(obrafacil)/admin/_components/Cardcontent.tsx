import Image from "next/image";
import { Card, CardContent, CardTitle } from "../../../../components/ui/card";

import Obra from "../../../../../public/obra.webp"
import { DialogApp } from "./DialogApp";
import { Obra as Obras } from "@/generated/prisma";

interface CreateObraProps {
    obras: Obras[];
}

export function Cardcontent({obras}: CreateObraProps) {

   
    return (
  <div className="grid md:grid-cols-4 gap-4 w-full  ">
{obras.map((obra) => {
   const valorFormatado = obra.valorTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
  return(
    <Card  key={obra.id}
             className="p-0 hover:scale-105 
             trasition-all duration-700 hover:shadow-2xl
              hover:shadow-orange-400  md:w-full  " >
                <Image 
                src={Obra}
                alt="obra"
                className="w-full object-cover rounded-md"
                />
                <CardContent className="p-0 px-2 pb-2">
                    <CardTitle className="text-xl flex items-center justify-between">{obra.tipoServico}<div className="size-4 bg-emerald-500 rounded-full"/></CardTitle>
                     <div className="text-sm space-y-1 mb-2 ">
                        <p>Nome: {obra.nomeCliente}</p>
        
                        <p>Valor da obra: {valorFormatado}</p>
                     </div>
                  <DialogApp obra={obra} />
                </CardContent>
 </Card>
  )
   
})}
  </div>
    )

}