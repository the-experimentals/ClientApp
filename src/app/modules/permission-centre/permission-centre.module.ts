import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionCentreRoutingModule } from './permission-centre-routing.module';
import { PermissionCentreDashboardComponent } from './permission-centre-dashboard/permission-centre-dashboard.component';

@NgModule({
  declarations: [PermissionCentreDashboardComponent],
  imports: [
    CommonModule,
    PermissionCentreRoutingModule
  ]
})
export class PermissionCentreModule { }
