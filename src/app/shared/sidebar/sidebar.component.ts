import { Component, OnInit } from '@angular/core';
import { faClipboardList, faCog, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faHome = faHome
  faUser = faUser
  faClipboardList = faClipboardList
  faCog = faCog
  constructor() { }

  ngOnInit(): void {
  }

}
