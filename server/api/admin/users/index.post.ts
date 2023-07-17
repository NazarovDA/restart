import db, { prismaClient } from "@/db";
import { Prisma } from "@prisma/client";
import * as z from "zod";
import { Product } from "~/types/product";

export const newUserBody = z.object({
  jwtToken: z.string(),
  newUser: z.object({
    login: z.string(),
    password: z
      .string()
      .length(64)
      .regex(/[0-9a-f]{64}/),
    status: z.string(),
  }),
});

export type newUserBody = z.infer<typeof newUserBody>;

export default defineEventHandler(async function (event) {
  console.log(await readBody(event));
  const body = await validate(newUserBody, await readBody(event), {
    path: ["body"],
  });

  if (!(await statusCheck(body.jwtToken, "admin"))) {
    setResponseStatus(event, 401);
    return {};
  }

  const data: Prisma.UserTableCreateInput = body.newUser;

  const req = await prismaClient.userTable.create({
    data,
  });

  return req.id;
});
