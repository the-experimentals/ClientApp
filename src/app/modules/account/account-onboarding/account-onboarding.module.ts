import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountOnboardingRoutingModule } from './account-onboarding-routing.module';
import { GetStartedComponent } from './get-started/get-started.component';
import { MatButtonModule } from '@angular/material/button';
import { SendCodeComponent } from './send-code/send-code.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { FinishOnboardingComponent } from './finish-onboarding/finish-onboarding.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    GetStartedComponent,
    SendCodeComponent,
    VerifyAccountComponent,
    FinishOnboardingComponent
  ],
  imports: [
    CommonModule,
    AccountOnboardingRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AccountOnboardingModule { }
