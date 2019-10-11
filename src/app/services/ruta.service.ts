import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Conductor } from '../models/conductor';

@Injectable()
export class RutaService {

  public url: string;

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

  agregar(ruta): Observable<any>{
    let json = JSON.stringify(ruta);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');

    //let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'Ruta', json, {headers: headers});
  }

  getRutas():Observable<any>{
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.get(this.url+'Ruta', {headers: headers});  
  }

  getRuta(id): Observable<any>{
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.get(this.url + 'Ruta/' + id, {headers: headers});
  }

  update(conductor,id): Observable<any>{
    let json = JSON.stringify(conductor);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');

    //let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url+'Ruta/' + id, json, {headers: headers});
  }

  delete(id): Observable<any>{
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.delete(this.url+'Ruta/' + id, {headers: headers});
  }

}
