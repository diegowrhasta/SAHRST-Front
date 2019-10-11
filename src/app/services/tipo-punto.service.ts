import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { TipoPunto } from '../models/tipo-punto';

@Injectable()
export class TipoPuntoService {

  public url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;

   }
   pruebas(){
    return "Hola Mundo!!";
  }

  agregar(tipopunto): Observable<any>{
    let json = JSON.stringify(tipopunto);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');

    //let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'Tipo_Punto', json, {headers: headers});
  }

  getTipoPuntos():Observable<any>{
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.get(this.url+'Tipo_Punto', {headers: headers});  
  }

  getTipoPunto(id): Observable<any>{
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.get(this.url + 'Tipo_Punto/' + id, {headers: headers});
  }

  update(tipopunto,id): Observable<any>{
    let json = JSON.stringify(tipopunto);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');

    //let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url+'Tipo_Punto/' + id, json, {headers: headers});
  }

  delete(id): Observable<any>{
    let headers = new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.delete(this.url+'Tipo_Punto/' + id, {headers: headers});
  }
  
}

