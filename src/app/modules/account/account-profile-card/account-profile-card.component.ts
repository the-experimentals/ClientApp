import { Component, Input, OnInit } from '@angular/core';
import { ProfileCard } from 'src/app/data-models/account';

@Component({
  selector: 'account-profile-card',
  templateUrl: './account-profile-card.component.html',
  styleUrls: ['./account-profile-card.component.scss']
})
export class AccountProfileCardComponent implements OnInit {

  @Input() cardData!: ProfileCard
  constructor() { }

  ngOnInit(): void {
  }

}
