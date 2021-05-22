import {Token} from 'src/app/data-models/secure';

export class SignInResponse{
    
    private _IS_AUTHENTICATED! : boolean;
    public get IS_AUTHENTICATED() : boolean {
        return this._IS_AUTHENTICATED;
    }
    public set IS_AUTHENTICATED(v : boolean) {
        this._IS_AUTHENTICATED = v;
    }
    
    private _IS_VERIFIED! : boolean;
    public get IS_VERIFIED() : boolean {
        return this._IS_VERIFIED;
    }
    public set IS_VERIFIED(v : boolean) {
        this._IS_VERIFIED = v;
    }
    
    private _ERRORS! : string[];
    public get ERRORS() : string[] {
        return this._ERRORS;
    }
    public set ERRORS(v : string[]) {
        this._ERRORS = v;
    }

    private _NAME! : string;
    public get NAME() : string {
        return this._NAME;
    }
    public set NAME(v : string) {
        this._NAME = v;
    }
    
    
    
    private _PROFILE_ID! : string;
    public get PROFILE_ID() : string {
        return this._PROFILE_ID;
    }
    public set PROFILE_ID(v : string) {
        this._PROFILE_ID = v;
    }
    
    private _TOKEN! : Token;
    public get TOKEN() : Token {
        return this._TOKEN;
    }
    public set TOKEN(v : Token) {
        this._TOKEN = v;
    }
    
    private _ALLOW_REFRESH! : boolean;
    public get ALLOW_REFRESH() : boolean {
        return this._ALLOW_REFRESH;
    }
    public set ALLOW_REFRESH(v : boolean) {
        this._ALLOW_REFRESH = v;
    }
    
    private _HAS_PWNED_PASSWORD! : boolean;
    public get HAS_PWNED_PASSWORD() : boolean {
        return this._HAS_PWNED_PASSWORD;
    }
    public set HAS_PWNED_PASSWORD(v : boolean) {
        this._HAS_PWNED_PASSWORD = v;
    }
        
        
}