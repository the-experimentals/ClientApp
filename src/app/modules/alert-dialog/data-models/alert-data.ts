export class AlertData{
    
    private _MESSAGE! : string;
    public get MESSAGE() : string {
        return this._MESSAGE;
    }
    public set MESSAGE(v : string) {
        this._MESSAGE = v;
    }
    
    private _ICON! : any;
    public get ICON() : any {
        return this._ICON;
    }
    public set ICON(v : any) {
        this._ICON = v;
    }
    
    
}