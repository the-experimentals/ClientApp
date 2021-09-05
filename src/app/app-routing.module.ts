import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule, AppHomeModule, AccountModule, SettingsModule, PermissionCentreModule, OnboardingModule} from './modules'
import { ErrorComponent } from './shared/error/error.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import * as Roles from 'src/app/core/constants/roles';
import { AuthGuard } from './core/guards';

const routes: Routes = [{
  path:'',
  loadChildren:() => import('./modules').then(m => m.AuthModule)
},{
  path: 'onboard',
  component: MainLayoutComponent,
  canActivate: [AuthGuard],
  children: [{
    path: '',
    loadChildren:() => import('./modules').then(m => m.OnboardingModule)
  }]
  
},{
  path:'home',
  component: MainLayoutComponent,
  canActivate: [AuthGuard],
  children:[{
    path:'',
    loadChildren:() => import('./modules').then(m => m.AppHomeModule)
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
    loadChildren: () => import('src/app/modules').then(m => m.AccountModule)
  }]
},{
  path:'settings',
  component:MainLayoutComponent,
  canActivate:[AuthGuard],
  data: {roles: Roles.ADMIN},
  children:[{
    path:'',
    loadChildren:() => import('src/app/modules').then(m => m.SettingsModule)
  }]
},{
  path:'permission-center',
  component:MainLayoutComponent,
  canActivate:[AuthGuard],
  data: {roles: Roles.ADMIN},
  children: [{
    path: '',
    loadChildren: () => import('src/app/modules').then(m => m.PermissionCentreModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
