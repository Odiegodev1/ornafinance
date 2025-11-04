"use client";
import { ColumnDef } from "@tanstack/react-table";
export type Orcamento = {
    id: string;
    quantidade: number;
    descricao: string;
    medida: string;
}


export const columns: ColumnDef<Orcamento>[]= [
    {
        accessorKey: "quantidade",
        header: "Quantidade",
    },
    {
        accessorKey: "descricao",
        header: "Descricao",
    },
    {
        accessorKey: "medida",
        header: "Medida",
    }

]