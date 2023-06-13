import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: process.cwd().includes(".output") ? "file:/root/restart/prisma/dev.db" : "file:./dev.db",
    },
  },
});
export default prismaClient;