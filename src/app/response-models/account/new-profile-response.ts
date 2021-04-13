export class NewProfileResponse{
    private _IS_SAVED! : string;
    public get IS_SAVED() : string {
        return this._IS_SAVED;
    }
    public set IS_SAVED(v : string) {
        this._IS_SAVED = v;
    }
        
    private _ERRORS! : string[];
    public get ERRORS() : string[] {
        return this._ERRORS;
    }
    public set ERRORS(v : string[]) {
        this._ERRORS = v;
    }
}