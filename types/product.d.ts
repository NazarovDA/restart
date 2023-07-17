import type { Prisma } from "@prisma/client";

export interface Product extends Prisma.ProductCreateInput {
  id?: string;
}
