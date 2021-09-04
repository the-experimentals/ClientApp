import { Component, OnInit } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import { ProfileQuery } from 'src/app/core/state/query';

@Component({
  selector: 'onboarding-get-started',
  templateUrl: './onboarding-get-started.component.html',
  styleUrls: ['./onboarding-get-started.component.scss']
})
export class OnboardingGetStartedComponent implements OnInit {

  name:string = ""
  constructor(private profileQuery:ProfileQuery) { 
    profileQuery.getProfile().pipe(
      take(1),
      filter(profile => profile !== undefined)
    ).subscribe(profile => {
      // this.initials = profile.NAME[0].toUpperCase()
      this.name = profile.NAME
      // this.username = profile.USERNAME      
    }).unsubscribe()  
  }

  ngOnInit(): void {
  }

}
