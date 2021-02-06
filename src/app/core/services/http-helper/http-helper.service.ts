import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  private BASE_URL = environment.BASE_URL
  constructor(private httpClient: HttpClient) { }

  public get<T>(action:string, controller:string, data?:any): Observable<T>
  {
    return this.httpClient.get<T>(this.BASE_URL + controller + '/' + action);    
  }

  public post<T>(action:string, controller:string, data:any): Observable<T>
  {
    return this.httpClient.post<T>(this.BASE_URL + controller + '/' + action, JSON.stringify(data), this.httpHeaderOptions());
  }

  public put<T>(action:string, controller:string, data:any):Observable<T>
  {
    return this.httpClient.put<T>(this.BASE_URL + controller + '/' + action, JSON.stringify(data), this.httpHeaderOptions());
  }
  private httpHeaderOptions()
  {
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return httpOptions;
  }
}
