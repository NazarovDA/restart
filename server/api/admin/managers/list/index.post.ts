import db, { prismaClient } from "@/db";
import { Prisma } from "@prisma/client";
import { Settings } from "~/types/settings";
import * as z from "zod";
import { Product } from "~/types/product";

export const ManagersUpdateBody = z.object({
  jwtToken: z.string(),
  managers: z.array(
    z.object({
      id: z.string(),
      fio: z.string(),
      email: z.string(),
      phone: z.string(),
    })
  ),
});
export type ManagersUpdateBody = z.infer<typeof ManagersUpdateBody>;

export default defineEventHandler(async function (event) {
  const body = await validate(ManagersUpdateBody, await readBody(event), {
    path: ["body"],
  });

  if (!(await statusCheck(body.jwtToken, "editor"))) {
    setResponseStatus(event, 401);
    return {};
  }

  const data = Object.entries(body.managers).map((value) =>
    prismaClient.manager.update({
      where: {
        id: value[1].id,
      },
      data: value[1],
    })
  );
  await prismaClient.$transaction(data);
});
