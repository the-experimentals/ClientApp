import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/modules/alert-dialog';
import { AlertData } from 'src/app/modules/alert-dialog/data-models/alert-data';

@Injectable({
  providedIn: 'root'
})
export class AlertDialogService {

  constructor(private dialog: MatDialog) { }

  successAlert(alertData: AlertData): MatDialogRef<SuccessDialogComponent, any>{
    return this.dialog.open(SuccessDialogComponent, {
      disableClose: true,      
      width: '220px',
      data: alertData
    });
  }
}
