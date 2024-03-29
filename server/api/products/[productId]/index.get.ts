import db, { prismaClient } from "@/db";

export default defineEventHandler(async function (event) {
  const id = event.context?.params?.productId;
  // const description = await prismaClient.productDescription.findUnique({
  //   where: { id: id },
  // })
  // const item = await prismaClient.product.findUnique({ where: { id: id } })

  // return {
  //   code: 200,
  //   description,
  //   item,
  // };

  const product = await prismaClient.product.findUnique({
    where: {
      id: id,
    },
  });

  const similar = await prismaClient.product.findMany({
    where: {
      name: {
        contains: product!.name
      }
    }
  })
  return {
    product: product, similar: similar
  }
});
