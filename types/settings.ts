import * as z from "zod";

export const SettingsKeys = ["address", "timeOfWork", "email", "phone"] as const;

export type SettingsKeys = (typeof SettingsKeys)[number];

export const Settings = z.object({
  address: z.string().optional().default(""),
  timeOfWork: z.string().optional().default(""),
  email: z.string().optional().default(""),
  phone: z.string().optional().default(""),
})



// export type Settings = {
//   [key in SettingsKeys]?: string;
// };

export type Settings = z.infer<typeof Settings>
