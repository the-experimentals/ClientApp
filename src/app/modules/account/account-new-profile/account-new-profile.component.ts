import { Component, EventEmitter, Inject, OnInit, Output, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faIdBadge, faKey, faLanguage, faLongArrowAltLeft, faTimes, faUser, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { CREATE_NEW_PROFILE } from 'src/app/core/constants/actions/account';
import { ACCOUNT } from 'src/app/core/constants/controllers';
import { AlertDialogService, DyanamicContentLoadingService, HttpHelperService } from 'src/app/core/services';
import { ValidateOnValueChange } from 'src/app/core/validators';
import { MatchPassword } from 'src/app/core/validators/match-password';
import { NewProfileResponse } from 'src/app/response-models/account';
import { LoadingIndicatorComponent } from 'src/app/shared/loading-indicator/loading-indicator.component';
import { AlertData } from '../../alert-dialog/data-models/alert-data';

@Component({
  selector: 'account-new-profile',
  templateUrl: './account-new-profile.component.html',
  styleUrls: ['./account-new-profile.component.scss'],
})
export class AccountNewProfileComponent implements OnInit {

  @Output() toggleNewProfilePanel;

  faLongArrowAltLeft = faLongArrowAltLeft
  faTimes = faTimes
  faIdBadge = faIdBadge
  faUser = faUser
  faKey = faKey
  faEnvelope = faEnvelope
  faLanguage = faLanguage

  createNewProfileErrors:string[] = [];
  newProfileForm!: FormGroup
  isCreateProfileAttempt: boolean = false

  validationMessages = {
    'USERNAME': {
      'required': 'You must enter data in username',
      'minlength':'Your username cannot be lesser than 5 characters'
    },    
    'PASSWORD':{
      'required': 'You must enter data in password',
      'minlength':'Your password cannot be lesser than 8 characters',
      'pwnedPassword': "This password has previously appeared in a data breach and should never be used. If you've ever used it anywhere before, change it immediately!"
    },
    'CONFIRM_PASSWORD':{
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
    'USERNAME': this.validationMessages['USERNAME']['required'],
    'PASSWORD': this.validationMessages['PASSWORD']['required'],
    'CONFIRM_PASSWORD': this.validationMessages['CONFIRM_PASSWORD']['required'],
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

    
    this.toggleNewProfilePanel = new EventEmitter<boolean>();
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
      "USERNAME": new FormControl("", [Validators.required, Validators.minLength(5)]),
      "PASSWORD": new FormControl("", [Validators.required, Validators.minLength(8)]),
      "CONFIRM_PASSWORD": new FormControl("", [Validators.required, Validators.minLength(8)]),
      "SHOW_PASSWORD": new FormControl(false),
      "FIRST_NAME": new FormControl('', [Validators.required]),
      "LAST_NAME": new FormControl('', [Validators.required]),
      "EMAIL": new FormControl('', [Validators.required, Validators.email])
    }, {validator: MatchPassword('PASSWORD', 'CONFIRM_PASSWORD')}) 
  }

  get USERNAME(){
    return this.newProfileForm.get("USERNAME")
  }

  get PASSWORD(){
    return this.newProfileForm.get("PASSWORD")
  }

  get CONFIRM_PASSWORD(){
    return this.newProfileForm.get("CONFIRM_PASSWORD")
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
      this.httpHelper.post<NewProfileResponse>(CREATE_NEW_PROFILE,ACCOUNT, this.newProfileForm.value)
        .subscribe(
          res => {
            this.dyanamicContentLoading.hideComponent();
            if(res.IS_SAVED){

              let alertData: AlertData = new AlertData();
              alertData.MESSAGE = "New profile created successfully. Click ok to return to account dashboard."
              const dialogRef = this.alertDialog.successAlert(alertData)

              dialogRef.afterClosed().subscribe(res =>{
                this.router.navigate(['/account']);
              })
              
            }            
          },
          err =>{
            this.dyanamicContentLoading.hideComponent()
            this.createNewProfileErrors.push(err.error)                       
          }
        )
    }
  }

  checkPwnedPassword(){
    if(this.PASSWORD?.valid){    
      this.httpHelper.get("check-pwned-password", "account", {PASSWORD: this.PASSWORD.value}).subscribe(res =>{        
        if(res){
          this.PASSWORD?.setErrors({pwnedPassword: res});
          this.newProfileFormErrors.PASSWORD += this.validationMessages['PASSWORD']['pwnedPassword']
        }
        else{
          this.PASSWORD?.setErrors(null);
        }
      })
    }
  }

  hidePanel(){

    let confirmationBox: AlertData = new AlertData();
    confirmationBox.MESSAGE = "Are you sure you want to cancel creating new profile?";
    confirmationBox.ICON = faUserTimes

    this.alertDialog.conformationAlert(confirmationBox).afterClosed().subscribe(result => {
      if(result.event == "CONFIRM"){
        this.toggleNewProfilePanel.emit(false)      
      }
    })

    
  }
}
