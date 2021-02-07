import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule, AppHomeModule} from './modules'
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';

const routes: Routes = [{
  path:'',
  loadChildren:'./modules#AuthModule'
},{
  path:'home',
  component: MainLayoutComponent,
  children:[{
    path:'',
    loadChildren:'./modules#AppHomeModule'
  }]
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
