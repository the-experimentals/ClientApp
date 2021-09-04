import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingHomeComponent } from './onboarding-home/onboarding-home.component';

const routes: Routes = [{
  path: "",
  component: OnboardingHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
