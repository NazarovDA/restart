/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "category" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "descriptionShort" TEXT NOT NULL,
    "descriptionLong" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cost" (
    "productId" TEXT NOT NULL PRIMARY KEY,
    "qualification" TEXT NOT NULL,
    "measure" TEXT NOT NULL,
    "price1" TEXT NOT NULL,
    "price2" TEXT NOT NULL,
    "price3" TEXT NOT NULL,
    CONSTRAINT "Cost_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
