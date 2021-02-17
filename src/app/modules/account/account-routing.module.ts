import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountChangePasswordComponent } from './account-change-password/account-change-password.component';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AccountNewProfileComponent } from './account-new-profile/account-new-profile.component';

const routes: Routes = [{
  path:'',
  component: AccountDashboardComponent
},{
  path:'change-password',
  component:AccountChangePasswordComponent
},{
  path:'new-profile',
  component:AccountNewProfileComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
