export class ProfileCard{
    
    private _PROFILE_ID! : string;
    public get PROFILE_ID() : string {
        return this._PROFILE_ID;
    }
    public set PROFILE_ID(v : string) {
        this._PROFILE_ID = v;
    }
    
    private _USERNAME! : string;
    public get USERNAME() : string {
        return this._USERNAME;
    }
    public set USERNAME(v : string) {
        this._USERNAME = v;
    }
    
    private _NAME! : string;
    public get NAME() : string {
        return this._NAME;
    }
    public set NAME(v : string) {
        this._NAME = v;
    }
    
    private _LOCKED! : boolean;
    public get LOCKED() : boolean {
        return this._LOCKED;
    }
    public set LOCKED(v : boolean) {
        this._LOCKED = v;
    }
    
    private _INITIALS! : string;
    public get INITIALS() : string {
        return this._INITIALS;
    }
    public set INITIALS(v : string) {
        this._INITIALS = v;
    }
}