import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavMenu } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {

  defaultOptions!: NavMenu;
  private showMenuBehaviour!: BehaviorSubject<NavMenu>;
  currentOptions!: Observable<NavMenu>

  constructor() { 
    this.defaultOptions = new NavMenu();
    this.defaultOptions.SHOW_MENU = false;
    this.showMenuBehaviour = new BehaviorSubject(this.defaultOptions);  
    this.currentOptions = this.showMenuBehaviour.asObservable();
  }

  showNavMenu(options: NavMenu) {    
    this.showMenuBehaviour.next(options);
  }
}
