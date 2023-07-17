import { TokenData } from "~/types/tokenData";

import * as jose from 'jose'

export default async function generateToken(data: TokenData) {
  const secret = Buffer.from(process.env.SECRET_KEY!)
  const alg = 'HS256'

  const jwt = await new jose.SignJWT(data as any)
  .setProtectedHeader({ alg })
  .setIssuedAt()
  .setIssuer('urn:tdr')
  .setAudience('urn:tdr')
  .setExpirationTime('24h')
  .sign(secret)

  return jwt;
}