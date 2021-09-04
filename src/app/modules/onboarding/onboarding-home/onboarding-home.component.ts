import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { ProfileQuery } from 'src/app/core/state/query';

@Component({
  selector: 'app-onboarding-home',
  templateUrl: './onboarding-home.component.html',
  styleUrls: ['./onboarding-home.component.scss']
})
export class OnboardingHomeComponent implements OnInit {

  constructor(private profileQuery: ProfileQuery, private router: Router) {
    profileQuery.getProfile().pipe(
      take(1),
      filter(profile => profile !== undefined)
    ).subscribe(profile => {
      if(profile.IS_VERIFIED)
        this.router.navigate(['/home']);
        
    }).unsubscribe()
  }

  ngOnInit(): void {
  }

}
