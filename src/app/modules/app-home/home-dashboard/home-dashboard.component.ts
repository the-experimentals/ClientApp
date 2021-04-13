import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogService } from 'src/app/core/services/alert-dialog/alert-dialog.service';
import { AlertData } from '../../alert-dialog/data-models/alert-data';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {

  constructor(private alertDialogService: AlertDialogService) {
      
  }

  ngOnInit(): void {
  }

}
