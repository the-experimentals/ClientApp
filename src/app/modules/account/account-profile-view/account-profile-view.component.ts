import { Component, OnInit } from '@angular/core';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account-profile-view',
  templateUrl: './account-profile-view.component.html',
  styleUrls: ['./account-profile-view.component.scss']
})
export class AccountProfileViewComponent implements OnInit {

  faIdBadge = faIdBadge
  constructor() { }

  ngOnInit(): void {
  }

}
