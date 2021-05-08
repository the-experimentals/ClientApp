export class Settings{
        
    private _TWO_FA! : boolean;
    public get TWO_FA() : boolean {
        return this._TWO_FA;
    }
    public set TWO_FA(v : boolean) {
        this._TWO_FA = v;
    }
    
    
    private _THEME! : string;
    public get THEME() : string {
        return this._THEME;
    }
    public set THEME(v : string) {
        this._THEME = v;
    }    
    
}