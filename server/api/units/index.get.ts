import db, { prismaClient } from "@/db";
import { Prisma } from "@prisma/client";
import * as z from "zod";

export default defineEventHandler(async function (event) {
  const query = getQuery(event);

  const where: Prisma.ProductWhereInput = {};

  // {
  //   const products = await prismaClient.product.findMany();
  //   for (let i=0; i<products.length; i++) {
  //     const product = products[i];
  //     console.log(`${i}/${products.length}`);
  //     await prismaClient.product.update({
  //       where: {
  //         id: product.id,
  //       },
  //       data: {
  //         hashImage: product.name + '.jpeg',
  //       }
  //     });
  //   }
  // }

  const products = await prismaClient.product.findMany({
    where,
    orderBy: {
      type: "asc",
    },
    select: {
      unit: true,
    },
  });

  return {
    units: [...new Set(products.map((val) => val.unit))],
  };
});