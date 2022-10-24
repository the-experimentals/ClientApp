import { Component, OnInit } from '@angular/core';
import { faLongArrowAltLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-settings-general',
  templateUrl: './settings-general.component.html',
  styleUrls: ['./settings-general.component.scss']
})
export class SettingsGeneralComponent implements OnInit {

  faLongArrowAltLeft = faLongArrowAltLeft
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
