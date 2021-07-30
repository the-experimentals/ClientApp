import { Token } from '../secure/token';
import { ProfileRole } from '../policy';

export class Profile{
    
    private _ID! : string;
    public get ID() : string {
        return this._ID;
    }
    public set ID(v : string) {
        this._ID = v;
    }

    private _IS_VERIFIED! : boolean;
    public get IS_VERIFIED() : boolean {
        return this._IS_VERIFIED;
    }
    public set IS_VERIFIED(v : boolean) {
        this._IS_VERIFIED = v;
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
        
    private _TOKEN : Token = new Token();
    public get TOKEN() : Token {
        return this._TOKEN;
    }
    public set TOKEN(v : Token) {
        this._TOKEN = v;
    }

    private _ERRORS! : string[];
    public get ERRORS() : string[] {
        return this._ERRORS;
    }
    public set ERRORS(v : string[]) {
        this._ERRORS = v;
    }
    
    private _PERMISSIONS : string[] = new Array();
    public get PERMISSIONS() : string[] {
        return this._PERMISSIONS;
    }
    public set PERMISSIONS(v : string[]) {
        this._PERMISSIONS = v;
    }
    
    private _ROLE! : ProfileRole;
    public get ROLE() : ProfileRole {
        return this._ROLE;
    }
    public set ROLE(v : ProfileRole) {
        this._ROLE = v;
    }
}