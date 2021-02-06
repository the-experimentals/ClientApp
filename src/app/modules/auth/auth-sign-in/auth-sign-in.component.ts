import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth-sign-in',
  templateUrl: './auth-sign-in.component.html',
  styleUrls: ['./auth-sign-in.component.scss']
})
export class AuthSignInComponent implements OnInit {

  faUser = faUser
  faLock = faLock
  faEye = faEyeSlash

  signInForm: FormGroup
  constructor(private formBuilder:FormBuilder) { 
    this.signInForm = this.createSignInForm()
  }

  ngOnInit(): void {
  }

  createSignInForm(): FormGroup{
    return this.formBuilder.group({
      'IDENTIFIER': new FormControl('',[Validators.required]),
      'SECRET': new FormControl('', [Validators.required]),
      'REMEMBER_ME': new FormControl(false)
    });
  }

  passwordToggle(){
    alert("test")
  }

}
