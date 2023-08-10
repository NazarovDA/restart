import { Manager } from "@prisma/client";

const managerCache = reactive<{ managersData: Manager[] | null, timestamp: number }>({
  managersData: null,
  timestamp: 0,
});

export default async function getManagers() {
  if (
    !managerCache.managersData ||
    Date.now() - managerCache.timestamp > 1000 * 60 * 30
  ) {
    const managers = await $fetch("api/managers");
    managerCache.managersData = managers as Manager[];
    managerCache.timestamp = Date.now()
  }

  return managerCache.managersData
}
