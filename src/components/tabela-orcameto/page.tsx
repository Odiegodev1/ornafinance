import { auth } from "@/lib/auth";
import { columns, Orcamento } from "./columns";
import { DataTable } from "./datatable";
import { getMateriais } from "./getmateriais";
import { redirect } from "next/navigation";

interface OrcamentoProps {
  obraId: number;
}

export default async function Tabela_Orcamento({ obraId }: OrcamentoProps) {
  const data: Orcamento[] = await getMateriais(obraId);
 const session = await auth();
 if(!session?.user){
    return(
        redirect("/")
    )
 }
  return (
    <div className="container mx-auto py-2">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
