import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DB_URL,
    },
  },
});
export default prismaClient;