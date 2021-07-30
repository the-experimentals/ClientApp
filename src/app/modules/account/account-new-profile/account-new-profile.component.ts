import { Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faIdBadge, faKey, faLanguage, faLongArrowAltLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { CREATE_NEW_PROFILE } from 'src/app/core/constants/actions/account';
import { ACCOUNT } from 'src/app/core/constants/controllers';
import { AlertDialogService, DyanamicContentLoadingService, HttpHelperService } from 'src/app/core/services';
import { ValidateOnValueChange } from 'src/app/core/validators';
import { MatchPassword } from 'src/app/core/validators/match-password';
import { NewProfileResponse } from 'src/app/response-models/account';
import { LoadingIndicatorComponent } from 'src/app/shared/loading-indicator/loading-indicator.component';
import { AlertData } from '../../alert-dialog/data-models/alert-data';

@Component({
  selector: 'app-account-new-profile',
  templateUrl: './account-new-profile.component.html',
  styleUrls: ['./account-new-profile.component.scss'],
})
export class AccountNewProfileComponent implements OnInit {

  faLongArrowAltLeft = faLongArrowAltLeft
  faIdBadge = faIdBadge
  faUser = faUser
  faKey = faKey
  faEnvelope = faEnvelope
  faLanguage = faLanguage

  createNewProfileErrors:string[] = [];
  newProfileForm!: FormGroup
  isCreateProfileAttempt: boolean = false

  validationMessages = {
    'IDENTIFIER': {
      'required': 'You must enter data in username',
      'minlength':'Your username cannot be lesser than 5 characters'
    },    
    'SECRET':{
      'required': 'You must enter data in password',
      'minlength':'Your password cannot be lesser than 8 characters',
      'pwnedPassword': "This password has previously appeared in a data breach and should never be used. If you've ever used it anywhere before, change it immediately!"
    },
    'CONFIRM_SECRET':{
      'required': 'You must enter data in confirm password',
      'minlength':'Your confirm password cannot be lesser than 8 characters',
      'MatchPassword': 'Your new password and confirm password didn\'t matched'
    },
    'FIRST_NAME':{
      'required': 'You must enter data in first name'
    },
    'LAST_NAME':{
      'required': 'You must enter data in last name'
    },
    'EMAIL':{
      'required': 'You must enter data in e-mail',
      'email': 'E-mail entered is incorrect'
    }
  }

  newProfileFormErrors = {
    'IDENTIFIER': this.validationMessages['IDENTIFIER']['required'],
    'SECRET': this.validationMessages['SECRET']['required'],
    'CONFIRM_SECRET': this.validationMessages['CONFIRM_SECRET']['required'],
    'FIRST_NAME': this.validationMessages['FIRST_NAME']['required'],
    'LAST_NAME': this.validationMessages['LAST_NAME']['required'],
    'EMAIL': this.validationMessages['EMAIL']['required']
  }

  constructor(private formBuilder: FormBuilder, 
              private dyanamicContentLoading: DyanamicContentLoadingService,
              private httpHelper: HttpHelperService,
              private router:Router,
              @Inject(ViewContainerRef) ViewContainerRef:ViewContainerRef,
              private alertDialog:AlertDialogService) { 

    this.dyanamicContentLoading.setRootViewContainerRef(ViewContainerRef);  

    this.newProfileForm = this.createNewProfileForm()

    this.newProfileForm.valueChanges.subscribe(data => {
      ValidateOnValueChange(this.newProfileForm, this.newProfileFormErrors, this.validationMessages, data)
    });    
  }

  ngOnInit(): void {
  }

  createNewProfileForm(): FormGroup{
    return this.formBuilder.group({
      "IDENTIFIER": new FormControl("", [Validators.required, Validators.minLength(5)]),
      "SECRET": new FormControl("", [Validators.required, Validators.minLength(8)]),
      "CONFIRM_SECRET": new FormControl("", [Validators.required, Validators.minLength(8)]),
      "SHOW_PASSWORD": new FormControl(false),
      "FIRST_NAME": new FormControl('', [Validators.required]),
      "LAST_NAME": new FormControl('', [Validators.required]),
      "EMAIL": new FormControl('', [Validators.required, Validators.email])
    }, {validator: MatchPassword('SECRET', 'CONFIRM_SECRET')}) 
  }

  get IDENTIFIER(){
    return this.newProfileForm.get("IDENTIFIER")
  }

  get SECRET(){
    return this.newProfileForm.get("SECRET")
  }

  get CONFIRM_SECRET(){
    return this.newProfileForm.get("CONFIRM_SECRET")
  }

  get SHOW_PASSWORD(){
    return this.newProfileForm.get("SHOW_PASSWORD")
  }

  get FIRST_NAME(){
    return this.newProfileForm.get("FIRST_NAME")
  }

  get LAST_NAME(){
    return this.newProfileForm.get("LAST_NAME")
  }

  get EMAIL(){
    return this.newProfileForm.get("EMAIL")
  }


  createProfile(){    
    this.isCreateProfileAttempt = true
    this.createNewProfileErrors = []
    if(this.newProfileForm.valid){
      this.dyanamicContentLoading.showComponent(LoadingIndicatorComponent)
      // this.httpHelper.post<NewProfileResponse>(CREATE_NEW_PROFILE,ACCOUNT, this.newProfileForm.value)
      //   .subscribe(
      //     res => {
      //       this.dyanamicContentLoading.hideComponent();
      //       if(res.IS_SAVED){

      //         let alertData: AlertData = new AlertData();
      //         alertData.MESSAGE = "New profile created successfully. Click ok to return to account dashboard."
      //         const dialogRef = this.alertDialog.successAlert(alertData)

      //         dialogRef.afterClosed().subscribe(res =>{
      //           this.router.navigate(['/account']);
      //         })
              
      //       }            
      //     },
      //     err =>{
      //       this.dyanamicContentLoading.hideComponent()
      //       this.createNewProfileErrors.push(err.error)                       
      //     }
      //   )
    }
  }

  checkPwnedPassword(){
    if(this.SECRET?.valid){    
      this.httpHelper.get("check-pwned-password", "account", {SECRET: this.SECRET.value}).subscribe(res =>{        
        if(res){
          this.SECRET?.setErrors({pwnedPassword: res});
          this.newProfileFormErrors.SECRET += this.validationMessages['SECRET']['pwnedPassword']
        }
        else{
          this.SECRET?.setErrors(null);
        }
      })
    }
  }
}
