import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {GLOBAL} from '../../services/global';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  check(): boolean {
    return !!localStorage.getItem('access_token');
  }

  login(credentials: {email: string, password: string}): Observable<boolean> {
    return this.http.post<any>(`${GLOBAL.url}auth/login`, credentials)
    .do(data => {
      localStorage.setItem('access_token', data.access_token);
    });
  }


}
