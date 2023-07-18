import { Settings } from "types/settings"

export default async function getSettings() {
    const {data: settings } = await useFetch(
        "/api/settings"
    )

    return settings as Settings
}