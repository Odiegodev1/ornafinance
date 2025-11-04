import Image from "next/image";
import { Card, CardContent, CardTitle } from "../../../../components/ui/card";

import Obra from "../../../../../public/obra.webp"
import { DialogApp } from "./DialogApp";


export function Cardcontent() {
    return (
  <div className="grid md:grid-cols-4 gap-4 w-full  ">
 <Card 
             className="p-0 hover:scale-105 
             trasition-all duration-700 hover:shadow-2xl
              hover:shadow-orange-400  md:w-full  " >
                <Image 
                src={Obra}
                alt="obra"
                className="w-full object-cover rounded-md"
                />
                <CardContent className="p-0 px-2 pb-2">
                    <CardTitle className="text-xl flex items-center justify-between">Telhado<div className="size-4 bg-emerald-500 rounded-full"/></CardTitle>
                     <div className="text-sm space-y-1 mb-2 ">
                        <p>Nome: Adriana</p>
                        <p>Valor da obra: R$ 749.90</p>
                     </div>
                  <DialogApp />
                </CardContent>
              </Card>
  </div>
    )

}