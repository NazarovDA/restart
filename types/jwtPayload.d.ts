import { JWTPayload } from "jose"

export interface jwtPayload extends JWTPayload {
  id: str;
  status: str;
  ip: str;
  iat: number;
  iss: str;
  aud: str;
  exp: int;
}
