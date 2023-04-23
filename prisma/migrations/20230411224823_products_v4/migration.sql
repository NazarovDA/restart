/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "type" TEXT,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "qualification" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "price1" TEXT NOT NULL,
    "price2" TEXT,
    "price3" TEXT
);
INSERT INTO "new_Product" ("id", "name", "price1", "price2", "price3", "qualification", "type", "unit") SELECT "id", "name", "price1", "price2", "price3", "qualification", "type", "unit" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
