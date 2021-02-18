import { Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { GET_PROFILES } from 'src/app/core/constants/actions/account';
import { ACCOUNT } from 'src/app/core/constants/controllers';
import { DyanamicContentLoadingService, HttpHelperService } from 'src/app/core/services';
import { ProfileCard } from 'src/app/data-models/account';
import { LoadingIndicatorComponent } from 'src/app/shared/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.scss']
})
export class AccountDashboardComponent implements OnInit {

  profilesData:ProfileCard[];
  profileCount:number = 0;

  constructor(private httpHelper:HttpHelperService, 
              private dyanamicContentLoading: DyanamicContentLoadingService,
              @Inject(ViewContainerRef) ViewContainerRef:ViewContainerRef) { 

    this.profilesData = new Array<ProfileCard>();
    this.dyanamicContentLoading.setRootViewContainerRef(ViewContainerRef);  
  }

  ngOnInit(): void {
    this.dyanamicContentLoading.showComponent(LoadingIndicatorComponent);
    this.httpHelper.get<Array<ProfileCard>>(GET_PROFILES, ACCOUNT)
      .subscribe(
        res =>{
          this.dyanamicContentLoading.hideComponent();
          this.profilesData = res;
          this.profileCount = this.profilesData.length;
        },         
        err => {
          console.log(err)
          this.dyanamicContentLoading.hideComponent();
          this.profileCount = 0; 
        }
      )
  }

}
