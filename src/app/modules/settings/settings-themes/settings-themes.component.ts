import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { ThemeSwitcherService } from 'src/app/core/services';

@Component({
  selector: 'app-settings-themes',
  templateUrl: './settings-themes.component.html',
  styleUrls: ['./settings-themes.component.scss']
})
export class SettingsThemesComponent implements OnInit {

  faLongArrowAltLeft = faLongArrowAltLeft
  themeSwitcherForm!:UntypedFormGroup;
  
  constructor(private themeSwitcher: ThemeSwitcherService, 
              private formBuilder:UntypedFormBuilder) {

    let currentTheme = themeSwitcher.getThemeCurrentValue();
    let themeSwitchState:boolean = false; // false for light theme

    if(currentTheme == ThemeSwitcherService.THEME_DARK)
      themeSwitchState = true; // true for dark theme

    this.themeSwitcherForm = this.formBuilder.group({
      "THEME_SWITCH": new UntypedFormControl(themeSwitchState)
    });
  }
  
  ngOnInit(): void {
  }

  switchTheme(evt: MatSlideToggleChange){
    this.themeSwitcher.switchTheme(evt.checked);
  }

}
