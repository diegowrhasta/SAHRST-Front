import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { TipoPunto } from '../models/tipo-punto';
import { Punto } from '../models/punto';

@Injectable()
export class PuntoService {

  public url: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url = GLOBAL.url;
  }
  pruebas(){
    return "Hola Mundo!!";
  }

  agregar(punto): Observable<any>{
    let json = JSON.stringify(punto);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');

    //let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'Punto', json, {headers: headers});
  }

  getPuntos():Observable<any>{
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.get(this.url+'Punto', {headers: headers});  
  }

  getPunto(id): Observable<any>{
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.get(this.url + 'Punto/' + id, {headers: headers});
  }

  update(punto,id): Observable<any>{
    let json = JSON.stringify(punto);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');

    //let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url+'Punto/' + id, json, {headers: headers});
  }

  deletePunto(id): Observable<any>{
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.delete(this.url+'Punto/' + id, {headers: headers});
  }
  
}

