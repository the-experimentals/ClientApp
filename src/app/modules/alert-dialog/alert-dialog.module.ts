import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';



@NgModule({
  declarations: [SuccessDialogComponent, WarningDialogComponent, InfoDialogComponent, ErrorDialogComponent],
  imports: [
    CommonModule
  ]
})
export class AlertDialogModule { }
