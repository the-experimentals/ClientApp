import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { CustomSelectListState } from "./custom-select-list-state";
import { CustomSelectListStore } from "./custom-select-list-store";

@Injectable({
    providedIn: "root"
})
export class CustomSelectListQuery extends Query<CustomSelectListState>{
    constructor(private customSelectListStore:CustomSelectListStore){
        super(customSelectListStore)
    }
}