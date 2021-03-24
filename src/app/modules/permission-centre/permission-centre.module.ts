import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionCentreRoutingModule } from './permission-centre-routing.module';
import { PermissionCentreDashboardComponent } from './permission-centre-dashboard/permission-centre-dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [PermissionCentreDashboardComponent],
  imports: [
    CommonModule,
    PermissionCentreRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatRippleModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class PermissionCentreModule { }
