import { ArrowUpRight } from "lucide-react"
import { Badge } from "../../badge"
import { Card, CardContent, CardHeader, CardTitle } from "../../card"
import { formatBRL } from "@/lib/currency";

interface CardReceitaProps {
    receita: number
    porcentagem: string
}

export const CardReceita = ({receita, porcentagem}: CardReceitaProps) => {
    return(
        <Card className="w-full ">
            <CardHeader>
                <CardTitle className="font-semibold text-sm text-zinc-500">Receitas</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
                <h1 className="font-extrabold text-3xl">{formatBRL(receita)}</h1>
                <Badge variant="secondary" className=" font-normal"><ArrowUpRight className="mr-1 text-emerald-500"/>{porcentagem}%</Badge>
            </CardContent>
        </Card>
    )
}