import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, ThemeSwitcherService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Task Manager';

  constructor(private authService:AuthService, 
              private router:Router,
              private renderer:Renderer2, 
              private themeSwitcher: ThemeSwitcherService){

    var body = document.getElementsByTagName('body')[0]
    themeSwitcher.getThemeState().subscribe(state =>{
      if(state !== null){
        if(state == ThemeSwitcherService.THEME_LIGHT)
          this.renderer.removeClass(body,ThemeSwitcherService.THEME_DARK)
        else

        this.renderer.addClass(body,state);
        }      
    })
  }

  ngOnInit(){
    this.authService.isAuthenticated().subscribe(authenitcated => {
      if(!authenitcated)
        this.router.navigate([''])
    }).unsubscribe()

    this.authService.loadLocalUser()
  }
}
