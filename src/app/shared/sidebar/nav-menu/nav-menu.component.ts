import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavMenu } from '../models';
import { NavMenuService } from '../services';
import { UserOptionsComponent } from './user-options/user-options.component';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  @ViewChild(UserOptionsComponent, {static:false}) userNavMenu!: UserOptionsComponent
  showMenu!:boolean;
  navMenuOptions!: NavMenu;
  menuName!: string;
  
  constructor(private navMenuService:NavMenuService, 
    private renderer: Renderer2, 
    private elementRef:ElementRef) { 

  }

  ngOnInit(): void {
    this.navMenuService.currentOptions.subscribe( navItemOptions => {
      this.showMenu = navItemOptions.SHOW_MENU;
      this.menuName = navItemOptions.NAV_MENU;
      this.navMenuOptions = navItemOptions;
    });
  }

  ngAfterViewChecked()
  {
    if(this.showMenu)
    {
      let navItemsElement;

      navItemsElement = this.elementRef.nativeElement.getElementsByClassName('nav-menu')[0];

      let navMenuPosition = (this.navMenuOptions.WINDOW_HEIGHT - this.navMenuOptions.ITEN_HOVERED_POSITION_Y) - 50;

      this.renderer.setStyle(navItemsElement, "bottom", navMenuPosition + "px");

      // if((navItemsElement.clientHeight + this.navMenuOptions.ITEN_HOVERED_POSITION_Y) > this.navMenuOptions.WINDOW_HEIGHT )
      // {
      //   this.renderer.setStyle(navItemsElement, "bottom", "5px");
      // }
      // else
      //   this.renderer.setStyle(navItemsElement, "bottom", navMenuPosition + "px");

      this.renderer.listen(navItemsElement, 'mouseenter', () =>{
        this.showMenu = true;
      });
      this.renderer.listen(navItemsElement, 'mouseleave', () =>{
        this.showMenu = false;
      })
    }
  }

}
