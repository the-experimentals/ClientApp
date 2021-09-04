import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingHomeComponent } from './onboarding-home/onboarding-home.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { OnboardingGetStartedComponent } from './onboarding-get-started/onboarding-get-started.component';
import { OnboardingSendCodeComponent } from './onboarding-send-code/onboarding-send-code.component';
import { OnboardingVerifyAccountComponent } from './onboarding-verify-account/onboarding-verify-account.component';
import { OnboardingFinishComponent } from './onboarding-finish/onboarding-finish.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [    
    OnboardingHomeComponent, OnboardingGetStartedComponent, OnboardingSendCodeComponent, OnboardingVerifyAccountComponent, OnboardingFinishComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    MatStepperModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class OnboardingModule { }
