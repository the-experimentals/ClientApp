import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule, AppHomeModule} from './modules'

const routes: Routes = [{
  path:'',
  loadChildren:'./modules#AuthModule'
},{
  path:'home',
  loadChildren:'./modules#AppHomeModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
