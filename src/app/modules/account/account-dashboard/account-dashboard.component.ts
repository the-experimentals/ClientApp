import { Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { faMinus, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { GET_PROFILES } from 'src/app/core/constants/actions/account';
import { ACCOUNT } from 'src/app/core/constants/controllers';
import { DyanamicContentLoadingService, HttpHelperService } from 'src/app/core/services';
import { ProfileCard } from 'src/app/data-models/account';
import { LoadingIndicatorComponent } from 'src/app/shared/loading-indicator/loading-indicator.component';
import { CustomSelectList, CustomSelectListItem } from '../../custom-select-list/models';
import { CustomSelectListService } from '../../custom-select-list/services';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.scss']
})
export class AccountDashboardComponent implements OnInit {

  faPlus = faPlus
  faMinus = faMinus
  faUser = faUser

  profilesData:ProfileCard[];
  profileCount:number = 0;
  isLoading:boolean = false;

  constructor(private httpHelper:HttpHelperService, 
              private customSelectListService:CustomSelectListService,
              private dyanamicContentLoading: DyanamicContentLoadingService,
              @Inject(ViewContainerRef) ViewContainerRef:ViewContainerRef) { 

    this.profilesData = new Array<ProfileCard>();
    this.dyanamicContentLoading.setRootViewContainerRef(ViewContainerRef);  
  }

  ngOnInit(): void {
    this.isLoading = true
    this.dyanamicContentLoading.showComponent(LoadingIndicatorComponent);
    this.httpHelper.get<Array<ProfileCard>>(GET_PROFILES, ACCOUNT)
      .subscribe(
        res =>{
          this.dyanamicContentLoading.hideComponent()

          let customList: CustomSelectList = new CustomSelectList();
          customList.MULTI_SELECT = true;

          res.forEach((item) =>{
            let customListItem:CustomSelectListItem = new CustomSelectListItem();
            customListItem.ID = ""
            customListItem.TITLE = item.NAME,
            customListItem.SUB_TITLE = item.USERNAME
            customListItem.INITIALS = item.INITIALS

            customList.ITEMS.push(customListItem)            
          })

          this.customSelectListService.setCustomList(customList);

          this.profilesData = res;
          this.profileCount = this.profilesData.length
          this.isLoading = false
        },         
        err => {
          console.log(err)
          this.dyanamicContentLoading.hideComponent();
          this.profileCount = 0
          this.isLoading = false 
        }
      )
  }

}
