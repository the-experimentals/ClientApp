import { Token } from "src/app/data-models/secure";

export class RefreshTokenResponse extends Token{
    
    private _IS_REFRESHED! : boolean;
    public get IS_REFRESHED() : boolean {
        return this._IS_REFRESHED;
    }
    public set IS_REFRESHED(v : boolean) {
        this._IS_REFRESHED = v;
    }
}