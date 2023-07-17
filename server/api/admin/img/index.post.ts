import fs from "fs/promises";
import * as z from "zod";
import crypto from 'crypto';
import path from "path";

export const imageUpload = z.object({
  jwtToken: z.string(),
  image: z.string(),
});

export type imageUpload = z.infer<typeof imageUpload>;

const PATH = "./public/pictures";

export default defineEventHandler(async function (event) {
  const body = await validate(imageUpload, await readBody(event), {
    path: ["body"],
  });

  if (!(await statusCheck(body.jwtToken, "editor"))) {
    setResponseStatus(event, 401);
    return {};
  }

  const data = Buffer.from(body.image.split(',')[1], 'base64');

  const shaHash = getHash(data);
  const filePath = path.join(PATH, shaHash);
  await fs.writeFile(filePath, data);

  // setResponseStatus(event, 200);
  return {
    hash: shaHash,
  };
});
