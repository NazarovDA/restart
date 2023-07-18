import db, { prismaClient } from "@/db";
import { Prisma } from "@prisma/client";
import * as z from "zod";

import validate from "~/server/utils/validate";

export const AuthPostBody = z.object({
  login: z.string(),
  pass: z
    .string()
    .length(64)
    .regex(/[0-9a-f]{64}/),
});
export type AuthPostBody = z.infer<typeof AuthPostBody>;

export default defineEventHandler(async function (event) {
  const body = await validate(AuthPostBody, await readBody(event), {
    path: ["body"],
  });

  const select = await prismaClient.userTable.findUnique({
    where: {
      login: body.login,
    },
  });


  if (!select || select.password != body.pass) {
    setResponseStatus(event, 401);
    return {};
  }

  const token = await generateToken({
    id: select.id,
    status: select.status,
    ip: getIp(event),
  });

  return token;
});
