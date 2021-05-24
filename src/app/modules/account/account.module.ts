import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountChangePasswordComponent } from './account-change-password/account-change-password.component';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';
import { AccountNewProfileComponent } from './account-new-profile/account-new-profile.component';
import { AccountProfileCardComponent } from './account-profile-card/account-profile-card.component';
import { AccountProfileViewComponent } from './account-profile-view/account-profile-view.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { CustomSelectListModule } from '../custom-select-list/custom-select-list.module';
@NgModule({
  declarations: [AccountChangePasswordComponent, AccountDashboardComponent, AccountNewProfileComponent, AccountProfileCardComponent, AccountProfileViewComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,  
    MatTabsModule,
    MatSelectModule,
    MatRippleModule,    
    CustomSelectListModule
  ]
})
export class AccountModule { }
