import { Query } from "@datorama/akita";
import { SettingsState } from "./settings-state";
import { SettingsStore } from "./settings-store";

export class StoreQuery extends Query<SettingsState>{
    constructor(private settingsStore:SettingsStore){
        super(settingsStore)
    }
}