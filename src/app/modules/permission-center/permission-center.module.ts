import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionCenterRoutingModule } from './permission-center-routing.module';
import { PermissionCenterDashboardComponent } from './permission-center-dashboard/permission-center-dashboard.component';


@NgModule({
  declarations: [PermissionCenterDashboardComponent],
  imports: [
    CommonModule,
    PermissionCenterRoutingModule
  ]
})
export class PermissionCenterModule { }
