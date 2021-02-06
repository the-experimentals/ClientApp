import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { ValidateOnValueChange } from 'src/app/core/validators/form-field-validator';

@Component({
  selector: 'app-auth-sign-in',
  templateUrl: './auth-sign-in.component.html',
  styleUrls: ['./auth-sign-in.component.scss']
})
export class AuthSignInComponent implements OnInit {

  faUser = faUser
  faLock = faLock
  faEye = faEyeSlash

  signInError!:string[];
  showSignInErrors:boolean = false;
  isSignInAttempt:boolean = false;

  validationMessages = {
    'IDENTIFIER': {
      'required': 'You must enter data in username',
      'minlength':'Your username cannot be lesser than 5 characters'
    },    
    'SECRET':{
      'required': 'You must enter data in password',
      'minlength':'Your password cannot be lesser than 8 characters'
    }
  };

  signInFormErrors = {
    'IDENTIFIER': this.validationMessages['IDENTIFIER']['required'],
    'SECRET': this.validationMessages['SECRET']['required']
  }

  signInForm: FormGroup
  constructor(private formBuilder:FormBuilder) { 
    this.signInForm = this.createSignInForm()

    this.signInForm.valueChanges.subscribe(data => {
      ValidateOnValueChange(this.signInForm, this.signInFormErrors, this.validationMessages, data);
    });
  }

  ngOnInit(): void {
  }

  createSignInForm(): FormGroup{
    return this.formBuilder.group({
      'IDENTIFIER': new FormControl('',[Validators.required, Validators.minLength(5)]),
      'SECRET': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'REMEMBER_ME': new FormControl(false)
    });
  }

  get IDENTIFIER()
  {
    return this.signInForm.get('IDENTIFIER');
  }

  get SECRET()
  {
    return this.signInForm.get('SECRET');
  }

  passwordToggle(){
    alert("test")
  }

  signIn(){
    this.isSignInAttempt = true;
    if(this.signInForm.valid){
      
    }
    
  }

}
