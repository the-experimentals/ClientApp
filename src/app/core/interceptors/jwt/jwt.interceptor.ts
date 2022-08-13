import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services';
import { filter, map, switchMap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let isApiUrl = request.url.startsWith(environment.BASE_URL);

    this.authService.isAuthenticated()
      .pipe(
        filter(authenticated => authenticated && isApiUrl),
        switchMap(() => {
          return this.authService.getCurrentProfile()
        })
      ).subscribe(profile =>{
        if(profile !== undefined){
          request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${profile.TOKEN.ACCESS}`,
                'Access-Control-Allow-Origin': '*'
            }
          });
        }
        
      })
    
    return next.handle(request);
  }
}
