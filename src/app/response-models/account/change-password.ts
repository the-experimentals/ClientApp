export class ChangePassword{
    
    private _IS_CHANGED! : string;
    public get IS_CHANGED() : string {
        return this._IS_CHANGED;
    }
    public set IS_CHANGED(v : string) {
        this._IS_CHANGED = v;
    }
    
}