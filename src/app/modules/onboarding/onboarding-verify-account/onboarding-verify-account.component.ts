import { Component, EventEmitter, Inject, OnInit, Output, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VERIFY_PROFILE } from 'src/app/core/constants/actions/account';
import { ACCOUNT } from 'src/app/core/constants/controllers';
import { AlertDialogService, DyanamicContentLoadingService, HttpHelperService } from 'src/app/core/services';
import { ProfileStore } from 'src/app/core/state/store';
import { Profile } from 'src/app/data-models/account';
import { VerifyProfileResponse } from 'src/app/response-models/onboarding/verify-profile-response';
import { LoadingIndicatorComponent } from 'src/app/shared/loading-indicator/loading-indicator.component';
import { AlertData } from '../../alert-dialog/data-models/alert-data';

@Component({
  selector: 'onboarding-verify-account',
  templateUrl: './onboarding-verify-account.component.html',
  styleUrls: ['./onboarding-verify-account.component.scss']
})
export class OnboardingVerifyAccountComponent implements OnInit {

  @Output("changeStep") changeStep: EventEmitter<any> = new EventEmitter()
  verificationCodeForm: FormGroup;
  constructor(private formBuilder:FormBuilder, 
              private httpHelper:HttpHelperService, 
              private dyanamicContentLoading: DyanamicContentLoadingService,
              @Inject(ViewContainerRef) ViewContainerRef:ViewContainerRef,
              private alertDialogService:AlertDialogService,
              private profileStore: ProfileStore) { 
    this.verificationCodeForm = this.createVerificationFrom();

    this.dyanamicContentLoading.setRootViewContainerRef(ViewContainerRef);
  }

  ngOnInit(): void {
  }

  createVerificationFrom():FormGroup  {
    return this.formBuilder.group({
      'CH1': new FormControl('', [Validators.required]),
      'CH2': new FormControl('', [Validators.required]),
      'CH3': new FormControl('', [Validators.required]),
      'CH4': new FormControl('', [Validators.required]),
      'CH5': new FormControl('', [Validators.required]),
      'CH6': new FormControl('', [Validators.required]),
    });
  }

  verifyProfile(){
    if(this.verificationCodeForm.valid){
      let values = this.verificationCodeForm.value
      let enteredCode:string = ""
      enteredCode = enteredCode.concat(values.CH1, values.CH2, values.CH3, values.CH4, values.CH5, values.CH6)

      this.dyanamicContentLoading.showComponent(LoadingIndicatorComponent);
      this.httpHelper.post<VerifyProfileResponse>(VERIFY_PROFILE, ACCOUNT, {'OTP': enteredCode}).subscribe(res =>{
        this.dyanamicContentLoading.hideComponent();        
        if(res.VERIFIED){
          let alertData: AlertData = new AlertData();
          alertData.MESSAGE = "Congrats! You are now verified."

          this.profileStore.update(state => {
            let updatedProfile:Profile = Object.assign(new Profile(), state.profile)
            updatedProfile.IS_VERIFIED = true

            localStorage.removeItem('currentUser');
            localStorage.setItem("currentUser", JSON.stringify(updatedProfile));              

            return {
              profile: updatedProfile
            }
          })

          const dialogRef = this.alertDialogService.successAlert(alertData)
          dialogRef.afterClosed().subscribe(res =>{    
            this.changeStep.emit()     
          })          
        }        
      });
      
    }    
  }

}
