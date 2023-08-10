import db, { prismaClient } from "@/db";
import { Prisma } from "@prisma/client";

const settingsKeys = ["address", "timeOfWork", "email", "phone"] as const;

type settingsKeys = (typeof settingsKeys)[number];

type Settings = {
  [key in settingsKeys]?: string;
};

export default defineEventHandler(async function (event) {
  const data = await prismaClient.settings.findMany();

  let ans: Settings = {};

  for (let obj of data) {
    ans[obj.param as settingsKeys] = obj.value;
  }

  console.log(ans);
  return ans; // {'телефон': '+7(812)241-15-08', 'почта': 'mail@tdrestart.ru', 'время': 'с 9 до 17 (Пн - Чт), (Пт) до 16', 'адрес': 'Санкт-Петербург, Софийская ул., дом 99'}
});
