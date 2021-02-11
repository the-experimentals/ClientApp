import { Position } from "./position";

export class NavMenu{
    private _SHOW_MENU! : boolean;
    public get SHOW_MENU() : boolean {
        return this._SHOW_MENU;
    }
    public set SHOW_MENU(v : boolean) {
        this._SHOW_MENU = v;
    }
    
    private _POSITION!: Position;
    public get POSITION() : Position {
        return this._POSITION;
    }
    public set POSITION(v : Position) {
        this._POSITION = v;
    }
    
    private _SHOW_OVERLAY! : boolean;
    public get SHOW_OVERLAY() : boolean {
        return this._SHOW_OVERLAY;
    }
    public set SHOW_OVERLAY(v : boolean) {
        this._SHOW_OVERLAY = v;
    }
    
    private _ITEN_HOVERED_POSITION_Y! : number;
    public get ITEN_HOVERED_POSITION_Y() : number {
        return this._ITEN_HOVERED_POSITION_Y;
    }
    public set ITEN_HOVERED_POSITION_Y(v : number) {
        this._ITEN_HOVERED_POSITION_Y = v;
    }
    
    private _WINDOW_HEIGHT! : number;
    public get WINDOW_HEIGHT() : number {
        return this._WINDOW_HEIGHT;
    }
    public set WINDOW_HEIGHT(v : number) {
        this._WINDOW_HEIGHT = v;
    }
    
    private _NAV_MENU! : string;
    public get NAV_MENU() : string {
        return this._NAV_MENU;
    }
    public set NAV_MENU(v : string) {
        this._NAV_MENU = v;
    }
}