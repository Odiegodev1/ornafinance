"use client";

import * as React from "react";
import { PieChart, Pie, Sector, Label } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { formatBRL } from "@/lib/currency";

type Transaction = {
  id: string;
  amount: number;
  category?: {
    name: string;
    color: string;
  } | null;
};

export const DespesaCategory = ({ userId }: { userId: string }) => {
  const id = "pie-interactive";
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [chartData, setChartData] = React.useState<
    { name: string; value: number; fill: string }[]
  >([]);
  const [activeCategory, setActiveCategory] = React.useState<string>("");

  // 1️⃣ Buscar transações do usuário
  React.useEffect(() => {
    fetch(`/api/transactions?userId=${userId}`)
      .then((res) => res.json())
      .then((data: Transaction[]) => setTransactions(data))
      .catch((err) => console.log("Erro API:", err));
  }, [userId]);

  // 2️⃣ Agrupar por categoria e somar valores
  React.useEffect(() => {
    const grouped: Record<string, { name: string; value: number; fill: string }> =
      {};

    transactions.forEach((t) => {
      const key = t.category?.name || "Outros";
      const color = t.category?.color || "#9CA3AF";

      if (!grouped[key]) grouped[key] = { name: key, value: 0, fill: color };
      grouped[key].value += t.amount;
    });

    const dataArray = Object.values(grouped);
    setChartData(dataArray);

    if (dataArray.length > 0 && !activeCategory) setActiveCategory(dataArray[0].name);
  }, [transactions, activeCategory]);

  const activeIndex = React.useMemo(
    () => chartData.findIndex((item) => item.name === activeCategory),
    [activeCategory, chartData]
  );

  const chartConfig: ChartConfig = React.useMemo(() => {
    const config: ChartConfig = {};
    chartData.forEach((item) => {
      config[item.name] = { label: item.name, color: item.fill };
    });
    return config;
  }, [chartData]);

  return (
    <Card className="flex flex-col md:min-w-[520px] min-w-full" data-chart={id}>
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Sua Despesa</CardTitle>
          <CardDescription>Gastos por Categoria</CardDescription>
        </div>
        <Select value={activeCategory} onValueChange={setActiveCategory}>
          <SelectTrigger className="ml-auto h-7 w-[130px] rounded-lg pl-2.5">
            <SelectValue placeholder="Selecione categoria" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {chartData.map((item) => (
              <SelectItem key={item.name} value={item.name}>
                <div className="flex items-center gap-2 text-xs">
                  <span
                    className="flex h-3 w-3 shrink-0 rounded-xs"
                    style={{ backgroundColor: item.fill }}
                  />
                  {item.name}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer id={id} config={chartConfig} className="mx-auto aspect-square w-full max-w-[300px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({ outerRadius = 0, ...props }) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector {...props} outerRadius={outerRadius + 25} innerRadius={outerRadius + 12} />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (!viewBox || !("cx" in viewBox && "cy" in viewBox)) return null;
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                      <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-xl font-bold">
                        {formatBRL(chartData[activeIndex].value)}
                      </tspan>
                      <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                        Gastos
                      </tspan>
                    </text>
                  );
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
