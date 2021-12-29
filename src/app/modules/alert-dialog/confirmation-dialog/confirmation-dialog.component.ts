import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle, faQuestion, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AlertData } from '../data-models/alert-data';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  faTimes = faTimes

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AlertData) { }

  ngOnInit(): void {
  }

  confirm(){
    this.dialogRef.close({
      event:"CONFIRM"
    })
  }

}
