import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsHomeComponent } from './settings-home/settings-home.component';
import { SettingsThemesComponent } from './settings-themes/settings-themes.component';
import { SettingsGeneralComponent } from './settings-general/settings-general.component';


@NgModule({
  declarations: [SettingsHomeComponent, SettingsThemesComponent, SettingsGeneralComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
