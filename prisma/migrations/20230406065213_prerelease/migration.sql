/*
  Warnings:

  - You are about to drop the `Cost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Cost";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Product";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Solvent" (
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
CREATE UNIQUE INDEX "Solvent_name_key" ON "Solvent"("name");
