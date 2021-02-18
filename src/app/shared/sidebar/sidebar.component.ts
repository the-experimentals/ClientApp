import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faClipboardList, faCog, faHome, faShieldAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { filter, take } from 'rxjs/operators';
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
  faShieldAlt = faShieldAlt
  initials:string = "";
  constructor(private profileQuery:ProfileQuery) {
    this.profileQuery.getProfile().pipe(
      take(1),
      filter(profile => profile !== undefined)
    ).subscribe(profile => {    
      this.initials = profile.NAME[0].toUpperCase()        
    }).unsubscribe()
  }


  ngOnInit(): void {
  }

}
