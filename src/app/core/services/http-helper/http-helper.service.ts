import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ControllerProps } from '../../constants/controllers/controller-props';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  private BASE_URL = environment.BASE_URL
  constructor(private httpClient: HttpClient) { }

  public get<T>(action:string, controller:string, data?:any): Observable<T>
  {    
    let url:string = this.BASE_URL + controller + '/' + action;

    return this.httpClient.get<T>(this.BASE_URL + controller + '/' + action, {params: data});    
  }

  public post<T>(action:string, controller:ControllerProps, data:any): Observable<T>
  {
    debugger
    return this.httpClient.post<T>(this.BASE_URL + controller.NAME + '/' + action, JSON.stringify(data), this.httpHeaderOptions(controller));
  }

  public put<T>(action:string, controller:ControllerProps, data:any):Observable<T>
  {
    return this.httpClient.put<T>(this.BASE_URL + controller + '/' + action, JSON.stringify(data), this.httpHeaderOptions(controller));
  }
  private httpHeaderOptions(controller:ControllerProps)
  {
    const httpOptions = {
      headers:new HttpHeaders()
              .set("Content-Type","application/json")
              // .set("Host", controller.HOST)
              // .set("origin", "*")
    };

    return httpOptions;
  }
}
