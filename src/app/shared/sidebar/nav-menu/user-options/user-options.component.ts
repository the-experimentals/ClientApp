import { Component, OnInit } from '@angular/core';
import { faKey, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { ProfileQuery } from 'src/app/core/state/query';

@Component({
  selector: 'user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss']
})
export class UserOptionsComponent implements OnInit {

  initials: string = ""
  name: string = ""
  identifier: string = ""

  faKey = faKey
  faPowerOff = faPowerOff
  constructor(private profileQuery:ProfileQuery) {
    profileQuery.getProfile().subscribe(profile => {
      this.initials = profile.NAME[0].toUpperCase()
      this.name = profile.NAME
      this.identifier = profile.IDENTIFIER
    })
  }

  ngOnInit(): void {
  }

}
