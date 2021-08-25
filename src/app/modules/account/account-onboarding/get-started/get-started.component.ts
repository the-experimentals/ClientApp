import { Component, OnInit } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import { ProfileQuery } from 'src/app/core/state/query';

@Component({
  selector: 'get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

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
