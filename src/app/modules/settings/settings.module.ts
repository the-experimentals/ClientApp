import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsHomeComponent } from './settings-home/settings-home.component';
import { SettingsThemesComponent } from './settings-themes/settings-themes.component';
import { SettingsGeneralComponent } from './settings-general/settings-general.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [SettingsHomeComponent, SettingsThemesComponent, SettingsGeneralComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FlexLayoutModule,
    MatRippleModule,
    FontAwesomeModule,
    MatSlideToggleModule
  ]
})
export class SettingsModule { }
