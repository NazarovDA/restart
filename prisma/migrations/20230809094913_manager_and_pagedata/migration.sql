-- CreateTable
CREATE TABLE "PageData" (
    "pageName" VARCHAR(20) NOT NULL,
    "pageContent" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Manager" (
    "id" TEXT NOT NULL,
    "fio" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Manager_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PageData_pageName_key" ON "PageData"("pageName");

-- CreateIndex
CREATE UNIQUE INDEX "Manager_fio_key" ON "Manager"("fio");
