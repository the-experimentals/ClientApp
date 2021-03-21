import { Component, OnInit } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-permission-center-dashboard',
  templateUrl: './permission-center-dashboard.component.html',
  styleUrls: ['./permission-center-dashboard.component.scss']
})
export class PermissionCenterDashboardComponent implements OnInit {

  faPlus = faPlus
  faMinus = faMinus
  constructor() { }

  ngOnInit(): void {
  }

}
