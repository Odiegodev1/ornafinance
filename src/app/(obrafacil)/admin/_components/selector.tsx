import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectorDemoProps {
  onChange: (value: string) => void;
  selected?: string;
}

export function SelectorDemo({ onChange, selected }: SelectorDemoProps) {
  return (
    <Select value={selected} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecionar status..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="aguardando">Aguardando...</SelectItem>
        <SelectItem value="einicial">Etapa Inicial</SelectItem>
        <SelectItem value="andamento">Em Andamento</SelectItem>
        <SelectItem value="concluido">Concluído</SelectItem>
      </SelectContent>
    </Select>
  );
}
