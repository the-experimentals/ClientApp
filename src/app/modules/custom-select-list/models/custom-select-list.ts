export class CustomSelectList{
    
    private _MULTI_SELECT! : boolean;
    public get MULTI_SELECT() : boolean {
        return this._MULTI_SELECT;
    }
    public set MULTI_SELECT(v : boolean) {
        this._MULTI_SELECT = v;
    }
    
}