import db, { prismaClient } from "@/db";
import { Prisma } from "@prisma/client";
import * as z from "zod";

export default defineEventHandler(async function (event) {
  const query = getQuery(event);

  const where: Prisma.ProductWhereInput = {};

  const products = await prismaClient.product.findMany({
    where,
    orderBy: {
      type: "asc",
    },
    select: {
      type: true,
    },
  });

  return {
    types: [...new Set(products.map((val) => val.type))],
  };
});