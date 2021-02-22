import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  faTimes = faTimes
  faCheckCircle = faCheckCircle
  constructor() { }

  ngOnInit(): void {
  }

}
