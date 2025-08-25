import {  ArrowDownLeft } from "lucide-react"
import { Badge } from "../../badge"
import { Card, CardContent, CardHeader, CardTitle } from "../../card"
import { formatBRL } from "@/lib/currency";
interface CardDespesaProps{
    despesa: number
    porcentagem: string
}

export const CardDespesa = ({despesa, porcentagem}: CardDespesaProps) => {
    return(
        <Card className="w-full ">
            <CardHeader>
                <CardTitle className="font-semibold text-sm text-zinc-500">Despesas</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
                <h1 className="font-extrabold text-3xl text-red-500">{formatBRL(despesa)}</h1>
                <Badge variant="secondary" className=" font-normal"><ArrowDownLeft className="mr-1 text-red-500"/>{porcentagem}%</Badge>
            </CardContent>
        </Card>
    )
}