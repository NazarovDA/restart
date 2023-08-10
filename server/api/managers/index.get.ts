import db, { prismaClient } from "@/db";
import { Prisma } from "@prisma/client";

export default defineEventHandler(async function(event) {
    const data = prismaClient.manager.findMany()

    return data
})