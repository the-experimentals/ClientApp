import { Injectable } from '@angular/core';
import { HttpHelperService } from '../http-helper/http-helper.service';
import { map, catchError, filter, switchMap, take } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { interval, Observable, of, Subscription, throwError } from 'rxjs';
import { SignInResponse } from 'src/app/response-models/secure/sign-in-response';
import { ProfileStore } from '../../state/store';
import { ProfileQuery } from '../../state/query';
import { Profile } from 'src/app/data-models/account';
import { SECURE } from '../../constants/controllers';
import { SIGN_IN } from '../../constants/actions/auth';
import { RefreshTokenResponse } from 'src/app/response-models/secure/refresh-token-response';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private refreshInterval!: Subscription
  constructor(private httpHelper:HttpHelperService, 
              private profileStore:ProfileStore, 
              private profileQuery:ProfileQuery,
              private router:Router
              ) {}

  loadLocalUser(){
    // check user in local storage of browser
    let storedUser = localStorage.getItem('currentUser');

    if(storedUser !== null){
      // check if token present in this profile is valid

      let storedProfile:Profile = Object.assign(new Profile(), JSON.parse(storedUser))   
      const jwtHelper = new JwtHelperService()

      let isTokenExpired:boolean =  jwtHelper.isTokenExpired(storedProfile.TOKEN.ACCESS)

      // if token is not yet expired, load it in state
      if(!isTokenExpired){
        this.profileStore.reset()

        this.profileStore.update(() =>{
          return {
            profile: storedProfile,
            isAuthenticated: true
          }
        })

        // then refresh tokens
        this.refreshToken(true)        

      }
      else{
        this.logout()
      }
    }
  }

  login(user:any):Observable<SignInResponse>{
    return this.httpHelper.post<SignInResponse>(SIGN_IN, SECURE, user)
      .pipe(
        map(res => {
          if(res.IS_AUTHENTICATED){            
            this.profileStore.setLoading(true)
            const jwtHelper = new JwtHelperService();
            let profile:Profile = new Profile();
            let decodedToken = jwtHelper.decodeToken(res.TOKEN.ACCESS);            
            
            profile.NAME = res.NAME            
            profile.ROLE = decodedToken.role
            profile.PERMISSIONS.push(decodedToken.Permission)
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
            this.refreshToken(false);
          }
          
          return res
        }),
        catchError(err =>{
          console.log(err)          
          return throwError(err)          
        })
      )
  }

  private refreshToken(refreshNow:boolean){    
    this.refreshInterval = this.isAuthenticated()
      .pipe(
        take(1),
        filter(authenticated => authenticated),
        switchMap(() =>{
          return this.getCurrentProfile();
        })
      ).pipe(filter(profile => profile !== undefined)).subscribe(profile =>{                
        if(refreshNow)
          this.refreshTokenNow();
          
        interval((profile.TOKEN.TTL - 2) * 60000).pipe(take(1)).subscribe(() =>{                        
          this.refreshTokenNow();
        })  
        
      })
  }

  private refreshTokenNow(){
    this.getCurrentProfile()
      .pipe(
        take(1),
        filter(profile => profile !== undefined)
      ).pipe(take(1)).subscribe(currentProfile => {
        if(currentProfile.TOKEN.ALLOW_REFRESH){
          
          let refreshToken = {REFRESH: currentProfile.TOKEN.REFRESH} 
    
          this.httpHelper.put<RefreshTokenResponse>("refresh-token","secure", refreshToken)
            .subscribe(res => {
              if(res.IS_REFRESHED){
    
                // update profile state
                this.profileStore.update(state =>{
                  let updatedProfile:Profile = Object.assign(new Profile(), state.profile)
                  updatedProfile.TOKEN = res
                  return {
                    profile: updatedProfile
                  }
                })
                
                localStorage.removeItem('currentUser');
                localStorage.setItem("currentUser", JSON.stringify(currentProfile));              
              }              
            }, err =>{
              this.logout()
              throwError(err)
            })
        }
      })


    
  }

  logout(){
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser')
    // localStorage.setItem("IS_REFRESHING", "false")
    this.profileStore.reset()
    // remove state as well    
    // clearInterval(this.refreshInterval);
    this.refreshInterval.unsubscribe();
    this.router.navigate([''])
    
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

  getCurrentProfile():Observable<Profile>{
    return this.profileQuery.getProfile()
  }

}
