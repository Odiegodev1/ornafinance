"use client"
import { Button } from "@/components/ui/button";
import { BadgeDollarSign, BadgeDollarSignIcon, BarChart3, Calendar, ChartBar, CheckCircle, Clock,  Mail, Phone, PhoneCall, QuoteIcon, Receipt, RectangleEllipsis, Sparkle, Star, User2,  Wallet2Icon, WalletCards } from "lucide-react";
import Image from "next/image";
import Cta from "../../public/cta.jpg"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { signIn } from "next-auth/react";


export default function Page() {

async function handleregister() {
  await signIn("github",{redirectTo:"/home"});
}
  return (
   <section className="flex flex-col w-full min-h-screen   ">
      <header className="flex justify-between  h-18 p-4 border w-full items-center">
      
        <div className="flex items-center gap-2">
          <div className="size-12 rounded-md bg-violet-500 flex items-center justify-center border-2 border-purple-400">
             <BadgeDollarSign className="size-8 text-purple-800" />
          </div>
          <h1 className="text-2xl font-bold text-purple-800">MoneyFacíl</h1>
        </div>

        

        <Button onClick={handleregister} className="p-2">Teste Gratís</Button>
      </header>
      
      <main className="flex flex-col items-center justify-center  bg-zinc-900 h-full">
        <div className="w-full h-screen flex items-center justify-center">
         <Image 
         src={Cta}
         alt="cta"
         
         className="w-full absolute opacity-40 h-screen object-cover"/>
         
       <div className="space-y-2 flex  flex-col h-full items-center justify-center   relative max-w-5xl z-10 text-center  text-white px-4">
   
    <div className="  top-12 absolute ">
      <div
      className="bg-purple-500 px-4 rounded-md py-0.5 flex items-center gap-2"
      >
        <Sparkle />
        <h1 className="text-sm"> Organização Financeira Inteligente</h1>
      </div>
    </div>

<div>
  
      <div className="flex flex-col  items-center justify-center">
          <h1 className="md:text-7xl gap-2 text-2xl items-center  justify-center flex flex-col max-w-4xl  font-bold mb-4">
         Organize suas finanças!<span className="text-violet-400">Simplifique sua vida</span>
        </h1>
        <p className="text-xs md:text-sm text-zinc-200 md:max-w-xl max-w-300  mb-6">
         Controle seus gastos, planeje seus objetivos e alcance a liberdade financeira com uma plataforma feita para você.
        </p>
      </div>
       
       <div className="flex items-center justify-center gap-2">
        <div className="md:flex hidden
               text-xs
              text-violet-200 items-center 
              gap-2 bg-purple-500/40 
              px-4 py-1 rounded-md backdrop-blur-sm">
              <CheckCircle className="size-4" />
              Controle Financeiro
             </div>

             <div className="md:flex hidden
              text-xs
              text-violet-200 items-center 
              gap-2 bg-purple-500/40 
              px-4 py-1 rounded-full backdrop-blur-sm">
              <BarChart3 className="size-4" /> Relatórios Inteligentes
             </div>

             
             <div className="md:flex hidden
             text-xs
              text-violet-200 items-center 
              gap-2 bg-purple-500/40 
              px-4 py-1 rounded-full backdrop-blur-sm">
                 <Clock className="size-4" /> Organização em Tempo Real
             </div>

          
              

       </div>

       <Button onClick={handleregister} className="md:mt-8 md:w-120">Comece agora</Button>
</div>
         
           
      </div>


        </div>
      </main>

      <main className="flex w-full flex-col  border-b border-zinc-400 items-center bg-purple-300/40 ">
        <div className="max-w-7xl md:space-x-40 md:py-25 grid md:grid-cols-4 grid-cols-2 justify-center h-80 items-center">
       
           <div className="flex flex-col items-center gap-4">

            <div className="size-15 rounded-md flex hover:scale-110 transition-all duration-200 bg-purple-500 items-center justify-center">
              <WalletCards className="
              
              size-12 text-amber-50" />

            </div>

            <div className="flex items-center flex-col ">
              <h1 className="text-2xl font-bold text-purple-500">450 +</h1>
              <p className="text-xs  text-zinc-500 ">Finanças Organizadas</p>
            </div>
           </div>

               <div className="flex flex-col items-center gap-4">

            <div className="size-15 rounded-md flex hover:scale-110 transition-all duration-200 bg-purple-500 items-center justify-center">
              <User2 className="
              
              size-12 text-amber-50" />

            </div>

            <div className="flex items-center flex-col ">
              <h1 className="text-2xl font-bold text-purple-500">750 +</h1>
              <p className="text-xs  text-zinc-500 ">Usuarios Ativos</p>
            </div>
           </div>

           <div className="flex flex-col items-center gap-4">

            <div className="size-15 rounded-md flex hover:scale-110 transition-all duration-200 bg-purple-500 items-center justify-center">
              <Receipt className="
              
              size-12 text-amber-50" />

            </div>

            <div className="flex items-center flex-col ">
              <h1 className="text-2xl font-bold text-purple-500">+ 3M</h1>
              <p className="text-xs  text-zinc-500 ">Economizados</p>
            </div>
           </div>

           <div className="flex flex-col items-center gap-4">

            <div className="size-15 rounded-md flex hover:scale-110 transition-all duration-200 bg-purple-500 items-center justify-center">
              <Star className="
              
              size-12 text-amber-50" />

            </div>

            <div className="flex items-center flex-col ">
              <h1 className="text-2xl font-bold text-purple-500">4.8/5</h1>
              <p className="text-xs  text-zinc-500 ">Avaliação Media</p>
            </div>
           </div>
    
        </div>
   
      </main>

  
      <main className="flex flex-col w-full items-center">
         <div className="flex flex-col items-center">
           <div className="px-2 bg-violet-700 border-2 mb-2 border-violet-800 rounded-md items-center justify-center flex mt-7">
             <h1 className="text-violet-300">Recursos Exclusivos</h1>
           </div>
         </div>

         <div className="md:max-w-7xl max-w-xs mb-4  flex flex-col md:mt-18 mt-12 items-center w-full">
          <h1 className="md:text-4xl text-lg text-center tracking-wider font-semibold" >Tudo que você precisa para <span className="text-purple-500">dominar suas finanças</span></h1>
          <p className="md:text-sm text-xs text-center  text-zinc-500">Um jeito fácil, rápido e direto de registrar suas receitas e despesas</p>
         </div>

         <div className="mt-15 grid md:grid-cols-3 mb-50 gap-4">

          <Card className="w-80 p-0 hover:shadow-2xl hover:scale-105 hover:shadow-purple-500 transition-all duration-200">
            <CardHeader className="p-4">
              <div className="flex items-center flex-col gap-4">
                <div className="flex items-center justify-center size-20 rounded-md bg-gradient-to-t from-purple-800 via-violet-600 to-purple-400">
                  <Phone  className="size-14 text-white" />
                </div>
                <div className="bg-purple-200 px-2 py-1 rounded-md">
                  <p className="text-xs text-purple-600">Mais Popular</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-purple-700 font-semibold text-center">Registre Receitas e Despesas</h1>
                <p className="text-center text-xs text-purple-400">Informe valores, escolha uma categoriae veja seu saldo atualizado em tempo real </p>
              </div>
            </CardContent>
            <CardFooter className="bg-purple-200/20 flex items-center justify-center">
        
                <h1 className="text-sm text-center text-emerald-500 ">95% dos usuários economizam mais</h1>
             
              </CardFooter>
          </Card>

           <Card className="w-80 p-0 hover:shadow-2xl hover:scale-105 hover:shadow-purple-500 transition-all duration-200">
            <CardHeader className="p-4">
              <div className="flex items-center flex-col gap-4">
                <div className="flex items-center justify-center size-20 rounded-md bg-gradient-to-t from-purple-800 via-violet-600 to-purple-400">
                  <Calendar  className="size-14 text-white" />
                </div>
                <div className="bg-purple-200 px-2 py-1 rounded-md">
                  <p className="text-xs text-purple-600">Novo</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-purple-700 font-semibold text-center">Acompanhe seu Saldo e Histórico</h1>
                <p className="text-center text-xs text-purple-400">Todos os lançamentos ficam salvos na sua conta. Visualize de forma organizada </p>
              </div>
            </CardContent>
            <CardFooter className="bg-purple-200/20 flex items-center justify-center">
        
                <h1 className="text-sm text-center text-emerald-500">Retorno médio de 12% ao ano</h1>
             
              </CardFooter>
          </Card>

           <Card className="w-80 p-0 hover:shadow-2xl hover:scale-105 hover:shadow-purple-500 transition-all duration-200">
            <CardHeader className="p-4">
              <div className="flex items-center flex-col gap-4">
                <div className="flex items-center justify-center size-20 rounded-md bg-gradient-to-t from-purple-800 via-violet-600 to-purple-400">
                  <ChartBar className="size-14 text-white" />
                </div>
                <div className="bg-purple-200 px-2 py-1 rounded-md">
                  <p className="text-xs text-purple-600">Novo</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-purple-700 font-semibold">Organize por Categorias</h1>
                <p className="text-center text-xs text-purple-400">Você pode separar seus gastos por tipo, ajudando a entender melhor seus hábitos financeiros</p>
              </div>
            </CardContent>
            <CardFooter className="bg-purple-200/20 flex items-center justify-center">
              
                <h1 className="text-sm text-emerald-500">Retorno médio de 12% ao ano</h1>
             
              </CardFooter>
          </Card>

         </div>
      </main>

      <main className="flex flex-col w-full items-center">
         <div className="flex flex-col items-center">
           <div className="px-2 bg-green-300 border-2 mb-2 border-green-800 rounded-md items-center justify-center flex mt-7">
             <h1 className="text-green-700">Super Simples</h1>
           </div>
         </div>

         <div className="md:max-w-7xl max-w-xs mb-4  flex flex-col md:mt-18 mt-12 items-center w-full">
          <h1 className="md:text-4xl text-lg text-center tracking-wider font-semibold" >Como funciona em <span className="text-green-500">3 passos simples</span></h1>
          <p className="md:text-sm text-xs text-center  text-zinc-500">Em menos de 5 minutos voce pode comecar a usar a MoneyFacíl</p>
         </div>

         <div className="mt-15 grid md:grid-cols-3 mb-50 gap-4">

          <Card className="w-80 p-0 hover:shadow-2xl hover:scale-105 hover:shadow-green-500 transition-all duration-200">
            <CardHeader className="p-4">
              <div className="flex items-center flex-col gap-4">
                <div className="flex items-center justify-center size-20 rounded-md ">
                  <RectangleEllipsis  className="size-14 text-green-500" />
                </div>
                <div className="bg-green-200 px-2 py-1 rounded-md">
                  <p className="text-xs text-green-600">2 MIN</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-green-700 font-semibold text-center">Cadastre-se</h1>
                <p className="text-center text-xs text-green-400">A criação de uma conta simples e gratuita - em menos e 2 minutos.</p>
              </div>
            </CardContent>
            
          </Card>

           <Card className="w-80 p-0 hover:shadow-2xl hover:scale-105 hover:shadow-green-500 transition-all duration-200">
            <CardHeader className="p-4">
              <div className="flex items-center flex-col gap-4">
                <div className="flex items-center justify-center size-20 rounded-md ">
                  <Wallet2Icon  className="size-14 text-green-500" />
                </div>
                <div className="bg-green-200 px-2 py-1 rounded-md">
                  <p className="text-xs text-green-600">1 MIN</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-green-700 font-semibold text-center">Comece a Registrar</h1>
                <p className="text-center text-xs text-green-400">Innforme seus ganhos e gastos conforme for usando seu dinheiro no dia a dia</p>
              </div>
            </CardContent>
            
          </Card>

           <Card className="w-80 p-0 hover:shadow-2xl hover:scale-105 hover:shadow-green-500 transition-all duration-200">
            <CardHeader className="p-4">
              <div className="flex items-center flex-col gap-4">
                <div className="flex items-center justify-center size-20 rounded-md ">
                  <BadgeDollarSignIcon  className="size-14 text-green-500" />
                </div>
                <div className="bg-green-200 px-2 py-1 rounded-md">
                  <p className="text-xs text-green-600">0 M</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-green-700 font-semibold text-center">Acompanhe seu Saldo</h1>
                <p className="text-center text-xs text-green-400">O sistema calcula automaticamente seus ganhos e gastos </p>
              </div>
            </CardContent>
            
          </Card>

         

         </div>
      </main>

        <main className="flex flex-col w-full  items-center">
         <div className="flex flex-col items-center">
           <div className="px-2 bg-violet-700 border-2 mb-2 border-violet-800 rounded-md items-center justify-center flex mt-7">
             <h1 className="text-violet-300">+3.000 Usuários Satisfeitos</h1>
           </div>
         </div>

         <div className="md:max-w-7xl max-w-xs mb-4  flex flex-col md:mt-18 mt-12 items-center w-full">
          <h1 className="md:text-4xl text-lg text-center tracking-wider font-semibold" >O que nosso usuários<span className="text-purple-500">estão dizendo</span></h1>
          <p className="md:text-sm text-xs text-center  text-zinc-500">Historias reais de pessoas que usaram o MoneyFacíl</p>
         </div>

         <div className="mt-15 grid md:grid-cols-2 mb-50 gap-4">

          <Card className="w-80 p-0 hover:shadow-2xl hover:scale-105 hover:shadow-purple-500 transition-all duration-200">
            <CardHeader className="p-4">
              <div className="flex w-full flex-col">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="text-purple-500" />
                    <Star className="text-purple-500" />
                    <Star className="text-purple-500" />
                    <Star className="text-purple-500" />
                    <Star className="text-purple-500" />
                    
                    </div>
                    <QuoteIcon className="size-8"/>
                </div>
                

                <div className="mt-4">
                  <h1 className="text-xl font-bold">Marina Silva</h1>
                  <p className="text-zinc-500 text-sm">Ja uso o MoneyFacíl por 3 meses e estou muito satisfeita com o produto</p>
                </div>

              </div>
            </CardHeader>
            
          </Card>

           <Card className="w-80 p-0 hover:shadow-2xl hover:scale-105 hover:shadow-purple-500 transition-all duration-200">
            <CardHeader className="p-4">
              <div className="flex w-full flex-col">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="text-purple-500" />
                    <Star className="text-purple-500" />
                    <Star className="text-purple-500" />
                    <Star className="text-purple-500" />
                    <Star className="text-purple-500" />
                    
                    </div>
                    <QuoteIcon className="size-8"/>
                </div>
                

                <div className="mt-4">
                  <h1 className="text-xl font-bold">Carlos Andre</h1>
                  <p className="text-zinc-500 text-sm">Eu sempre estava preocupado com meu dinheiro, mas agora estou muito satisfeita com o MoneyFacíl</p>
                </div>

              </div>
            </CardHeader>
            
          </Card>

          


         </div>
      </main>

<footer className="flex flex-col  w-full px-20 mb-4 items-center justify-center  border-t border-violet-950">
  <div className="grid grid-cols-3 w-full py-9">

    <div className="flex flex-col  max-w-xs gap-2 md:border-r  border-violet-950">
      <div className="flex items-center gap-2">
              <div className="size-12 rounded-md bg-violet-500 flex items-center justify-center border-2 border-purple-400">
                <BadgeDollarSign className="size-8 text-purple-800" />
              </div>
              <h1 className="text-2xl font-bold text-purple-800">MoneyFacíl</h1>
      </div>
      <p className="hidden md:flex text-xs text-start text-zinc-600">Seu aliado na hora de organizar gastos, planejar metas e alcançar equilíbrio financeiro</p>
    </div>

    <div className="hidden md:flex flex-col gap-2 border-r border-violet-950">
      <h1 className="text-xl font-bold text-purple-800">Proutos</h1>
      <nav className="px-4 text-purple-600">
        
          <li><a href="">Recursos</a></li>

          <li><a href="">Como Funciona</a></li>

          <li><a href="">Depoimentos</a></li>
       
      </nav>
    </div>

    <div className="hidden md:flex flex-col gap-2 px-4">
      <h1>Contato</h1>
      <nav className="space-y-4">
        <a className="flex items-center gap-2"  href=""><PhoneCall />(22)999999999</a>
        <a className="flex items-center gap-2" href=""><Mail className="size-8" /> 5hM2h@example.com</a>
      </nav>

    </div>


  </div>
</footer>
   </section>
  );
}
