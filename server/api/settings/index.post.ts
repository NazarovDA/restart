import db, { prismaClient } from "@/db";
import { Prisma } from "@prisma/client";
import { Settings } from "~/types/settings";
import * as z from "zod";
import { Product } from "~/types/product";

export const SettingsUpdateBody = z.object({
  jwtToken: z.string(),
  settings: Settings,
});

export type SettingsUpdateBody = z.infer<typeof SettingsUpdateBody>;

export default defineEventHandler(async function (event) {
  const body = await validate(SettingsUpdateBody, await readBody(event), {
    path: ["body"],
  });

  const data = Object.entries(body.settings).map((value) =>
    prismaClient.settings.update({
      where: {
        param: value[0],
      },
      data: {
        value: value[1],
      },
    })
  );
  await prismaClient.$transaction(data);
});
