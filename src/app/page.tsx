"use client";
import { Button } from "@/components/ui/button";
import {  ArrowUpRight, Bot, CheckCircle, HardHat, ImageIcon, User2 } from "lucide-react";
import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from "../../public/hero.jpg"


import { signIn } from "next-auth/react";


export default  function page(){

  async function handleLogin() {
   await signIn("github", {redirectTo: "/admin"})
  }
  return(
    <section className="flex flex-col min-h-scree w-full bg-zinc-100">
        <header className="flex p-2 md:px-50 w-full border-b-2 items-center justify-between">
          <div className="flex items-center gap-2">
            no
            <div className="flex bg-orange-400  items-center justify-center size-12 rounded-2xl">
              <HardHat className="size-8 text-white"/>
            </div>
            <h1 className="text-2xl font-bold">ObraFacil</h1>
          </div>
          <div className="gap-3 flex">
            <Button onClick={handleLogin}  variant="outline" className="hidden text-black  border-zinc-900 md:flex">Entrar</Button>
            <Button className="bg-orange-500 hover:bg-orange-600">Teste Gratis</Button>
          </div>
        </header>
        <main className="flex flex-col bg-zinc-900">
         <div className="w-full h-screen flex items-center justify-center" > <Image
          src={Hero}
          alt="hero"
           quality={100}
          className="w-full   absolute opacity-40 h-screen object-cover "
          />
        
          <div className="space-y-9 relative max-w-5xl z-10 text-center -mt-8 text-white px-4">

      <div className="flex flex-col  items-center justify-center">
          <h1 className="md:text-5xl text-2xl items-center  justify-center flex flex-col max-w-xl  font-bold mb-4">
          Gerencie sua obra com <span className="text-orange-500">ObraFacil</span>
        </h1>
        <p className="text-xs md:text-sm text-zinc-200 md:max-w-xl max-w-xs  mb-6">
         Crie orçamentos profissionais e permita que seus clientes acompanhem cada etapa da obra em tempo real.
        </p>
      </div>

          <div className="flex gap-4 items-center justify-center">

             <div className="md:flex hidden
              text-orange-200 items-center 
              gap-2 bg-orange-500/40 
              px-4 py-2 rounded-full backdrop-blur-sm">
              <CheckCircle />
              Orçamentos Rapidos
             </div>

             <div className="md:flex hidden text-orange-200 items-center gap-2 bg-orange-500/40 px-4 py-2 rounded-full backdrop-blur-sm">
              <CheckCircle />
              Acompanhamento Online
             </div>

             <div className="flex text-orange-200 items-center gap-2 bg-orange-500/40 px-4 py-2 rounded-full backdrop-blur-sm">
              <Bot />
              Orçamentos Criado Com Ia
             </div>
          </div>
        <div className="flex md:flex-row flex-col gap-4 items-center justify-center ">
          <Button onClick={handleLogin} className=" w-xs h-15 bg-orange-500 hover:bg-orange-600 mt-8">Começar Gratís</Button>
          <Button variant="outline" className="md:flex hidden h-15 mt-8 text-black">Entrar</Button>
        </div>
      </div>
        </div>
         
        </main>

        <main className="w-full items-center flex justify-center ">
           <div className="flex flex-col  md:max-w-7xl max-w-2xl px-4">
            <div className="w-full flex flex-col items-center mb-10 ">
            <h1 className="md:text-5xl text-2xl mt-20 mb-4 font-semibold tracking-wider text-center">Tudo que você precisa para <span className="text-orange-500">gerir suas obras</span></h1>
            <p className="md:text-xl text-xs text-zinc-500 max-w-3xl text-center ">Ferramentas profissionais para construtores que valorizam organização e transparência.</p>
           </div>

           <div className="mt-12 mb-12 w-full grid md:grid-cols-2 gap-12">
              <Card className="py-10 hover:border-2 hover:border-orange-500 hover:shadow-2xl  hover:shadow-orange-500 transition-all duration-700 ">
                 <CardHeader className="px-6">
                  <div className=" mb-4 size-13 flex items-center rounded-md justify-center bg-orange-500">
                    <Bot className="size-8 text-white" />
                  </div>
                  <CardTitle>Orçamentos Criado Com IA</CardTitle>
                  <CardDescription className="max-w-xl">Orçametos mais limpos e precisos sem erros de digitação atravé de inteligência artificial!</CardDescription>
                 </CardHeader>
              </Card>
              <Card className="py-10 hover:border-2 hover:border-orange-500 hover:shadow-2xl  hover:shadow-orange-500 transition-all duration-700 ">
                 <CardHeader className="px-6">
                  <div className="size-13 mb-4 flex items-center rounded-md justify-center bg-orange-500">
                    <ArrowUpRight className="size-8 text-white" />
                  </div>
                  <CardTitle>Acompanhamento em Tempo Real</CardTitle>
                  <CardDescription className="max-w-md">Seus clientes visualizam o progresso da obra, valores e cronograma sempre atualizados</CardDescription>
                 </CardHeader>
              </Card>
              <Card className="py-10 hover:border-2 hover:border-orange-500 hover:shadow-2xl  hover:shadow-orange-500 transition-all duration-700 ">
                 <CardHeader className="px-6">
                  <div className="size-13 mb-4 flex items-center rounded-md justify-center bg-orange-500">
                    <ImageIcon className="size-8 text-white" />
                  </div>
                  <CardTitle>Registro Fotográfico</CardTitle>
                  <CardDescription className="max-w-sm">Documente cada etapa da obra com fotos organizadas por fase, garantindo transparência total.</CardDescription>
                 </CardHeader>
              </Card>
              <Card className="py-10 hover:border-2 hover:border-orange-500 hover:shadow-2xl  hover:shadow-orange-500 transition-all duration-700 ">
                 <CardHeader className="px-6">
                  <div className="size-13 mb-4 flex items-center rounded-md justify-center bg-orange-500">
                    <User2 className="size-8 text-white" />
                  </div>
                  <CardTitle>Portal do Cliente</CardTitle>
                  <CardDescription className="max-w-sm">Cada cliente tem acesso exclusivo ao andamento de sua obra, recebendo notificações de atualizações.</CardDescription>
                 </CardHeader>
              </Card>
           </div>
           </div>
          
        </main>
        <footer className="p-4 bg-zinc-900 text-center text-zinc-200">desenvolvido por @Diegodev</footer>
    </section>
  )
}