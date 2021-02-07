import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Task Manager';

  constructor(private authService:AuthService, private router:Router){}

  ngOnInit(){
    this.authService.isAuthenticated().subscribe(authenitcated => {
      if(!authenitcated)
        this.router.navigate(['']);
    })
  }
}
