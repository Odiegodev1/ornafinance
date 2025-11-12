"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { getGastosPorCategoria } from "../../actions/getGastosPorCategoria"

interface CategoriaData {
  nome: string
  cor: string
  total: number
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value)
}

export function ChartBarActive() {
  const [chartData, setChartData] = useState<
    { browser: string; Gastos: number; fill: string }[]
  >([])

  const [chartConfig, setChartConfig] = useState<
    Record<string, { label: string; color: string }>
  >({})

  useEffect(() => {
    async function loadData() {
      const categorias: CategoriaData[] = await getGastosPorCategoria()
      const data = categorias.map((c) => ({
        browser: c.nome,
        Gastos: c.total,
        fill: c.cor,
        
      }
    
    ))
    
      const config = categorias.reduce((acc, c) => {
        acc[c.nome] = { label: c.nome, color: c.cor }
            console.log(c.nome)
        return acc
    
      }, {} as Record<string, { label: string; color: string }>)
      setChartData(data)
      setChartConfig(config)
    }

    loadData()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gastos por Categoria</CardTitle>
        <CardDescription>Resumo das suas despesas</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="browser"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  formatter={(val) => formatCurrency(val as number)}
                />
              }
            />
            <Bar
              dataKey="Gastos"
              strokeWidth={2}
              radius={8}
              activeIndex={4}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                )
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium"></div>
      </CardFooter>
    </Card>
  )
}
