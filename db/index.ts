import { PrismaClient } from "@prisma/client";
import os from "os";

export const prismaClient = new PrismaClient({
  // datasources: {
  //   db: {
  //     url: os.platform() == "linux" ? "file:/root/restart/prisma/dev.db" : "file:./dev.db",
  //   },
  // },
});
export default prismaClient;