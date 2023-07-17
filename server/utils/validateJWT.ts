import * as jose from "jose";
import { jwtPayload } from "types/jwtPayload";

export default async function validateJWT<T extends jwtPayload = jwtPayload>(jwt: string) {
  const secret = Buffer.from(process.env.SECRET_KEY!);
  const alg = "HS256";

  const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret, {
    issuer: "urn:tdr",
    audience: "urn:tdr",
  });

  return payload as T;
}
