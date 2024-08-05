/*
  Warnings:

  - A unique constraint covering the columns `[address]` on the table `Collections` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[address]` on the table `Owned` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[address]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Collections_address_key" ON "Collections"("address");

-- CreateIndex
CREATE UNIQUE INDEX "Owned_address_key" ON "Owned"("address");

-- CreateIndex
CREATE UNIQUE INDEX "User_address_key" ON "User"("address");
