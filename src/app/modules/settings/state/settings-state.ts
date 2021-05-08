import { Settings } from "../models";

export interface SettingsState{
    SETTINGS: Settings
}

export const defaultSettings = () => {
    return {
        SETTINGS: new Settings()
    }
}