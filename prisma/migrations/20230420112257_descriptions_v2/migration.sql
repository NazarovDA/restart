/*
  Warnings:

  - You are about to drop the column `productId` on the `ProductDescription` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductDescription" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "short" TEXT,
    "long" TEXT,
    CONSTRAINT "ProductDescription_id_fkey" FOREIGN KEY ("id") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductDescription" ("id", "long", "short") SELECT "id", "long", "short" FROM "ProductDescription";
DROP TABLE "ProductDescription";
ALTER TABLE "new_ProductDescription" RENAME TO "ProductDescription";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
