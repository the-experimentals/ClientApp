import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountChangePasswordComponent } from './account-change-password/account-change-password.component';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AccountNewProfileComponent } from './account-new-profile/account-new-profile.component';
import { AccountProfileCardComponent } from './account-profile-card/account-profile-card.component';
import { AccountProfileViewComponent } from './account-profile-view/account-profile-view.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { CustomSelectListModule } from '../custom-select-list/custom-select-list.module';
import { GetStartedComponent } from './account-onboarding/get-started/get-started.component';import { SendCodeComponent } from './account-onboarding/send-code/send-code.component';
import { VerifyAccountComponent } from './account-onboarding/verify-account/verify-account.component';
import { FinishOnboardingComponent } from './account-onboarding/finish-onboarding/finish-onboarding.component';
import { OnboardingHomeComponent } from './account-onboarding/onboarding-home/onboarding-home.component';
import {MatStepperModule} from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
@NgModule({
  declarations: [AccountChangePasswordComponent, AccountDashboardComponent, AccountNewProfileComponent, AccountProfileCardComponent, AccountProfileViewComponent, GetStartedComponent,
    SendCodeComponent,
    VerifyAccountComponent,
    FinishOnboardingComponent,
    OnboardingHomeComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,  
    MatTabsModule,
    MatSelectModule,
    MatRippleModule,    
    CustomSelectListModule,
    MatStepperModule
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
  }]
})
export class AccountModule { }
