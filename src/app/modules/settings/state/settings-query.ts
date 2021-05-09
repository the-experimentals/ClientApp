import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { SettingsState } from "./settings-state";
import { SettingsStore } from "./settings-store";

@Injectable({
    providedIn:'root'
})
export class SettingsQuery extends Query<SettingsState>{
    constructor(private settingsStore:SettingsStore){
        super(settingsStore)
    }
}