import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { DELETE_PROFILE } from 'src/app/core/constants/actions/account';
import { ACCOUNT } from 'src/app/core/constants/controllers';
import { AlertDialogService, HttpHelperService } from 'src/app/core/services';
import { ProfileCard } from 'src/app/data-models/account';
import { AlertData } from '../../alert-dialog/data-models/alert-data';

@Component({
  selector: 'account-profile-card',
  templateUrl: './account-profile-card.component.html',
  styleUrls: ['./account-profile-card.component.scss']
})
export class AccountProfileCardComponent implements OnInit {

  faCog = faCog
  @Input() cardData!: ProfileCard
  constructor(private router: Router, private httpHelper: HttpHelperService, private alertDialog:AlertDialogService) { }

  ngOnInit(): void {
  }

  viewProfile() {
    this.router.navigate(['/account/view'])  
  }

  deleteProfile(profileID:string){
    this.httpHelper.patch(DELETE_PROFILE,ACCOUNT,{"PROFILE_ID" : profileID}).subscribe(res=>{
      let alertData: AlertData = new AlertData();
      alertData.MESSAGE = "Profile deleted successfully";
      const dialogRef = this.alertDialog.successAlert(alertData)

      // dialogRef.afterClosed().subscribe(res =>{
      //   this.router.navigate(['/account']);
      // })
    })
  }

}
