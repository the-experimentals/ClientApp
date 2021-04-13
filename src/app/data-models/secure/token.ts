export class Token{

    private _ACCESS! : string;
    public get ACCESS() : string {
        return this._ACCESS;
    }
    public set ACCESS(v : string) {
        this._ACCESS = v;
    }

    private _REFRESH! : string;
    public get REFRESH() : string {
        return this._REFRESH;
    }
    public set REFRESH(v : string) {
        this._REFRESH = v;
    }

    private _TTL! : number;
    public get TTL() : number {
        return this._TTL;
    }
    public set TTL(v : number) {
        this._TTL = v;
    }    
    
    private _ALLOW_REFRESH! : boolean;
    public get ALLOW_REFRESH() : boolean {
        return this._ALLOW_REFRESH;
    }
    public set ALLOW_REFRESH(v : boolean) {
        this._ALLOW_REFRESH = v;
    }
        
}