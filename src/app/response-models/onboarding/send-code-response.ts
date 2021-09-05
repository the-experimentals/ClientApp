export class SendCodeResponse{
    
    private _SENT! : boolean;
    public get SENT() : boolean {
        return this._SENT;
    }
    public set SENT(v : boolean) {
        this._SENT = v;
    }
    
}