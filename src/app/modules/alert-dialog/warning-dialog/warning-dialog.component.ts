import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faCheckCircle, faExclamationTriangle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AlertData } from '../data-models/alert-data';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.scss']
})
export class WarningDialogComponent implements OnInit {

  faTimes = faTimes
  faExclamationTriangle = faExclamationTriangle
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: AlertData) { }

  ngOnInit(): void {
  }

}
