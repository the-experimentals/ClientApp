import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faKey, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { of } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services';
import { ProfileQuery } from 'src/app/core/state/query';

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
  constructor(private profileQuery:ProfileQuery, private authService: AuthService, private router:Router) {
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
    this.authService.logout();
    this.router.navigate(['']);
  }
}
