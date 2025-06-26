/*
  Warnings:

  - You are about to drop the column `categoriaId` on the `frase` table. All the data in the column will be lost.
  - You are about to drop the `categoria` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `frase` DROP FOREIGN KEY `Frase_categoriaId_fkey`;

-- AlterTable
ALTER TABLE `frase` DROP COLUMN `categoriaId`;

-- DropTable
DROP TABLE `categoria`;
