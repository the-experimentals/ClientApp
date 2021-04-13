import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionCentreDashboardComponent } from './permission-centre-dashboard/permission-centre-dashboard.component';

const routes: Routes = [{
  path: '',
  component: PermissionCentreDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionCentreRoutingModule { }
