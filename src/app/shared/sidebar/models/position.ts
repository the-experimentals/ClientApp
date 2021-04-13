export class Position{
    private _TOP! : string;
    public get TOP() : string {
        return this._TOP;
    }
    public set TOP(v : string) {
        this._TOP = v;
    }
    
    private _BOTTOM! : string;
    public get BOTTOM() : string {
        return this._BOTTOM;
    }
    public set BOTTOM(v : string) {
        this._BOTTOM = v;
    }
    
    private _LEFT! : string;
    public get LEFT() : string {
        return this._LEFT;
    }
    public set LEFT(v : string) {
        this._LEFT = v;
    }
    
    private _RIGHT! : string;
    public get RIGHT() : string {
        return this._RIGHT;
    }
    public set RIGHT(v : string) {
        this._RIGHT = v;
    }
}