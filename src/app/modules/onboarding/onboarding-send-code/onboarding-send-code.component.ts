import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, ViewContainerRef } from '@angular/core';
import { SEND_VERIFICATION_CODE } from 'src/app/core/constants/actions/account';
import { AlertDialogService, DyanamicContentLoadingService, HttpHelperService } from 'src/app/core/services';
import { LoadingIndicatorComponent } from 'src/app/shared/loading-indicator/loading-indicator.component';
import { ACCOUNT } from 'src/app/core/constants/controllers';
import { SendCodeResponse } from 'src/app/response-models/onboarding/send-code-response';
import { AlertData } from '../../alert-dialog/data-models/alert-data';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'onboarding-send-code',
  templateUrl: './onboarding-send-code.component.html',
  styleUrls: ['./onboarding-send-code.component.scss']
})
export class OnboardingSendCodeComponent implements OnInit {

  @Output("changeStep") changeStep: EventEmitter<any> = new EventEmitter()
  constructor(private httpHelper: HttpHelperService, 
              private dyanamicContentLoading: DyanamicContentLoadingService,
              @Inject(ViewContainerRef) ViewContainerRef:ViewContainerRef, 
              private alertDialogService:AlertDialogService) {
    
    this.dyanamicContentLoading.setRootViewContainerRef(ViewContainerRef);  
  }

  ngOnInit(): void {
  }

  sendCode(){
    this.dyanamicContentLoading.showComponent(LoadingIndicatorComponent);
    this.httpHelper.post<SendCodeResponse>(SEND_VERIFICATION_CODE,ACCOUNT,null).subscribe(res =>{      
      this.dyanamicContentLoading.hideComponent();

      if(res.SENT){
        let alertData: AlertData = new AlertData();
        alertData.MESSAGE = "OTP(Verification code) has been sent successfully to registered email."

        const dialogRef = this.alertDialogService.successAlert(alertData)
        dialogRef.afterClosed().subscribe(res =>{
          // this.router.navigate(['/home'])
          this.changeStep.emit()     
        })
      }
      
    })
  }

}
