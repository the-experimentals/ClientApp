import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faKey, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { of } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { AlertDialogService, AuthService } from 'src/app/core/services';
import { ProfileQuery } from 'src/app/core/state/query';
import { AlertData } from 'src/app/modules/alert-dialog/data-models/alert-data';

@Component({
  selector: 'user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss']
})
export class UserOptionsComponent implements OnInit {

  initials: string = ""
  name: string = ""
  username: string = ""

  faKey = faKey
  faPowerOff = faPowerOff
  constructor(private profileQuery:ProfileQuery, 
              private authService: AuthService, 
              private router:Router,
              private alertDialog:AlertDialogService) {
    profileQuery.getProfile().pipe(
      take(1),
      filter(profile => profile !== undefined)
    ).subscribe(profile => {
      this.initials = profile.NAME[0].toUpperCase()
      this.name = profile.NAME
      this.username = profile.USERNAME      
    }).unsubscribe()
  }

  ngOnInit(): void {
  }

  signOut(){    
    let confirmationBox: AlertData = new AlertData();
    confirmationBox.MESSAGE = "Are you sure you want to sign out from application?";
    confirmationBox.ICON = faPowerOff

    this.alertDialog.conformationAlert(confirmationBox).afterClosed().subscribe(result => {
      if(result.event == "CONFIRM"){
          this.authService.logout();
          this.router.navigate(['']);
      }
    })
  }
  
}
