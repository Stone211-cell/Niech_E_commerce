/*
  Warnings:

  - You are about to drop the column `productAId` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `productBId` on the `Favorite` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profileId,productType,productId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productId` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productType` to the `Favorite` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('A', 'B');

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_productAId_fkey";

-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_productBId_fkey";

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "productAId",
DROP COLUMN "productBId",
ADD COLUMN     "productId" TEXT NOT NULL,
ADD COLUMN     "productType" "ProductType" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_profileId_productType_productId_key" ON "Favorite"("profileId", "productType", "productId");
