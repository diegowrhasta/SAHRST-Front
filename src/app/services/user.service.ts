import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';



@Injectable()
export class UserService {

  public url: string;

  // headers = new Headers();

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
    // this.headers.append("Content-type","application/json");
    // this.headers.append("Authorization","Bearer "+localStorage.getItem("access_token"));
  }

  pruebas() {
    return 'Hola Mundo!!';
  }

  register(user) {
    const json = JSON.stringify(user);
    const params = 'json=' + json;

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url + 'register', params, {headers: headers});
  }

  signup(user, gettoken = null): Observable<any> {
    if (gettoken != null) {
      user.gettoken = true;
    }
    const json = JSON.stringify(user);
    // const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'auth/login', json, {headers: headers});
  }

  userData(token): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this._http.get<any>(this.url + 'auth/user', {headers: headers});
  }
}
