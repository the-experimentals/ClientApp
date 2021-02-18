import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let isAllowed = false;

      this.authService.isAuthenticated()
        .pipe(
          take(1),
          filter(authenticated => authenticated),
          switchMap(() => {
            return this.authService.getCurrentProfile()
          })
        ).subscribe(profile => {
          isAllowed = true          
          if(route.data.roles && route.data.roles.indexOf(profile.ROLE) === -1){
            // role not authorised, redirect to no access to resource page      
            isAllowed = false;
          }
        }).unsubscribe()
    
        if(!isAllowed){
          this.router.navigate(['']);
        }
      
      return isAllowed;
  }
  
}
