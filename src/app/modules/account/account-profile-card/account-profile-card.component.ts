import { Component, Input, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { ProfileCard } from 'src/app/data-models/account';

@Component({
  selector: 'account-profile-card',
  templateUrl: './account-profile-card.component.html',
  styleUrls: ['./account-profile-card.component.scss']
})
export class AccountProfileCardComponent implements OnInit {

  faCog = faCog
  @Input() cardData!: ProfileCard
  constructor() { }

  ngOnInit(): void {
  }

}
