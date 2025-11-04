"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "../card"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"

import { CardHistoryEdit } from "./dialogCardEdit/cardHistoryEdit"
import { Router } from "next/router"
import { useRouter } from "next/navigation"

export type Finance = {
  id: string
  description: string
  method: "PIX" | "CARTAO_CREDITO" | "DINHEIRO"
  type: "RECEITA" | "DESPESA"
  date: string
  amount: number
}

// 🔹 Mapeia os enums do Prisma para exibição legível
const paymentLabels: Record<Finance["method"], string> = {
  PIX: "Pix",
  CARTAO_CREDITO: "Cartão de Crédito",
  DINHEIRO: "Dinheiro",
}

const knownLogos: Record<string, string> = {
  netflix: "/logos/netflix.png",
  amazon: "/logos/amazon.png",
  mercado: "/logos/mercado.png",
  spotify: "/logos/spotify.png",
  // pode adicionar mais aqui...
}

export function CardHistoryTransfer() {
  function handleUpdate(updated: Finance) {
  setData((prev) =>
    prev.map((item) => (item.id === updated.id ? updated : item))
  )
}
 
const router = useRouter()

  const [data, setData] = React.useState<Finance[]>([])
  const [loading, setLoading] = React.useState(true)

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  React.useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/transactions")
        const json = await res.json()
        setData(json)
      } catch (error) {
        console.error("Erro ao carregar transações:", error)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  async function handleDelete(id: string) {
    if (!confirm("Tem certeza que deseja excluir esta transação?")) return

    const res = await fetch(`/api/transactions/${id}`, { method: "DELETE" })

    if (res.ok) {
      setData((prev) => prev.filter((item) => item.id !== id))

      router.refresh()
      
    } else {
      alert("Erro ao excluir transação")
    }
  }


  const columns: ColumnDef<Finance>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "description",
      header: "Descrição",
      cell: ({ row }) => {
        const description = row.getValue("description") as string
        const descLower = description.toLowerCase()

        // tenta achar uma logo conhecida
        const logoKey = Object.keys(knownLogos).find((key) =>
          descLower.includes(key)
        )

        const parts = description.split(" ")
        const firstName = parts[0]
        const lastName = parts[1] ?? ""
        const initials = `${firstName[0] ?? ""}${lastName[0] ?? ""}`

        return (
          <div className="flex items-center gap-2">
            <Avatar className="flex items-center justify-center bg-accent-foreground p-0.5">
              {logoKey ? (
                <AvatarImage src={knownLogos[logoKey]} alt={description} />
              ) : (
                <AvatarFallback>{initials}</AvatarFallback>
              )}
            </Avatar>
            <span>
              {firstName} {lastName}
            </span>
          </div>
        )
      },
    },
    {
      accessorKey: "method",
      header: "Método",
      cell: ({ row }) => {
        const method = row.getValue("method") as Finance["method"]
        return <div>{paymentLabels[method]}</div>
      },
    },
    {
      accessorKey: "date",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
        >
          Data <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const date = new Date(row.getValue("date"))
        return (
          <div>
            {date.toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </div>
        )
      },
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Valor</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))
        const type = row.original.type
        const formatted = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(amount)

        return (
          <div
            className={`text-right font-medium ${
              type === "DESPESA" ? "text-red-500" : ""
            }`}
          >
            {type === "DESPESA" ? `- ${formatted}` : formatted}
          </div>
        )
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const finance = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(finance.id)}
              >
                Copiar ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild >
                <CardHistoryEdit finance={finance} onUpdate={handleUpdate} />
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleDelete(finance.id)}
                className="text-red-500"
              >
                Excluir
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const table = useReactTable({
    data: loading ? [] : data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <Card className="hidden md:block w-full p-2">
      <div className="flex items-center ">
        <Input
          placeholder="Filtrar por descrição..."
          value={
            (table.getColumn("description")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("description")?.setFilterValue(event.target.value)
          }
          className="max-w-sm mb-8"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Colunas <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) =>
                    column.toggleVisibility(!!value)
                  }
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Carregando...
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Nenhum resultado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} de{" "}
          {table.getFilteredRowModel().rows.length} linha(s) selecionadas.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Próximo
          </Button>
        </div>
      </div>
    </Card>
  )
}
