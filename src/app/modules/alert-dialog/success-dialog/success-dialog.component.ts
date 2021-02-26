import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AlertData } from '../data-models/alert-data';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss']
})
export class SuccessDialogComponent implements OnInit {

  faTimes = faTimes
  faCheckCircle = faCheckCircle
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: AlertData) { }

  ngOnInit(): void {
  }

}
