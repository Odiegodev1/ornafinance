/*
  Warnings:

  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `FotoObra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Obra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrcamentoItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrcamentoMaoObra` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."TipoCategoria" AS ENUM ('RECEITA', 'DESPESA');

-- DropForeignKey
ALTER TABLE "public"."FotoObra" DROP CONSTRAINT "FotoObra_obraId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Obra" DROP CONSTRAINT "Obra_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."OrcamentoItem" DROP CONSTRAINT "OrcamentoItem_obraId_fkey";

-- DropForeignKey
ALTER TABLE "public"."OrcamentoMaoObra" DROP CONSTRAINT "OrcamentoMaoObra_obraId_fkey";

-- AlterTable
ALTER TABLE "public"."users" DROP COLUMN "password",
ADD COLUMN     "saldoInicial" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "public"."FotoObra";

-- DropTable
DROP TABLE "public"."Obra";

-- DropTable
DROP TABLE "public"."OrcamentoItem";

-- DropTable
DROP TABLE "public"."OrcamentoMaoObra";

-- CreateTable
CREATE TABLE "public"."verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "public"."Categoria" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "tipo" "public"."TipoCategoria" NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Transacao" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "tipo" "public"."TipoCategoria" NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoriaId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_token_key" ON "public"."verification_tokens"("identifier", "token");

-- AddForeignKey
ALTER TABLE "public"."Transacao" ADD CONSTRAINT "Transacao_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "public"."Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Transacao" ADD CONSTRAINT "Transacao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
