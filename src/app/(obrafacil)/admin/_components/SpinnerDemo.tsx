
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Spinner } from "@/components/ui/spinner";

interface SpinnerDemoProps {
  status: string;
}
export function SpinnerDemo({status}: SpinnerDemoProps) {
  return (
    <div>
      <div className="flex w-full mt-2 flex-col  gap-4 [--radius:1rem]">
        <Item variant="outline" className={
            status === "concluido"
            ? "bg-emerald-500 text-white"
            : " "
          }>
          <ItemMedia>
           {status === "concluido" ? "" : <Spinner />}
          </ItemMedia>
          <ItemContent >
            <ItemTitle className="line-clamp-1">
            {status === "aguardando"
              ? "Aguardando..."
              : status === "einicial"
              ? "Etapa Inicial"
              : status === "andamento"
              ? "andamento..."
              : status === "concluido"
              ? "concluído ✅"
              : "Selecione um status"}
            </ItemTitle>
          </ItemContent>
        </Item>
      </div>
    </div>
  );
}


