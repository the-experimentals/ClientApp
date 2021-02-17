import { Component, OnInit } from '@angular/core';
import { faIdBadge, faLanguage, faLongArrowAltLeft, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account-new-profile',
  templateUrl: './account-new-profile.component.html',
  styleUrls: ['./account-new-profile.component.scss'],
})
export class AccountNewProfileComponent implements OnInit {

  faLongArrowAltLeft = faLongArrowAltLeft
  faIdBadge = faIdBadge
  faUser = faUser
  faLanguage = faLanguage

  constructor() { }

  ngOnInit(): void {
  }

}
