import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NavMenu, Position } from '../../models';
import { NavMenuService } from '../../services';

@Directive({
  selector: '[navMenu]'
})
export class NavMenuDirective {

  navMenu!: NavMenu;
  @Input('navMenu') navMenuName!: string;
  constructor(private elementRef: ElementRef, private navMenuService:NavMenuService) { 
    this.navMenu = new NavMenu();
  }

  @HostListener('mouseenter') onmouseenter(){        
    let element = this.elementRef.nativeElement;
    let position = new Position();

    this.navMenu.SHOW_MENU = true;;
    this.navMenu.POSITION = position;
    this.navMenu.ITEN_HOVERED_POSITION_Y = element.getBoundingClientRect().top;
    this.navMenu.WINDOW_HEIGHT = window.innerHeight;
    this.navMenu.NAV_MENU = this.navMenuName;
    this.showHideMenu();
  }

  @HostListener('mouseleave') onmouseleave(){
    this.navMenu.SHOW_MENU = false;
    this.showHideMenu();
  }

  showHideMenu(){
    this.navMenuService.showNavMenu(this.navMenu);
  }

}
