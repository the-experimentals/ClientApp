import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { AuthSignInComponent } from './auth-sign-in/auth-sign-in.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [AuthHomeComponent, AuthSignInComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule
  ]
})
export class AuthModule { }
