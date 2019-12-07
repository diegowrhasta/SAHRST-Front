import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Punto } from '../models/punto';

@Injectable()
export class PuntoService {

  public url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }
  pruebas() {
    return 'Hola Mundo!!';
  }

  agregar(
    nombre:string,
    tipo_punto_id:string
  ): Observable<any> {
    //const json = JSON.stringify(punto);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.post(this.url + 'Punto', 
    {nombre: nombre,
      tipo_punto_id: tipo_punto_id}, {headers: headers});
  }

  getPuntos(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.get(this.url + 'Punto', {headers: headers});
  }

  /*getPunto(id): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.get(this.url + 'Punto/' + id, {headers: headers});
  }*/

  update(punto, id): Observable<any> {
    const json = JSON.stringify(punto);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.put(this.url + 'Punto/' + id, json, {headers: headers});
  }

  deletePunto(id): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')).set('Content-Type', 'application/json');
    return this._http.delete(this.url + 'Punto/' + id, {headers: headers});
  }

}

