import { Settings } from "types/settings";

const settingsCache = reactive<{ settings: Settings | null, timestamp: number }>({
  settings: null,
  timestamp: 0
});

export default async function getSettings() {
  if (!settingsCache.settings || Date.now()-settingsCache.timestamp > 1000*60*30) {
    const settings = await $fetch("/api/settings");
    settingsCache.settings = unref(settings) as Settings;
    settingsCache.timestamp = Date.now();
  }
  return settingsCache.settings;
}
