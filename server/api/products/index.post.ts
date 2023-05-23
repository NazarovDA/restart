import db, { prismaClient } from "@/db";
import { Prisma } from "@prisma/client";

interface BODY {
  name: string;
  shortDesc: string;
  longDesc: string;
  type: string;
}

export default defineEventHandler(async function (event) {
  const body: BODY = await readBody(event);

  const first = await prismaClient.product.findFirst({
    where: { name: body.name },
  });

  if (first) {
    const update = await prismaClient.product.update({
      where: { id: first.id },
      data: {
        longDescription: body.longDesc,
        shortDescription: body.shortDesc,
      },
    });
  } else {
    const create = await prismaClient.product.create({
      data: {
        name: body.name,
        type: body.type,
        longDescription: body.longDesc,
        shortDescription: body.shortDesc,
      },
    });
  }

  return {
    code: 200,
  };
});
