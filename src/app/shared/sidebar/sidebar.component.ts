import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faClipboardList, faCog, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { ProfileQuery } from 'src/app/core/state/query';
import { ProfileStore } from 'src/app/core/state/store';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {

  faHome = faHome
  faUser = faUser
  faClipboardList = faClipboardList
  faCog = faCog
  initials:string = "";
  constructor(private profileQuery:ProfileQuery) {
    this.profileQuery.getProfile().subscribe(profile => {    
      if(profile !== undefined){
        this.initials = profile.NAME[0].toUpperCase()
      }        
    })
  }


  ngOnInit(): void {
  }

}
