import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule, AppHomeModule, AccountModule, SettingsModule} from './modules'
import { ErrorComponent } from './shared/error/error.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import * as Roles from 'src/app/core/constants/roles';
import { AuthGuard } from './core/guards';

const routes: Routes = [{
  path:'',
  loadChildren:'./modules#AuthModule'
},{
  path:'home',
  component: MainLayoutComponent,
  canActivate: [AuthGuard],
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
  canActivate: [AuthGuard],
  children:[{
    path:'',
    loadChildren: 'src/app/modules#AccountModule'
  }]
},{
  path:'settings',
  component:MainLayoutComponent,
  canActivate:[AuthGuard],
  data: {roles: Roles.ADMIN},
  children:[{
    path:'',
    loadChildren:'src/app/modules#SettingsModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
