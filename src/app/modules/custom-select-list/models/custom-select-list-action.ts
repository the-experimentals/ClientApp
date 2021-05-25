export class CustomSelectListAction{
    
    private _ID! : string;
    public get ID() : string {
        return this._ID;
    }
    public set ID(v : string) {
        this._ID = v;
    }
    
    private _ICON! : string;
    public get ICON() : string {
        return this._ICON;
    }
    public set ICON(v : string) {
        this._ICON = v;
    }
    
    private _TOOLTIP! : string;
    public get TOOLTIP() : string {
        return this._TOOLTIP;
    }
    public set TOOLTIP(v : string) {
        this._TOOLTIP = v;
    }
    
    private _ROUTER_LINK! : string;
    public get ROUTER_LINK() : string {
        return this._ROUTER_LINK;
    }
    public set ROUTER_LINK(v : string) {
        this._ROUTER_LINK = v;
    }        
    
}