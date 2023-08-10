import db, { prismaClient } from "@/db";
import { Prisma } from "@prisma/client";
import { Settings } from "~/types/settings";
import * as z from "zod";
import { Product } from "~/types/product";

export const ManagersInsertBody = z.object({
  jwtToken: z.string(),
  manager: z.object({
    id: z.string().optional(),
    fio: z.string(),
    email: z.string(),
    phone: z.string(),
  }),
});
export type ManagersInsertBody = z.infer<typeof ManagersInsertBody>;

export default defineEventHandler(async function (event) {
  const body = await validate(ManagersInsertBody, await readBody(event), {
    path: ["body"],
  });

  if (!(await statusCheck(body.jwtToken, "editor"))) {
    setResponseStatus(event, 401);
    return {};
  }

  const data = await prismaClient.manager.create({
    data: body.manager,
  });
});
