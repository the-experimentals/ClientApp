import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule, AppHomeModule} from './modules'
import { ErrorComponent } from './shared/error/error.component';
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
},{
  path:'error',
  component:ErrorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
