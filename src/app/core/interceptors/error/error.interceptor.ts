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

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(catchError(err =>{
        console.log(err)
        switch(err.status){
          case 0:
            // service not reachable
          case StatusCodes.INTERNAL_SERVER_ERROR:
            break;
          default:
            // do nothing
        }
        return throwError(err)
      }))
  }
}
