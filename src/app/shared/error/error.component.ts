import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  errorCode!:number;
  constructor(private router: Router) { 
    let currentNavigationState = this.router.getCurrentNavigation();

    if(currentNavigationState != null){
      let state = currentNavigationState.extras.state;

      if(state === undefined)
        this.router.navigate(['/home']);
      else
        this.errorCode = state.errorCode; 
    }
  }

  ngOnInit(): void { 
  }

}
