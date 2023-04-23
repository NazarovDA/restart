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
      type: "asc"
    }
  });


  return {
    code: 200,
    types: [...new Set( products.map(val => val.type)) ],
    body: products,
  }
});
