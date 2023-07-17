import db, { prismaClient } from "@/db";
import { Prisma } from "@prisma/client";
import { equal } from "assert";
import * as z from "zod";

export const ListProductGetBody = z.object({
  jwtToken: z.string(),
  filters: z.object({
    where: z.object({
      name: z
        .object({
          value: z.string().default(""),
          matchMode: z.string().default(""),
        })
    }),
    take: z.number().default(5),
    skip: z.number(),
    orderBy: z.string(),
  }),
});

export type ProductPostBody = z.infer<typeof ListProductGetBody>;

export default defineEventHandler(async function (event) {
  const body = await validate(ListProductGetBody, await readBody(event), {
    path: ["body"],
  });

  if (!await statusCheck(body.jwtToken, "editor")) {
    setResponseStatus(event, 401);
    return {};
  }

  let where: Prisma.ProductWhereInput = {};


  if (body.filters.where.name && body.filters.where.name.matchMode && body.filters.where.name.value) {
    switch (body.filters.where.name.matchMode) {
      case "starts with":
        where = {
          name: {
            startsWith: body.filters.where.name.value,
          },
        };
        break;
      case "contains":
        where = {
          name: { contains: body.filters.where.name.value },
        };
        break;
      case "not contains":
        where = { name: { not: { contains: body.filters.where.name.value } } };
        break;
      case "ends with":
        where = { name: { endsWith: body.filters.where.name.value } };
        break;
      case "equals":
        where = { name: { equals: body.filters.where.name.value } };
        break;
      case "not equals":
        where = { name: { not: { equals: body.filters.where.name.value } } };
        break;
    }
  }

  // prismaClient.product.findMany({
  //   where: {
  //     name: {
  //       mode: 'insensitive'
  //     }
  //   }
  // })

  const select = await prismaClient.product.findMany({
    where: where,
    orderBy: { name: body.filters.orderBy == "desc" ? "desc" : "asc" },
    take: body.filters.take,
    skip: body.filters.skip,
    select: {
      id: true,
      name: true,
      hashImage: true,
    },
  });

  // const a = [
  //   [
  //     { id: "clgcvici30003uwvczlq8lbre", name: "NESSOL D40" },
  //     { id: "clgcvici30002uwvc83gdkl4f", name: "NESSOL D60" },
  //     {
  //       id: "cli09bfkd000avca86dnwu9cp",
  //       name: "PARADE CLASSIC G150 BETON KONTAKT",
  //     },
  //     { id: "cli09bgfg000cvca83slw88g9", name: "PARADE CLASSIC G30" },
  //     {
  //       id: "cli09ber50008vca8m1ugg5ud",
  //       name: "PARADE CLASSIC G40 REANIMATOR",
  //     },
  //   ],
  //   { _count: { id: 291 } },
  // ];

  setResponseStatus(event, 200);
  return [
    select,
    await prismaClient.product.aggregate({ _count: { id: true } }),
  ];
});
