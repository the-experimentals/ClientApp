import { Injectable } from '@angular/core';
import { HttpHelperService } from '../http-helper/http-helper.service';
import { map, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, throwError } from 'rxjs';
import { SignInResponse } from 'src/app/response-models/secure/sign-in-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpHelper:HttpHelperService) { }

  login(user:any):Observable<SignInResponse>{
    return this.httpHelper.post<SignInResponse>("sign-in", "secure", user)
      .pipe(
        map(res => {
          if(res.IS_AUTHENTICATED){
            const jwtHelper = new JwtHelperService();
          }
          
          return res
        }),
        catchError(err =>{
          return throwError(err)
        })
      )
  }
}
