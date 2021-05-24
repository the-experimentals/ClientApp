import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ErrorComponent } from './error/error.component';
import { NavMenuComponent } from './sidebar/nav-menu/nav-menu.component';
import { NavMenuDirective } from './sidebar/directives/nav-menu/nav-menu.directive';
import { UserOptionsComponent } from './sidebar/nav-menu/user-options/user-options.component';
import { MatRippleModule } from '@angular/material/core';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SidebarComponent, MainLayoutComponent, ErrorComponent, NavMenuComponent, NavMenuDirective, UserOptionsComponent, LoadingIndicatorComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatRippleModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class SharedModule { }
