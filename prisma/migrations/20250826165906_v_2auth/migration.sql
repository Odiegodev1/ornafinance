/*
  Warnings:

  - You are about to drop the column `password` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Category" DROP COLUMN "password";

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "password" TEXT;
