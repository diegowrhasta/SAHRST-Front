import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  check(): boolean {
    return localStorage.getItem('access_token')? true:false;
  }
  
  login(credentials: {email: string, password: string}): Observable<boolean> {
    return this.http.post<any>(`${environment.api_url}/auth/login`, credentials)
    .do(data => {
      localStorage.setItem('access_token', data.access_token);
    });
  }


}
