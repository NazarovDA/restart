import db, { prismaClient } from "@/db";
import { Prisma } from "@prisma/client";
import * as z from "zod";

export default defineEventHandler(async function (event) {
  const query = getQuery(event);

  const where: Prisma.ProductWhereInput = {};

  if (query.target) {
    where.type = {
      contains: query.target,
    };
  }

  if (query.id) {
    where.id = {
      equals: query.id,
    };
  }

  const products = await prismaClient.product.findMany({
    where,
    orderBy: {
      type: "asc",
    },
    select: {
      type: true,
      id: true,
      name: true,
      qualification: true,
      unit: true,
      price1: true,
      price2: true,
      price3: true,
      shortDescription: true,
      longDescription: true,
    },
  });

  return {
    code: 200,
    types: [...new Set(products.map((val) => val.type))],
    body: products,
  };
});
