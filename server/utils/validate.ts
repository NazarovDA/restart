import { STATUS_CODES } from "http";
import * as z from "zod";

export default async function validate<T extends z.AnyZodObject>(
  validator: T,
  target: any,
  parserParams?: Partial<z.ParseParams>
) {
  try {
    return (await validator.parseAsync(target, parserParams)) as T["_output"];
  } catch(e) {
    throw createError({
      statusCode: 422,
      statusMessage: STATUS_CODES[422],
      data: (e as z.ZodError).errors,
      cause: e,
      fatal: false,
      unhandled: false,
      message: 'Validation Error',
      name: 'Validation Error',
      stack: (e as z.ZodError).stack,
    });
  }
}