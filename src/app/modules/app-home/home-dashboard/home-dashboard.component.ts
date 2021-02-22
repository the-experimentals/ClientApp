import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) {
      
  }

  ngOnInit(): void {
  }

  test(){
    this.dialog.open(DialogComponent, {
      disableClose: true,
      
      width: '220px',
      
    });

  }

}
