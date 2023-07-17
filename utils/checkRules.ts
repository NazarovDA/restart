import { jwtPayload } from "types/jwtPayload";

const rules = [...new Set(["admin", "User.Manage", "Product.Create", "Product.Edit"] as const)] as const;

export default function checkRules(data: jwtPayload, rule: typeof rules[number]): boolean {
    if (data.exp < Date.now()/1000) { return false }
    if (data.status == "admin") { return true }
    if ((rule == "Product.Create" || rule == "Product.Edit") && (data.status == "editor")) { return true }
    return false;
}