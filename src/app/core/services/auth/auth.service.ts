import { Injectable } from '@angular/core';
import { HttpHelperService } from '../http-helper/http-helper.service';
import { map, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, throwError } from 'rxjs';
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
              ) { }

  login(user:any):Observable<SignInResponse>{
    return this.httpHelper.post<SignInResponse>("sign-in", "secure", user)
      .pipe(
        map(res => {
          if(res.IS_AUTHENTICATED){
            debugger
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
}
