import { Component, ElementRef, Inject, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faHackerNews } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash, faLock, faTrash, faTrashAlt, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AlertDialogService, AuthService, DyanamicContentLoadingService, HttpHelperService } from 'src/app/core/services';
import { ValidateOnValueChange } from 'src/app/core/validators/form-field-validator';
import {StatusCodes} from 'http-status-codes'
import { LoadingIndicatorComponent } from 'src/app/shared/loading-indicator/loading-indicator.component';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertData } from '../../alert-dialog/data-models/alert-data';

@Component({
  selector: 'app-auth-sign-in',
  templateUrl: './auth-sign-in.component.html',
  styleUrls: ['./auth-sign-in.component.scss']
})
export class AuthSignInComponent implements OnInit {

  faUser = faUser
  faLock = faLock
  faEye = faEyeSlash
  faTrash = faTrash
  faUserCircle = faUserCircle

  signInError!:string[];
  showSignInErrors:boolean = false;
  isSignInAttempt:boolean = false;

  validationMessages = {
    'USERNAME': {
      'required': 'You must enter data in username',
      'minlength':'Your username cannot be lesser than 5 characters'
    },    
    'PASSWORD':{
      'required': 'You must enter data in password',
      'minlength':'Your password cannot be lesser than 8 characters'
    }
  };

  signInFormErrors = {
    'USERNAME': this.validationMessages['USERNAME']['required'],
    'PASSWORD': this.validationMessages['PASSWORD']['required']
  }

  signInForm: UntypedFormGroup
  constructor(private formBuilder:UntypedFormBuilder, 
              private authService: AuthService, 
              private router:Router,
              private dyanamicContentLoading: DyanamicContentLoadingService,
              @Inject(ViewContainerRef) ViewContainerRef:ViewContainerRef,
              private elementRef:ElementRef,
              private rendrer:Renderer2,
              private alertDialogService:AlertDialogService) { 
    this.signInForm = this.createSignInForm()

    
    this.signInForm.valueChanges.subscribe(data => {
      ValidateOnValueChange(this.signInForm, this.signInFormErrors, this.validationMessages, data);
    });

    this.dyanamicContentLoading.setRootViewContainerRef(ViewContainerRef);  
  }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe(res =>{
      if(res)
        this.router.navigate(['/home']);
    })
  }

  createSignInForm(): UntypedFormGroup{
    return this.formBuilder.group({
      'USERNAME': new UntypedFormControl('',[Validators.required, Validators.minLength(5)]),
      'PASSWORD': new UntypedFormControl('', [Validators.required, Validators.minLength(8)]),
      'REMEMBER_ME': new UntypedFormControl(false),
      'SHOW_PASSWORD': new UntypedFormControl(false)
    });
  }

  get USERNAME()
  {
    return this.signInForm.get('USERNAME');
  }

  get PASSWORD()
  {
    return this.signInForm.get('PASSWORD');
  }

  get SHOW_PASSWORD(){
    return this.signInForm.get('SHOW_PASSWORD');
  }

  passwordToggle(){
    
    if(this.SHOW_PASSWORD ==null)
      return;

    if(this.SHOW_PASSWORD.value)
    {
      this.SHOW_PASSWORD.setValue(false);
      this.faEye = faEyeSlash;
    }
    else
    {
      this.SHOW_PASSWORD.setValue(true);
      this.faEye = faEye;
    }
  }

  signIn(){

    this.isSignInAttempt = true;    
    if(this.signInForm.valid){
      this.signInError = [];
      this.showSignInErrors = false
      this.dyanamicContentLoading.showComponent(LoadingIndicatorComponent);
      this.authService.login(this.signInForm.value).subscribe(res =>{
        this.dyanamicContentLoading.hideComponent();
        if(res.IS_AUTHENTICATED){        
          if(res.HAS_PWNED_PASSWORD){
            let alertData: AlertData = new AlertData();
            alertData.MESSAGE = "The password for this account has previously appeared in a data breach and should never be used. If you've ever used it anywhere before, change it immediately!"

            const dialogRef = this.alertDialogService.warningAlert(alertData)
            dialogRef.afterClosed().subscribe(res =>{
              this.router.navigate(['/home'])     
            })
          }
          else{
            this.router.navigate(['/home'])               
          }
        }          
      }, err =>{
        if(err.status == StatusCodes.UNAUTHORIZED){
          this.dyanamicContentLoading.hideComponent();
          this.showSignInErrors = true
          this.signInError.push(err.error.ERRORS);
          
        }
      })
    }

    
  }
}
