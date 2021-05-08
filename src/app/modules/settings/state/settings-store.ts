import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import produce from "immer";
import { SettingsState, defaultSettings } from "./settings-state";

@Injectable({
    providedIn: 'root'
})
@StoreConfig({name: 'settings', resettable: true, producerFn: produce})
export class SettingsStore extends Store<SettingsState>{
    constructor(){
        super(defaultSettings())
    }
}