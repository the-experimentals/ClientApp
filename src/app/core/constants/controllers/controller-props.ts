export class ControllerProps{
    
    private _NAME! : string;
    public get NAME() : string {
        return this._NAME;
    }
    public set NAME(v : string) {
        this._NAME = v;
    }
    
    private _HOST! : string;
    public get HOST() : string {
        return this._HOST;
    }
    public set HOST(v : string) {
        this._HOST = v;
    }
        
}