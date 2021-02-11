import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountChangePasswordComponent } from './account-change-password/account-change-password.component';


@NgModule({
  declarations: [AccountChangePasswordComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
