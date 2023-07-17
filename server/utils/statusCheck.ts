import { jwtPayload } from "types/jwtPayload";

export default async function statusCheck(jwt: string, status: string) {
  try {
    const p = await validateJWT<jwtPayload>(jwt);
    if (p.status == "admin") {
      return true;
    }
    if (p.status == status) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e)
    return false;
  }
}
