export class CustomSelectListItem{
    
    private _ID! : string;
    public get ID() : string {
        return this._ID;
    }
    public set ID(v : string) {
        this._ID = v;
    }
    
    private _TITLE! : string;
    public get TITLE() : string {
        return this._TITLE;
    }
    public set TITLE(v : string) {
        this._TITLE = v;
    }
    
    private _SUB_ITILE! : string;
    public get SUB_ITILE() : string {
        return this._SUB_ITILE;
    }
    public set SUB_ITILE(v : string) {
        this._SUB_ITILE = v;
    }
       
}