import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StatusCodes } from 'http-status-codes';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(catchError(err =>{
        console.log(err)       
        
         switch(err.status){
           case 0:
             // service not reachable
            this.router.navigate(['/error'], {state: {errorCode: 0}});
            break;
          case StatusCodes.INTERNAL_SERVER_ERROR:
            this.router.navigate(['/error'], {state: {errorCode: 500}});
            break;
          default:
            // do nothing
        }
        return throwError(err)
      }))
  }
}
