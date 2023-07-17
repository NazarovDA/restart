import db, { prismaClient } from "@/db";
import { Prisma } from "@prisma/client";
import * as z from "zod";
import { Product } from "~/types/product";

export const ProductPostBody = z.object({
  jwtToken: z.string(),
  newProduct: z.object({
    type: z.string(),
    id: z.string().or(z.undefined()),
    name: z.string(),
    qualification: z.string().or(z.null()),
    unit: z.string().or(z.null()),
    price1: z.string().or(z.null()),
    price2: z.string().or(z.null()),
    price3: z.string().or(z.null()),
    shortDescription: z.string().or(z.null()),
    longDescription: z.string().or(z.null()),
    hashImage: z.string().or(z.null()),
  }),
});
export type ProductPostBody = z.infer<typeof ProductPostBody>;

export default defineEventHandler(async function (event) {
  const body = await validate(ProductPostBody, await readBody(event), {
    path: ["body"],
  });

  if (!(await statusCheck(body.jwtToken, "editor"))) {
    setResponseStatus(event, 401);
    return {};
  }

  const data: Prisma.ProductCreateInput = body.newProduct;

  try {
    if (body.newProduct.id) {
      const result = await prismaClient.product.update({
        where: {
          id: body.newProduct.id,
        },
        data,
      });
    } else {
      const result = await prismaClient.product.create({
        data,
      });
    }
  } catch (e) {
    setResponseStatus(event, 500);
    return e;
  }

  setResponseStatus(event, 200);
  return {};
});
