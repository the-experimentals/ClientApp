import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {faKey } from '@fortawesome/free-solid-svg-icons';
import { DyanamicContentLoadingService, HttpHelperService } from 'src/app/core/services';
import { AlertDialogService } from 'src/app/core/services/alert-dialog/alert-dialog.service';
import { ValidateOnValueChange } from 'src/app/core/validators';
import { MatchPassword } from 'src/app/core/validators/match-password';
import { ChangePasswordResponse } from 'src/app/response-models/account/change-password-response';
import { LoadingIndicatorComponent } from 'src/app/shared/loading-indicator/loading-indicator.component';
import { AlertData } from '../../alert-dialog/data-models/alert-data';

@Component({
  selector: 'app-account-change-password',
  templateUrl: './account-change-password.component.html',
  styleUrls: ['./account-change-password.component.scss']
})
export class AccountChangePasswordComponent implements OnInit {

  
  
  faKey = faKey

  changePasswordForm:FormGroup
  isChangePasswordAttempt:boolean = false
  changePasswordErrors!:string[]
  showChangePasswordErrors:boolean = false

  validationMessages = {
    'OLD_PASSWORD': {
      'required': 'You must enter data in old password',
      'minlength':'Your old password cannot be lesser than 8 characters'
    },    
    'NEW_PASSWORD':{
      'required': 'You must enter data in new password',
      'minlength':'Your new password cannot be lesser than 8 characters',
      'pwnedPassword': "This password has previously appeared in a data breach and should never be used. If you've ever used it anywhere before, change it immediately!"
    },
    'CONFIRM_PASSWORD':{
      'required': 'You must enter data in confirm password',
      'minlength':'Your confirm password cannot be lesser than 8 characters',
      'MatchPassword': 'Your new password and confirm password didn\'t matched'
    }
  }

  changePasswordFormErrors = {
    'OLD_PASSWORD': this.validationMessages['OLD_PASSWORD']['required'],
    'NEW_PASSWORD': this.validationMessages['NEW_PASSWORD']['required'],
    'CONFIRM_PASSWORD': this.validationMessages['CONFIRM_PASSWORD']['required'],
  }
  
  constructor(private formBuilder: FormBuilder, 
    private httpHelper:HttpHelperService, 
    private dyanamicContentLoading: DyanamicContentLoadingService,
    @Inject(ViewContainerRef) ViewContainerRef:ViewContainerRef,
    private router:Router,
    private alertDialogService:AlertDialogService) { 

    this.dyanamicContentLoading.setRootViewContainerRef(ViewContainerRef);  
    this.changePasswordForm = this.createChangePasswordForm();

    this.changePasswordForm.valueChanges.subscribe(data => {      
      ValidateOnValueChange(this.changePasswordForm,this.changePasswordFormErrors, this.validationMessages, data);
    });
  }

  ngOnInit(): void {
  }

  createChangePasswordForm(): FormGroup{
    return this.changePasswordForm = this.formBuilder.group({
      'OLD_PASSWORD': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'NEW_PASSWORD': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'CONFIRM_PASSWORD': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'SHOW_PASSWORD': new FormControl(false)
    }, {validator: MatchPassword('NEW_PASSWORD', 'CONFIRM_PASSWORD')});  
  }

  get OLD_PASSWORD(){
    return this.changePasswordForm.get('OLD_PASSWORD');
  }

  get NEW_PASSWORD(){
    return this.changePasswordForm.get('NEW_PASSWORD');
  }

  get CONFIRM_PASSWORD(){
    return this.changePasswordForm.get('CONFIRM_PASSWORD');
  }

  get SHOW_PASSWORD(){
    return this.changePasswordForm.get('SHOW_PASSWORD');
  }

  changePassword(){
    this.isChangePasswordAttempt = true;
  
    if(this.changePasswordForm.valid){
      this.showChangePasswordErrors = false;
      this.dyanamicContentLoading.showComponent(LoadingIndicatorComponent)

      // this.httpHelper.put<ChangePasswordResponse>(CHANGE_PASSWORD,ACCOUNT, this.changePasswordForm.value)
      //   .subscribe(res =>{
      //     this.dyanamicContentLoading.hideComponent(); 
      //     if(res.IS_CHANGED){
      //       let alertData: AlertData = new AlertData();
      //       alertData.MESSAGE = "Your password was successfully changed. Click ok to return to home."
      //       const dialogRef = this.alertDialogService.successAlert(alertData)

      //       dialogRef.afterClosed().subscribe(res =>{
      //         this.router.navigate(['/home'])     
      //       })
                   
      //     }
      //   }, err => {      
      //     this.dyanamicContentLoading.hideComponent();  

      //     this.showChangePasswordErrors = true
      //     this.changePasswordErrors = err.error
      //   })
    }
  }

  checkPwnedPassword(){
    if(this.NEW_PASSWORD?.valid){    
      this.httpHelper.get("check-pwned-password", "account", {SECRET: this.NEW_PASSWORD.value}).subscribe(res =>{        
        if(res){
          this.NEW_PASSWORD?.setErrors({pwnedPassword: res});
          this.changePasswordFormErrors.NEW_PASSWORD += this.validationMessages['NEW_PASSWORD']['pwnedPassword']
        }
        else{
          this.NEW_PASSWORD?.setErrors(null);
        }
      })
    }
  }

}
