import { CustomSelectListAction } from "./custom-select-list-action";
import { CustomSelectListItem } from "./custom-select-list-item";

export class CustomSelectList{
    
    private _MULTI_SELECT! : boolean;
    public get MULTI_SELECT() : boolean {
        return this._MULTI_SELECT;
    }
    public set MULTI_SELECT(v : boolean) {
        this._MULTI_SELECT = v;
    }
    
    private _ITEMS : CustomSelectListItem[] = [];
    public get ITEMS() : CustomSelectListItem[] {
        return this._ITEMS;
    }
    public set ITEMS(v : CustomSelectListItem[]) {
        this._ITEMS = v;
    }
    
    private _ACTIONS : CustomSelectListAction[] = [];
    public get ACTIONS() : CustomSelectListAction[] {
        return this._ACTIONS;
    }
    public set ACTIONS(v : CustomSelectListAction[]) {
        this._ACTIONS = v;
    }
    
}