import db, { prismaClient } from "@/db";
import { Prisma } from "@prisma/client";

export default defineEventHandler(async function (event) {
  const query = getQuery(event);

});