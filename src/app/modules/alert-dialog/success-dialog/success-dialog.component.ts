import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss']
})
export class SuccessDialogComponent implements OnInit {

  faTimes = faTimes
  faCheckCircle = faCheckCircle
  constructor() { }

  ngOnInit(): void {
  }

}
