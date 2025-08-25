// lib/currency.ts

/**
 * Formata um número para moeda brasileira (BRL)
 * @param value número a ser formatado
 * @returns string formatada, ex: "R$ 1.234,56"
 */
export function formatBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
