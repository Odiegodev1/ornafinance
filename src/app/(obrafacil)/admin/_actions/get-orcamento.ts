"use server";

import { auth } from "@/lib/auth";
import { CreateFormOrcamento } from "../_schema/CreateFormOrcamento";
import OpenAI from "openai";
import { prisma } from "@/lib/prisma";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export async function getOrcamento(data: CreateFormOrcamento & {ObraId: number}) {
   console.log(data)
   const session = await auth();
   const UserId = session?.user?.id;
   if(!UserId){
       return{
           data:null,
           error: "Usuário não cadastrado..."
       }
   }
const prompt = `
Pegue o seguinte texto de orçamento de materiais e retorne apenas um JSON válido
sem explicações, sem texto adicional, seja bom em portugues e sem erros de gramatica e digitação. 
Exemplo de saída:
[
  { "quantidade": 10, "descricao": "Ripa Massaranduba", "medida": "5 metros" },
  { "quantidade": 110, "descricao": "Parafuso", "medida": "8 cm" }
]

Texto do orçamento:
${data.orcamento}
`;
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages:[{role: "user", content: prompt}],
    temperature: 0,
  });
 const content = response.choices[0].message?.content || "[]";
  
let materiais: { quantidade: number; descricao: string; medida: string }[] = [];

try {
  // Extrair o que estiver entre colchetes [...], usando [\s\S] para capturar novas linhas sem exigir o flag /s
  const match = content.match(/\[[\s\S]*\]/);
  if (match) {
    materiais = JSON.parse(match[0]);
  } else {
    console.error("Não foi possível encontrar JSON na resposta da IA:", content);
  }
} catch (err) {
  console.error("Erro ao parsear JSON da IA:", err);
}



 try{
 const createdMateriais = await prisma.orcamentoItem.createMany({
    data: materiais.map((item) => ({
      obraId: data.ObraId,
      quantidade: item.quantidade,
      descricao: item.descricao,
      medida: item.medida,
    
    }))
  })


  return{
      data: createdMateriais,
      error: null
  }
 }catch(err){
    
    return{
        data: null,
        error: err
    }
 }
}