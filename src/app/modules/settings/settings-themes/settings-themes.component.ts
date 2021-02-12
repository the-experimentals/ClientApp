import { Component, OnInit } from '@angular/core';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-settings-themes',
  templateUrl: './settings-themes.component.html',
  styleUrls: ['./settings-themes.component.scss']
})
export class SettingsThemesComponent implements OnInit {

  faLongArrowAltLeft = faLongArrowAltLeft
  constructor() { }

  ngOnInit(): void {
  }

}
