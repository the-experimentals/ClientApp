import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {

  public static THEME_DARK:string = "dark-theme";
  public static THEME_LIGHT:string ="light-theme";

  private static THEME_STORAGE_LABLE:string = "app-theme";

  private _themeState!: BehaviorSubject<string | null>;
  public readonly themeState!: Observable<string | null>;
  
  constructor() { 
    this.setTheme();
    this.themeState = this._themeState.asObservable();
  }

  setTheme()
  {
    // default is light
    let theme = localStorage.getItem(ThemeSwitcherService.THEME_STORAGE_LABLE)

    this._themeState = new BehaviorSubject<string | null>(theme)
      
    
    if(theme == null)
      theme = ThemeSwitcherService.THEME_LIGHT

    localStorage.setItem(ThemeSwitcherService.THEME_STORAGE_LABLE,theme)
    this._themeState.next(theme)
      
  }

  switchTheme(value: boolean){
    let theme = localStorage.getItem(ThemeSwitcherService.THEME_STORAGE_LABLE)

    if(theme !== null){
      if(theme == ThemeSwitcherService.THEME_LIGHT && value)
      theme = ThemeSwitcherService.THEME_DARK
    else if(!value)
      theme = ThemeSwitcherService.THEME_LIGHT     

      localStorage.setItem(ThemeSwitcherService.THEME_STORAGE_LABLE,theme)
      this._themeState.next(theme)
    }
  }

  getThemeState():Observable<string | null>{
    return this.themeState;
  }

  getThemeCurrentValue(): string | null{
    return this._themeState.value
  }
}
