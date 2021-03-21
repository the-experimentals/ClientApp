import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionCenterRoutingModule } from './permission-center-routing.module';
import { PermissionCenterDashboardComponent } from './permission-center-dashboard/permission-center-dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [PermissionCenterDashboardComponent],
  imports: [
    CommonModule,
    PermissionCenterRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    FontAwesomeModule,
    MatRippleModule
  ]
})
export class PermissionCenterModule { }
