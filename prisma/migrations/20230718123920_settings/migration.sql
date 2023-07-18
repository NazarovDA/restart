-- CreateTable
CREATE TABLE "Settings" (
    "param" TEXT NOT NULL,
    "value" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Settings_param_key" ON "Settings"("param");
