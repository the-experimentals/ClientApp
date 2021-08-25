import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountOnboardingRoutingModule } from './account-onboarding-routing.module';
import { GetStartedComponent } from './get-started/get-started.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    GetStartedComponent
  ],
  imports: [
    CommonModule,
    AccountOnboardingRoutingModule,
    MatButtonModule
  ]
})
export class AccountOnboardingModule { }
