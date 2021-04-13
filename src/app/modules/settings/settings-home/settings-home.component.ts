import { Component, OnInit } from '@angular/core';
import { faCog, faPalette } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-settings-home',
  templateUrl: './settings-home.component.html',
  styleUrls: ['./settings-home.component.scss']
})
export class SettingsHomeComponent implements OnInit {

  faCog = faCog
  faPalette = faPalette
  constructor() { }

  ngOnInit(): void {
  }

}
