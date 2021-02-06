import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { AuthSignInComponent } from './auth-sign-in/auth-sign-in.component';

const routes: Routes = [{
  path:'',
  component: AuthHomeComponent,
  children:[{
    path: '',
    component: AuthSignInComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
