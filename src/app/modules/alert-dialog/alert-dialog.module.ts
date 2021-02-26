import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [SuccessDialogComponent, WarningDialogComponent, InfoDialogComponent, ErrorDialogComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class AlertDialogModule { }
