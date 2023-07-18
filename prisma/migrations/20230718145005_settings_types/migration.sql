/*
  Warnings:

  - You are about to alter the column `param` on the `Settings` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE "Settings" ALTER COLUMN "param" SET DATA TYPE VARCHAR(20);
