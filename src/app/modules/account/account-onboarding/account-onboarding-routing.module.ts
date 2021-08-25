import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishOnboardingComponent } from './finish-onboarding/finish-onboarding.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { OnboardingHomeComponent } from './onboarding-home/onboarding-home.component';
import { SendCodeComponent } from './send-code/send-code.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';

const routes: Routes = [{
  path: '',
  component: OnboardingHomeComponent
},{
  path:'send-code',
  component: SendCodeComponent
},{
  path:'verify-account',
  component: VerifyAccountComponent
},{
  path: 'finish',
  component: FinishOnboardingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountOnboardingRoutingModule { }
