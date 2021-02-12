import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsHomeComponent } from './settings-home/settings-home.component';
import { SettingsThemesComponent } from './settings-themes/settings-themes.component';

const routes: Routes = [{
  path:'',
  component: SettingsHomeComponent
},{
  path:'themes',
  component: SettingsThemesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
