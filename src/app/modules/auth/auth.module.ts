import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { AuthSignInComponent } from './auth-sign-in/auth-sign-in.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatListModule } from '@angular/material/list';
import { AuthForgetPasswordComponent } from './auth-forget-password/auth-forget-password.component';
import { AuthVerifyAccountComponent } from './auth-verify-account/auth-verify-account.component';

@NgModule({
  declarations: [AuthHomeComponent, AuthSignInComponent, AuthForgetPasswordComponent, AuthVerifyAccountComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule    
  ]
})
export class AuthModule { }
