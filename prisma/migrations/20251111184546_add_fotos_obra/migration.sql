-- CreateTable
CREATE TABLE "public"."FotoObra" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "obraId" INTEGER NOT NULL,

    CONSTRAINT "FotoObra_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."FotoObra" ADD CONSTRAINT "FotoObra_obraId_fkey" FOREIGN KEY ("obraId") REFERENCES "public"."Obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
