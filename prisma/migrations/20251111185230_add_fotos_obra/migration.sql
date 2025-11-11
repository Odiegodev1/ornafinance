/*
  Warnings:

  - You are about to drop the column `url` on the `FotoObra` table. All the data in the column will be lost.
  - Added the required column `caminho` to the `FotoObra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `FotoObra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."FotoObra" DROP COLUMN "url",
ADD COLUMN     "caminho" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL;
