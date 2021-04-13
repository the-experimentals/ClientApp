import { Component, OnInit } from '@angular/core';
import { faMinus, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-permission-centre-dashboard',
  templateUrl: './permission-centre-dashboard.component.html',
  styleUrls: ['./permission-centre-dashboard.component.scss']
})
export class PermissionCentreDashboardComponent implements OnInit {

  faPlus = faPlus
  faMinus = faMinus
  faUser = faUser
  constructor() { }

  ngOnInit(): void {
  }

}
