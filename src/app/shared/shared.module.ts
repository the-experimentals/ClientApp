import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SidebarComponent, MainLayoutComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
