import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountChangePasswordComponent } from './account-change-password/account-change-password.component';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AccountNewProfileComponent } from './account-new-profile/account-new-profile.component';
import * as Roles from 'src/app/core/constants/roles';
import { AccountProfileViewComponent } from './account-profile-view/account-profile-view.component';
import { GetStartedComponent } from './account-onboarding/get-started/get-started.component';

const routes: Routes = [{
  path:'',  
  component: AccountDashboardComponent,
  children:[{
    path:'new-profile',  
    component:AccountNewProfileComponent,
    data: {roles: Roles.ADMIN},
  }],
  data: {roles: Roles.ADMIN},  
},{
  path:'change-password',
  component:AccountChangePasswordComponent
},{
  path:'view',
  component:AccountProfileViewComponent
},{
  path: 'onboard',
  loadChildren:() => import('./account-onboarding/account-onboarding.module').then(m => m.AccountOnboardingModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
