import { sha256 } from "js-sha256";

export default function createPass(password: string){
  return sha256(password);
}
