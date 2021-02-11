import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule, AppHomeModule, AccountModule} from './modules'
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
},{
  path:'account',
  component:MainLayoutComponent,
  // canActivate: [AuthGuard],
  children:[{
    path:'',
    loadChildren: 'src/app/modules#AccountModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
