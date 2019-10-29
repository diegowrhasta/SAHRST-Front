import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {GLOBAL} from '../../services/global';

@Injectable()
export class AuthService {

  public token;
  public identity;
  public url: String;

  constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
  }

  check(): boolean {
    return !!localStorage.getItem('access_token');
  }

  login(credentials: {email: string, password: string}): Observable<boolean> {
    return this.http.post<any>(this.url + 'auth/login', credentials)
    .do(data => {
      this.token = data.access_token;
      localStorage.setItem('access_token', this.token);
    });
  }

  userData(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);
    return this.http.get<any>(this.url + 'auth/user', {headers: headers})
      .do( userData => {
          this.identity = userData;
          localStorage.setItem('identity', JSON.stringify(this.identity));
        }
      );
  }

  getIdentity() {
    const identity = JSON.parse(localStorage.getItem('identity'));
    if (identity !== 'undefined') {
      this.identity = identity;
    }else {
      this.identity = null;
    }
    return this.identity;
  }

  getToken() {
    const token = localStorage.getItem('access_token');
    if (token !== 'undefined') {
      this.token = token;
    }else {
      this.token = null;
    }
    return this.token;
  }
}
