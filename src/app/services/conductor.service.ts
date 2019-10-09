import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Conductor } from '../models/conductor';


@Injectable()
export class ConductorService {

  public url: string;

  //headers = new Headers();

  constructor(
    public _http: HttpClient
    ) { 
    this.url = GLOBAL.url;
    //this.headers.append("Content-type","application/json");
    //this.headers.append("Authorization","Bearer "+localStorage.getItem("access_token"));
  }

  pruebas(){
    return "Hola Mundo!!";
  }

  agregar(conductor): Observable<any>{
    let json = JSON.stringify(conductor);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');

    //let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'Conductor', json, {headers: headers});
  }

  getConductores():Observable<any>{
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.get(this.url+'Conductor', {headers: headers});  
  }

  getConductor(id): Observable<any>{
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.get(this.url + 'Conductor/' + id, {headers: headers});
  }

  update(conductor,id): Observable<any>{
    let json = JSON.stringify(conductor);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');

    //let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url+'Conductor/' + id, json, {headers: headers});
  }

  delete(id): Observable<any>{
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.delete(this.url+'Conductor/' + id, {headers: headers});
  }
  
}
