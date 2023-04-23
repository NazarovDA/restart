/*
  Warnings:

  - Made the column `type` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "type" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "qualification" TEXT,
    "unit" TEXT,
    "price1" TEXT,
    "price2" TEXT,
    "price3" TEXT
);
INSERT INTO "new_Product" ("id", "name", "price1", "price2", "price3", "qualification", "type", "unit") SELECT "id", "name", "price1", "price2", "price3", "qualification", "type", "unit" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
