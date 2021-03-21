import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionCenterDashboardComponent } from './permission-center-dashboard/permission-center-dashboard.component';

const routes: Routes = [{
  path:'',
  component:PermissionCenterDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionCenterRoutingModule { }
