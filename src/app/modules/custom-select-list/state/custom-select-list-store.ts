import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { CustomSelectListState, defaultCustomSelectList } from "./custom-select-list-state";

@Injectable({
    providedIn: 'root'
})
@StoreConfig({ name: 'custom-select-list' })
export class CustomSelectListStore extends Store<CustomSelectListState>{
    constructor(){
        super(defaultCustomSelectList())
    }
}