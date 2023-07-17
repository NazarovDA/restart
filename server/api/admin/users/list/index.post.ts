import db, { prismaClient } from "@/db";
import { Prisma } from "@prisma/client";
import * as z from "zod";

export const ListUsersGetBody = z.object({
  jwtToken: z.string(),
  filters: z.object({
    take: z.number().default(5),
    skip: z.number(),
  }),
});

export type ListUsersGetBody = z.infer<typeof ListUsersGetBody>;

export default defineEventHandler(async function (event) {
  const body = await validate(ListUsersGetBody, await readBody(event), {
    path: ["body"],
  });

  if (!(await statusCheck(body.jwtToken, "editor"))) {
    setResponseStatus(event, 401);
    return {};
  }

  return {
    users: await prismaClient.userTable.findMany({
      take: body.filters.take,
      skip: body.filters.skip,
      select: {
        id: true,
        status: true,
        login: true,
      },
    }),
    count: await prismaClient.userTable.aggregate({ _count: { id: true } }),
  };
});
