import fs from "fs";

interface BODY {
  key: string[];
}

export default defineEventHandler(async function (event) {
  const body: BODY = await readBody(event);

  const ans: Record<string, boolean> = {};
  //const ans: { [key: string]: boolean } = {};

  for (const elem of body.key) {
    const path = "./public/pictures/" + elem + ".jpeg";
    const stats = await fs.promises.stat(path).catch((e: Error) => e);
    ans[elem] = stats instanceof Error ? false : true;
  }

  return {
    code: 200,
    ans,
  };
});
