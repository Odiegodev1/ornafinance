import { columns, Orcamento } from "./columns";
import { DataTable } from "./datatable";
import { getMateriais } from "./getmateriais";

interface OrcamentoProps {
  obraId: number;
}

export default async function Tabela_Orcamento({ obraId }: OrcamentoProps) {
  const data: Orcamento[] = await getMateriais(obraId);

  return (
    <div className="container mx-auto py-2">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
