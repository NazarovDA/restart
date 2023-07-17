import { jwtPayload } from "types/jwtPayload";

function b64_to_utf8(str: string): string {
  // RFC 4648 §5 (URL-safe)
  return decodeURIComponent(
    escape(atob(str.split("-").join("+").split("_").join("/")))
  );
}

export default function readJWT(jwt: string): jwtPayload {
  return JSON.parse(b64_to_utf8(jwt.split(".")[1]));
}