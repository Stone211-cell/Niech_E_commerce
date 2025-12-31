/*
  Warnings:

  - You are about to drop the column `landmarkId` on the `Favorite` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the `Landmark` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productAId` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productBId` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emailcontect` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_landmarkId_fkey";

-- DropForeignKey
ALTER TABLE "Landmark" DROP CONSTRAINT "Landmark_profileId_fkey";

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "landmarkId",
ADD COLUMN     "productAId" TEXT NOT NULL,
ADD COLUMN     "productBId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "userName",
ADD COLUMN     "emailcontect" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- DropTable
DROP TABLE "Landmark";

-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "ProductA" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductA_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductB" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductB_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductA" ADD CONSTRAINT "ProductA_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductB" ADD CONSTRAINT "ProductB_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_productAId_fkey" FOREIGN KEY ("productAId") REFERENCES "ProductA"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_productBId_fkey" FOREIGN KEY ("productBId") REFERENCES "ProductB"("id") ON DELETE CASCADE ON UPDATE CASCADE;
