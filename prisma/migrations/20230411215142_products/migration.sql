/*
  Warnings:

  - You are about to drop the `Solvent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Solvent";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Product" (
    "type" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "qualification" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "price1" REAL NOT NULL,
    "price2" REAL,
    "price3" REAL
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
