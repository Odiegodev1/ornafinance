import { CardAddDespesa } from "@/components/ui/cardAddTransfer/cardadddespesa";
import { CardAddTransfer } from "@/components/ui/cardAddTransfer/cardaddtransferir";
import { CardAddMoney } from "@/components/ui/cardAddTransfer/cardadsmoney";
import { CardHistoryTransfer } from "@/components/ui/cardPages/caardHistoryTransfer";
import { CardDespesa } from "@/components/ui/cardPages/cardDespesa/carddespesa";
import { CardReceita } from "@/components/ui/cardPages/cardReceita/cardreceita";
import { CardSaldo } from "@/components/ui/cardPages/cardSaldo/cardsaldo";
import { DespesaCategory } from "@/components/ui/despesasCategorias/despesacategory";
import { HeaderPage } from "@/components/ui/headerpage/HeaderPage";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getUserResumo, } from "@/lib/calculo"


export default async function Header() {
   const session = await auth();
  
    if(!session?.user){
      redirect("/")
    }
  const resumo = await getUserResumo(session.user.id ?? "");

  const userData = {
    id: session.user.id,
    name: session.user.name || "",
    email: session.user.email,
    image: session.user.image,
    saldo: resumo.saldo,
    despesa: resumo.totalDespesas,
    receita: resumo.totalReceitas,
    porcentagemEntrada: resumo.percentualEntrada,
    porcetagemDespesa: resumo.percentualDespesa,
    porcetagemReceita: resumo.percentualReceita
  };
  


  

  return (
    <>
   
    <HeaderPage  name={userData?.name}/>
    
    <div className="grid md:grid-cols-3 gap-10 items-center ">
      <CardSaldo porcentagem={userData.porcentagemEntrada} saldo={userData.saldo} />
      <CardReceita receita={userData.receita}porcentagem={userData.porcetagemReceita}  />
      <CardDespesa despesa={userData.despesa} porcentagem={userData.porcetagemDespesa}/>
    </div>

    <div className="grid md:grid-cols-3  gap-10 items-center  ">
      <CardAddTransfer />
       <CardAddDespesa />
        <CardAddMoney />
    </div>
    <div className="flex flex-1  gap-10 ">
      <DespesaCategory userId={userData.id ?? ""} />
      <CardHistoryTransfer />
    </div>
    </>
  );
}
