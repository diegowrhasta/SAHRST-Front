import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './../interfaces/user.model';
import 'rxjs/add/operator/do'

import { Client } from './../interfaces/client.model';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  check(): boolean{
    return sessionStorage.getItem('user') ? true : false;
  }

  login(credentials: {email: string, password: string}): Observable<boolean>{
    return this.http.post<any>(`${environment.api_url}/auth/login`, credentials)
      .do(data => {
          sessionStorage.setItem('token', data.token);
          sessionStorage.setItem('user', btoa(JSON.stringify(data.user)));
      });
  }

  logout(): void{
    this.http.get(`${environment.api_url}/auth/logout`).subscribe(resp => {
      console.log(resp);
      sessionStorage.clear();
      this.router.navigate(['auth/login']);
    });
  }

  getUser(): User{
    return sessionStorage.getItem('user') ? JSON.parse(atob(sessionStorage.getItem('user'))) : null;
  }

  setUser(): Promise<boolean>{
    return this.http.get<any>(`${environment.api_url}/auth/me`).toPromise()
      .then(data => {
        if(data.user){
          sessionStorage.setItem('user', btoa(JSON.stringify(data.user)));
          return true;
        }
        return false;
      });
  }


}
