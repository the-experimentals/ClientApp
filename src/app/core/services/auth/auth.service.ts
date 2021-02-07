import { Injectable } from '@angular/core';
import { HttpHelperService } from '../http-helper/http-helper.service';
import { map, catchError, filter, switchMap, take } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of, throwError } from 'rxjs';
import { SignInResponse } from 'src/app/response-models/secure/sign-in-response';
import { ProfileStore } from '../../state/store';
import { ProfileQuery } from '../../state/query';
import { Profile } from 'src/app/data-models/account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpHelper:HttpHelperService, 
              private profileStore:ProfileStore, 
              private profileQuery:ProfileQuery
              ) {                    
    let currentUser = localStorage.getItem('currentUser');
    if(currentUser != null){         
      let currentProfile:Profile = Object.assign(new Profile(), JSON.parse(currentUser))   
      const jwtHelper = new JwtHelperService()
      let isUserAuthenticated:boolean =  !
      jwtHelper.isTokenExpired(currentProfile.TOKEN.ACCESS)
      
      if(isUserAuthenticated){
        this.profileQuery.isAuthenticated().pipe(
          take(1),
          filter(authenticated => !authenticated),
          switchMap(() => {          
            this.profileStore.setLoading(true)
            return of(currentProfile)
          })
        ).subscribe(res => {        
          this.profileStore.update(state => {
            return{
              profile:currentProfile,
              isAuthenticated: isUserAuthenticated
            }
          })
          this.profileStore.setLoading(false)
        }, err =>{
          console.log(err)
          this.profileStore.setLoading(false)
        })      
      }
      else{
        this.logout()
      }
    } 
  }

  login(user:any):Observable<SignInResponse>{
    return this.httpHelper.post<SignInResponse>("sign-in", "secure", user)
      .pipe(
        map(res => {
          if(res.IS_AUTHENTICATED){            
            this.profileStore.setLoading(true)
            const jwtHelper = new JwtHelperService();
            let profile:Profile = new Profile();
            let decodedToken = jwtHelper.decodeToken(res.TOKEN.ACCESS);            

            profile.ROLE = decodedToken.role;
            profile.PERMISSIONS.push(decodedToken.Permission);
            profile.TOKEN = res.TOKEN;

            localStorage.setItem("currentUser", JSON.stringify(profile));

            // update profile state
            this.profileStore.update(state =>{
              return {
                profile: profile,
                isAuthenticated: res.IS_AUTHENTICATED
              }
            })

            this.profileStore.setLoading(false);

            
          }
          
          return res
        }),
        catchError(err =>{
          console.log(err)          
          return throwError(err)          
        })
      )
  }

  logout(){
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.setItem("IS_REFRESHING", "false");
    // remove state as well    
    // clearInterval(this.refreshInterval);
  }

  isAuthenticated(): Observable<boolean>{    
    return this.profileQuery.select(state => {
      if(state.isAuthenticated){
        const jwtHelper = new JwtHelperService();
        return !jwtHelper.isTokenExpired(state.profile.TOKEN.ACCESS)
      }        
        return false
    })
  }
}
