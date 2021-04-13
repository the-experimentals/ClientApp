import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHomeRoutingModule } from './app-home-routing.module';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [HomeDashboardComponent],
  imports: [
    CommonModule,
    AppHomeRoutingModule,
    MatDialogModule
  ]
})
export class AppHomeModule { }
